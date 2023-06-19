const express = require('express');
const EmployeeCtrl = require('../controllers/employee-ctrl');

const router = express.Router();

router.post('/', EmployeeCtrl.createEmployee);
router.put('/:id', EmployeeCtrl.updateEmployee);
router.delete('/:id', EmployeeCtrl.deleteEmployee);
router.get('/:id', EmployeeCtrl.getEmployeeById);
router.get('/', EmployeeCtrl.getEmployee);

module.exports = router;
