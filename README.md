A modern React + TypeScript e-commerce product catalog application with robust error handling, pagination, filtering, and search capabilities. Built to handle unreliable API conditions gracefully.

## 🚀 Features

- **Product Catalog**: Browse through 154+ premium products with responsive grid layout
- **Advanced Filtering**: Filter products by category (Electronics, Clothing, Home, Outdoors)
- **Real-time Search**: Search products by name or description
- **Pagination**: Navigate through products with an intuitive pagination system (12 items per page)
- **Error Handling**: Graceful handling of API failures with retry mechanism
- **Loading States**: Smooth loading indicators for better UX
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript support for robust code
- **Modern UI**: Glass-morphism effects with smooth animations using Framer Motion

## 🛠️ Tech Stack

- **Framework**: React 19.2.4
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 8.0.1
- **Styling**: Tailwind CSS 3.4.19
- **Animation**: Framer Motion 12.38.0
- **Icons**: Lucide React 1.7.0
- **Linting**: ESLint 9.39.4

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd react-typeScript-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal)


## 🏗️ Project Structure

```
react-typeScript-main/
├── src/
│   ├── components/
│   │   ├── Pagination.tsx      # Pagination component
│   │   ├── ProductCard.tsx     # Individual product card with cart functionality
│   │   └── ProductGrid.tsx     # Responsive product grid layout
│   ├── services/
│   │   └── api.ts              # API service with mock flaky endpoint
│   ├── types/
│   │   └── product.ts          # TypeScript type definitions
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── DECISIONS.md              # Technical decisions and rationale
├── package.json              # Project dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for demonstration purposes.

## 🙏 Acknowledgments

- Product images from [Picsum Photos](https://picsum.photos/)
- Icons from [Lucide Icons](https://lucide.dev/)
- Built as a technical assessment demonstrating React, TypeScript, and error handling best practices


