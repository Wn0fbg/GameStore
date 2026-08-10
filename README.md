docker compose up -d
docker compose down
docker compose down -v

/cd plugins
npx @wordpress/create-block@latest blocks-gamestore 

/cd blocks-gamestore
npm run start
npm install @wordpress/components