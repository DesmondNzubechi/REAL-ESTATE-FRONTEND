import Image from 'next/image';
import { useState } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';

const ImageSlider = ({ housing }: { housing: { images: string[] } }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevPic = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? housing.images.length - 1 : prevIndex - 1
    );
  };

  const nextPic = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === housing.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const setCurrentImg = (index: number) => {
    setCurrentImgIndex(index);
  };

  return (
    <div className="flex flex-col items-center relative gap-2">
      <div className="flex items-center w-full relative overflow-hidden">
        <GrPrevious
          onClick={prevPic}
          className="absolute left-1 shadow border text-black hover:bg-btn-primary font-bold bg-white p-2 rounded-full text-[50px] cursor-pointer z-10"
        />

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentImgIndex * 100}%)`,
            width: `${housing?.images.length * 100}%`,
          }}
        >
          {housing.images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-between items-start md:h-[80vh] relative">
              <Image
                src={image || '/'}
                alt={`Image ${index}`}
               
                width={1000} // Arbitrary width to maintain aspect ratio
                height={500} // Arbitrary height to maintain aspect ratio
                objectFit="cover"
                className="w-full  border shadow-xl  rounded h-full"
              />
            </div>
          ))}
        </div>

        <GrNext
          onClick={nextPic}
          className="absolute right-1 shadow border text-black hover:bg-btn-primary font-bold bg-white p-2 rounded-full text-[50px] cursor-pointer z-10"
        />
      </div>

      <div className="flex justify-between overflow-x-auto gap-2 mt-2">
        {housing?.images?.map((pic, picIndex) => (
          <Image
            key={picIndex || '/'}
            src={pic}
            onClick={() => setCurrentImg(picIndex)}
            width={80}
            height={80}
            className={`cursor-pointer h-[100px] w-[150px] hover:border hover:border-textColor active:border-2 hover:rounded ${
              currentImgIndex === picIndex ? 'border-[5px] border-btn-textColor rounded' : ''
            }`}
            alt={`Thumbnail ${picIndex}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
