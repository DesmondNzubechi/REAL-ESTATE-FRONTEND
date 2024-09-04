# Real Estate Platform Frontend

This is the frontend repository for the Real Estate Platform, providing a user-friendly interface to interact with the Real Estate API. The platform allows users to explore properties, manage their accounts, engage with blog content, and much more.

## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Usage](#usage)
6. [Available Pages](#available-pages)
7. [API Integration](#api-integration)
8. [State Management](#state-management)
9. [Contributing](#contributing)
10. [License](#license)

## Features

### 1. User Authentication and Account Management
- **User Registration and Login**: Users can create accounts and log in to access their dashboard.
- **Profile Management**: Users can update their personal information, change passwords, and manage their profile settings.

### 2. Property Exploration and Ordering
- **Property Listings**: Users can browse and search for properties, view detailed information, and filter results by various criteria such as location and price.
- **Property Details**: Detailed pages for each property, including images, descriptions, and pricing.
- **Order Placement**: Users can place orders for properties directly from the frontend, with instant confirmation and email notifications.

### 3. Blog and Comment System
- **Blog Posts**: Users can read blog posts published by admins on topics related to real estate and the platform.
- **Commenting and Reviews**:
  - **Unauthenticated Users**: Can comment on blog posts and add reviews to properties without logging in.
  - **Authenticated Users**: Can comment on blog posts and add reviews to properties, with all activities logged and visible in their dashboard.

### 4. User Activities Logging
- **Activity Tracking**: For authenticated users, all comments and reviews are logged and can be viewed in the user’s dashboard under the activities section.

### 5. Notifications
- **Email Notifications**: Users receive email notifications for important actions, such as order confirmations and password resets.

### 6. Responsive Design
- **Mobile and Desktop**: The application is fully responsive, ensuring a smooth experience across devices of all sizes.

## Technology Stack

- **Frontend Framework**: Next.js (React.js)
- **Language**: TypeScript
- **State Management**: Zustand (or Redux if applicable)
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios (for API requests)
- **Form Handling**: React Hook Form
- **Routing**: Next.js Router

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/real-estate-frontend.git
   cd real-estate-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:
   ```bash
   npx next dev
   ```

## Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
NEXT_PUBLIC_API_URL=https://your-backend-api-url.com
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

These variables allow the frontend to interact with the backend API and define the base URL for the application.

## Usage

After starting the development server, navigate to `http://localhost:3000` in your browser to interact with the platform.

### Available Pages

- **Home**: Overview of the platform with featured property listings.
- **Property Listings**: Browse all available properties, with filtering and sorting options.
- **Property Details**: View detailed information about a selected property.
- **Blog**: Read blog posts and comments.
- **Comment/Review**: Unauthenticated users can add comments and reviews, while authenticated users have their activities logged.
- **User Dashboard**: Manage account settings, view orders, track activities, and update the profile.
- **Login/Register**: Authentication pages for new and existing users.
- **Order Confirmation**: View confirmation and details after placing an order.

### API Integration

The frontend interacts with the backend API to perform various actions:

- **Authentication**: Uses the `/auth/login`, `/auth/register`, and `/auth/logout` endpoints to manage user sessions.
- **Property Listings**: Fetches data from the `/properties` endpoint to display available properties.
- **Order Management**: Sends order requests to the `/orders` endpoint and displays user-specific order history.
- **Blog and Comments**: Interacts with the `/blogs` and `/blogs/:id/comments` endpoints to fetch and post content.
- **Reviews**: Integrates with the `/reviews` endpoint to handle property reviews.
- **User Activities**: Logs authenticated user activities and integrates with the `/activities` endpoint to track comments and reviews.

### State Management

- **Zustand**: Used for managing global state, such as user authentication status and storing user data.
- **Local State**: Managed using React’s `useState` and `useEffect` hooks for component-specific logic.

### Styling

- **Tailwind CSS**: Provides a utility-first approach to styling, making the frontend design highly customizable and responsive.