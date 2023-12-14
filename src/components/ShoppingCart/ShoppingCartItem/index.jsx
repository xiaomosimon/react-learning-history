import './index.css';
import { useShoppingCartListDispatch } from '@/hooks/useShoppingCartListContext.jsx';
export default function ShoppingCartItem({ item }) {
  const shoppingCartListDispatch = useShoppingCartListDispatch();
  return (
    <div className="shopping-cart-item flex items-center mb-10 w-100 f-14">
      <span className="shopping-cart-item__span flex-none mr-10">
        {item.name}
      </span>
      <span className="shopping-cart-item__span flex-1 text-right text-line-overflow-1">
        {item.price}
      </span>
      <span className="shopping-cart-item__span flex-none mr-10">
        * {item.num}
      </span>
      <button
        type="button"
        className="flex-none"
        onClick={() =>
          shoppingCartListDispatch({ type: 'delete', id: item.id })
        }
      >
        删除
      </button>
    </div>
  );
}
