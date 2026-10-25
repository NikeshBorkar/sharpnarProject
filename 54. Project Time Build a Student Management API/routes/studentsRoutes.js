const express=require("express");
const studentController = require("../controller/studentController");
const router=express.Router();

router.post("/",studentController.addEntries);
router.get("/",studentController.fetchAllStudents);
router.get("/:id",studentController.getStudentWithId);
router.put("/:id",studentController.updateEntry);
router.delete("/:id",studentController.deleteEntry);

module.exports=router