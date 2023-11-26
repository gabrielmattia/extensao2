confifura seu .env com DATABASE_URL='mysql://USER:PASSWORD@HOST:PORT/DATABASE'

comandos
npm install

npx prisma migrate dev --name init

npx prisma db seed

npm run dev
