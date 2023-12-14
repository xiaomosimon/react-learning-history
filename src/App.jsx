import './App.css';
import ShoppingCart from './components/ShoppingCart/index.jsx';
import ProductList from './components/ProductList/index.jsx';
import { ShoppingCartListProvider } from './hooks/useShoppingCartListContext.jsx';
function App() {
  return (
    <ShoppingCartListProvider>
      <div className="flex justify-between items-center">
        <h1 className="flex-none">购物天堂</h1>
        <ShoppingCart />
      </div>
      <ProductList />
    </ShoppingCartListProvider>
  );
}

export default App;
