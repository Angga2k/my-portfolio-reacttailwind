import project1 from '../assets/project1.png'
import project2 from '../assets/Picture2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Project(){
    useEffect(() => {
      AOS.init({
        duration: 2000
      })
    }, []);
    return(
        <div
        className="container py-28 px-16 flex-col-reverse lg:flex-row items-center gap-20" id='project' data-aos="fade-up">
        <div className="my-auto flex flex-col gap-3" >
          <h1 className="text-indigo-600 font-bold text-3xl">PROJECT</h1>
          <p className="">
            Since the beginning of my journey as a student at the University of Jember, who is interested in design and programming. Here are some of the results I learned.
          </p>
          </div>
          <div className="flex flex-col gap-10 py-5 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt=''
                layout="responsive"
                src={project1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt = ''
                layout="responsive"
                src={project2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt = ''
                layout="responsive"
                src={project3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt = ''
                layout="responsive"
                src={project4}
              />
            </div>
          </div>
          </div>
    );
}
export default Project;