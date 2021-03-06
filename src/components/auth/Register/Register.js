import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { register } from '../../../services/auth-service'
import { isEmail, equals, isLength } from '../../../validators'
import { isGuest } from '../../../hoc/isGuest'
import { login } from '../../../redux/slices/authSlice'

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [doShowPassword, setDoShowPassword] = useState(false)

    const checkboxChange = () => [
        setDoShowPassword(!doShowPassword)
    ]

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        } else {
            register(form).then(x => {
                localStorage.setItem('token', x._id)
                localStorage.setItem('username', x.username)
                dispatch(login())
                navigate('/')
            }).catch(e => {
                alert(e.message)
            })
        }
    }

    const findFormErrors = () => {
        // eslint-disable-next-line
        const { email, username, password, confirmPassword } = form
        const newErrors = {}

        if (!isEmail(email)) {
            newErrors.email = 'Email is invalid!'
        }
        if (!isLength(password, 6)) {
            newErrors.password = 'Password must be at least 6 characters!'
        }
        if (!equals(password, confirmPassword)) {
            newErrors.confirmPassword = 'Passwords do not match!'
        }

        return newErrors
    }

    return (
        <div>
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
            <Form style={{ width: '300px' }} onSubmit={handleSubmit} role="form">
                <Form.Group>
                    <Form.Label>Username*</Form.Label>
                    <Form.Control data-testid="input-2" type="text" onChange={e => setField('username', e.target.value)} isInvalid={!!errors.username} />
                    <Form.Control.Feedback type='invalid' data-testid="invalid-2">
                        {errors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{ marginTop: "5%" }}>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" data-testid="input-1" onChange={e => setField('email', e.target.value)} isInvalid={!!errors.email} />
                    <Form.Control.Feedback type='invalid' data-testid="invalid-1">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{ marginTop: "5%" }}>
                    <Form.Label>Password* / <Form.Check style={{ marginTop: "5%" }} label="Show password" data-testid="checkbox-1" onChange={checkboxChange}></Form.Check></Form.Label>
                    <Form.Control data-testid="input-3" role="input" type={doShowPassword ? 'text' : 'password'} autoComplete="" onChange={e => setField('password', e.target.value)} isInvalid={!!errors.password} />
                    <Form.Control.Feedback type='invalid' data-testid="invalid-3">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{ marginTop: "5%" }}>
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control type="password" role="confirm-pass" autoComplete="" onChange={e => setField('confirmPassword', e.target.value)} isInvalid={!!errors.confirmPassword} />
                    <Form.Control.Feedback type='invalid' role="invalid-confirm">
                        {errors.confirmPassword}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="success" style={{ marginTop: "5%" }}>Register</Button>
            </Form>
        </div>
    )
}

export default isGuest(Signup)