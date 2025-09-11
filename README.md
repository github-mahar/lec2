
# 🛒 lec2: React E-Commerce Demo

This is a modern e-commerce demo application built with **React**, **Vite**, and **Tailwind CSS**. It features product browsing, shopping cart, theme toggling, and responsive design. Products are fetched from [Fake Store API](https://fakestoreapi.com/).

## Features

- ⚡️ Fast development with Vite
- 🎨 Customizable light/dark theme (toggle in navbar)
- 🛍️ Product listing and details (from Fake Store API)
- 🛒 Shopping cart with add/remove/update quantity
- 🔄 Persistent cart (localStorage)
- 📦 Buy Now and Add to Cart actions
- 🚀 Responsive UI with Tailwind CSS
- 🔔 Toast notifications (react-toastify)
- 🧭 Routing with React Router
- 404 Not Found page

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```
App runs at [http://localhost:5173](http://localhost:5173) by default.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
	App.jsx            # Main app component, routing
	main.jsx           # Entry point, ThemeProvider, ToastContainer
	components/        # UI components (navbar, productCards, addToCart, etc.)
	Context/           # ThemeToggler context
	assets/            # Static assets (svg, etc.)
	App.css, index.css # Styles (Tailwind + custom)
public/
	nature*.jpg        # Demo images
	store-logo.png     # Store logo
	vite.svg           # Vite logo
```

## Main Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [ESLint](https://eslint.org/)

## Customization

- **Theme**: Edit colors in `src/index.css` and `tailwind.config.js`.
- **Products**: Fetched from [Fake Store API](https://fakestoreapi.com/).
- **Logo/Images**: Replace files in `public/`.

## License

This project is for educational/demo purposes.
