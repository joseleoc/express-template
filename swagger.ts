import swaggerJSDoc from "swagger-jsdoc";


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'IDI Media API',
        version: '1.0.0',
        description: '',
    },
};

const options = {
    swaggerDefinition,
    apis: ['./src/modules/**/*.route.js', './src/modules/**/*.route.ts'], // files containing annotations as above
};

const swaggerConfig = swaggerJSDoc(options);

export default swaggerConfig;