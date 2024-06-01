### README for Dynamic To-Do List Application

#### Overview
This is a dynamic to-do list application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to add tasks, move tasks between sections (Pending, In Progress, Completed), and optionally use drag-and-drop functionality.

#### Features
- Add new tasks with a title and description.
- Move tasks between sections (Pending to In Progress, In Progress to Completed).
- Automatically timestamp tasks when moved to the Completed section.
- Real-time updates without needing to refresh the page.

#### Prerequisites
- Node.js and npm installed on your machine.

#### Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/2001akash/Dynamic-To-Do-List-Application
    cd todo-app
    ```

2. **Set up the frontend**:
    - Navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    - Install frontend dependencies:
        ```bash
        npm install
        ```
    - Start the frontend development server:
        ```bash
        npm start
        ```

3. **Access the application**:
    - Open your web browser and navigate to `http://localhost:3000` to view the application.

#### Project Structure
```
todo-app/
│
├── backend/    # (Only for reference; backend is already deployed on render)
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── TaskSection.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── README.md
└── package.json
```

#### API Endpoints

**Backend** (Deployed)
- **GET** `/tasks` - Retrieve all tasks.
- **POST** `/tasks/add` - Add a new task.
- **POST** `/tasks/update/:id` - Update the status of a task.

#### Dependencies
- **Frontend**:
  - `react`
  - `axios`

#### Notes
- Ensure the backend server URL is correctly set in the frontend code.
- The backend server is deployed and running, so no need to start it locally.

#### Contact
For any issues or questions, please contact 2001akashdeep@gmail.com.

---

This should provide a comprehensive guide for setting up and running the Dynamic To-Do List application with the deployed backend. Adjust any details as necessary to fit your specific project setup and requirements.


# Live Link: https://frontend-todo-9v3e.onrender.com/
