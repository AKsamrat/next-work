'use client';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { PiDownloadFill } from 'react-icons/pi';

const Education = () => {
  return (
    <div id="education" className="bg-[#31065A] exo-2">
      <section className="max-w-7xl mx-auto  py-16">
        <div className="flex justify-center items-center ">
          <p className="exo-2 border-b-2 w-2/5 text-[40px] text-center font-semibold">
            Education <span className="text-[#F86F03]">&</span> Experience{' '}
          </p>
        </div>
        <div className=" grid grid-cols-1  md:grid-cols-2  gap-16 mt-8">
          <div>
            <Slide direction="down" duration={1000}>
              <h3 className=" text-2xl font-bold text-[#F86F03] pb-4">
                My Education
              </h3>
            </Slide>
            <div className=" py-2">
              <Slide direction="up" duration={1500}>
                <h4 className="text-xl font-semibold">
                  Master in Computer Science & Engineering
                </h4>
                <h5 className=" text-gray-400 py-1 text-[18px]">
                  {' '}
                  University of Asia Pacific / 2017 - 2018
                </h5>
                <p className=" text-gray-400 py-1 text-[18px]">
                  Dhaka,Bangladesh
                </p>
              </Slide>
            </div>
            <hr />
            <div className=" py-2">
              <Slide direction="up" duration={1500}>
                <h4 className="text-xl font-semibold">
                  BSc in Computer Science & Engineering
                </h4>
                <h5 className=" text-gray-400 py-1 text-[18px]">
                  {' '}
                  University of Asia Pacific / 2012 - 2016
                </h5>
                <p className=" text-gray-400 py-1 text-[18px]">
                  Dhaka,Bangladesh
                </p>
              </Slide>
            </div>
            <hr />
            <div className=" py-2">
              <Slide direction="up" duration={1500}>
                <h4 className="text-xl font-semibold">Diploma In Computer</h4>
                <h5 className=" text-gray-400 py-1 text-[18px]">
                  {' '}
                  Sherpur Polytechnic Institute / 2007 - 2011
                </h5>
                <p className=" text-gray-400 py-1 text-[18px]">
                  Sherpur,Bangladesh
                </p>
              </Slide>
            </div>
          </div>
          <div>
            <Slide direction="down" duration={1500}>
              <h3 className=" text-2xl font-bold text-[#F86F03] pb-1">
                Experience
              </h3>
            </Slide>
            <div className=" py-2">
              <Slide direction="up" duration={1500}>
                <h4 className="text-xl font-semibold">MIS Officer</h4>
                <h5 className=" text-gray-400  text-[18px]">
                  {' '}
                  Alif Group / 2018 - 2020
                </h5>
                <p className=" text-gray-400 py-1 text-[18px]">
                  Dhaka,Bangladesh
                </p>
                <p className=" text-gray-400 py-1 text-[18px]">
                  1. Designing, monitoring, analyzing, and troubleshooting IT
                  systems. <br /> 2. Maintaining, managing, and updating
                  software. <br />
                  3.Supervising the development and maintenance of websites and
                  ensuring the protection of users data.
                </p>
              </Slide>
            </div>
            <div className=" py-1">
              <Slide direction="up" duration={1500}>
                <h4 className="text-xl font-semibold">Planning Officer</h4>
                <h5 className=" text-gray-400  text-[18px]">
                  {' '}
                  Tazbid Al Owarichu trade Corporation / 2020 - 2023
                </h5>
                <p className=" text-gray-400 py-1 text-[18px]">
                  Dhaka,Bangladesh
                </p>
                <p className=" text-gray-400 py-1 text-[18px]">
                  1.Mantaining The order and Start its procedural way <br />{' '}
                  2.Meet with the buyer and Maintaining their jobs <br />
                  3.Monitoring Production And its delivery .
                </p>
              </Slide>
            </div>
          </div>
        </div>
        <Slide direction="left" duration={1500}>
          <div className=" flex justify-center items-center mt-10">
            <a
              target="_blank"
              href="https://drive.usercontent.google.com/download?id=1fCAUvLw0n7sam4JGAaiO5JyVE6LyKwH5&export=download&authuser=0&confirm=t&uuid=9c4af5c0-a9dc-4440-8e1d-2a92ada2bf8c&at=APZUnTWQYm1bcFl9V9OgzmbWLujY:1719209115372"
            >
              <button className="px-5 py-2 bg-[#F86F03] rounded-xl font-semibold flex justify-center items-center gap-2 text-lg">
                {' '}
                <PiDownloadFill />
                Download CV
              </button>
            </a>
          </div>
        </Slide>
      </section>
    </div>
  );
};

export default Education;
