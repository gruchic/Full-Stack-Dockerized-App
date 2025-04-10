# Full-Stack Docker Application  

## Overview
This project is a full-stack application containerized using Docker and orchestrated with Docker Compose. It consists of three services:
- **Frontend**: A static web interface served by Nginx, displaying a list of users.
- **Backend**: A Node.js API providing user data via a RESTful endpoint.
- **Database**: A MySQL database storing user information with persistent data.

The services communicate over a custom Docker network (`project-net`), and data persistence is achieved through bind mounts.

## Prerequisites
- **Docker**: Version 20.10 or higher.
- **Docker Compose**: Version 2.0 or higher.
- **Node.js**: Required locally for backend development (optional for deployment).
- **Operating System**: Linux, macOS, or Windows with WSL2 recommended.

## Setup Instruction

### 1. Clone or Prepare the Project
Ensure the project directory (`full-stack-docker`) contains the necessary files. If cloning from a repository, run:
```bash
git clone "https://github.com/gruchic/Full-Stack-Dockerized-App.git"
cd full-stack-docker
```
### 2. Installing the Necessay Packages
```bash
cd backend
npm install
```
### 3. Creating the Nectwork
```bash
docker network create project-net
```
### 4. Start the Application
```bash
docker-compose up -d --build
```
### 5. Adding Jenkins
Jenkins should be setup in you local.Make Your local expose to internet using ngrok.Add the webhook in the project
```
ngrok http 8080

```
