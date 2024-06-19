# For Reporting Issue to Next-Auth Prisma Adapter

## Installation

1. Install all of the modules/dependencies

```bash
npm ci
or
yarn install --pure-lockfile

```

2. Import database `k24_db_structure.sql` located in the root folder.

3. Setup your enviroment by renaming `example.env` to `.env` or `.env.local` and make sure to fill out everything.

```bash
# MySQL Database
MYSQL_HOST=
MYSQL_PORT=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DB=

# Prisma
DATABASE_URL=
# Example: mysql://{user}:{password}@{host}:{port}/{db_name}

# Generate by run this command on terminal: openssl rand -base64 32
AUTH_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

#SMTP
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
SMTP_FROM_EMAIL=
SMTP_FROM_NAME=

# Timezone
DEFAULT_TIMEZONE=

# Date format
DEFAULT_DATE_FORMAT=

# this is causing a webpack error in the beta v8 of NextAuth
# NEXTAUTH_URL=http://localhost:3000

# Miscellaneous
NEXT_PUBLIC_SITE_NAME=
NEXT_PUBLIC_IP_API=
MAX_UPLOAD_FILESIZE= 
NODE_ENV=development
```

## API Reference

#### Send test message request

```http
  POST /api/ping
```

| Parameter               | Type     | Description                                                                                                                                                                                                  |
| :---------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`                | `string` | It will return the message. |                                                                                                                                                                   |                                                                                                                              |

## Development & Deployment

- To deploy this project you need to do this:

```bash
  npm run build / yarn build
  npm run start / yarn start
```

- For running and testing it on your local:

```bash
  npm run dev / yarn dev
```

## Test Account
```bash
Email: user@local.host
Password: Test@123
```

## Tech Stack
- Node.js 18
- React.js 18
- Next.js 14
- Tailwindcss 3.4
- Prisma 5.9
- Next-auth 5.0 beta
- MySQL


