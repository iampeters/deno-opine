import { opine, json } from "https://deno.land/x/opine@main/mod.ts";
import BaseRoute from './src/routes/index.ts';
import client from './db/db.ts';
import { swaggerDoc } from "https://deno.land/x/deno_swagger_doc@ce744e/mod.ts";
// import {options} from './src/swagger/swagger.ts';

// const db = client.database("deno");
/**
 * Create our swagger definition object.
 */
const swaggerDefinition = {
  info: {
    title: "My Deno API", // Title (required)
    version: "1.0.0", // Version (required)
    description:
      "A basic example of how to integrate the deno-swagger-doc module with Opine.", // Description (optional)
  },
  host: `localhost:3000`, // Host (optional)
  basePath: "/", // Base path (optional)
};

const options = {
  swaggerDefinition,
  /**
   * Path to the API docs.
   * 
   * Note that this path is relative to the directory from
   * which the `deno run` command is executed, not the application itself. If
   * you make this mistake you will likely see a "file not found" error.
   */
  apis: [
    "./examples/swagger/index.ts",
    "./examples/swagger/controllers/v1.ts",
  ],
};


/**
 * Initialize swagger-jsdoc -> returns validated swagger spec in json format.
 */
const swaggerSpec = swaggerDoc(options);

const app = opine();

app.use(json());
app.use('/api', BaseRoute);
// app.use('/', swaggerSpec);

/**
 * Serve the swagger on the `/swagger` endpoint.
 */
app.get("/swagger", function (req, res) {
  res.json(swaggerSpec);
});


// app.get("/", function(req, res) {
//   res.json({message: 'Hello world from Deno'});
// });

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
