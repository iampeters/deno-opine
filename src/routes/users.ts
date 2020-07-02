import { Router } from "https://deno.land/x/opine@main/mod.ts";
const router = Router();

router.get('/all', async (req, res, next) => {
  res.json({ route: 'users', message: 'Hello world' })
})

export default router;