import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { teams } from './schema';

const client = postgres(process.env.POSTGRES_URL!);
const db = drizzle(client);

async function main() {
  console.log('Seeding database...');

  await db.insert(teams).values([
    {
      id: 1,
      name: 'Acme',
    },
  ]);

  console.log('Database seeded successfully.');
}

main().catch((error) => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
