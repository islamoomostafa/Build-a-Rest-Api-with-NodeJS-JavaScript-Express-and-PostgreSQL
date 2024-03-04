import { Router } from "express";
import controller from "./controller.js";
const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentsById);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.deleteStudent);
export default router;
