import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useStore } from "../store/useStore"

import "./RegistrationForm.css"

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    isChecked: false,
  })

  const [nameError, setNameError] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [mobileError, setMobileError] = useState("")
  const [checkBoxError, setCheckBoxError] = useState("")

  const navigate = useNavigate()
  const setUser = useStore((state) => state.setUser)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let isValid = true

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const mobileRegex = /^\d{10}$/
    const usernameRegex = /^[a-zA-Z0-9]+$/
    const nameRegex = /^[A-Za-z\s]+$/

    if (formData.name.trim() === "") {
      setNameError("Field is required")
      isValid = false
    } else if (!nameRegex.test(formData.name.trim())) {
      setNameError("Only alphabets are allowed")
      isValid = false
    } else {
      setNameError("")
    }

    if (formData.username.trim() === "") {
      setUsernameError("Field is required")
      isValid = false
    } else if (!usernameRegex.test(formData.username.trim())) {
      setUsernameError("Only letters and numbers are allowed")
      isValid = false
    } else {
      setUsernameError("")
    }

    if (formData.email.trim() === "") {
      setEmailError("Field is required")
      isValid = false
    } else if (!emailRegex.test(formData.email.trim())) {
      setEmailError("Enter a valid email")
      isValid = false
    } else {
      setEmailError("")
    }

    if (formData.mobile.trim() === "") {
      setMobileError("Field is required")
      isValid = false
    } else if (!mobileRegex.test(formData.mobile.trim())) {
      setMobileError("Enter a valid 10-digit mobile number")
      isValid = false
    } else {
      setMobileError("")
    }

    if (!formData.isChecked) {
      setCheckBoxError("Check this box if you want to proceed")
      isValid = false
    } else {
      setCheckBoxError("")
    }

    if (isValid) {
      setUser({
        name: formData.name.trim(),
        username: formData.username.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
      })
      navigate("/categories")
    }
  }

  return (
    <div className="registration-form">
      <h1 className="logo">Super app</h1>

      <p className="subtitle">Create your new account</p>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {nameError && <p className="error-msg">{nameError}</p>}

        <input
          className="form-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="UserName"
        />
        {usernameError && <p className="error-msg">{usernameError}</p>}

        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {emailError && <p className="error-msg">{emailError}</p>}

        <input
          className="form-input"
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile"
        />
        {mobileError && <p className="error-msg">{mobileError}</p>}

        <div className="checkbox-container">
          <input
            id="share"
            type="checkbox"
            name="isChecked"
            checked={formData.isChecked}
            onChange={handleChange}
          />
          <label htmlFor="share" className="checkbox-label">
            Share my registration data with Superapp
          </label>
        </div>
        {checkBoxError && <p className="error-msg">{checkBoxError}</p>}

        <button className="signup-btn" type="submit">
          SIGN UP
        </button>

        <p className="terms-text">
          By clicking on Sign up, you agree to Superapp{" "}
          <span className="highlight">Terms and Conditions of Use</span>
        </p>

        <p className="terms-text">
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span className="highlight">Privacy Policy</span>
        </p>
      </form>
    </div>
  )
}

export default RegistrationForm
