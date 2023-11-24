# HOW  TO RUN

## Backed

> Fill out the .env file

```console
docker compose up
yarn # to install dependencies
npx prisma migrate dev # run migrations
npx prisma seed # to populate database
yarn dev # run the api at port: 3333
```

## Mobile
>
> Look into `.env.example`

```console
yarn # to install the dependencies
npx expo start # to run the app
```
