# This is a replica of the website ace.ucv.ro

## Getting Started

First install the dependencies

```bash
npm install
# or
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You will need to have the following environment files on your machine for the connection to the database:
./.env.development.local
./prisma/.env

### Browse prisma data

```bash
npx prisma studio
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
