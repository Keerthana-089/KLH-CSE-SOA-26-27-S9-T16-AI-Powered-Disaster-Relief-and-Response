
# SkyAid – AI-Powered Disaster Relief & Emergency Response Platform

## Team Members

- M. Vennela         – 2420030218
- C. Keerthana       – 2420030581
- G. Manvitha Reddy  – 2420030752

## Supervisor

**K. Venkateshwari**

## Abstract

SkyAid is an AI-powered disaster relief and emergency response platform designed to support faster and smarter decision-making during disasters such as floods, cyclones, earthquakes, and fires. The system helps organize emergency information, assess incident severity, prioritize response requirements, and identify suitable resources.

The platform provides modules for incoming emergency reports, AI analysis and recommendations, incident management, response planning, and resource management. It demonstrates a simulated decision-support workflow that recommends suitable emergency actions and matches resource requirements with available resources.

SkyAid follows Service-Oriented Architecture (SOA) and microservices principles to support modularity, scalability, and maintainability. The current implementation provides an interactive frontend prototype using sample data and simulated workflows. Backend microservices, database integration, real AI/Agentic AI processing, and real-time notifications are planned as future enhancements.

## Setup and Execution Instructions

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Git
- Visual Studio Code (recommended)
- Google Chrome or any modern web browser

### Clone Repository

```bash
git clone https://github.com/Keerthana-089/KLH-CSE-SOA-26-27-S9-T16-AI-Powered-Disaster-Relief-and-Response.git
```

Navigate to the cloned project folder containing `package.json`.

### Frontend Setup

1. Open the project folder in Visual Studio Code.
2. Open the terminal in the directory containing `package.json`.
3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL displayed in the terminal in your browser.

### Production Build

To create a production build, run:

```bash
npm run build
```

## Application Modules

1. **Dashboard:** Displays incident statistics, affected population, available resources, and recent emergency activities.
2. **Incoming Reports:** Supports reviewing, filtering, verifying, and managing emergency reports from different sources.
3. **AI Analysis & Recommendations:** Demonstrates incident risk assessment, simulated analysis, and recommended emergency response actions.
4. **Incidents & Response Plan:** Manages verified incidents, tracks response tasks, and records field-operation updates.
5. **Resources:** Displays emergency resource availability and supports resource-status management.

## Project Workflow

**Emergency Reports → Data Processing → Incident Analysis → Emergency Prioritization → Resource Recommendation → Response Planning**

## Technologies Used

- **Frontend:** React.js, TypeScript, HTML5, CSS3, Tailwind CSS
- **Routing:** TanStack Router
- **Build Tool:** Vite
- **State Management:** React Context
- **Development Tools:** Visual Studio Code, npm
- **Version Control:** Git and GitHub

## Implementation Notes

- The current application uses sample data and frontend-managed state to demonstrate its workflows.
- Changes made during a session are simulated and may reset when the application is refreshed.
- Backend services, persistent database storage, external API integrations, and live notification functionality are not included in the current frontend prototype.

## Expected Outcome

SkyAid aims to provide a unified disaster-response platform that helps organize emergency reports, prioritize incidents, recommend suitable resources, and improve coordination among emergency response teams. Its modular design provides a foundation for future integration of backend microservices, databases, and intelligent Agentic AI capabilities.
