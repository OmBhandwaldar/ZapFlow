# ZapFlow

Technologies:  Node.js, Next.js, PostgreSQL, Prisma, Kafka, Docker

##  Overview

ZapFlow is a custom-built automation platform inspired by Zapier, designed to streamline complex workflows by integrating various applications and automating repetitive tasks. The project focuses on enhancing efficiency and productivity across multiple business processes.

## Key Features

- <b>Custom Zaps</b>: Created and implemented custom "Zaps" to automate multi-step workflows, tailored to handle specific business requirements.
- <b>Business Process Automation</b>: Designed workflows to handle complex business processes, significantly improving operational efficiency.
- <b>Tailored Solutions</b>: Delivered automation solutions specific to unique business needs, saving time and allowing team members to focus on high-value tasks.

## Technical Highlights

- <b>Node.js & Next.js</b>: Used to build the backend and frontend, ensuring fast, scalable, and responsive application performance.
- <b>PostgreSQL & Prisma</b>: Leveraged Prisma ORM to manage data persistence and database interactions with PostgreSQL.
- <b>Kafka</b>: Implemented kafka to handle actions and triggers.
- <b>Docke</b>r: Deployed the application in Docker containers, enabling easy scaling and consistent environments across different systems.

## Working

- <b>frontend</b>: Contains the code for the frontend of the application.
- <b>hooks</b>: Extracts data from the webhook URL and handles zap.
- <b>primary-backend</b>: Acts as a first primary backend having user, trigger, action and zap routes for backend requests.
- <b>worker</b>: Pulls actions from kafka queue, executes the action and puts it back to the queue to execute the next action.
- <b>processor</b>: Pulls remaining actions from the database and puts it into the kafka queue.


## Getting Started

To clone and run this project locally:

```bash
git clone https://github.com/OmBhandwaldar/ZapFlow.git
cd ZapFlow
docker-compose up
