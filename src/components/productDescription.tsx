interface ProductDescriptionProps {
  count: number;
  onIncreaseCount: () => void;
  onDecreaseCount: () => void;
  handleSetCount: () => void;
}
const ProductDescription: React.FC<ProductDescriptionProps> = ({
  count,
  onDecreaseCount,
  onIncreaseCount,
  handleSetCount,
}) => {
  return (
    <div className="product__description w-full px-5.5 py-0 md:pl-14 md:py-16 md:pr-0">
      <span className="tagline text-[12px] md:text-[14px] uppercase text-darkGrayishBlue font-kumbh font-semibold tracking-[0.15em]">
        sneaker company
      </span>
      <h1 className="text-[28px] md:text-[2.685rem] leading-7.5 md:leading-11 text-darkBlue font-kumbh font-bold pt-3.5 md:pt-4 md:pr-0">
        Fall Limited Edition Sneakers
      </h1>
      <p className="description text-darkGrayishBlue text-base leading-6.5 tracking-tight md:tracking-[-0.015em] my-4 md:mt-10 font-kumbh">
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className="price flex justify-between items-center md:flex-col md:justify-start md:items-start my-4">
        <div className="hug flex justify-start items-center md:inline-block">
          <span className="true__price inline-block text-[28px] text-darkBlue font-kumbh pt-1 font-bold tracking-wider">
            $125.00
          </span>
          <span className="discount inline-block py-0.5 md:py-0 px-2.5 font-kumbh bg-black rounded-[8px] mx-4 text-white -mb-1">
            50%
          </span>
        </div>
        <span className="discounted__price text-[18px] md:text-base text-darkGrayishBlue font-kumbh md:block line-through font-semibold pt-2">
          $250.00
        </span>
      </div>
      <div className="add_to_cart mt-6 md:flex md:justify-start md:items-center md:gap-4 md:py-2">
        <div className="count flex justify-between items-center gap-4 bg-lightGrayishBlue rounded-lg mb-4 md:mb-0 py-1 px-1 min-w-[160px]">
          <button
            type="button"
            onClick={onDecreaseCount}
            className="py-4 px-5 md:px-3 md:py cursor-pointer"
            aria-label="Decrease Count"
          >
            <img
              src="/images/icon-minus.svg"
              alt="Decrease Count"
              // className="w-6 h-6"
            />
          </button>
          <span className="font-semibold">{count}</span>
          <button
            type="button"
            onClick={onIncreaseCount}
            className="py-4 px-5 cursor-pointer"
            aria-label="Increase Count"
          >
            <img
              src="/images/icon-plus.svg"
              alt="Increase Count"
              // className="w-6 h-6"
            />
          </button>
        </div>
        <button
          className="flex justify-center items-center gap-4 bg-orange rounded-lg py-4 px-4 text-darkBlue w-full md:max-w-[370px] font-semibold shadow-[0_4px_8px_-1px_hsl(25, 100%, 94%)] hover:opacity-70 transition-opacity ease-in-out duration-300 cursor-pointer"
          onClick={handleSetCount}
        >
          <img src="/images/icon-cart.svg" alt="Cart Icon" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
