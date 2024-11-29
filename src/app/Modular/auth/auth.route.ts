import express from "express"
import { controllerauth } from "./auth.Controllers"
const router = express.Router()

router.post("/signup", controllerauth.postsingup)

export const authRouter = router