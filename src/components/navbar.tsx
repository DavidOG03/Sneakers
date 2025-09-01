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
      <div className="navbar w-full flex justify-start items-center gap-8 pt-1 pb-2.75 pl-6 pr-3 md:px-2 md:pt-4 md:pb-6 md:border-b border-opacityBlack fixed top-0 left-0 z-100 bg-white md:static">
        <div className="logo flex items-center gap-4 ">
          <button
            className="menu cursor-pointer md:hidden"
            aria-label="Menu Button"
            type="button"
            onClick={handleOpenMenu}
            ref={ref}
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
            className="inline-block md:w-[200px]"
          />
        </div>
        <ul
          className={`navlinks absolute top-0 w-[75%] z-5 md:w-full bg-white h-screen md:h-auto md:bg-transparent md:static flex flex-col justify-start items-start md:flex-row md:items-center gap-[19px] pt-[90px] md:pt-0 px-3 md:px-4 transition-transform ease-in-out duration-500 ${
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
          <li className="navlink block md:inline-block px-4 text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-full before:h-1 before:-bottom-3 before:left-0 before:bg-orange before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 md:before:hidden">
            Collection
          </li>
          <li className="navlink block md:inline-block px-4 text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-full before:h-1 before:-bottom-3 before:left-0 before:bg-orange before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 md:before:hidden">
            Men
          </li>
          <li className="navlink block md:inline-block px-4 text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-full before:h-1 before:-bottom-3 before:left-0 before:bg-orange before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 md:before:hidden">
            Women
          </li>
          <li className="navlink block md:inline-block px-4 text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-full before:h-1 before:-bottom-3 before:left-0 before:bg-orange before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 md:before:hidden">
            About
          </li>
          <li className="navlink block md:inline-block px-4 text-[1rem] font-semibold md:px-1 transition-color duration-300 md:text-darkGrayishBlue hover:text-black cursor-pointer md:font-medium relative before:absolute before:w-full before:h-1 before:-bottom-3 before:left-0 before:bg-orange before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 md:before:hidden">
            Contact
          </li>
        </ul>
        <div className="navbar__hug flex justify-end items-center gap-2 md:gap-6 ml-auto">
          <button
            type="button"
            aria-label="Add to Cart"
            className="cart p-4 relative cursor-pointer"
            onClick={handleToggleCart}
          >
            <img
              src="/images/icon-cart.svg"
              alt="cart icon"
              className="w-6 md:w-8"
            />
            {amount > 0 && !deleted ? (
              <span className="bg-orange rounded-xl px-2 py-0 absolute top-4 right-4 -translate-y-1/2 translate-x-1/2 text-white text-[0.5rem] font-bold">
                {amount}
              </span>
            ) : null}
          </button>
          <div className="profile__pic w-6 h-6 md:w-18 md:h-18 rounded-full cursor-pointer">
            <img
              src="/images/image-avatar.png"
              alt="Avatar Image"
              className="w-full h-full object-contain rounded-full hover:ring-2 hover:ring-orange-500 transition-all ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Navbar;
