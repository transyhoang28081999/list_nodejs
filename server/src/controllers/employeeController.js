import pool from '../configs/connectDB'

// get all employees
const getAllEmployees = async (req, res) => {
    const [rows] = await pool.query('select * from employees')

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

// get single employees
const getSingleEmployee = async (req, res) => {
    const id = req.params.id

    const [rows] = await pool.query('select * from employees where id = ?', [id])
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

// create a new employee
const createEmployee = async (req, res) => {
    const { name, email, address } = req.body

    await pool.query('insert into employees(name, email, address) values (?, ?, ?)', [name, email, address])
    return res.status(201).json({
        message: 'created'
    })
}

// update employee
const updateEmployee = async (req, res) => {
    const id = req.params.id
    const { name, email, address } = req.body

    await pool.query('update employees set name=?, email=?, address=? where id =?', [name, email, address, id])

    return res.status(200).json({
        message: 'ok'
    })
}

// delete an employees
const deleteEmployee = async (req, res) => {
    const id = req.params.id
    await pool.query('delete from employees where id = ?', [id])
    return res.status(204).json({
        message: 'no content'
    })
}

module.exports = {
    getAllEmployees,
    getSingleEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}