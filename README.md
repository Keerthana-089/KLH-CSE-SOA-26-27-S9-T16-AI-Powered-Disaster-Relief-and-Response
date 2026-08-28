# KLH-CSE-SOA-26-27-S9-T16-AI-Powered-Disaster-Relief---Emergency-Response-Platform

## Team Members
- M. Vennela         – 2420030218
- C. Keerthana       – 2420030581
- G. Manvitha Reddy  – 2420030752

## Supervisor
K. Venkateshwari

## Abstract
SkyAid is an AI-powered disaster relief and emergency response platform designed to support faster and smarter decision-making during disasters such as floods, cyclones, earthquakes and fires. The system analyzes disaster information from multiple sources and assists in identifying the type, severity and priority of emergency incidents.

The platform uses Agentic AI to support emergency prioritization, intelligent resource recommendation and automated response coordination. It aims to connect affected citizens, volunteers and emergency response teams through a unified platform, reducing manual effort and improving response efficiency.

SkyAid follows a Service-Oriented Architecture (SOA) using independent microservices, making the system modular, scalable and easier to maintain. The proposed platform aims to provide a practical and socially useful solution for improving disaster preparedness, resource utilization and emergency response.

## Setup and Execution Instructions
### Prerequisites
- Java JDK
- Python
- Node.js and npm
- MySQL / PostgreSQL
- Git
- Maven
- Docker (Optional)

### Clone Repository
git clone <(https://github.com/Keerthana-089/KLH-CSE-SOA-26-27-S9-T16-AI-Powered-Disaster-Relief-and-Response.git)>
cd SkyAid

### Backend Setup
cd <service-folder>
mvn clean install
mvn spring-boot:run

### Frontend Setup
cd frontend
npm install
npm start

### Database Setup
1. Install and start MySQL/PostgreSQL.
2. Create the required database.
3. Configure database credentials in the application configuration.
4. Start the required backend services.

Note: Setup instructions will be updated as development progresses.

## Current Phase Status
### Phase 1 – Project Planning & Architecture
Status: 🟢 In Progress

- [x] Project title finalized
- [x] Problem statement identified
- [x] Objectives defined
- [x] Literature survey initiated
- [x] Research gap identified
- [x] Novelty identified
- [x] SDG alignment identified
- [x] Initial SOA architecture designed
- [ ] Backend microservices implementation
- [ ] AI/Agentic AI integration
- [ ] Frontend implementation
- [ ] Resource allocation module
- [ ] Notification and alert system
- [ ] Integration testing
- [ ] Final deployment

## Project Workflow
Input → Data Ingestion → AI Analysis → Emergency Prioritization → Resource Recommendation → Response & Notifications

## Technologies
- Frontend: React.js, HTML, CSS, JavaScript
- Backend: Java, Spring Boot, REST APIs
- SOA: Spring Cloud Gateway, Eureka
- Database: MySQL / PostgreSQL
- AI: Python, ML, NLP, Computer Vision, LLM / Agentic AI
- Testing: Postman
- Security: JWT, RBAC
- DevOps: GitHub, Docker, GitHub Actions

## Expected Outcome
SkyAid aims to provide an automated disaster-response platform that enables faster incident identification, intelligent emergency prioritization, efficient resource recommendation and improved coordination between citizens and emergency response teams.
