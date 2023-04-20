import angga3 from "../assets/angga3.png"

function About(){
    return(
        <div id="about" className="px-16">
      <div
        className="container py-36 flex flex-col-reverse lg:flex-row items-center gap-20">
        <div className="my-auto flex flex-col gap-3" data-aos="fade-right">
          <h1 className="text-indigo-600 font-bold text-3xl">ABOUT ME</h1>
          <p className="">
            I am a student at Jember University in the Faculty of Computer Science, Informatics. I am interested in UI / UX Design and programming, like Web Development, Desktop Developmet and Mobile.
          </p>
          <h1 className="text-xl font-medium">
            My Skills
          </h1>
          <h2 className=" font-medium">HTML</h2>
          <div className="w-full bg-gray-300 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className=" font-medium">CSS</h2>
          <div className="w-full bg-gray-300 h-1.5 rounded-md">
            <div className="w-2/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className=" font-medium">UI/UX</h2>
          <div className="w-full bg-gray-300 h-1.5 rounded-md">
            <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className=" font-medium">Javascript</h2>
          <div className="w-full bg-gray-300 h-1.5 rounded-md">
            <div className="w-3/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className=" font-medium">ReactJS</h2>
          <div className="w-full bg-gray-300 h-1.5 rounded-md">
            <div className="w-2/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
        <div className="">
          < div className = "h-full rounded-full overflow-hidden " data-aos="zoom-out" >
            <img className="" src={angga3} alt="" />
          </div>
        </div>
      </div>
    </div>
    );
}

export default About