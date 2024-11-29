import express from "express"
import { controllerauth } from "./auth.Controllers"
const router = express.Router()

router.post("/signup", controllerauth.postsingup)
router.post("/login", controllerauth.postLogin)

export const authRouter = router