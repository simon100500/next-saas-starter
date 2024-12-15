import { exec } from 'child_process';
import { promisify } from 'util';

export const execAsync = promisify(exec);

export function question(query: string): Promise<string> {
  return Promise.resolve(query);
} 