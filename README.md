# 🔧 FixItNow - Home Services Marketplace (Frontend)

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-black)

---

## 📌 Project Overview

**FixItNow** is a modern and responsive home services marketplace application built with **Next.js App Router**.

The platform connects customers with professional technicians for various home services.

Customers can browse services, explore technician profiles, select available time slots, create bookings, complete online payments, track service progress, and submit reviews.

Technicians can create service profiles, manage availability schedules, and handle customer bookings.

Admins can manage the entire platform through a dedicated moderation dashboard.

This project is a **frontend application integrated with a backend REST API**.

---

# 🌐 Project Links

| Resource          | URL                  |
| ----------------- | -------------------- |
| Live Frontend     | YOUR_VERCEL_URL      |
| GitHub Repository | YOUR_GITHUB_URL      |
| Backend API       | YOUR_BACKEND_API_URL |
| Demo Video        | YOUR_VIDEO_URL       |

---

# 👥 User Roles & Permissions

## 👤 Customer

Customers can:

- Register and login
- Browse available services
- Search and filter services
- View technician profiles
- Select available time slots
- Create booking requests
- Complete online payment
- Track booking status
- Cancel eligible bookings
- Submit reviews after completed services

---

## 🛠 Technician

Technicians can:

- Create professional profiles
- Add skills and experience
- Manage offered services
- Set availability schedules
- View booking requests
- Accept or decline bookings
- Update job status
- Mark services as completed

---

## 🛡 Admin

Admins can:

- View platform statistics
- Manage users
- Ban/unban users
- Manage service categories
- Monitor bookings
- Control platform activities

---

# ✨ Features Implemented

## 🔐 Authentication System

Implemented:

- User registration
- Login system
- JWT authentication
- Role-based access control
- Protected routes
- Next.js Middleware route protection

Supported Roles:
-ADMIN
-TECHNICIAN
-CUSTOMER

---

# 🏠 Public Features

## Service Marketplace

- Responsive service cards
- Optimized images using `next/image`
- Service ratings
- Starting price display
- Technician showcase

## Search & Filter

Filtering options:

- Service category
- Location
- Rating
- Price range

---

# 📅 Customer Booking Journey

The complete customer workflow in FixItNow:

````mermaid
flowchart TD

A[Register / Login] --> B[Browse Services]

B --> C[View Technician Profile]

C --> D[Select Date & Time Slot]

D --> E[Submit Booking Request]

E --> F[Technician Accepts Request]

F --> G[Payment Checkout]

G --> H[Booking Confirmation]

H --> I[Service Completion]

I --> J[Submit Review]

---

# 💳 Payment Integration

Implemented real payment integration using secure online payment gateways.

## Supported Payment Methods

- Stripe Checkout



## Payment Flow

```mermaid
flowchart TD

A[Booking Accepted] --> B[Create Payment Session]

B --> C[Redirect To Payment Gateway]

C --> D[Payment Success / Cancel]

D --> E[Update Booking Status]

---

# 🧰 Technology Stack

## Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
## Authentication

- JWT
- Next.js Middleware


## Payment

- Stripe Checkout



## Deployment

- Vercel
````

# ⚙️ Installation & Setup

Clone repository:

```bash
git clone YOUR_REPOSITORY_URL
npm install
-create environment variable .env
npm run dev


admin credential
Email:
admin@gmail.com

Password:
123456
```
