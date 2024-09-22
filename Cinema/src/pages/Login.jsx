import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: (response) => {
      console.log(response);
    },
    onFailure: (error) => {
      console.error(error);
    },
  });

  return (
    <GoogleOAuthProvider clientId='YOUR_CLIENT_ID'>
      <div
        className="min-h-screen flex flex-col justify-center items-center bg-slate-500"
        style={{
          backgroundImage: 'url("https://ds.static.rtbf.be/article/image/770x433/1/9/0/6e0917469214d8fbd8c517dcdc6b8dcf-1630402493.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <form className="bg-opacity-10 backdrop-blur-lg p-8 rounded-xl border bg-purple-900 max-w-sm w-full">
          <h1 className="text-white text-3xl font-bold text-center mb-6">Login</h1>

          <label htmlFor="email" className="block mb-2 text-white">E-mail</label>
          <input type="email" id="email" className="p-2 rounded-md w-full mb-4" placeholder="username@gmail.com" />

          <label htmlFor="password" className="block mb-2 text-white">Password</label>
          <input type="password" id="password" className="p-2 rounded-md w-full mb-6" placeholder="Password" />

          <button className="text-white p-3 rounded-md w-full bg-purple-700">Sign In</button>

          <span className="flex text-white font-bold justify-center mt-5">ou continue avec</span>

          <div className="flex gap-4 justify-center mt-5">
            <button 
              className="w-36 flex justify-center p-3 bg-white rounded-lg"
              onClick={login}
            >
              <img src="../../public/uploads/google.svg" alt="Google" />
            </button>
            <button className="w-36 flex justify-center p-3 bg-white rounded-lg">
              <img src="../../public/uploads/facebook.svg" alt="Facebook" />
            </button>
          </div>
        </form>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
