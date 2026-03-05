# Freetime - Scheduling App

A web application for sharing weekly availability and proposing meetings between users.

## Features

- User authentication with NextAuth.js (GitHub OAuth)
- User profiles with unique IDs
- Weekly availability management
- Meeting proposal system
- SQLite database with Prisma ORM

## Setup Instructions

### 1. Install Dependencies

Dependencies are already installed, but if you need to reinstall:

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Database URL (SQLite for development)
DATABASE_URL="file:./dev.db"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here" # Generate with: openssl rand -base64 32

# GitHub OAuth (for authentication)
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
```

#### Getting GitHub OAuth Credentials:

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: Freetime (or any name)
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Click "Register application"
5. Copy the **Client ID** and generate a **Client Secret**
6. Add them to your `.env.local` file

#### Generate NEXTAUTH_SECRET:

```bash
openssl rand -base64 32
```

### 3. Set Up Database

The database schema is already defined. Run migrations:

```bash
npx prisma migrate dev
```

Generate Prisma Client (if needed):

```bash
npx prisma generate
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

### Testing Authentication

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Click "Sign In" or go to `/login`
4. Sign in with your GitHub account
5. You'll be redirected and can access protected pages

### Available Pages

- **Home (`/`)**: Landing page with navigation
- **Login (`/login`)**: Sign in page
- **Profile (`/profile`)**: View your user profile (protected)
- **Availability (`/availability`)**: Manage your weekly availability (protected)
- **Meetings (`/meetings`)**: Propose and manage meetings (protected)

### Database Management

View your database with Prisma Studio:

```bash
npx prisma studio
```

This opens a GUI at `http://localhost:5555` where you can view and edit your data.

## Project Structure

```
freetime/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/route.ts  # NextAuth configuration
│   ├── availability/page.tsx           # Availability management
│   ├── login/page.tsx                  # Login page
│   ├── meetings/page.tsx               # Meeting proposals
│   ├── profile/page.tsx                # User profile
│   └── page.tsx                        # Home page
├── prisma/
│   ├── schema.prisma                   # Database schema
│   └── migrations/                     # Database migrations
└── .env.local                          # Environment variables (create this)
```

## Next Steps

The app is scaffolded with basic pages. You can now:

1. Build out the availability management UI
2. Create forms for proposing meetings
3. Add user search/selection for meeting proposals
4. Implement meeting status updates (accept/decline)
5. Add email notifications
6. Style the UI with CSS or a UI library

## Troubleshooting

### "PrismaClient is not configured"
- Run `npx prisma generate` to generate the Prisma Client

### "Cannot find module '@auth/prisma-adapter'"
- Run `npm install @auth/prisma-adapter`

### Authentication not working
- Check that `GITHUB_ID` and `GITHUB_SECRET` are set in `.env.local`
- Verify `NEXTAUTH_URL` matches your local URL
- Ensure `NEXTAUTH_SECRET` is set

### Database errors
- Run `npx prisma migrate dev` to apply migrations
- Check that `DATABASE_URL` is set correctly in `.env.local`
