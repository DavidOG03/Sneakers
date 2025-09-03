import Navbar from "./components/navbar";
import Product from "./components/product";
import "./app.css";
import Cart from "./components/cart";
import { useState, useRef, useEffect } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [noItem, setNoItem] = useState<boolean>(false);

  const handleDecreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);

    if (count >= 10) {
      setCount(10);
    }

    if (count === 0) {
      setNoItem(false);
    }
  };

  const handleSetCount = () => {
    setAmount(count);
    setCount(0);
    setDeleted(false);
    if (count === 0) {
      setNoItem(true);
    }
    if (count > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleToggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const [deleted, setDeleted] = useState(false);

  const handleDeleteItem = () => {
    setDeleted(true);
    setAmount(0);
    setCount(0);
  };
  const cartRef = useRef<HTMLDivElement>(null);
  const cartBtnRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target as Node) &&
      cartBtnRef.current &&
      !cartBtnRef.current.contains(event.target as Node)
    ) {
      setCartOpen(false);
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
      <Navbar
        amount={amount}
        handleToggleCart={handleToggleCart}
        deleted={deleted}
        ref={cartBtnRef}
      />
      {cartOpen && (
        <Cart
          amount={amount}
          deleted={deleted}
          onDeleteItem={handleDeleteItem}
          ref={cartRef}
        />
      )}
      <Product
        products={[]}
        count={count}
        onIncreaseCount={handleIncreaseCount}
        onDecreaseCount={handleDecreaseCount}
        handleSetCount={handleSetCount}
        noItem={noItem}
        // setNoItem={setNoItem}
      />
    </>
  );
}

export default App;
