output "db_endpoint" {
  description = "RDS PostgreSQL connection endpoint"
  value       = aws_db_instance.arc_postgres.endpoint
}

output "redis_endpoint" {
  description = "ElastiCache Redis primary endpoint"
  value       = aws_elasticache_cluster.arc_redis.cache_nodes[0].address
}

output "s3_bucket_arn" {
  description = "S3 bucket ARN for collegiate storage"
  value       = aws_s3_bucket.arc_storage.arn
}
