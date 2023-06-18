import { TypeAnimation } from "react-type-animation";
import "./Home.css";
const Home = () => {
  return (
    <div className="flex flex-col mt-[10%] lg:mt-[15%] w-full min-h-screen items-center text-dark-PrimaryText">
      <div>
        <img src="./mainImage.png" alt="" />
      </div>
      <div className=" text-center mt-5 font-secondary">
        <h4 className="text-xl">Hello, I am Anishur Rahman</h4>
        <h1>
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
            style={{ fontSize: "3em" }}
            repeat={Infinity}
          />
        </h1>

        <p className="mx-auto text-lg font-primary mt-3 text-dark-SecondaryText">
          Passionate and dedicated Front End Developer and MERN Stack enthusiast{" "}
          <br /> Lets bring your ideas to life together!
        </p>
      </div>
    </div>
  );
};

export default Home;
