import React, { useState } from "react";
import ProductDescription from "./productDescription";

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
}

const Product: React.FC<ProductProps> = ({
  count,
  onIncreaseCount,
  onDecreaseCount,
  handleSetCount,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const handleThumbnailClick = (id: number) => {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) setSelectedImage(selectedImage);
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

  return (
    <>
      <div className="product grid grid-cols-1 md:grid-cols-2 gap-4 md:py-22 md:px-14">
        <div className="md:max-w-[450px]">
          <div className="image__box md:rounded-[1rem] w-full h-full max-h-[550px] md:max-h-[450px] max-w-[450px] overflow-hidden relative">
            {selectedImage ? (
              <img
                src={products[currentIndex].image}
                alt="product image"
                key={products[currentIndex].id}
                className="w-full h-full object-cover md:rounded-xl"
              />
            ) : (
              <img
                src={products[0].image}
                alt="product image"
                key={products[0].id}
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
          <div className="thumbnails justify-between items-center gap-4 hidden md:flex mt-8 w-full max-w-[450px]">
            {products.map((product: ProductItem, index) => (
              <img
                key={product.id}
                src={product.thumbnail}
                onClick={() => handleThumbnailClick(product.id)}
                className={`w-22 h-22 object-cover cursor-pointer rounded-lg ${
                  currentIndex === index ? "ring-2 ring-orange-500" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <ProductDescription
          count={count}
          onDecreaseCount={onDecreaseCount}
          onIncreaseCount={onIncreaseCount}
          handleSetCount={handleSetCount}
        />
      </div>
    </>
  );
};

export default Product;
