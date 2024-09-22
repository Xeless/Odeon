const Login = () => {
    return (
        <div className="flex justify-center items-center mt-96 bg-slate-500">
            <form>
                <label for="email" className="block text-gray-300">E-mail</label>
                <input 
                type="email"
                 id="email"
                  className="" 
                  placeholder="entre votre mail"
                />
                <label for="password" className="block text-white">Password</label>
                <input 
                type="password"
                id="password"
                className=""
                placeholder="entre votre password" 
                 />
            </form>

        </div>

    )
}

export default Login