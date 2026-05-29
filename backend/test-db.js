const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
  try {
    console.log('Testing MySQL connection...');
    console.log('Host:', process.env.DB_HOST);
    console.log('User:', process.env.DB_USER);
    console.log('Database:', process.env.DB_NAME);
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });

    console.log('✓ MySQL connection successful!');
    
    const [databases] = await connection.query('SHOW DATABASES');
    console.log('\nAvailable databases:');
    databases.forEach(db => console.log('-', db.Database));
    
    await connection.end();
    console.log('\n✓ Test completed successfully!');
  } catch (error) {
    console.error('✗ MySQL connection failed:');
    console.error('Error:', error.message);
    console.error('\nPlease check:');
    console.error('1. MySQL server is running');
    console.error('2. Username and password are correct (root/root)');
    console.error('3. MySQL is accessible on localhost:3306');
  }
}

testConnection();
