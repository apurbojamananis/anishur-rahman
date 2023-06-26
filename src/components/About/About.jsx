const About = () => {
  return (
    <div className="pt-[10%] lg:pt-[5%] xl:pt-[10%] 2xl:pt-[15%] w-full min-h-screen  text-dark-PrimaryText bg-dark-thirdBg ">
      <div className="flex px-5">
        <div className="w-[50%]">
          <h2>Know Me More</h2>
          <h4>Hi, I am Anishur Rahman</h4>
          <p>
            My name is MD Anishur Rahman, and I am a MERN Stack Developer with
            over 1 Years of learning experience. I have acquired a diverse skill
            set, including proficiency in React.js, HTML5, CSS3, Bootstrap,
            Tailwind, JavaScript, Express.js, Node.js, and MongoDB. I am also
            knowledgeable about authentication using Google Firebase and
            proficient in utilizing various development tools.
          </p>
          <h4>What is my skill level?</h4>
          <p>Here are skills which are Experts, Comfortable and familiar</p>
          <div className="flex flex-col "></div>
        </div>
        <div className=" w-[50%] relative pb-[300px]">
          <div className="flex justify-end">
            <img src="./Anishur_Rahman_SideBar.png" alt="" className="" />
          </div>
          <div className="min-w-[389px] bg-dark-SecondaryBg px-5 py-10 rounded-lg absolute top-[40%]">
            <div>
              <h4 className="text-dark-SecondaryText">Name</h4>
              <h3 className="text-lg font-semibold mt-2 border-b border-dashed pb-2 ">
                Md. Anishur Rahman
              </h3>
            </div>
            <div className="mt-3">
              <h4 className="text-dark-SecondaryText">Education</h4>
              <h3 className="text-lg font-semibold mt-2 border-b border-dashed pb-2 ">
                University of South Asia
              </h3>
            </div>
            <div className="mt-3">
              <h4 className="text-dark-SecondaryText">mail</h4>
              <h3 className="text-lg font-semibold mt-2 border-b border-dashed pb-2 ">
                apurbojaman.anis@gmail.com
              </h3>
            </div>
            <div className="mt-3">
              <h4 className="text-dark-SecondaryText">Address</h4>
              <h3 className="text-lg font-semibold mt-2 border-b border-dashed pb-2 ">
                Gulshan-1, Dhaka, Bangladesh
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
