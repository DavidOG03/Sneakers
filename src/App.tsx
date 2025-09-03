import Navbar from "./components/navbar";
import Product from "./components/product";
import "./app.css";
import Cart from "./components/cart";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  // const [noItem, setNoItem] = useState<boolean>(false);
  const [deleted, setDeleted] = useState(false);

  const totalSneakers = 10;
  const remaining = totalSneakers - amount;

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncreaseCount = () => {
    if (count < remaining) {
      setCount((prev) => prev + 1);
    } else {
      toast.info("Not enough sneakers left!");
    }
  };

  const handleSetCount = () => {
    if (count === 0) {
      toast.info("Select at least 1 sneaker.");
      return;
    }

    if (count <= remaining) {
      setAmount((prev) => prev + count);
      setCount(0);

      if (count > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      if (count === remaining) {
        toast.info("No more Sneakers left");
      }
    } else {
      toast.info("Not enough sneakers left!");
    }

    setDeleted(false);
  };

  const handleToggleCart = () => {
    setCartOpen(!cartOpen);
  };

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
      <ToastContainer />
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
        // noItem={noItem}
        // setNoItem={setNoItem}
      />
    </>
  );
}

export default App;
