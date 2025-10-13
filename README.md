# MusicApp

A full‑stack music library app with a modern UI, CRUD for songs, filtering, and a statistics dashboard.

## Features

- Add, edit, and delete songs (modals with confirmation)
- Filter songs by genre, artist, and album
- Statistics page with totals and breakdowns (genres, artists, albums)
- Polished UI built with Emotion (styled) and component‑level style files
- Redux Toolkit + Redux‑Saga for state and side effects

## Tech stack

- Frontend: React + TypeScript, Emotion, Redux Toolkit, Redux‑Saga, React Router
- Backend: Node.js/Express, MongoDB (Mongoose)

## Quick start

Prerequisites

- Node.js 18+ and npm
- A running MongoDB instance (local or Atlas)

1) Backend: install and run

Create a `.env` file in `backend/`:

```
MONGODB_URI=mongodb://localhost:27017/musicapp
PORT=5000
```

Install deps and start the server:

```
cd backend
npm install
npm start
```

2) Frontend: install and run

By default, the frontend calls `http://localhost:5000/api`. Start it in another terminal:

```
cd frontend
npm install
npm start
```

Open the app at http://localhost:3000

## Using the app

- Header
  - ＋ Add: opens a modal to add a new song
  - 📊 Stats: navigates to the statistics page
- Home page
  - Filter panel (genre, artist, album)
  - Song list with Edit and Delete (Delete asks for confirmation)
- Stats page
  - Totals and breakdowns by genre, artist, and album

## API summary

Base URL: `http://localhost:5000/api`

- GET `/songs` — list songs; supports query params `genre`, `artist`, `album`
- POST `/songs` — create song
  - Body: `{ title, artist, album, genre }`
- PUT `/songs/:id` — update song
  - Body: `{ title, artist, album, genre }`
- DELETE `/songs/:id` — delete song
- GET `/stats` — aggregated statistics
