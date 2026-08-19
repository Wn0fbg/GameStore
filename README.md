docker compose up -d
docker compose down
docker compose down -v

/cd plugins
npx @wordpress/create-block@latest blocks-gamestore 

/cd blocks-gamestore
npm run start
npm install @wordpress/components

// Aptimizated project after finished

services:
  mysql:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: wordpress
      MYSQL_DATABASE: gamestore
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    ports:
      - "3310:3306"
    volumes:
      - ./.srv/database:/var/lib/mysql

  wordpress:
    image: wordpress:latest
    restart: always
    depends_on:
      - mysql
    environment:
      WORDPRESS_DB_HOST: mysql:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: gamestore
    ports:
      - "8000:80"
    volumes:
      - wordpress-core:/var/www/html
      - ./themes/:/var/www/html/wp-content/themes/
      - ./plugins/blocks-gamestore/:/var/www/html/wp-content/plugins/blocks-gamestore/
      - ./plugins/core-gamestore/:/var/www/html/wp-content/plugins/core-gamestore/
      - ./mu-plugins/:/var/www/html/wp-content/mu-plugins/
      - ./.srv/custom.ini:/usr/local/etc/php/conf.d/custom.ini

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    restart: always
    environment:
      PMA_HOST: mysql
      PMA_USER: wordpress
      PMA_PASSWORD: wordpress
    ports:
      - "8181:80"
    depends_on:
      - mysql

volumes:
    wordpress-core


// commands for this:
docker compose up -d

# Устанавливаем владельца для файлов WordPress
sudo chown -R 33:33 ./.srv/wordpress/

# Даем права на запись
sudo chmod -R 755 ./.srv/wordpress/