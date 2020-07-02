import { Router } from "https://deno.land/x/opine@main/mod.ts";
import User from './users.ts'
const BaseRoute = Router();

BaseRoute.use('/users', User);

export default BaseRoute;