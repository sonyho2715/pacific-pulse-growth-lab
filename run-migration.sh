#!/bin/bash

# Run SQL migration directly via psql
PGPASSWORD='***REMOVED***' psql \
  -h aws-1-us-west-1.pooler.supabase.com \
  -p 5432 \
  -U postgres.mzowcdikituelbzxuvvd \
  -d postgres \
  -f FULL_MIGRATION.sql
