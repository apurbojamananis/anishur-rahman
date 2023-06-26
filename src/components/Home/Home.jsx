import { TypeAnimation } from "react-type-animation";
import "./Home.css";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Home = () => {
  return (
    <div className="pt-[10%] lg:pt-[5%] xl:pt-[10%] 2xl:pt-[15%] w-full min-h-screen  text-dark-PrimaryText bg-dark-PrimaryBg ">
      <div className="flex flex-col items-center">
        <div>
          <img src="./mainImage.png" alt="" />
        </div>
        <div className=" text-center mt-5 font-secondary ">
          <h4 className="text-xl">Hello, I am Md. Anishur Rahman</h4>
          <h1 className="pt-3 uppercase z-0">
            <TypeAnimation
              sequence={[
                "Front End Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "Javascript Developer",
                1000,
              ]}
              speed={20}
              repeat={Infinity}
              style={{
                fontSize: "2em",
              }}
            />
          </h1>

          <p className="xl:w-[65%] 2xl:w-[60%] mx-auto text-lg font-primary mt-3 text-dark-SecondaryText">
            Passionate and dedicated Front End Developer and MERN Stack
            enthusiast. Seeking opportunities and challenges that will improve
            my skill set. <br /> Lets bring your ideas to life together!
          </p>
          <div className="flex gap-5 justify-center mt-8 text-2xl">
            <a href="https://www.facebook.com/ajanis21" target="blank">
              <FaFacebookF></FaFacebookF>
            </a>
            <a href="https://github.com/apurbojamananis" target="blank">
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/anishur-rahman/"
              target="blank"
            >
              {" "}
              <FaLinkedinIn></FaLinkedinIn>
            </a>{" "}
            <a href="https://www.instagram.com/apurbojamananis/" target="blank">
              <FaInstagram></FaInstagram>
            </a>
          </div>
          <div className="my-10">
            <a
              href="https://drive.google.com/u/0/uc?id=1DfmoRFiEvhyMVQAARameLGcaDUzmgOit&export=download"
              download
            >
              <button className="border border-[#F8F8F8] px-10 py-3 rounded-3xl hover:bg-dark-PrimaryText hover:text-dark-SecondaryBg">
                <span className="text-lg uppercase font-primary">
                  Download Resume
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
