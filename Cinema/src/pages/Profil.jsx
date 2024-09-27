const profil = () => {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-white mb-4">Edit Profile</h1>
            
            <form className="">

                <div className="rounded-full flex justify-center mb-6 cursor-pointer">
                    <div className="absolute bottom-96 ms-16">
                        <img src="../../public/uploads/icon-edit-photo.svg" alt="" />
                    </div>
                    <img src="../../public/uploads/defaultUser.svg" alt="" width="120" height="120" />
                </div>

                <label htmlFor="email" className="block mb-4 text-white">Name</label>
                <input type="email" id="email" name="email" className="p-2 rounded-md w-full mb-3" placeholder="Dupont" required />

            <label htmlFor="email" className="block mb-4 text-white">E-mail</label>
            <input type="email" id="email" name="email" className="p-2 rounded-md w-full mb-3" placeholder="username@gmail.com" required />

            <label htmlFor="password" className="block mb-4 text-white">Password</label>
            <input type="password" id="password" name="password" className="p-2 rounded-md w-full mb-3" placeholder="Password" required />

            </form>

        </div>



    )

}

export default profil