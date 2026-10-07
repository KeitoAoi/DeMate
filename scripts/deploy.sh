#!/bin/bash

set -e

echo "Stopping existing containers..."
docker compose down

echo "Building containers..."
docker compose build

echo "Starting DeMate..."
docker compose up -d

echo "Checking containers..."
docker compose ps

echo "DeMate deployment completed."