#!/usr/bin/env bash
set -e

echo "🌱 Running ARC database seeding..."
npx tsx prisma/seed.ts
echo "✅ Seeding finished."
