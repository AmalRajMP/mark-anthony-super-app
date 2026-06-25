import RegistrationForm from "../components/RegistrationForm"
import "./Register.css"

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-left">
        <h1>Discover new things on Superapp</h1>
      </div>

      <div className="register-right">
        <RegistrationForm />
      </div>
    </div>
  )
}

export default Register