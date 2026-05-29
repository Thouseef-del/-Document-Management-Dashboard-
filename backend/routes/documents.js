const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { pool } = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  },
  limits: { fileSize: 50 * 1024 * 1024 }
});

router.post('/upload', authMiddleware, upload.array('files', 20), async (req, res) => {
  try {
    const files = req.files;
    const userId = req.userId;

    if (!files || files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    const uploadedFiles = [];

    for (const file of files) {
      const [result] = await pool.query(
        'INSERT INTO documents (user_id, filename, original_name, file_size, file_type, file_path) VALUES (?, ?, ?, ?, ?, ?)',
        [userId, file.filename, file.originalname, file.size, file.mimetype, file.path]
      );

      uploadedFiles.push({
        id: result.insertId,
        filename: file.originalname,
        size: file.size,
        type: file.mimetype
      });
    }

    if (files.length > 3) {
      await pool.query(
        'INSERT INTO notifications (user_id, message, type) VALUES (?, ?, ?)',
        [userId, `${files.length} files uploaded successfully`, 'success']
      );

      const io = req.app.get('io');
      io.to(`user_${userId}`).emit('notification', {
        message: `${files.length} files uploaded successfully`,
        type: 'success',
        timestamp: new Date()
      });
    }

    res.json({
      message: 'Files uploaded successfully',
      files: uploadedFiles,
      count: files.length
    });
  } catch (error) {
    res.status(500).json({ message: 'Upload failed', error: error.message });
  }
});

router.get('/list', authMiddleware, async (req, res) => {
  try {
    const [documents] = await pool.query(
      'SELECT id, original_name, file_size, file_type, uploaded_at FROM documents WHERE user_id = ? ORDER BY uploaded_at DESC',
      [req.userId]
    );

    res.json({ documents });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch documents', error: error.message });
  }
});

router.get('/download/:id', authMiddleware, async (req, res) => {
  try {
    const [documents] = await pool.query(
      'SELECT * FROM documents WHERE id = ? AND user_id = ?',
      [req.params.id, req.userId]
    );

    if (documents.length === 0) {
      return res.status(404).json({ message: 'Document not found' });
    }

    const document = documents[0];
    res.download(document.file_path, document.original_name);
  } catch (error) {
    res.status(500).json({ message: 'Download failed', error: error.message });
  }
});

router.get('/stats', authMiddleware, async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT COUNT(*) as total, SUM(file_size) as totalSize FROM documents WHERE user_id = ?',
      [req.userId]
    );

    res.json({
      totalDocuments: result[0].total,
      totalSize: result[0].totalSize || 0
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch stats', error: error.message });
  }
});

module.exports = router;
