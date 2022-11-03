// Images Are not uploaded due to security policy . You can try with your own images. Just make a directory named "img" under src and put images there and update your images path below
import Generation_Landing from "../../img/generation_home.png";
import DownloadApp from "../../img/download.png";

import Typewriter from "typewriter-effect";

const UpperSide = () => {
  return (
    <div className="lg:h-screen bg-background ">
      <div className="grid lg:grid-cols-2 container mx-auto px-4">
        {/* Upper Left Section   */}
        <div className="mt-5 md:mt-10 lg:my-auto 2xl:mt-96 max-w-lg mx-auto lg:mr-0 ">
          <h1 className="text-3xl text-center lg:text-left md:text-5xl lg:text-6xl 2xl:text-9xl font-bold content-center">
            <span
              className="outline-heading hidden lg:block"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Introducing
            </span>{" "}
            <span
              className="app-name-heading"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              Generation
            </span>
          </h1>
          <p
            className="mt-5 2xl:mt-10 text-lg 2xl:text-4xl text-center lg:text-left"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="1600"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1600)
                  .typeString(
                    `A Private, Secure, End-to-End Encrypted Messaging app made in
                Flutter, that helps you to connect with your connections without any
                ads, promotion. No other third-party person, organization, or even
                Generation Team can't read your messages.`
                  )
                  .start();
              }}
              options={{
                delay: 20,
                typeSpeed: 40,
              }}
            />
          </p>
          <div
            className="w-full lg:w-52 2xl:w-60 align-center flex justify-center md:flex-none md:justify-center mt-5 2xl:mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="3000"
          >
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 w-48 lg:w-52 2xl:w-60 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1UUFPW7cIUff-TtV2IGcka4Whe6LIs0Qq/view?usp=share_link",
                  "_blank"
                )
              }
            >
              Download Now
            </button>

            {/* <img
              src={DownloadApp}
              alt="Download Generation App From Play Store"
              className="cursor-pointer w-48 lg:w-52 2xl:w-60"
              
            /> */}
          </div>
        </div>

        {/* Upper Right Section */}
        <div
          className="h-screen mx-auto hidden lg:block 2xl:h-2/5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img
            src={Generation_Landing}
            alt="Generation Home Page"
            className="object-cover h-full generatio-home-mockup"
          />
        </div>
      </div>

      {/* For Mobile and Tab View */}
      <div
        className="h-screen lg:hidden flex justify-center"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <img
          src={Generation_Landing}
          alt="Generation Home Page"
          className="object-cover h-full generatio-home-mockup"
        />
      </div>
    </div>
  );
};

export default UpperSide;
