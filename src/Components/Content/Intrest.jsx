import React from "react";

const Intrest = () => {
  return (
    <div id="intrest" className="w-full h-[100vh] flex flex-coljustify-center bg-black  px-4">
      <div className=" mx-auto flex md:flex-cols-2 ">
        <img
          className=" mx-auto my-auto   h-[600px]  hidden sm:block  rounded-lg"
          src="https://angular.io/generated/images/marketing/home/any-size.svg"
        />
        <div className="flex flex-col justify-center  ">
          <h1 className="text-[#eb5939] font-bold md:text-6xl sm:text-5xl md:py-[0] text-4xl py-[20px]">
            My Intrests..!
          </h1>
          <p className="font-bold md:text-[20px] md:mx-0 py-4 px-6 text-[#B7AB98] text-left mt-10">
          As a frontend developer, I am passionate about creating visually appealing and user-friendly websites. I find joy in crafting elegant user interfaces that seamlessly blend aesthetics with functionality. The ever-evolving nature of web technologies fascinates me, and I constantly strive to stay up-to-date with the latest trends and advancements in frontend development. From responsive design to interactive components.<br /><p className="text-[#eb5939] py-[10px]">"I enjoy exploring the endless possibilities of HTML, CSS, and JavaScript to bring ideas to life."</p><br />Additionally, I am intrigued by the concept of user experience (UX) and its impact on how people interact with digital products. Understanding the needs and behaviors of users is a challenge that motivates me to continuously improve and optimize the frontend experience. I also have a keen interest in accessibility, aiming to create inclusive websites that are usable by everyone, regardless of their abilities. Collaborating with designers, backend developers, and other professionals in cross-functional teams is something I greatly appreciate, as it allows me to contribute my skills and learn from others. Overall, my passion for frontend development drives me to create engaging and intuitive interfaces that enhance the overall user experience.
          </p>
          {/* <button className="w-[100px] h-[50px] bg-black text-[#00df9a] justify-center rounded-lg font-bold mx-auto my-4">
            Connect.
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Intrest;
