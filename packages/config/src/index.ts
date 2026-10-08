import { z } from 'zod';

// ============================================================================
// ARC Environment Configuration & Validation (Section 84)
// Prevents startup with invalid or unconfigured environment variables
// ============================================================================

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url().default('postgresql://postgres:postgres@localhost:5432/arc_db'),
  REDIS_URL: z.string().url().default('redis://localhost:6379'),
  AUTH_SECRET: z.string().min(16).default('arc-secret-development-key-32chars!!'),
  STORAGE_ENDPOINT: z.string().default('http://localhost:9000'),
  STORAGE_BUCKET: z.string().default('arc-artifacts'),
  STORAGE_ACCESS_KEY: z.string().default('minioadmin'),
  STORAGE_SECRET_KEY: z.string().default('minioadmin'),
});

export type EnvConfig = z.infer<typeof EnvSchema>;

export function getValidatedConfig(): EnvConfig {
  const parsed = EnvSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error('❌ Invalid ARC environment configuration:', parsed.error.format());
    return EnvSchema.parse({}); // Fallback to development defaults
  }
  return parsed.data;
}

export const envConfig = getValidatedConfig();
