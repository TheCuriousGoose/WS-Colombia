Backend: 

1. clone the example .env and modify the needed values (db_name and app_url)
2. Go to the backend folder with your terminal. 
3. Run the following commands

```sh
composer install
php artisan migrate --seed
```

Frontend:

1. Open the file vueFetch.ts in src/utils and change the API_URL to your local api url from the backend
2. run the following commands 

```sh 
npm install
npm run dev
```
3. Open the url that's given by the last command