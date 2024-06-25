'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      title: 'Home',
      path: '/home',
    },
    {
      title: 'About Me',
      path: '#about',
    },
    {
      title: 'Skills',
      path: '#skill',
    },
    {
      title: 'Projects',
      path: '#projects',
    },
    {
      title: 'Education',
      path: '#education',
    },
    {
      title: 'Contact',
      path: '#contact',
    },
  ];
  return (
    <div className=" mx-auto bg-[#170550] ">
      <nav className=" px-8 py-4 flex justify-between items-center w-full z-10 fixed ">
        <h6>
          <img className="w-20 h-12" src="AK.png" alt="" />
          {/* <span className="text-xl text-orange-500 font-semibold">Next</span> Hero */}
        </h6>
        <div className="  ">
          {links?.map(link => (
            <Link
              className={`${
                pathName === link.path ? 'text-[#F86F03] px-2' : ''
              } `}
              key={link.path}
              href={link.path}
            >
              <span className="px-3">{link.title}</span>
            </Link>
          ))}
        </div>

        <Link href="#contact">
          <button className="bg-[#F86F03] px-6 py-2 rounded-2xl font-semibold mr-8 text-lg">
            {' '}
            Hire Me
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
