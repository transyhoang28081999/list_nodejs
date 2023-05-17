import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getAllEmployees()
  }, [])

  const getAllEmployees = async () => {
    let res = await EmployeeService.getAllEmployees()
    setEmployees(res.data.data)
  }

  const handleDeleteEmployee = async (id) => {
    await EmployeeService.deleteEmployee(id)
    getAllEmployees()
  }

  return (
    <>
      <div className="container">
        <h2 className="text-center"> List Employees </h2>
        <Link to='/add' className="btn btn-info _add">Add</Link>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(employee =>
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>
                    <Link to={`/${employee.id}`} className="btn btn-success _button">Update</Link>
                    <button className="btn btn-danger _button" onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Employees