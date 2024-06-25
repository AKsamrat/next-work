'use client';
import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Skill = () => {
  return (
    <div id="skill" className="bg-[#31065A] exo-2  ">
      <div className="max-w-7xl mx-auto  py-16">
        <div className="flex justify-center items-center ">
          <p className="exo-2 border-b-2 w-48 text-[40px] text-center font-semibold">
            My <span className="text-[#F86F03]">Skills</span>{' '}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Slide direction="left" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700 ">
              <img className="w-20" src="html.png" alt="" />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">HTML</p>
                <div class="relative flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '90%' }}
                    className="flex h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  ></div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide direction="right" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <img className="w-20" src="css3.png" alt="" />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">CSS</p>
                <div class="relative flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '80%' }}
                    className="flex h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  ></div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide direction="left" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700 ">
              <img className="w-20" src="Tailwind_CSS_.png" alt="" />
              <div className="w-full">
                <p className="text-3xl font-semibold py-3">Tailwind CSS</p>
                <div class="relative flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '90%' }}
                    className="flex h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  ></div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide direction="right" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <img className="w-20" src="js.png" alt="" />
              <div className="w-full">
                <p className="text-3xl font-semibold py-3">Java Script</p>
                <div class="relative flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '75%' }}
                    className="flex h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  ></div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide direction="left" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <img className="w-20" src="react.png" alt="" />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">React</p>
                <div class="relative flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '80%' }}
                    className="flex h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  ></div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide direction="right" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <img className="w-[70px]" src="node.jpg" alt="" />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">Node</p>
                <div class="relative flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '70%' }}
                    className="flex h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  ></div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide direction="left" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <img className="w-20" src="express.png" alt="" />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">Express</p>
                <div class="relative flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '75%' }}
                    className="flex h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  ></div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide direction="right" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <img className="w-20" src="mongo.png" alt="" />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">MongoDB</p>
                <div class="relative flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '80%' }}
                    className="flex h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  ></div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Skill;
