import React from "react";
import { Link } from "react-router-dom";
import { RiSuitcase2Line } from "react-icons/ri";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import Image from "../images/img-hero.jpg";

const Hero = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 p-[3rem]">
      <div className="mx-auto flex flex-col lg:flex-row mb-10">
        <div
          className="lg:ml-6 xl:ml-[70px] flex-col items-center 
        lg:items-start text-center lg:text-left justify-center
        flex-1 px-4 lg:px-0"
        >
          <h1 className="text-4xl lg:text-[50px] font-semibold leading-none mb-8 text-primary">
            Forget the work, start your next holiday
          </h1>
          <p className="max-w-[480px] mb-4 text-colortext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            illoat. Repudiandae ratione impedit delectus consectetur.
            Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias
            atqueratione delectus blanditiis nemo eius dignissimos doloremque
            quaealiquid maiores id tempore consequatur, quod pariatur saepe.
          </p>
          {/* Button show me */}
          <div className="flex items-center gap-6 mb-12">
            <Link
              className="bg-secondary text-white px-14 py-3 rounded-lg transition hover:bg-blue-500"
              to=""
            >
              Show Me Now
            </Link>
          </div>
          {/* icon traveler */}
          <div className="flex flex-row my-4 gap-x-14">
            <div className="flex-col items-center text-primary">
              <div className="text-[30px] mb-3 item">
                <RiSuitcase2Line />
              </div>
              <h6 className="mt-3">{}
                {" "}
                <span className="text-gray-500 font-weight-light">
                  Treasury
                </span>
              </h6>
            </div>
            <div className="flex-col items-center text-primary">
              <div className="text-[30px] mb-3">
                <BsFillCameraFill />
              </div>
              <h6 className="mt-3">
                <span className="text-gray-500 font-weight-light">
                  Treasury
                </span>
              </h6>
            </div>
            <div className="flex-col items-center text-gray-600">
              <div className="text-[30px] mb-3">
                <MdOutlineLocationOn />
              </div>
              <h6 className="mt-3">
                <span className="text-gray-500 font-weight-light">
                  Treasury
                </span>
              </h6>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" className="max-w-[555px] max-h-[425px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
