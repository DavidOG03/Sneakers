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

  const handleThumbnailClick = (currentProduct: number) => {
    setSelectedImage(products[currentProduct - 1].image);
  };

  const handlePreviousImage = () => {
    const currentIndex = products.findIndex(
      (product) => product.image === selectedImage
    );
    if (currentIndex - 1 >= 0) {
      handleThumbnailClick(currentIndex - 1);
    }
  };

  const handleNextImage = () => {
    const currentIndex = products.findIndex(
      (product) => product.image === selectedImage
    );
    if (currentIndex + 1 < products.length) {
      handleThumbnailClick(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="product grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="image__box md:mx-8 w-full h-full max-h-[300px] max-w-[500px] overflow-hidden relative">
            {selectedImage ? (
              <img
                src={
                  products.find((product) => product.image === selectedImage)
                    ?.image
                }
                alt="product image"
                key={
                  products.find((product) => product.image === selectedImage)
                    ?.id
                }
                className="w-full h-full object-cover"
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
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full w-10 h-10 grid place-items-center hover:opacity-70 transition-opacity ease-in-out duration-300 cursor-pointer"
            >
              <img src="/images/icon-previous.svg" alt="Previous Icon" />
            </button>
            <button
              aria-label="Next Image"
              onClick={handleNextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full w-10 h-10 grid place-items-center hover:opacity-70 transition-opacity ease-in-out duration-300 cursor-pointer"
            >
              <img src="/images/icon-next.svg" alt="Next Icon" />
            </button>
          </div>
          <div className="thumbnails justify-center items-center gap-4 hidden md:flex">
            {products.map((product: ProductItem) => (
              <img
                key={product.id}
                src={product.thumbnail}
                onClick={() => handleThumbnailClick(product.id)}
                className="w-18 h-18 object-cover cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
      <ProductDescription
        count={count}
        onDecreaseCount={onDecreaseCount}
        onIncreaseCount={onIncreaseCount}
        handleSetCount={handleSetCount}
      />
    </>
  );
};

export default Product;
