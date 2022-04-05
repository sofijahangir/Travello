const express = require('express');

const router = express.Router();
const campController = require('../controllers/camp_controllers');

router.post('/accept_camp', campController.accept_a_camp);

router.get('/get_all_camps', campController.get_all_camps);

router.post('/reject_camp', campController.reject_a_camp);

router.get('/get_accepted_camps', campController.get_accepted_camps);

router.get('/get_rejected_camps', campController.get_rejected_camps);

router.get('/get_pending_camps', campController.get_pending_camps);

module.exports = router;
