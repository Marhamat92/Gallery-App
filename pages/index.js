import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { photos } from "@/components/Photos";
import MainButton from "@/components/MainButton";
import { useState, useEffect } from "react";
import SecondaryButton from "@/components/SecondaryButton";
import next from "next";

const Slideshow = ({ imgs }) => {
  const [displayAllImages, setDisplayAllImages] = useState(false);
  // const [previousImage,setPreviousImage] = useState();
  // const [nextImage,setNextImage] = useState(4);
  // const [showSingleImage,setShowSingleImage] = useState(false);

  const [displayImage, setDisplayImage] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const showAllImages = () => {
    setDisplayAllImages(true);
    setDisplayImage(false);
  };

  return (
    <div>
      {displayImage && (
        <div className="container mx-auto mt-10">
          <div className="flex items-center justify-center">
            <img className="h-60" src={imgs[index]} alt="" />
          </div>
          <div className="flex justify-center items-center mt-10 mb-10">
            <SecondaryButton onClick={prev} name="Previous" />
            <MainButton
              onClick={() => {
                showAllImages();
              }}
              name="Display All Images"
              type="button"
            />
            <SecondaryButton onClick={next} name="Next" />
          </div>
        </div>
      )}

      <div className="flex items-center justify-center mt-10">
        {!displayImage && !displayAllImages && (
          <MainButton
            onClick={() => setDisplayImage(!displayImage)}
            name="Display Image"
            type="button"
          />
        )}
      </div>

      {/* all images are below */}

      {displayAllImages && (
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {photos.map((item, index) => {
              return (
                <div className="col-span-3 lg:col-span-1">
                  <img src={`${item.src}`} alt="" />
                </div>
              );
            })}
      
          </div>
          <div className="flex justify-center items-center mt-10 mb-10">
            <MainButton
              onClick={() => {
                setDisplayAllImages(false);
                setDisplayImage(true);
              }}
              name="Show Single Image"
              type="button"
            />
          </div>
        </div>
      )}
    </div>
  );
};

function ImageGallery({ displayAllImages, setDisplayAllImages }) {
  return (
    <div className="">
      <Head>
        <title>Gallery App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-green-500 py-5 flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-white">Gallery App</h1>
      </div>

      <Slideshow
        imgs={[
          "images/image1.jpg",
          "images/image2.jpg",
          "images/image3.jpg",
          "images/image4.jpg",
          "images/image5.jpg",
          "images/image6.jpg",
          "images/image7.jpg",
          "images/image8.jpg",
          "images/image9.jpg",
          "images/image10.jpg",
          "images/image11.jpg",
          "images/image12.jpg",
          "images/image13.jpg",
          "images/image14.jpg",
          "images/image15.jpg",
          "images/image16.jpg",
          "images/image17.jpg",
        ]}
      />
      {displayAllImages && (
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {photos.map((item, index) => {
              return (
                <div className="col-span-3 lg:col-span-1">
                  <img src={`${item.src}`} alt="" />
                </div>
              );
            })}
            
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;