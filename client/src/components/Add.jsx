/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import EmployeeService from '../services/EmployeeService'
import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'

const Add = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  const saveOrUpdateEmployee = async (e) => {
    e.preventDefault()

    const employee = { name, email, address }
    if (id === 'add') await EmployeeService.createEmployee(employee)
    else await EmployeeService.updateEmployee(id, employee)
    navigate('/')
  }

  useEffect(() => {
    getEmployeeById()
  }, [])
  const getEmployeeById = async () => {
    if (id === 'add' || !id) return
    let res = await EmployeeService.getSingleEmployee(id)

    setName(res.data.data[0].name)
    setEmail(res.data.data[0].email)
    setAddress(res.data.data[0].address)
  }
  return (
    <>
      <br /><br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">
              {
                id === 'add'
                  ?
                  <>Add Employee</>
                  :
                  <>Update Employee</>
              }
            </h2>

            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Name: </label>
                  <input
                    type="text"
                    placeholder='Enter name'
                    className="form-control"
                    value={name || ''}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email: </label>
                  <input
                    type="email"
                    placeholder='Enter email'
                    className="form-control"
                    value={email || ''}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Address: </label>
                  <input
                    type="text"
                    placeholder='Enter address'
                    className="form-control"
                    value={address || ''}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                <Link to="/" className='btn btn-warning _button'>Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add