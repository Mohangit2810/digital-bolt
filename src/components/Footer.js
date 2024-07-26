function Footer() {
  return (
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
  );
}

export default Footer;
