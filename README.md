# MAI Things

A website that lists and displays all the AI tools in one tab and lets users submit their tools in another. The main theme is AI, so this website helps you find all of your tools easily.

## Features

- Display all the tools
- Let users add new tools
- Users can submit a short description, name, tags, descriptive photo, and icon/logo for each tool

## Tech Stack

- **Frontend**: React with Next.js
- **Backend**: Django
- **Deployment**: Vercel (Frontend), Render (Backend)

## Project Structure

```sh
/my-ai-tools
├── frontend
│   ├── components
│   ├── pages
│   ├── public
│   └── styles
├── backend
│   ├── api
│   ├── models
│   ├── views
│   └── migrations
└── docker
    ├── Dockerfile
    └── docker-compose.yml
```

## Getting Started

### Prerequisites

- Node.js
- Python 3.x
- Docker (optional)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/my-ai-tools.git
    cd my-ai-tools
    ```

2. Install frontend dependencies:

    ```sh
    cd frontend
    npm install
    ```

3. Install backend dependencies:

    ```sh
    cd ../backend
    pip install -r requirements.txt
    ```

### Running the Application

1. Start the frontend:

    ```sh
    cd frontend
    npm run dev
    ```

2. Start the backend:

    ```sh
    cd backend
    python manage.py runserver
    ```

3. Open your browser and navigate to `http://localhost:3000` for the frontend and `http://localhost:8000` for the backend.

### Docker (Optional)

1. Build and run the Docker containers:

    ```sh
    docker-compose up --build
    ```

2. Open your browser and navigate to `http://localhost:3000` for the frontend and `http://localhost:8000` for the backend.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.
