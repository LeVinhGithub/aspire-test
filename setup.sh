#!/bin/bash

while getopts ":dafp:r:b:" flag;
do
    case "${flag}" in
        a) hasAuth=true;;
        f) hasFileUpload=true;;
        p) port=${OPTARG};;
        d) docker=true;;
        r) redisPort=${OPTARG};;
        b) dbPort=${OPTARG};;
    esac
done

if [ -n "$docker" ]; then
    docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v "$(pwd):/var/www/html" \
        -w /var/www/html \
        laravelsail/php82-composer:latest \
        composer install --ignore-platform-reqs
else
    composer install
fi

if [ ! -f .env ]; then
    cp .env.example .env;
fi

if [ -n "$port" ]; then
    sed -i -e  "s/APP_PORT=3000/APP_PORT=$port/" .env
fi

if [ -n "$redisPort" ]; then
    sed -i -e  "s/FORWARD_REDIS_PORT=6379/FORWARD_REDIS_PORT=$redisPort/" .env
fi

if [ -n "$dbPort" ]; then
    sed -i -e  "s/FORWARD_DB_PORT=5432/FORWARD_DB_PORT=$dbPort/" .env
fi

SAIL=./vendor/bin/sail

$SAIL up -d

$SAIL php artisan key:generate --ansi

$SAIL php artisan migrate

if [ -n "$hasAuth" ]; then
    $SAIL php artisan jwt:secret
fi

if [ -n "$hasFileUpload" ]; then
    $SAIL php artisan storage:link || true
fi



