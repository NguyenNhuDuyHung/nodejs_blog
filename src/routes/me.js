const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get('/stored/courses', meController.storedCourses);
router.post('/trash/handle-form-actions', meController.handleFormActions);
router.get('/trash/courses', meController.trashCourses);


module.exports = router;
