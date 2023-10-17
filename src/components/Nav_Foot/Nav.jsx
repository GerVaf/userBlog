import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import logoText from "../../../public/INDXlogo.svg";
import sportLogo from "../../../public/sports.svg";
import musicLogo from "../../../public/music.svg";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [active, setActive] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const handleShowNav = () => {
    let scrollTop = window.scrollY;
    // console.log(scrollTop);
    if (lastScroll < scrollTop) {
      setShowNav(false);
    } else {
      setTimeout(() => {
        setShowNav(true);
      }, 100);
    }
    setLastScroll(scrollTop);
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleShowNav);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleShowNav);
    };
  }, []);

  const nav = [
    {
      id: 1,
      img: musicLogo,
      title: "MUSIC",
      path: "/music",
    },
    {
      id: 2,
      img: sportLogo,
      title: "SPORT",
      path: "/sport",
    },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "50%" },
  };

  return (
    <div
      className={`fixed top-0 z-10 w-full lg:h-auto h-16 bg-slate-100/70 backdrop-blur-md  transition-all duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-[100%]"
      }`}
    >
      {/* just running text */}
      {/* <div className="flex">
        <h1 className="w-[150px] py-1 px-2 bg-red-700 text-white">
          Breaking News
        </h1>
        <Marquee className="bg-white" gradient gradientWidth={40}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          possimus earum commodi nostrum perferendis quod quos sit, dolores
          animi delectus nemo officia, itaque illum distinctio vitae. Velit
          adipisci deserunt earum!
        </Marquee>
      </div> */}

      {/* nav bar */}
      <nav className={`max-w-[1300px] mx-auto p-3 px-8`}>
        <div className="flex lg:flex-row justify-between items-center max-w-[1600px] mx-auto flex-col">
          {/* menu button and image */}
          <div className="flex items-center justify-between w-full ">
            {/* logo  */}
            <Link to={"/"} className="flex items-center">
              <div className=" overflow-hidden  relative">
                <img
                  className={`h-10 transition duration-200 ${
                    showNav ? "translate-x-0" : "-translate-x-[100%]"
                  }`}
                  src={logoText}
                  alt=""
                />
              </div>
            </Link>
            {/* menu open for mobile */}
            <div
              onClick={() => {
                setActive(!active);
              }}
              className="text-3xl lg:hidden block "
            >
              {active ? <RxCross2 /> : <RxHamburgerMenu />}
            </div>
          </div>
          {/* menu desktop */}
          <ul
            className="hidden lg:flex lg:gap-16 "
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            {nav.map((el) => {
              return (
                <Link className="w-full" key={el.id} to={el.path}>
                  <img className="h-16" src={el.img} alt={el.title} />
                </Link>
              );
            })}
          </ul>
          {/* for mobile  */}
          <AnimatePresence>
            {active && (
              <motion.ul
                className="flex absolute right-0 top-16 backdrop-blur-md bg-slate-100/70 lg:hidden p-5 flex-col gap-5 z-0 items-end"
                initial="closed"
                animate="open"
                exit="closed"
                variants={variants}
              >
                {nav.map((el) => {
                  return (
                    <Link
                      onClick={() => setActive(!active)}
                      key={el.id}
                      to={el.path}
                    >
                      <motion.img
                        className="h-7"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        src={el?.img}
                        alt={el?.title}
                      />
                    </Link>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
