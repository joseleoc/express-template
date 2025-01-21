import { Router } from "express";
import { example } from "./example.controller";
import { validateData } from '../../middlewares/validationMiddleware';
import { exampleSchema } from "./example.dto";

export const ExampleRoutes = Router();


/**
   * @swagger
   * /example:
   *  get:
   *    description: Welcome to swagger-jsdoc!
   *    responses:
   *      200:
   *        description: Returns a mysterious string.    
   * 
   * 
   *  components:
   *    schemas:
   *      User:
   *        type: object
   *        required:
   *          - name
   *          - email
   *        properties:
   *          name:
   *            type: string
   *          email:
   *            type: string
   *            format: email
   *            description: Email for the user, needs to be unique.
   *        example:
   *           name: Alexander
   *           email: fake@email.com
   */
ExampleRoutes.get("/", example);


/** 
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - name
 *        - email
 *      properties:
 *        name:
 *          type: string
 *        email:
 *          type: string
 *          format: email
 *          description: Email for the user, needs to be unique.
 *      example:
 *         name: Alexander
 *         email: fake@email.com
 *
 * /example:
 *  post:
 *    description: Welcome to swagger-jsdoc!
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: Returns a mysterious string.
 */
ExampleRoutes.post("/", validateData(exampleSchema), example);