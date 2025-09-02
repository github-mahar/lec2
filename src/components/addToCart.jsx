import React, { useState, useEffect } from 'react'

export default function AddToCart() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(storedCart)
  }, [])


    function updateCart(updatedCart) {
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }


  function handleRemove(id) {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }


    function handleIncrease(id) {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    )
    updateCart(updatedCart)
  }


  function handleDecrease(id) {
    const updatedCart = cart
      .map(item =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) - 1 } : item
      )
      .filter(item => item.quantity > 0) // remove if quantity becomes 0
    updateCart(updatedCart)
  }
  return (
    <div className='min-h-screen p-10'>
      <div className=''>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold text-gray-700'>Shopping Cart</h2>
          <span className='text-gray-500'>{cart.length} items</span>
        </div>

        <div className='space-y-4'>
          {cart.length === 0 ? (
            <p className='text-gray-500'>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className='flex items-center space-x-2 bg-white p-4 rounded-lg shadow-lg'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-16 h-16 rounded'
                />
                <div className='flex-1'>
                  <h3 className='text-lg font-semibold text-gray-700'>
                    {item.title}
                  </h3>
                  <p className='text-gray-500'>${item.price}</p>
                  <span className='text-gray-500'>
                    Quantity: {item.quantity}
                  </span>
                </div>
                <div className='text-lg font-semibold text-gray-700'>
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                  <div>
                  <button
                    className='mt-2 px-2 py-1 bg-green-500 hover:bg-green-700 text-white rounded'
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                    <button
                      className='ml-2 mt-2 px-2 py-1 bg-red-500 hover:bg-red-700 text-white rounded'
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  <button
                    className='mt-2 px-2 py-1 bg-yellow-500 hover:bg-yellow-700 text-white rounded ml-2'
                    onClick={() => handleDecrease(item.id)}
                  >
                    -
                  </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className='flex justify-between items-center pt-4 border-t bg-white p-4 rounded-lg shadow-lg mt-6'>
          <span className='text-lg font-semibold text-gray-700'>Total</span>
          <span className='text-lg font-semibold text-gray-700'>
            $
            {cart
              .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
              .toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
