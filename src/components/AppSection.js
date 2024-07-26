function AppSection() {
  return (
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
  );
}

export default AppSection;
