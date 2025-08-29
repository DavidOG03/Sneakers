import { useState } from "react";

interface NavbarProps {
  amount: number;
  handleToggleCart: () => void;
  deleted: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
  amount,
  handleToggleCart,
  deleted,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className="navbar w-full flex justify-start items-center gap-8 pt-1 pb-2.75 px-6">
      <div className="logo flex items-center gap-4 ">
        <button
          className="menu cursor-pointer"
          aria-label="Menu Button"
          type="button"
          onClick={handleOpenMenu}
        >
          <img
            src="/images/icon-menu.svg"
            alt="Menu Icon"
            className="inline-block md:hidden"
          />
        </button>

        <img
          src="/images/logo.svg"
          alt="sneakers logo"
          className="inline-block"
        />
      </div>
      <ul
        className={`navlinks absolute top-0 w-[75%] z-5 md:w-full bg-white h-screen md:h-auto md:bg-transparent md:static flex flex-col justify-start items-start md:flex-row md:items-center gap-[19px] pt-[90px] px-3 transition-transform ease-in-out duration-500 ${
          menuOpen ? "left-0" : "-left-full"
        }`}
      >
        <button
          className="close p-4 absolute top-2.5 left-2.5 cursor-pointer"
          onClick={handleCloseMenu}
          aria-label="Close Menu"
          type="button"
        >
          <img src="/images/icon-close.svg" alt="Close Menu" />
        </button>
        <li className="navlink block md:inline-block px-4 text-[18px] font-semibold ">
          Collection
        </li>
        <li className="navlink block md:inline-block px-4 text-[18px] font-semibold ">
          Men
        </li>
        <li className="navlink block md:inline-block px-4 text-[18px] font-semibold ">
          Women
        </li>
        <li className="navlink block md:inline-block px-4 text-[18px] font-semibold ">
          About
        </li>
        <li className="navlink block md:inline-block px-4 text-[18px] font-semibold ">
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
          <img src="/images/icon-cart.svg" alt="cart icon" />
          {amount > 0 && !deleted ? (
            <span className="bg-orange rounded-xl px-2 py-0.5 text- absolute top-4 right-4 -translate-y-1/2 translate-x-1/2 text-white text-[0.5rem] font-bold">
              {amount}
            </span>
          ) : null}
        </button>
        <div className="profile__pic w-6 h-6">
          <img src="/images/image-avatar.png" alt="Avatar Image" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
