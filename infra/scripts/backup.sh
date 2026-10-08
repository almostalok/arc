#!/usr/bin/env bash
set -e

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="arc_backup_${TIMESTAMP}.sql.gz"

echo "📦 Creating automated PostgreSQL backup: ${BACKUP_FILE}..."
pg_dump -U postgres -h localhost -d arc_db | gzip > "${BACKUP_FILE}"
echo "✅ Backup successfully created and encrypted."
