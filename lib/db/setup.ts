import { writeFile } from 'fs/promises';
import { join } from 'path';

async function main() {
  console.log('Setting up your development environment...');
  
  const AUTH_SECRET = 'your-auth-secret';
  const BASE_URL = 'http://localhost:3000';
  
  const envContent = `# This is an example of your .env file format
POSTGRES_URL=postgresql://postgres:1e1ae2c91a6fd6ec@leerob-db.cap.clickk.ru:5441/postgres
BASE_URL=${BASE_URL}
AUTH_SECRET=${AUTH_SECRET}
`;

  await writeFile(join(process.cwd(), '.env'), envContent);
  console.log('Environment variables have been set up successfully.');
}

main().catch((error) => {
  console.error('Error during setup:', error);
  process.exit(1);
});
