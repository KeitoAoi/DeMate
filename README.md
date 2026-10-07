# DeMate

DeMate is a small MERN stack project I built mainly to quickly learn and practice DevOps concepts in a hands-on way.

The web application itself is intentionally simple — it lets users create, update, and manage tasks. My main focus was not building a complex product, but using a simple MERN app as a base to understand how real-world deployment and DevOps workflows work.

## What I Practiced

- Containerizing a backend with Docker
- Using Docker Compose
- Configuring Nginx as a reverse proxy
- Setting up GitHub Actions for CI/CD
- Managing environment variables and secrets
- Deploying applications using Render
- Writing shell scripts for setup and deployment automation

## Tech Stack

`MongoDB` `Express.js` `React.js` `Node.js` `Docker` `Nginx` `GitHub Actions` `Render`

## About the App

The MERN application is a simple task manager where users can:

- Create tasks
- Update task status
- Set task priority
- Delete tasks
- Store task data in MongoDB

## Why I Built This

I wanted a quick way to move beyond just reading about DevOps and actually practice it.

Instead of spending most of the time building a complicated application, I kept the MERN app simple and focused on understanding the deployment side — Docker, CI/CD pipelines, reverse proxies, environment configuration, and automation.

This project helped me understand how an application moves from local development to a more production-like environment.

## Running Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Running with Docker

```bash
docker compose up --build
```

## DevOps Setup

The project includes:

- Dockerized backend
- Nginx reverse proxy
- GitHub Actions workflow
- Environment-based configuration
- Shell scripts for automated setup and deployment

---

This is primarily a **learning and experimentation project** focused on improving my practical DevOps skills using a simple MERN application.
