# To-Do List Application

This is a simple todo list application that can allows users to create, edit, and delete tasks, including a task description, priority level, and a checkbox to mark the task as done.

* Frontend: React.js
* Backend: Node.js
* Database: PostgreSQL

## Features

- Create, edit, and delete tasks. 
- Double-click on a task to edit its description
- Mark tasks as done with a checkbox
- Order and filter tasks by priority
-Pagination feature, which displays the first 5 tasks (newest) and automatically calls the API to receive the next 10 items.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

 Clone the repository
               ``` git clone https://github.com/uriya4647/To-Do-List.git
             ```

## front-end
1.  Navigate to the root directory
        
         ```cd to-do-list
      ```
2. Install the dependencies
    
        ```npm install
    ```

3. Run the front application
    
        ```npm start
    ```

4. Server requests are directed to `http://localhost:8090`.
## back-end

1. Install the dependencies
    
        ```npm install
    ```
2. Create a .env file in the root directory with the following variables
      ```   DB_NAME=your-database-name
            DB_USER=your-database-username  
            PORT = your-port
            POSTGRES_PASS = 204647028
    ```
3. Start the server:
         ```nodemon index.js
    ```


The application will be available at `http://localhost:8090`.

## Contributing

If you would like to contribute to the application, please fork the repository and submit a pull request.

## License

The application is licensed under the MIT License.

