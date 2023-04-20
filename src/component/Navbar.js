import React, {useState} from 'react';
import logo from "../assets/logo.png";
import { useScrollPosition } from '../assets/hooks/useScrollPosition';
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll';


function classNames(...classes){
    return classes.filter(Boolean).join(' ');
}


function Navbar(){
    
    let [open, setOpen] = useState(false);
    const handleClick = () => {
          setOpen(!open);
      }
    const scrollPosition = useScrollPosition();
    return(
        <nav className = {classNames(scrollPosition > 0 ? 'shadow' : 'shadow-none', 'transition-shadow px-16 sticky top-0 z-10 backdrop-blur bg-white/5')} >
            <div className="container mx-auto py-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-8" src={logo} alt="" />
                    <span className="text-2xl font-bold text-yellow-500"
                    >ANGGA2K.</span>
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
                    < button className = "menu-btn px-2"
                    onClick = {
                        handleClick
                    } >
                        {open ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                </div>
                    <ul className = {
                    `md:flex md:items-center md:pb-0 md:pt-0 pb-5 pt-5 absolute bg-white lg:bg-transparent md:static  top-0 md:z-auto z-10 left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`
                    } >
                        <li className='px-10 py-2 lg:px-2'>
                            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='text-gray-800 hover:text-violet-950 duration-500 font-bold'>Home</Link>
                        </li>
                        < li className = 'px-10 py-2 lg:px-2' >
                            <Link to="about" spy={true} smooth={true} offset={0} duration={500} className='text-gray-800 hover:text-violet-950 duration-500 font-bold'>About Me</Link>
                        </li>
                        < li className = 'px-10 py-2 lg:px-2'  >
                            <Link to="project" spy={true} smooth={true} offset={0} duration={500} className='text-gray-800 hover:text-violet-950 duration-500 font-bold'>Project</Link>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar