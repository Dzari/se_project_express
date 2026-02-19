What to Wear React Project - Back End
In this project, I implemented a full-stack application that connects a React frontend to an Express backend.

Frontend

In the frontend of this project, I implemented the logic for user registration, login, and logout using React components like RegisterModal and LoginModal. I created a CurrentUserContext to manage and store the current user's data across different components, ensuring the user interface updates dynamically based on authorization. The project also involved creating functionality for editing user profiles, with the data being passed from the form to the API. I integrated the ability for users to like or dislike clothing items and ensured that these actions are only available to authorized users. By utilizing React's declarative approach, the frontend seamlessly updates the UI when the state changes, removing the need for direct DOM manipulation. I updated the Header and ItemModal components to reflect whether a user is logged in, showing personalized content such as the user's name and avatar. Additionally, I handled conditional rendering in components like ItemCard to hide or show buttons based on the user's authorization status.

Backend

In the backend of this project, I implemented a Node.js and Express.js server to handle user authentication and authorization. I created API endpoints for user registration (/signup) and login (/signin), where user data is stored securely in MongoDB. JWT tokens were used to authenticate and authorize users, ensuring secure access to protected routes. The project included setting up middleware to protect routes like /profile, allowing only authorized users to modify clothing items and profiles. I also implemented functionality for adding and removing likes on clothing items, using token validation to verify user actions. The server communicates with the MongoDB database via Mongoose, ensuring data is stored and retrieved efficiently. Finally, I handled edge cases and errors, such as invalid user input, with appropriate responses and error codes, ensuring smooth and secure backend operations.

Tech Stack:

Frontend

React: Frontend framework for building user interfaces.
Vite: Build tool for faster development with React.
OpenWeather API: API for fetching weather data.
JavaScript (ES6+): Core programming language for frontend development.
CSS: Styling for the user interface.
BEM Methodology: CSS class naming convention for maintainable code.
Figma: Tool for UI/UX design and mockups.
Git: Version control system for managing code changes.
GitHub: Platform for hosting code repositories.
ESLint: Linter to ensure code quality in JavaScript.
React Context: State management solution for React applications.
React Router: Client-side routing for React applications.
Prettier: Code formatter to maintain consistent style.

Backend

JSON Server: Mock backend for testing API requests.
Express.js: Backend framework for building RESTful APIs.
MongoDB: NoSQL database for storing user data and clothing items.
JWT (JSON Web Tokens): Authentication mechanism for protecting API routes.
Node.js: JavaScript runtime for backend development.
Mongoose: ODM (Object Data Modeling) library for MongoDB.
Axios: HTTP client for making API calls from both frontend and backend.
Nodemon: Tool for automatically restarting the server during development.

Deployment:

This project is currently deployed using the free version on Render. This means that the backend and database can take a few minutes to spin up. The frontend can be viewed at any time but won't show any clothing items and logging in with the mock profile can take a while.

Mock Username: test@test.com
Mock Password: asdf

Link to front-end repo: [se_project_react] (https://github.com/Dzari/se_project_react) Link to deployed frontend website: https://se-project-react-dg2c.onrender.com Link to backend website: https://se-project-express-7ttb.onrender.com
