import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";


const CardData :{icon:unknown,title:string,description:string,bgColor:string}[]=
[
    {icon:(<FaSearch/>) as unknown as string,
        title: "Search",
        description: "Search for information on any topic",
        bgColor:"#a0f6aa "
    },
    {icon:(< FaTag/>) as unknown as string,
        title: "Search",
        description: "Search for information on any topic",
          bgColor:"#b07be8 "
    },
    {icon:(< FaStar/>) as unknown as string,
        title: "Search",
        description: "Search for information on any topic",
          bgColor:"#e8e07b "
    },
    {icon:(< IoIosBook />) as unknown as string,
        title: "Search",
        description: "Search for information on any topic",
          bgColor:"#f6cfc7"
    },
    {icon:(< IoLocation/>) as unknown as string,
        title: "Search",
        description: "Search for information on any topic",
          bgColor:"#a0ccf6 "
        
    },
    {icon:(<FiTarget/>) as unknown as string,
        title: "Search",
        description: "Search for information on any topic",
          bgColor:"#ebcac4 "
    },

]

export const Card = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-x-4 gap-y-6 justify-center items-center w-full m-auto '>
        {CardData.map((card, index) => (
          <div key={index} className={` flex flex-col items-center justify-center w-1/2 h-40 ${card.bgColor} rounded-md shadow-md p-4`}
          style={{backgroundColor:card.bgColor}}>
            <div className="flex items-center justify-evenly w-full h-full m-auto">
              <div className="items-center justify-center w-8 h-8 text-3xl">
                {card.icon as string}
              </div>
           
            <div className="mt-2 text-center text-sm">{card.title}</div>
            </div>
            <div className="mt-1 text-gray-600 text-sm">{card.description}</div>
          </div>
        ))}
    </div>
  )
}
