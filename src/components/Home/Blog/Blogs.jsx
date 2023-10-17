import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detail } from "../../../Global/Slice/blogSlice";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { LuMusic } from "react-icons/lu";

const Blogs = ({ blg }) => {
  // console.log(blg);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const regex = /(<([^>]+)>)/gi;

  return (
    <div
      onClick={() => {
        nav("/detail");
        dispatch(detail(blg));
      }}
      className="md:h-80 w-full md:flex md:flex-row text-white md:gap-5 flex flex-col hover:bg-white/20 rounded-md overflow-hidden duration-200 transition-all border-y border-slate-400"
    >
      
      <div className='h-[300px] md:h-full'>
        <img
          className="rounded-md object-cover object-center"
          src={blg?.images[0]?.url}
          alt=""
        />
      </div>
      
      <div className="h-[20%] md:w-[75%] flex flex-col text-start gap-4 p-5">
        
        <span className="bg-white rounded-lg gap-1 justify-center font-bold text-black w-20 flex items-center">
          {blg?.category === "sport" ? <MdOutlineSportsSoccer /> : <LuMusic />}
          {blg.category}
        </span>
        
        <div className="gap-3 flex flex-col items-start">
          <h1 className="md:text-2xl text-lg font-bold">{blg?.title}</h1>
          <p className="md:text-base text-sm italic text-gray-400">{blg?.author}</p>
        </div>
       
        <div className="flex flex-col justify-between h-full">
          <div className=" md:text-base text-sm text-start">
            {blg?.content
              .replace(regex, "")
              .replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, " ")
              .substring(0, 350)}
            ...
          </div>
          <span className="text-end underline font-bold cursor-pointer">
            Read More . . .
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

/*

    <div
      onClick={() => {
        nav("/detail");
        dispatch(detail(blg));
      }}
      className="h-[900px] md:h-80 w-full md:flex md:flex-row text-white md:gap-5 flex flex-col hover:bg-white/20 rounded-md duration-200 transition-all border-y border-slate-400"
    >
      
      <div className='h-[80%] md:h-full'>
        <img
          className="rounded-md "
          src={blg?.images[0]?.url}
          alt=""
        />
      </div>
      
      <div className="h-[400px] md:w-[75%] flex flex-col text-start gap-4 p-5">
        
        <span className="bg-white rounded-lg gap-1 justify-center font-bold text-black w-20 flex items-center">
          {blg?.category === "sport" ? <MdOutlineSportsSoccer /> : <LuMusic />}
          {blg.category}
        </span>
        
        <div className="gap-3 flex flex-col items-start">
          <h1 className="md:text-2xl text-lg font-bold">{blg?.title}</h1>
          <p className="md:text-base text-sm italic text-gray-400">{blg?.author}</p>
        </div>
       
        <div className="flex flex-col justify-between h-full">
          <div className=" md:text-base text-sm text-start">
            {blg?.content
              .replace(regex, "")
              .replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, " ")
              .substring(0, 350)}
            ...
          </div>
          <span className="text-end underline font-bold cursor-pointer">
            Read More . . .
          </span>
        </div>
      </div>
    </div>
*/
