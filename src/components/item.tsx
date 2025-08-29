import React from "react";
interface ItemProps {
  amount: number;
  deleted?: boolean;
  handleDeleteItem?: () => void;
}
const Item: React.FC<ItemProps> = ({ amount, deleted, handleDeleteItem }) => {
  const price = 125;
  const total = price * amount;

  return (
    <div
      className={
        "item flex justify-between items-center gap-2 w-full h-auto " +
        (deleted ? "hidden" : "")
      }
    >
      <div className="image w-[50px] h-auto rounded-sm">
        <img
          src="/images/image-product-1-thumbnail.jpg"
          alt="Product Image"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="details ">
        <span className="text-darkGrayishBlue text-base">
          Fall Limited Edition Sneakers
        </span>
        <div className="amount">
          <span className="text-darkGrayishBlue">${price}.00</span>{" "}
          <span className="text-darkGrayishBlue">×{amount}</span>{" "}
          <span className="font-bold text-darkBlue text-base ml-4">
            ${total}.00
          </span>
        </div>
      </div>
      <button
        className="px-0 py-2 cursor-pointer"
        aria-label="Delete Item"
        onClick={handleDeleteItem}
      >
        <img src="/images/icon-delete.svg" alt="Delete Icon" />
      </button>
    </div>
  );
};

export default Item;
