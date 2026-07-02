# Zenviv

> **The Social Fitness Ecosystem**

Zenviv is a modern fitness-first social platform designed to connect fitness enthusiasts, creators, trainers, brands, and communities under one unified ecosystem.

Unlike a traditional fitness application, Zenviv acts as the **host platform** that brings together multiple specialized applications into a seamless experience. Users authenticate once using **UniPass** and gain access to every integrated service without creating additional accounts.

---

# Vision

Our mission is to build a centralized platform where users can

- Create their fitness identity
- Build their personal influence
- Connect with fitness enthusiasts
- Join and manage communities
- Attend webinars and live events
- Purchase fitness merchandise
- Access multiple partner applications using one account

---

# Core Features

- User Profiles
- Fitness Communities
- Social Networking
- Community Management
- Creator Profiles
- Follow & Connect
- News Feed
- Notifications
- Events
- Merchandise Store
- Webinars
- Live Sessions
- Chat Rooms
- Single Sign-On
- Micro Frontend Architecture

---

# Platform Overview

```text
                  +----------------------+
                  |      UniPass         |
                  |  Identity Provider   |
                  +----------+-----------+
                             |
                      Authentication
                             |
                             ▼
+------------------------------------------------------------+
|                         ZENVIV                             |
|------------------------------------------------------------|
| Social Platform                                            |
| Communities                                                |
| Profiles                                                   |
| Feed                                                       |
| Notifications                                              |
| Events                                                     |
| Backend APIs                                               |
| Database                                                   |
+------------+----------------------+------------------------+
             |                      |
             |                      |
             ▼                      ▼
        Blycko MFE             Habla MFE
      Merchandise Store      Webinar & Chat
```

---

# Architecture

Zenviv is composed of four independent systems.

## 1. Zenviv

The primary application.

Responsibilities

- Frontend Host Application
- Backend APIs
- Business Logic
- User Profiles
- Communities
- Feed
- Notifications
- Database
- API Gateway

Zenviv owns all business data.

---

## 2. UniPass

UniPass is the centralized Identity Provider (IdP).

Responsibilities

- User Authentication
- Login
- Registration
- Password Management
- Session Management
- Access Tokens
- Refresh Tokens
- OAuth Providers

UniPass **does not** store application resources or business data.

It only stores identity information required to authenticate users.

---

## 3. Blycko

Blycko is an independent React application exposed as a **Micro Frontend**.

Responsibilities

- Merchandise Store UI
- Shopping Experience
- Product Browsing
- Cart UI

Blycko does not own business data.

Every request is forwarded to Zenviv APIs.

---

## 4. Habla

Habla is an independent React application exposed as a **Micro Frontend**.

Responsibilities

- Chat
- Live Events
- Webinars
- Community Communication

Habla provides the user experience while Zenviv stores all application data.

---

# Authentication

Authentication is handled by UniPass.

```text
User

   │

   ▼

UniPass

   │

   ▼

Zenviv

   │

   ├────────► Blycko

   │

   └────────► Habla
```

Users authenticate once and can seamlessly access every application within the ecosystem.

---

# Data Ownership

Business data is always owned by the application that provides the business capability.

For the current ecosystem:

- User Profiles → Zenviv Database
- Communities → Zenviv Database
- Merchandise Orders → Zenviv Database
- Webinar Registrations → Zenviv Database
- Chat Metadata → Zenviv Database
- Notifications → Zenviv Database

Partner applications never communicate directly with databases.

---

# Request Flow

Every request follows the same architecture.

```text
Browser

      │

      ▼

Next.js Host (BFF)

      │

      ▼

API Gateway

      │

      ▼

Microservices

      │

      ▼

Database
```

This ensures

- Centralized Authentication
- Logging
- Authorization
- Validation
- Monitoring
- Security
- Consistent API Contracts

---

# Micro Frontend Architecture

Zenviv uses a host-remote architecture.

```text
                   Next.js Host

      ┌───────────────┼────────────────┐

      ▼               ▼                ▼

  Zenviv UI      Blycko MFE      Habla MFE
```

The host application controls

- Authentication
- Routing
- Layout
- Navigation
- Theme
- API Communication

Remote applications provide feature-specific user interfaces.

---

# Technology Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Module Federation Host

---

## Remote Applications

- React
- Vite
- Module Federation

---

## Backend

- Node.js
- Express.js
- Microservices
- API Gateway

---

## Authentication

- UniPass (SSO)

---

## Database

- PostgreSQL

---

# Initial Frontend Structure

```text
src
│
├── app
│   ├── (marketing)
│   ├── (auth)
│   ├── (dashboard)
│   ├── api
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components
│   ├── ui
│   ├── layout
│   ├── navigation
│   ├── shared
│   └── feature
│
├── features
│   ├── auth
│   ├── profile
│   ├── communities
│   ├── notifications
│   ├── feed
│   ├── merchandise
│   └── webinars
│
├── microfrontends
│   ├── blycko
│   ├── habla
│   └── shared
│
├── services
│   ├── api
│   ├── auth
│   ├── users
│   └── communities
│
├── hooks
├── providers
├── store
├── types
├── lib
├── utils
├── constants
└── config
```

---

# Project Principles

- Mobile-first
- Feature-first architecture
- Modular design
- Reusable UI components
- Type-safe development
- Centralized authentication
- Backend for Frontend (BFF)
- Microservice architecture
- Micro Frontend architecture
- Scalable by default

---

# Project Status

🚧 Zenviv is currently under active development.

The project begins by building the host application, establishing the design system, implementing authentication through UniPass, integrating remote applications using Module Federation, and exposing a scalable Backend for Frontend (BFF) that communicates with the Zenviv microservices.