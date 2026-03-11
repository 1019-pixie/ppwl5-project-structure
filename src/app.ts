import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { userRoutes } from "./routes/user.route";
import { join } from "path";

export const app = new Elysia()
  .use(
    staticPlugin({
      assets: join(import.meta.dir, "../public"),  // ← path absolut
      prefix: "/"
    })
  )
  .use(userRoutes);