import { useState, useRef } from 'react';
import './index.css';
import ShoppingCartItem from './ShoppingCartItem/index.jsx';
import {
  useShoppingCartListTasks,
  useShoppingCartListDispatch,
} from '@/hooks/useShoppingCartListContext.jsx';

export default function ShoppingCart() {
  const [showShoppingCartPopup, setShowShoppingCartPopup] = useState(false);
  const timer = useRef(null);
  const shoppingCartList = useShoppingCartListTasks();
  const shoppingCartListDispatch = useShoppingCartListDispatch();
  const amount = shoppingCartList.reduce(
    (source, item) => (source * 100 + item.price * item.num * 100) / 100,
    0
  );
  return (
    <div
      className="shopping-cart relative flex-none"
      onMouseEnter={() => {
        if (!showShoppingCartPopup) {
          setShowShoppingCartPopup(true);
        }
        clearTimeout(timer.current);
      }}
      onMouseLeave={() => {
        if (showShoppingCartPopup) {
          timer.current = setTimeout(() => {
            setShowShoppingCartPopup(false);
            clearTimeout(timer.current);
          }, 1000);
        }
      }}
    >
      <button type="button">购物车</button>
      <div
        style={{
          display: showShoppingCartPopup ? 'block' : 'none',
        }}
        className="shopping-cart-popup absolute"
      >
        {shoppingCartList.map((s) => {
          return <ShoppingCartItem item={s} key={s.id} />;
        })}
        <div className="mb-10">总金额：{amount}</div>
        <button
          type="button"
          className="w-100"
          onClick={() => {
            alert(`谢谢光临，总共支付` + amount);
            shoppingCartListDispatch({ type: 'clear' });
          }}
        >
          结算
        </button>
      </div>
    </div>
  );
}
