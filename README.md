# Objectives
This solution is purely an experiment for learning purposes. We'll implement a number of new standards in software development, leveraging VS Code's remote development container capabilities.

1. Create a containerized development environment.
1. Create a barebones web API in Express.
1. Configure the Express API to use SocketIO library for establishing WS connections with clients with graceful HTTP polling fallback for legacy browsers. Ideally, all client connections will utilize WS connections for all state transfer (no REST), achieving perfect bidirectional data flow.
1. Implement and configure GraphQL to leverage its granular data access capabilities.
1. Create a data access layer utilizing SQL to access Postgres.
1. Containerize the PSQL database, web API, and web app separately using docker compose.

# Tests
For expeditious feature development, behavior driven development will be used. Moreover, tests will be written once all features are developed and tested manually. This may be modified as the solution develops, i.e. as specific features require automated testing where manual testing cannot be accomplished.

# Data Access Layer
A smart approach to data access would be to utilize a popular Node ORM, e.g. Sequelize. However, to get more acquainted with SQL, with which I am (at best) vaguely familiar, I'll be writing my own data access module including custom migrations. This will take considerably more time to accomplish, but the result will be a more thorough understanding of SQL.

# Solution
Since the project's focus is less about solving a real world problem and more about demonstrating the capabilities of certain technologies, the solution will be a simple to-do style web application. The frontend will utilize the Angular framework for presentation. A state management tool will not be utilized as the frontend state will be quite minimal. Angular will act as the state management vehicle.
