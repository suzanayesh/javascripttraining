const Employee = require('../models/employee-model')

createEmployee = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a employee',
        })
    }

    const employee = new Employee(body)

    if (!employee) {
        return res.status(400).json({ success: false, error: err })
    }

    employee
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: employee.id,
                message: 'Employee created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Employee not created!',
            })
        })
}

updateEmployee = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Employee.findOne({ _id: req.params.id }, (err, employee) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Employee not found!',
            })
        }
        employee.id=body.id;
        employee.firstName = body.firstName
        employee.lastName = body.lastName
        employee.role = body.role
        employee
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: employee.id,
                    message: 'Employee updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Employee not updated!',
                })
            })
    })
}

deleteEmployee = async (req, res) => {
    await Employee.findOneAndDelete({ id: req.params.id }, (err, employee) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!employee) {
            return res
                .status(404)
                .json({ success: false, error: `Employee not found` })
        }

        return res.status(200).json({ success: true, data: employee })
    }).catch(err => console.log(err))
}

getEmployeeById = async (req, res) => {
    await Employee.findOne({ id: req.params.id }, (err, employee) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: employee })
    }).catch(err => console.log(err))
}

getEmployee = async (req, res) => {
    await Employee.find({}, (err, employee) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!employee.length) {
            return res
                .status(404)
                .json({ success: false, error: `Employee not found` })
        }
        return res.status(200).json({ success: true, data: employee })
    }).catch(err => console.log(err))
}

module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
    getEmployeeById,
}
