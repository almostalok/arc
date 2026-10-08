variable "aws_region" {
  description = "Primary AWS region for deployment"
  type        = string
  default     = "ap-south-1" # Mumbai / India
}

variable "environment" {
  description = "Deployment environment name"
  type        = string
  default     = "production"
}

variable "s3_bucket_name" {
  description = "Target S3 bucket for ARC student artifacts"
  type        = string
  default     = "arc-collegiate-artifacts-prod"
}
