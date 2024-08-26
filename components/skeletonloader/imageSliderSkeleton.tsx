import Image from 'next/image';
import { useState } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';

const ImageSliderSkeleton = ({ housing }: { housing: { images: string[] } }) => {
  
  
    const theImg: number[] = [1, 1, 1, 1, 1, 1, 1,1,1];

  return (
    <div className="flex flex-col overflow-hidden items-center relative gap-2">
      <div className="flex items-center w-full  relative overflow-hidden">
        <GrPrevious
          
          className="absolute left-1 shadow border text-white  font-bold bg-white p-2 rounded-full text-[50px] cursor-pointer z-10"
        />

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${0 * 100}%)`,
            width: `${theImg.length * 100}%`,
          }}
        >
          {theImg.map((image, index) => (
            <div key={index} className="w-full h-[500px] bg-slate-200  flex-shrink-0 flex justify-center items-center  relative">
            </div>
          ))}
        </div>

        <GrNext
         
          className="absolute right-1 shadow border text-white  font-bold bg-white p-2 rounded-full text-[50px] cursor-pointer z-10"
        />
      </div>

      <div className="flex justify-center overflow-x-auto gap-2 mt-2">
              {theImg.map((num) => (
            <div className='h-[100px] w-[150px] bg-slate-200'>
                      
            </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderSkeleton;
