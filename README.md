# Template Backend with nodejs and express
This project serves as a template for building a backend using Node.js with Express. It provides a foundational structure and includes several useful middlewares and utilities to simplify the development process.

## Main Functionalities

- **API Routing**: Organized and modular routing system for easy scalability and maintenance.
- **Error Handling**: Centralized error handling to manage application errors smoothly.
- **Logging**: Provides logging functionality for monitoring requests and debugging.

## Middlewares

- **Express JSON Parser**: Automatically parses incoming requests with JSON payloads.
- **CORS (Cross-Origin Resource Sharing)**: Configures CORS to allow cross-origin requests from trusted domains.
- **Helmet**: Secures the app by setting various HTTP headers.
- **Morgan**: HTTP request logger middleware for Node.js, used for logging requests to the console or a file.

## Utilities

- **Environment Configuration**: Easy environment configuration management using dotenv.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm package manager

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/joseleoc/express-template.git
  ```
2. Navigate into the project directory:
  ```sh
  cd express-template
  ```
3. Install the dependencies:
  ```sh
  npm install
  ```

### Running the Project

1. Create a `.env` file in the root directory and configure the necessary environment variables.

2. Start the server:
  ```sh
  npm start
  ```

### Development

For development purposes, you can use:
```sh
npm run dev
```
This command uses nodemon to automatically restart the server on file changes.

## Testing

The project is set up with a testing framework for unit and integration tests.

### Running Tests

1. Ensure that all required environment variables are set.
2. Run the tests using:
  ```sh
  npm test
  ```
This command will execute all tests in the `tests` directory.

### Testing Framework

- Uses Jest as the primary testing framework.
- Supertest is used for testing HTTP endpoints.


## Contributing

Feel free to submit pull requests and report issues. Contributions are welcome!

## License
This project is licensed under the MIT License.