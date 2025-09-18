import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddToCart from "../src/components/addToCart";

beforeEach(() => {
  localStorage.clear();
});

test("renders empty cart message", () => {
  render(<AddToCart />);
  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});

test("renders items from localStorage", () => {
  const mockCart = [
    { id: 1, title: "Laptop", price: 1000, quantity: 1, image: "laptop.png" },
    { id: 2, title: "Phone", price: 500, quantity: 2, image: "phone.png" }
  ];
  localStorage.setItem("cart", JSON.stringify(mockCart));

  render(<AddToCart />);

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Phone")).toBeInTheDocument();

  // check the Total section specifically
  expect(screen.getAllByText("$2000.00")[0]).toBeInTheDocument();
});

test("increases item quantity when + button is clicked", () => {
  const mockCart = [{ id: 1, title: "Laptop", price: 1000, quantity: 1, image: "laptop.png" }];
  localStorage.setItem("cart", JSON.stringify(mockCart));

  render(<AddToCart />);

  fireEvent.click(screen.getByText("+"));

  expect(screen.getByText(/Quantity: 2/i)).toBeInTheDocument();
  // Use getAllByText because both item total and cart total will show $2000.00
  expect(screen.getAllByText("$2000.00").length).toBeGreaterThanOrEqual(1);
});

test("decreases item quantity when - button is clicked", () => {
  const mockCart = [{ id: 1, title: "Laptop", price: 1000, quantity: 2, image: "laptop.png" }];
  localStorage.setItem("cart", JSON.stringify(mockCart));

  render(<AddToCart />);

  fireEvent.click(screen.getByText("-"));

  expect(screen.getByText(/Quantity: 1/i)).toBeInTheDocument();
  // Now total should be $1000.00
  expect(screen.getAllByText("$1000.00").length).toBeGreaterThanOrEqual(1);
});

test("removes item when Remove button is clicked", () => {
  const mockCart = [{ id: 1, title: "Laptop", price: 1000, quantity: 1, image: "laptop.png" }];
  localStorage.setItem("cart", JSON.stringify(mockCart));

  render(<AddToCart />);

  fireEvent.click(screen.getByText(/Remove/i));

  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});
