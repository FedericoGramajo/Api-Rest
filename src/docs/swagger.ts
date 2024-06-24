import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "Documentacion ApiRest - Federico Gramajo",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000",
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            auth: {
                type: "object",
                required: ["name", "password", "email"],
                properties: {
                    id: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                    },
                    password: {
                        type: "string",
                    },
                }
            },
            user: {
                type: "object",
                required: ["name", "password", "email"],
                properties: {
                    id: {
                        type: "string",
                    },
                    name: {
                        type: "string",
                    },
                    password: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                }
            },
            project: {
                type: "object",
                required: ["title", "description", "status", "dueDate"],
                properties: {
                    id: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    status: {
                        type: "number",
                    },
                    dueDate: {
                        type: "date",
                    },
                    task: {
                        type: "mongoose.Schema.Types.ObjectId",
                        ref: "task",
                    },
                    user: {
                        type: "mongoose.Schema.Types.ObjectId",
                        ref: "user",
                    },
                }
            },
            task: {
                id: {
                    type: "string",
                },
                type: "object",
                required: ["title", "description", "status", "dueDate"],
                properties: {
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    status: {
                        type: "number",
                    },
                    dueDate: {
                        type: "date",
                    },
                    user: {
                        type: "mongoose.Schema.Types.ObjectId",
                        ref: "user",
                    },
                }
            },
        },
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/routes/*.ts"],
}

export default swaggerJSDoc(swaggerOptions);