import Input from "../Input";

const LoginForm = () => {
  return (
    <form>
      <Input placeholder="Type your email" label="Email" id="email" />
      <Input placeholder="Type your password" label="Password" id="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
