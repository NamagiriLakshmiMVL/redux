import './App.css';
import ProductList from './ProductList';
import { Routes, Route, useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Cart from './Cart';
import Header from './Header';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

export const PRODUCT_LIST = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "quantity": 0,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://m.media-amazon.com/images/I/61Cu-EN6F5L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "quantity": 0,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://m.media-amazon.com/images/I/61xMF4RwVcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "quantity": 0,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://m.media-amazon.com/images/I/41U5jJ9rkeL._SX300_SY300_QL70_FMwebp_.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/3/1.jpg"
    ]
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "quantity": 0,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://m.media-amazon.com/images/I/41Z4OkznV9S._SX300_SY300_QL70_FMwebp_.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ]
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "quantity": 0,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://m.media-amazon.com/images/I/61jJeZBliWL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
  }
]


function App() {
const cart = useSelector((store)=>store.cart.items)
  const navigate = useNavigate()

  return (
    <div>
      <Header />
    
          <AppBar position="static" >
            <Toolbar >
              
              <Button color="inherit" onClick={() => navigate("/")}>ProductList</Button>

              <Button color="inherit" onClick={() => navigate("/cart")}>Cart ({cart.length})  <IconButton>
                <ShoppingCartIcon />
              </IconButton></Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

        
    </div>

  );
}

export default App;
