import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
    <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-lg">
    Login
  </h2>      <form onSubmit={handleLogin} className="space-y-4">
        <input className="w-full px-4 py-2 border rounded" type="email" placeholder="Email" required />
        <input className="w-full px-4 py-2 border rounded" type="password" placeholder="Password" required />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit">
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        Don't have an account?<a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
