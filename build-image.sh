#!/bin/bash

set -e
set -u

IMAGE_NAME="web-react"
TAG=latest

build_frontend() {
    local tag=$TAG
    echo "Building frontend image with tag: $tag"
    docker build -t "$IMAGE_NAME:$tag" -f Dockerfile .
}

build_frontend

echo "Build process completed."
