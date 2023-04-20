import React from "react";
import angga from "../assets/angga2.png";
import pdfku from '../assets/pdf/CV_ANGGA.pdf';
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
import { Cursor } from 'react-simple-typewriter';

function Hero() {

    return (
        <div id="hero" className="px-10">
        < div className = "relative overflow-hidden container px-28 py-80 lg:py-80 flex flex-col-reverse lg:flex-row items-center gap-20" >
            
            <div className="lg:flex flex-col gap-5 absolute rounded-md shadow-lg top-3 m-auto right-0 bg-stone-100 p-6 h-fit lg:w-1/4 lg:right-2/4 lg:top-0 lg:bottom-0 lg:left-0 lg:h-fit">
                <motion.div
                variants={fadeIn('out', 0.3)} 
                initial="hidden" 
                whileInView={'show'}
                viewport={{ once: true }}x>

                < h1 className = "text-2xl font-bold text-black" >ANGGA DWI <span className="text-yellow-500">KURNIAWAN </span></h1 >
                <span className={{fontWeight : "bold", color: 'black'}}>
                    Hi everyone👋. Welcome to my portfolio website. I use programming language like Python, C#, PHP, JS.<span className="text-yellow-500 ">
                        < Cursor / >
                    </span>
                        
                </span>
                <div className="">
                    <span className="text-yellow-500 ">
                        
                    </span>
                </div>
                <div className="py-2">

                    <a href={pdfku}>
                    < button className = "bg-indigo-600 text-white text-l px-3 py-2 rounded-md font-semibold w-fit mr-1" >
                            Download CV
                    </button>
                    </a>
                    < a href = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnHwDjqxmddCFRKxMMhjpdLgQpMQxnlZcxRHfnKxzWwLnfSdXfdsqMMNRxTDVfrZsLHgV" >
                    < button className = "outline decoration-indigo-600 text-indigo-600 text-l px-3 py-2 rounded-md font-semibold w-fit ml-1" >
                            Contact Me
                    </button>
                    </a>
                </div>
            </motion.div>
        </div>

        <motion.div
            variants={fadeIn('out', 0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{ once: true }}
            >
        <div className="items-center justify-between flex lg:flex flex-col gap-2 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-2 bg-yellow-500 p-2 h-fit">
                <div className="">
                    < a href = "https://github.com/Angga2k"
                    className = "hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
                <div className="">
                    <a href = "https://www.linkedin.com/in/angga-dwi-kurniawan-19b51426a/"
                    className = "hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>
                <div className="">
                    < a href = "https://www.instagram.com/a.nggadwk_/"
                    className = "hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    
                    </a>
                </div>
                <div className="">
                    < a href = "https://www.facebook.com/angga.d.kurniawan.14"
                    className = "hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    
                    </a>
                </div>
            </div>
            </motion.div>
            < img className = "absolute bottom-0 right-auto lg:left-0 mx-auto h-3/4 pt-8 object-cover lg:h-5/6 lg:right-0"
            src = {angga}
            alt = ""/ >
            <div
                className = "lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-72 h-96 bg-[#ffff00] rounded-full -z-20 lg:w-big lg:h-big"
            ></div>
        
           </div>
        </div>
        
    );
}
export default Hero;