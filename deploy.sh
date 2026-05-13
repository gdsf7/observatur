set -e 
git checkout main
git reset --hard HEAD
git pull origin main
cp ../.env.production .env
docker compose up --build -d --remove-orphans
docker compose exec app composer install --no-interaction --prefer-dist --optimize-autoloader
docker compose exec app php artisan migrate:fresh --seed --force
docker compose exec app npm install
docker compose exec app php artisan ziggy:generate
docker compose exec app npm run build
docker compose exec app php artisan cache:clear
docker compose exec app php artisan view:clear
docker compose exec app php artisan route:clear
docker compose exec app php artisan config:clear


docker compose exec app php artisan config:cache
docker compose exec app php artisan route:cache