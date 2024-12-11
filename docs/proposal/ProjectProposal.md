# LevMaintenance Management System (LMS)

## Application Definition Statement

LevMaintenance Management System is a web-based application designed to help bus companies efficiently manage maintenance tasks, track vehicle statuses, and automate preventive maintenance schedules. This system streamlines communication between maintenance teams and fleet managers, ensuring that work orders, resources, and task statuses are organized and accessible in real time. The goal is to minimize vehicle downtime and ensure safety and compliance with industry standards.

- Conducted interviews with two public school bus fleet manager. Key insights included the need for mobile task management and automated alerts for scheduled bus maintenance.

## Target Market

The primary users of this system are bus fleet managers, maintenance supervisors, and technicians working for transit agencies, private bus companies, and school districts.

## User Profile / Persona

```bash
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['Fleet Manager', 'Technician', 'Administrator'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: false,
  },
  organization_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);

```

## Use Cases

- ### Scenario:

  A bus breaks down on the road and needs immediate attention.

- ### Steps:
  1. Log in to the system.
  1. Create an emergency work order and add details about the issue.
  1. Assign the nearest available technician to the task.
  1. Technician updates the status in real time after completing the repair.
- ### Outcome:
  The fleet manager and dispatcher receive real-time updates on the repair status.

## Problem Statement

Maintenance teams struggle with inefficient task tracking, vehicle scheduling, and resource management, leading to frequent breakdowns and service delays. Existing solutions are often too complex or not tailored to fleet-specific needs.

## Pain Points

- Task Overlap: Lack of centralized task tracking results in duplicate work orders.
- Downtime: Reactive maintenance leads to unplanned downtime and costly repairs.
- Communication Gaps: Poor coordination between technicians and administrators causes delays.

## Solution Statement

- The Maintenance Management System simplifies task management, asset tracking, and preventive maintenance through an intuitive interface. Unlike existing CMMS solutions, it is designed with a lightweight, user-friendly approach to accommodate small-to-medium businesses with minimal training requirements.

## Competition

- ### Direct Competition

  - **Fiix CMMS:** Offers extensive features but is expensive and complex for smaller businesses.
  - **UpKeep:** Simplifies mobile task management but lacks advanced reporting capabilities.

- ### Indirect Competition
  - **Google Sheets/Excel:** Often used for manual tracking but lacks automation and scalability.

## Features & Functionality

- ### Task Management:

  - Create, assign, and track work orders.
  - View real-time status updates.
  - Reduce task overlap with a centralized dashboard.

- ### Preventive Maintenance Scheduler:

  - Automate alerts for upcoming maintenance tasks.
  - Reduce downtime through proactive repairs.

- ### Asset Tracking:

  - Maintain a database of equipment and maintenance history.
  - Attach photos and documents for reference.

- ### Mobile Accessibility:

  - Enable technicians to update task statuses on the go.
  - View assigned tasks and receive notifications in real time.

## Integrations

- ### Custom Django REST API:

  - The backend API, built with Node.js and Express, will manage work orders, vehicles, and users.
  - The API integrates seamlessly with MongoDB for data storage, leveraging Mongoose for schema validation and CRUD operations.

## Style Tile

- Link to Project [Style Tile](../designs/Styletile.jpg)
