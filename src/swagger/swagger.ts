export const options = {
  "swaggerDefinition": {
    "openapi": "3.0.0",
    "info": {
      "title": "iChat API",
      "description": "iChat API",
      "version": "1.0.0",
      "contact": {
        "name": "Peters Chikezie",
        "url": "https: //iampeters.github.io",
        "email": "chikeziepeters@gmail.com"
      },
      "explorer": true,
      "host": [
        "http://localhost:3000/"
      ]
    },
    "schemes": [
      "http"
    ],
    "servers": [
      {
        "url": "http://localhost:3000/",
        "description": "Test Environment"
      }
    ],
    "components": {
      "content": "application / json",
      "securitySchemes": {
        "bearerAuth": {
          "type": "http",
          "scheme": "bearer",
          "bearerFormat": "JWT"
        }
      }
    },
    "security": [
      {
        "bearerAuth": []
      }
    ]
  },
  "apis": [
    "./src/routes/**/*.ts",
    "./src/swagger/models/*.ts"
  ]
}
