import { Router } from "express";

import { getUser } from "../models/User";
const user = Router();

user.get("/user/:id", getUser)

export default user; 