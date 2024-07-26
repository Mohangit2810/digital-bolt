import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
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
      <div className="testimonial-section p-8 sm:p-24 md:flex md:flex-row-reverse md:gap-24 items-center justify-center">
        <div className="md:w-1/2 md:flex md:flex-col gap-4 items-start">
          <h3 className="mt-16 sm:mt-8 text-[30px] font-black md:text-[60px] md:leading-tight">
            What our Students say
          </h3>
          <p className="poppins leading-8 mt-4">
            All students get access to all the videos and also the source code
            of the projects. You will also have access to a private Discord
            channel where you can discuss your doubts.
          </p>
          <div className="mt-12 hidden md:flex items-center justify-end">
            <Button name="Learn More" colour="orange" icon={false} />
          </div>
        </div>
        <div className="testimonial-box relative mt-24 md:mt-4">
          <div className="mt-16 testimonial rounded-3xl shadow-lg md:shadow-2xl flex flex-col ">
            <div className="testimonial-text font-black bg-[#6F7DFB] rounded-3xl px-8 py-6 text-white font-black">
              <p>
                This is a great course. It helped me a lot.{" "}
                <br className="hidden md:block" /> Thank you :&#41;
              </p>
            </div>
            <div className="testimonial-data bg-white flex items-center justify-between px-8 py-0 rounded-b-3xl">
              <div>
                <p className="font-black">Jane Cooper</p>
                <p className="text-[14px]">Developer, Sony</p>
              </div>
              <img
                className="-translate-y-8"
                src="assets/test-2.png"
                alt="testimonanial"
              />
            </div>
          </div>
          <div className="mt-16 testimonial rounded-3xl shadow-lg md:shadow-2xl flex flex-col md:translate-x-8">
            <div className="testimonial-text font-black bg-[#DA722C] rounded-3xl px-8 py-6 text-white font-black">
              <p>Amazing Work! Well done!</p>
            </div>
            <div className="testimonial-data bg-white flex items-center justify-between px-8 py-0 rounded-b-3xl">
              <div>
                <p className="font-black">Jacob Jones</p>
                <p className="text-[14px]">Desinger, Facebook</p>
              </div>
              <img
                className="-translate-y-8"
                src="assets/test-1.png"
                alt="testimonanial"
              />
            </div>
          </div>
          <div className="absolute z-[-4] w-8 h-[110%] -translate-y-[24px] md:translate-y-0 bg-black rounded-3xl top-0 left-[20%]"></div>
        </div>

        <div className="mt-12 flex items-center justify-end md:hidden">
          <Button name="Learn More" colour="orange" icon={false} />
        </div>
      </div>
      <div className="courses-section sm:p-24">
        <h3 className="text-3xl text-center font-black py-16 sm:py-8 text-white">
          Our Courses
        </h3>
        <div className="flex flex-col md:flex-row gap-8 sm:gap-16 my-8 md:items-center md:justify-center">
          <div className="flex flex-col gap-4 bg-white rounded-3xl py-0 px-8 md:w-[520px]">
            <img
              className="sm:h-[260px] bg-cover md:w-[460px]"
              src="assets/course-1.png"
              alt="course 1"
            />
            <div className="flex items-center justify-between gap-12">
              <p className="font-black text-xl">Game Design Essentials</p>
              <p className="font-black align-middle whitespace-nowrap">
                <svg
                  className="w-4 h-4 inline mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clipRule="evenodd"
                  />
                </svg>
                8 HRS
              </p>
            </div>
            <div className="bg-black h-2 sm:mt-4 rounded-3xl"></div>
          </div>
          <div className="flex flex-col gap-4 bg-white rounded-3xl py-0 px-8 md:w-[520px]">
            <img
              className="sm:h-[260px] bg-cover md:w-[460px]"
              src="assets/course-2.png"
              alt="course 2"
            />
            <div className="flex items-center justify-between gap-12">
              <p className="font-black text-xl">
                Unity Game Engine Fundamentals
              </p>
              <p className="font-black align-middle whitespace-nowrap">
                <svg
                  className="w-4 h-4 inline mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clipRule="evenodd"
                  />
                </svg>
                8 HRS
              </p>
            </div>
            <div className="bg-black h-2 sm:mt-4 rounded-3xl"></div>
          </div>
        </div>
        <div className="py-12 sm:py-4 pr-8 flex items-center justify-end">
          <Button name="All Courses" colour="orange" icon={false} />
        </div>
      </div>

      <div className="app-section p-8 ">
        <div className="flex flex-col items-center justify-center gap-8 my-12">
          <h3 className="text-3xl font-black text-[#023047] md:text-4xl">
            Get our App
          </h3>
          <p className="poppins leading-8 text-center text-[#023047]">
            You can use our App for better experience
            <br className="sm:hidden" /> on smartphones
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="cursor-pointer flex items-center justify-between bg-black text-white gap-4 px-8 pr-28 sm:pr-12 py-3 w-full">
              <img src="assets/apple-store.png" alt="app store" />
              <p className="text-xl">App Store</p>
            </div>
            <div className="cursor-pointer flex items-center justify-between bg-black text-white gap-4 px-8 pr-28 sm:pr-12 py-3 w-full sm:whitespace-nowrap">
              <img src="assets/play-store.png" alt="play store" />
              <p className="text-xl">Google Play</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="poppins p-8 sm:p-24 bg-[#070917] text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 sm:gap-y-12">
          <div className="sm:self-start  flex flex-col items-center justify-center sm:items-start gap-6">
            <h4 className="text-[#DA722C] font-bold sm:self-start sm:-translate-x-3">
              Quick Links
            </h4>
            <ul className="flex flex-col items-center justify-center sm:items-start gap-4">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
          <div className="sm:self-start flex flex-col items-center justify-center sm:items-start gap-6 ">
            <h4 className="text-[#DA722C] font-bold sm:self-start sm:-translate-x-3">
              Course
            </h4>
            <ul className="flex flex-col items-center justify-center sm:items-start gap-4">
              <li className="cursor-pointer">Log In</li>
              <li className="cursor-pointer">Download</li>
              <li className="cursor-pointer">All Courses</li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-2 flex flex-col items-center justify-center sm:items-start gap-4">
            <h4 className="text-[#DA722C] font-bold sm:self-start sm:-translate-x-3">
              Contact Us
            </h4>
            <p className="cursor-pointer">contact@email.com</p>
            <div className="flex items-center justify-center gap-6">
              <svg
                className="h-8 w-8 cursor-pointer"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg>
              <svg
                className="h-8 w-8 cursor-pointer"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </div>
            <div className="w-full relative sm:bg-white flex flex-col items-center justify-center gap-4 sm:rounded-3xl">
              <input
                className="py-8 h-8 w-full rounded-xl px-8"
                type="email"
                placeholder="Enter your Email"
              />
              <button className="mx-auto text-center sm:absolute top-0 right-0 sm:top-[6px] sm:right-[6px] bg-[#023047] rounded-lg px-8 py-3">
                {" "}
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-[14px] my-8 md:my-0 md:mt-12 text-center sm:my-0 sm:mt-4 sm:text-start sm:sm:-translate-x-3">
          This website is developed by GTCoding © 2021
        </p>
      </footer>
    </div>
  );
}

export default App;
