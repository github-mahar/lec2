import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import { toast, Bounce } from "react-toastify";

function Spinner() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 flex items-center justify-center bg-black/20 z-50 min-h-full"
    >
      <div className="relative">
        <div className="relative w-32 h-32">
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm" />
      </div>
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toastOptions = {
    position: "top-right",
    theme: "colored",
    transition: Bounce,
  };

  const addToCart = useCallback((product) => {
  try {
    // Load cart from localStorage or initialize
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    // Update quantity if product exists, otherwise add new
    if (cart[product.id]) {
      cart[product.id].quantity += 1;
    } else {
      cart[product.id] = { ...product, quantity: 1 };
    }

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`"${product.title}" added to cart`, {
      ...toastOptions,
      autoClose: 3000,
    });
  } catch (err) {
    toast.error("Failed to add product to cart", toastOptions);
  }
}, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Something went wrong while fetching product details.");
        toast.error("Unable to load product details", toastOptions);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Spinner />;

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-primary text-buttontext rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!product) return null;

  const handleAddToCart = () => addToCart(product);

  return (
    <div className="flex items-center justify-center md:mt-20 flex-wrap md:flex-nowrap min-h-full bg-background">
      <div className="border-r-4 border-gray-600 border-t-4 p-4 rounded-lg shadow-lg m-10 bg-buttonbg">
        <img
          src={product.image}
          alt={product.title}
          className="w-80 object-contain rounded-lg"
        />
      </div>
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mt-4 text-text">{product.title}</h1>
        <p className="text-text mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-4 text-accent">${product.price}</p>
        <button
          className="mt-4 px-4 py-2 bg-buttonbg text-text rounded-lg"
          onClick={handleAddToCart}
          disabled={loading}
        >
          Add to Cart
        </button>
        <button className="mt-4 px-4 py-2 bg-primary text-buttontext rounded-lg m-3">
          Buy Now
        </button>
      </div>
    </div>
  );
}
