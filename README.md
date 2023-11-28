confifura seu .env com DATABASE_URL='mysql://USER:PASSWORD@HOST:PORT/DATABASE'

comandos
npm install

npx prisma migrate dev --name init

npx prisma db seed

npm run dev

em produção mudar a url do banco de dados em schama.prisma
