import { forwardRef } from "react";
import Item from "./item";

interface CartProps {
  amount: number;
  deleted: boolean;
  onDeleteItem: () => void;
}
const Cart = forwardRef<HTMLDivElement, CartProps>(
  ({ amount, deleted, onDeleteItem }, ref) => {
    return (
      <div
        className="cart absolute top-[75px] md:top-[100px] right-1/2 md:right-0 md:translate-x-0 translate-x-1/2 bg-white shadow-xl rounded-[12px] w-[95%] h-full max-h-[260px] max-w-sm z-4 flex flex-col"
        ref={ref}
      >
        <h2 className="font-kumbh text-base py-5 px-5 block w-full border-b border-b-grayishBlue font-semibold">
          Cart
        </h2>
        <div className="itembox flex-1 flex flex-col justify-center items-center px-5.5 overflow-y-auto">
          {amount > 0 && !deleted ? (
            <Item
              amount={amount}
              deleted={deleted}
              handleDeleteItem={onDeleteItem}
            />
          ) : (
            <p className="text-center text-darkGrayishBlue">
              Your cart is empty
            </p>
          )}
          {amount > 0 && !deleted ? (
            <button className="checkout rounded-xl bg-orange text-darkBlue font-bold w-full py-4 hover:opacity-70 transition-opacity ease-in-out duration-300 cursor-pointer mt-5">
              Checkout
            </button>
          ) : null}
        </div>
      </div>
    );
  }
);

export default Cart;
