// import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import logger from "@utils/logger";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import swaggerConfig from "../swagger";

// Import middlewares
import { rateLimiter } from "@middlewares/rateLimiter";
import { ExampleRoutes } from "@modules/example/example.route";

// Import routes

// Create an Express app
export const app = express();
app.disable('x-powered-by');

// Express configuration
app.set("port", process.env.PORT || 3000);

// Load environment variables from .env file
dotenv.config();

// Use JSON parser for incoming requests
app.use(bodyParser.json());

// Rate limiter
app.use(rateLimiter);


// Use CORS middleware
// const corsOptions = {
//     origin: 'https://www.domain.com/',
//     optionsSuccessStatus: 200,
// };
// app.use(cors());

// Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));


// Logger
const morganFormat = ":method :url :status :response-time ms";
app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                const logObject = {
                    method: message.split(" ")[0],
                    url: message.split(" ")[1],
                    status: message.split(" ")[2],
                    responseTime: message.split(" ")[3],
                };
                logger.info(JSON.stringify(logObject));
            },
        },
    })
);



// Routes
app.use("/example", ExampleRoutes);
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world!" });
});