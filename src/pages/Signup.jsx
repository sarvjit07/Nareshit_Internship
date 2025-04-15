import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input className="w-full px-4 py-2 border rounded" type="text" placeholder="Name" required />
        <input className="w-full px-4 py-2 border rounded" type="email" placeholder="Email" required />
        <input className="w-full px-4 py-2 border rounded" type="password" placeholder="Password" required />
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600" type="submit">
          Sign up
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        Already have an account?<a href="/" className="text-blue-500 hover:underline">Login</a>
      </p>
    </div>
  );
}

export default Signup;
