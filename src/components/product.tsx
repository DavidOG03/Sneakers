import React, { useEffect, useRef, useState } from "react";
import ProductDescription from "./productDescription";
import SlideShow from "./slideShow";

interface ProductItem {
  id: number;
  image: string;
  thumbnail: string;
}

interface ProductProps {
  products: ProductItem[];
  count: number;
  onIncreaseCount: () => void;
  onDecreaseCount: () => void;
  handleSetCount: () => void;
  // noItem: boolean;
  // setNoItem:() => void
}

const Product: React.FC<ProductProps> = ({
  count,
  onIncreaseCount,
  onDecreaseCount,
  handleSetCount,
  // noItem,
  // setNoItem
}) => {
  const products: ProductItem[] = [
    {
      id: 1,
      image: "/images/image-product-1.jpg",
      thumbnail: "/images/image-product-1-thumbnail.jpg",
    },
    {
      id: 2,
      image: "/images/image-product-2.jpg",
      thumbnail: "/images/image-product-2-thumbnail.jpg",
    },
    {
      id: 3,
      image: "/images/image-product-3.jpg",
      thumbnail: "/images/image-product-3-thumbnail.jpg",
    },
    {
      id: 4,
      image: "/images/image-product-4.jpg",
      thumbnail: "/images/image-product-4-thumbnail.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleThumbnailClick = (id: number) => {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) setCurrentIndex(index);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSlideShow = () => {
    // Logic for handling slideshow
    setIsSlideshowActive(true);
  };

  const slideShowRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      slideShowRef.current &&
      !slideShowRef.current.contains(event.target as Node) &&
      thumbnailsRef.current &&
      !thumbnailsRef.current.contains(event.target as Node)
    ) {
      setIsSlideshowActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isSlideshowActive && (
        <SlideShow
          currentIndex={currentIndex}
          onClose={() => setIsSlideshowActive(false)}
          onPrevious={handlePreviousImage}
          onNext={handleNextImage}
          onThumbnailClick={handleThumbnailClick}
          products={products}
          ref={slideShowRef}
        />
      )}
      <div className="product mt-[68.81px] grid grid-cols-1 md:grid-cols-2 gap-4 md:py-22 md:px-14">
        <div className="md:max-w-[450px]">
          <div
            className={`image__box md:rounded-[1rem] w-full h-full aspect-square ${
              loaded ? "" : "animate-pulse"
            } max-h-[450px] md:max-w-[450px] overflow-hidden relative bg-lightGrayishBlue cursor-pointer`}
          >
            {!loaded && (
              <div className="absolute inset-0 bg-lightGrayishBlue animate-pulse rounded-xl"></div>
            )}
            {currentIndex ? (
              <img
                src={products[currentIndex].image}
                alt="product image"
                key={products[currentIndex].id}
                className="w-full h-full object-cover md:rounded-xl"
                onClick={handleSlideShow}
                onLoad={() => setLoaded(true)}
              />
            ) : (
              <img
                src={products[0].image}
                alt="product image"
                key={products[0].id}
                className="w-full h-full object-cover md:rounded-xl"
                onClick={handleSlideShow}
                onLoad={() => setLoaded(true)}
              />
            )}
            <button
              aria-label="Previous Image"
              onClick={handlePreviousImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full w-10 h-10 grid place-items-center hover:opacity-70 transition-opacity ease-in-out duration-300 cursor-pointer md:hidden"
            >
              <img src="/images/icon-previous.svg" alt="Previous Icon" />
            </button>
            <button
              aria-label="Next Image"
              onClick={handleNextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full w-10 h-10 grid place-items-center hover:opacity-70 transition-opacity ease-in-out duration-300 cursor-pointer md:hidden"
            >
              <img src="/images/icon-next.svg" alt="Next Icon" />
            </button>
          </div>
          <div className="thumbnails justify-between items-center md:gap-2 xl:gap-4 hidden md:flex mt-8 w-full max-w-[450px]">
            {products.map((product: ProductItem, index) => (
              <div
                key={product.id}
                className={`relative w-18 h-18 xl:w-22 xl:h-22 rounded-lg cursor-pointer  ${
                  currentIndex === index ? "ring-2 ring-orange-500" : ""
                } `}
                onClick={() => handleThumbnailClick(product.id)}
              >
                <img
                  src={product.thumbnail}
                  alt="thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />

                <div
                  className={`absolute inset-0 rounded-lg transition ${
                    currentIndex === index
                      ? "bg-lightGrayishBlue/50"
                      : "hover:bg-lightGrayishBlue/50"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <ProductDescription
          count={count}
          onDecreaseCount={onDecreaseCount}
          onIncreaseCount={onIncreaseCount}
          handleSetCount={handleSetCount}
          // noItem={noItem}
          // setNoItem={setNoItem}
        />
      </div>
    </>
  );
};

export default Product;
