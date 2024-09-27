import { NavLink, useNavigate } from "react-router-dom";


const siderbar = () => {
    return (
        <div className="flex">
        <nav className="bg-white h-screen w-72 p-4 ">
       <ul className="flex-col justify-between text-center mt-24">
        <li className="cursor-pointer mb-5 bg-red-400 p-2 rounded-lg">
        <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </NavLink>
        </li>
        <li className="cursor-pointer">
            <p>Dark Mode</p>
        </li>
        </ul>    
        </nav>     

    </div>

    )
}

export default siderbar