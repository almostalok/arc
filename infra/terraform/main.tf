# ============================================================================
# ARC Production Cloud Infrastructure (Terraform)
# AWS VPC, ECS Fargate, RDS PostgreSQL Multi-AZ, ElastiCache Redis, S3 Artifacts
# ============================================================================

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# 1. High-Performance PostgreSQL (RDS)
resource "aws_db_instance" "arc_postgres" {
  identifier          = "arc-production-db"
  allocated_storage   = 50
  max_allocated_storage = 500
  engine              = "postgres"
  engine_version      = "16.1"
  instance_class      = "db.r6g.xlarge"
  multi_az            = true
  publicly_accessible = false
  skip_final_snapshot = false
  storage_encrypted   = true
  deletion_protection = true
}

# 2. Redis Cluster (ElastiCache)
resource "aws_elasticache_cluster" "arc_redis" {
  cluster_id           = "arc-production-redis"
  engine               = "redis"
  node_type            = "cache.m6g.large"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis7"
  port                 = 6379
}

# 3. Secure Object Storage (S3) for Resumes, Certificates & Artifacts
resource "aws_s3_bucket" "arc_storage" {
  bucket = var.s3_bucket_name
}

resource "aws_s3_bucket_server_side_encryption_configuration" "arc_storage_crypto" {
  bucket = aws_s3_bucket.arc_storage.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
