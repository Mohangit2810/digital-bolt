import Button from "./Button";

function Testimonial() {
  return (
    <div className="testimonial-section p-8 sm:p-24 md:flex md:flex-row-reverse md:gap-24 items-center justify-center">
      <div className="md:w-1/2 md:flex md:flex-col gap-4 items-start">
        <h3 className="mt-16 sm:mt-8 text-[30px] font-black md:text-[60px] md:leading-tight">
          What our Students say
        </h3>
        <p className="poppins leading-8 mt-4">
          All students get access to all the videos and also the source code of
          the projects. You will also have access to a private Discord channel
          where you can discuss your doubts.
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
  );
}

export default Testimonial;
