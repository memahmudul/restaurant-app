import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config"
import LOGO from "../images/logo.png";
import AVATAR from "../images/avatar.png"
import { FaShoppingCart } from "react-icons/fa";
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async()=>{
    const response = await signInWithPopup(firebaseAuth,provider);
    console.log(response);

  }
  return (
    <header className='fixed z-50 w-screen bg-slate-300 p-6 px-16'>

    {/*desktop and tablet */}
    <div className='hidden md:flex items-center w-full h-full'>
    <Link to="/" className="flex items-center gap-2">
    <img src={LOGO} alt="" className='w-10 object-cover' />
    <p className='text-textColor text-xl font-bold'>City</p>

    </Link>
    <ul className='flex items-center gap-8 ml-auto'>
      <li className='text-base text-textColor transition-all duration-100 ease-in-out cursor-pointer'>Home</li>
      <li className='text-base text-textColor transition-all duration-100 ease-in-out cursor-pointer'>Menu</li>
      <li className='text-base text-textColor transition-all duration-100 ease-in-out cursor-pointer'>About Us</li>
      <li className='text-base text-textColor transition-all duration-100 ease-in-out cursor-pointer'>Services</li>
    </ul>
    <div className="relative ml-8">
    <FaShoppingCart className='text-2xl text-textColor cursor-pointer'/>
    <p className='absolute -top-4 left-3 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center'>10</p>

    </div>
    <motion.img whileTap={{scale:0.6}} src={AVATAR} alt="" onClick={login} className='w-10 ml-8 cursor-pointer drop-shadow-md'/>

    </div>
    {/*mobile */}
    <div className='flex md:hidden w-full h-full'>gfg</div>
    <div></div>
    </header>
  )
}

export default Header