import Button from "./Button";
import Header from "./Header";

function Hero() {
  return (
    <div className="hero-section h-screen relative overflow-hidden">
      <Header />
      <div className="hero-description text-white p-8 sm:p-24 md:p-32 flex flex-col gap-8 md:w-[860px]">
        <h2 className="font-black text-3xl sm:text-4xl text-white">
          Learn the art of <br /> Game Dev
        </h2>
        <p className="leading-8">
          This is a comprehensive course on Game Development.{" "}
          <br className=" hidden md:block" /> You will learn everything from
          generating an idea <br className=" hidden md:block" /> to publishing
          your games to different platforms.
        </p>

        <Button name="Enroll Now" colour="orange" icon={true}></Button>
      </div>
      <img
        className="hero-extras hero-image absolute bottom-0 -right-[70px] sm:right-[0] md:right-[5%] h-[43%] w-[72%] sm:w-[35%] sm:h-[45%] md:w-[30%] md:h-[83%]"
        src="/assets/hero-image.png"
        alt="pic of a college student"
      />
      <div className="hero-extras achievements flex flex-col items-center justify-center text-black bg-white  rounded-3xl px-[32px] py-[14px] sm:py-[10px] absolute bottom-[20%] left-[8%] sm:left-[43%] md:left-[50%] md:bottom-[35%]">
        <p className="text-3xl font-bold">32K</p>
        <p className="text-[14px] text-center">Students Enrolled</p>
      </div>
      <div className="hero-extras achievements flex flex-col items-center justify-center text-black bg-white  rounded-3xl px-[32px] py-[14px] sm:py-[10px] absolute bottom-[6%] left-[8%] sm:left-[43%] sm:bottom-[2%] md:left-[45%] md:bottom-[18%]">
        <p className="text-3xl font-bold">4.7⭐</p>
        <p className="text-[14px] text-center">Overall Rating</p>
      </div>
    </div>
  );
}

export default Hero;
