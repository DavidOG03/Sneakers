import { forwardRef, useState } from "react";

interface NavbarProps {
  amount: number;
  handleToggleCart: () => void;
  deleted: boolean;
  // ref?: React.Ref<HTMLButtonElement>;
}
const Navbar = forwardRef<HTMLButtonElement, NavbarProps>(
  ({ amount, handleToggleCart, deleted }, ref) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const handleOpenMenu = () => {
      setMenuOpen(true);
    };
    const handleCloseMenu = () => {
      setMenuOpen(false);
    };
    return (
      <div className="navbar w-full flex justify-between items-center gap-8 md:gap-5 xl:gap-8 pt-1 pb-2.75 pl-6 pr-3 md:px-2 md:pt-4 md:pb-6 md:border-b border-grayishBlue fixed top-0 left-0 z-100 bg-white md:static">
        <div className="logo flex items-center gap-4 ">
          <button
            className="menu cursor-pointer md:hidden"
            aria-label="Menu Button"
            type="button"
            onClick={handleOpenMenu}
          >
            <img
              src="/images/icon-menu.svg"
              alt="Menu Icon"
              className="inline-block "
            />
          </button>

          <img
            src="/images/logo.svg"
            alt="sneakers logo"
            className="inline-block xl:w-[200px]"
          />
        </div>
        <ul
          className={`navlinks absolute top-0 w-[75%] z-5 md:w-auto flex-1 bg-white h-screen md:h-auto md:bg-transparent md:static flex flex-col justify-start items-start mr-auto md:flex-row md:items-center gap-[19px] md:gap-3 pt-[90px] md:pt-0 px-7 md:pl-4 xl:pl-8 md:pr-0 transition-all ease-in-out duration-500 ${
            menuOpen ? "left-0" : "-left-full"
          }`}
        >
          <button
            className="close p-4 absolute top-2.5 left-2.5 cursor-pointer md:hidden"
            onClick={handleCloseMenu}
            aria-label="Close Menu"
            type="button"
          >
            <img src="/images/icon-close.svg" alt="Close Menu" />
          </button>
          <li className="navlink block md:inline-block text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-0 before:h-1 before:-bottom-3 md:before:-bottom-10 before:left-0 before:bg-orange before:rounded-2xl before:transition-all before:duration-300 hover:before:w-full before:z-10 before:origin-left">
            Collection
          </li>
          <li className="navlink block md:inline-block text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-0 before:h-1 before:-bottom-3 md:before:-bottom-10 before:left-0 before:bg-orange before:rounded-2xl before:transition-all before:duration-300 hover:before:w-full before:z-10 before:origin-left">
            Men
          </li>
          <li className="navlink block md:inline-block text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-0 before:h-1 before:-bottom-3 md:before:-bottom-10 before:left-0 before:bg-orange before:rounded-2xl before:transition-all before:duration-300 hover:before:w-full before:z-10 before:origin-left">
            Women
          </li>
          <li className="navlink block md:inline-block text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-0 before:h-1 before:-bottom-3 md:before:-bottom-10 before:left-0 before:bg-orange before:rounded-2xl before:transition-all before:duration-300 hover:before:w-full before:z-10 before:origin-left">
            About
          </li>
          <li className="navlink block md:inline-block text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-0 before:h-1 before:-bottom-3 md:before:-bottom-10 before:left-0 before:bg-orange before:rounded-2xl before:transition-all before:duration-300 hover:before:w-full before:z-10 before:origin-left">
            Contact
          </li>
        </ul>
        <div className="navbar__hug flex flex-1 justify-end items-center gap-2 xl:gap-6 ml-auto">
          <button
            type="button"
            aria-label="Add to Cart"
            className="cart p-4 relative cursor-pointer"
            onClick={handleToggleCart}
            ref={ref}
          >
            <img
              src="/images/icon-cart.svg"
              alt="cart icon"
              className="w-6 md:w-6"
            />
            {amount > 0 && !deleted ? (
              <span className="bg-orange rounded-xl px-2 py-0 absolute top-4 right-4 -translate-y-1/2 translate-x-1/2 text-white text-[0.5rem] font-bold">
                {amount}
              </span>
            ) : null}
          </button>
          <div className="profile__pic w-6 h-6 md:min-w-10 md:min-h-10 xl:min-w-12 xl:min-h-12 grid place-items-center rounded-full cursor-pointer">
            <img
              src="/images/image-avatar.png"
              alt="Avatar Image"
              className="w-full h-full object-cover rounded-full hover:ring-2 hover:ring-orange-500 transition-all ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Navbar;
