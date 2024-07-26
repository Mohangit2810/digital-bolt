import Button from "./Button";
function Courses() {
  return (
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
            <p className="font-black text-xl">Unity Game Engine Fundamentals</p>
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
  );
}

export default Courses;
