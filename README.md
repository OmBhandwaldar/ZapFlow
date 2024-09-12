# ZapFlow

Duration: May 2024 – June 2024  
Technologies: Node.js, Next.js, PostgreSQL, Prisma, Kafka, Redis, Docker

## Project Overview

ZapFlow is a custom-built automation platform inspired by Zapier, designed to streamline complex workflows by integrating various applications and automating repetitive tasks. The project focuses on enhancing efficiency and productivity across multiple business processes.

## Key Features

- Custom Zaps: Created and implemented custom "Zaps" to automate multi-step workflows, tailored to handle specific business requirements.
- Business Process Automation: Designed workflows to handle complex business processes, significantly improving operational efficiency.
- Tailored Solutions: Delivered automation solutions specific to unique business needs, saving time and allowing team members to focus on high-value tasks.

## Technical Highlights

- Node.js & Next.js: Used to build the backend and frontend, ensuring fast, scalable, and responsive application performance.
- PostgreSQL & Prisma: Leveraged Prisma ORM to manage data persistence and database interactions with PostgreSQL.
- Kafka: Implemented Kafka for event-driven communication.
- Docker: Deployed the application in Docker containers, enabling easy scaling and consistent environments across different systems.

## Working

- frontend: Contains the code for the frontend of the application.
- primary-backend: Acts as a first primary backend having user, trigger, action and zap routes for backend requests.
- worker: Pulls tasks from kafka queue, performs the task and puts it back to the queue to perform the next task.
- processor: Pulls remaining tasks from the database and puts it into the kafka queue.

## Impact

- Increased Efficiency: Automated repetitive tasks, allowing the team to focus on strategic initiatives.
- Improved Workflow Management: Optimized workflows, reducing manual intervention and improving process efficiency.
- Time Savings: Achieved significant time savings for the team by automating mundane and repetitive tasks.

## Getting Started

To clone and run this project locally:

```bash
git clone https://github.com/OmBhandwaldar/ZapFlow.git
cd ZapFlow
docker conpose up
