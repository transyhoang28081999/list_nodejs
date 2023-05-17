import express from 'express'
import employeeController from '../controllers/employeeController'

let router = express.Router()

const initApiRoute = (app) => {
    router.get('/', employeeController.getAllEmployees)
    router.get('/:id', employeeController.getSingleEmployee)
    router.post('/', employeeController.createEmployee)
    router.put('/:id', employeeController.updateEmployee)
    router.delete('/:id', employeeController.deleteEmployee)

    return app.use('/api/v1/employees', router)
}

export default initApiRoute