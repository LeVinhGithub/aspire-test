### Requirement
PHP 8.2, Composer, Docker

### Quick Setup
1./ Run script below for quick setup
```shell
sh ./setup.sh [-p 8080] [-a] [-f] [-d] [-r 6380] [-b 5433]
```

| Option | Description | Value |
| --- | --- | -- |
| `-p` | Specify custom app port. Default is 3000 | Number | 
| `-a` | Specify has authentication module | Empty |
| `-f,` | Specify has file upload feature  | Empty |
| `-d` | Specify docker is development environment if local machine don't install PHP and Composer | Empty |
| `-r` | Specify custom redis port. Default is 6379 | Number |
| `-b` | Specify custom database port. Default is 5432 | Number |

### Manual Setup

1./ Install Package

Select one of methods belows:

With composer
```bash
composer install
```

Without composer
```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```

2./ Copy .env
```bash
cp .env.example .env
```

3./ Start app
```bash
./vendor/bin/sail up -d
```

4./ Generate app key
```bash
./vendor/bin/sail php artisan key:generate --ansi
```

5./ Run migration
```bash
./vendor/bin/sail php artisan migrate
```

6./ (Optional) Create symlink for file storage if you're using local disk upload
```bash
./vendor/bin/sail php artisan storage:link
```

7./ (Optional) Generate JWT secret if you're using authentication modules
```bash
./vendor/bin/sail php artisan jwt:secret
```

## API documents
View in the browser on
```
http://localhost:3000/request-docs/
```

## Localization
- To using localization, attach the locale name in `Accept-Language` header in every request. Supporting locales are `en`(English) and `ja` (Japanese)
