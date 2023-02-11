import Input from "../Input";
import InputPassword from "../InputPassword";

const RigisterForm = () => {
  return (
    <form>
      <Input
        placeholder="Type your full name"
        label="Full Name"
        id="fullName"
      />
      <Input
        placeholder="Type your email"
        label="Email"
        id="email"
        type="email"
      />

      <Input
        placeholder="Type your phone number"
        label="Phone Number"
        id="phoneNumber"
      />

      <InputPassword
        placeholder="Type your password"
        label="Password"
        id="password"
      />

      <Input
        placeholder="Confirm your password"
        label="Confirm Password"
        id="confirmPassword"
        type="password"
      />

      <button>Register</button>
    </form>
  );
};

export default RigisterForm;
