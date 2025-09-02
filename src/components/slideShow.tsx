import { forwardRef } from "react";

interface slideShowProps {
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onThumbnailClick: (id: number) => void;
  products: { id: number; image: string; thumbnail: string }[];
}

const SlideShow = forwardRef<HTMLDivElement, slideShowProps>(
  (
    { currentIndex, onClose, onPrevious, onNext, onThumbnailClick, products },
    ref
  ) => {
    return (
      <div className="absolute inset-0 w-full h-full bg-opacityBlack z-50 flex flex-col justify-center items-center gap-6">
        <div
          className="slide-show-container max-w-[320px] md:max-w-[450px] max-h-[500px] w-full h-full md:rounded-[1rem] relative"
          ref={ref}
        >
          <img
            src={products[currentIndex].image}
            alt="slideShow"
            className="w-full h-full object-cover rounded-[1rem]"
          />

          <button
            aria-label="Close SlideShow"
            className="absolute -top-8 right-0 z-10 cursor-pointer"
            onClick={onClose}
          >
            <img src="/images/icon-close.svg" alt="Close Icon" />
          </button>

          <button
            aria-label="Previous Image"
            className="bg-white absolute rounded-full w-10 h-10 flex items-center justify-center top-1/2 transform -translate-y-1/2 -left-6 z-10 cursor-pointer"
            onClick={onPrevious}
          >
            <img src="/images/icon-previous.svg" alt="Previous Icon" />
          </button>

          <button
            aria-label="Next Image"
            className="bg-white absolute rounded-full w-10 h-10 flex items-center justify-center top-1/2 transform -translate-y-1/2 -right-6 z-10 cursor-pointer "
            onClick={onNext}
          >
            <img
              src="/images/icon-next.svg"
              alt="Next Icon"
              className="hover:sepia"
            />
          </button>
        </div>
        <div className="thumbnails justify-center items-center gap-4 hidden md:flex mt-8 w-full max-w-[450px]">
          {products.map((product, index) => (
            <img
              key={product.id}
              src={product.thumbnail}
              onClick={() => onThumbnailClick(product.id)}
              className={`w-18 h-18 xl:w-22 xl:h-22 object-cover cursor-pointer rounded-lg relative hover:before:w-full hover:before:h-full hover:before:bg-lightGrayishBlue/85 hover:before:inset-0 ${
                currentIndex === index
                  ? "ring-2 ring-orange-500 before:w-inherit before:h-inherit before:bg-lightGrayishBlue/85 before:inset-0 before:z-10"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default SlideShow;
