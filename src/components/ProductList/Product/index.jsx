import './index.css';
import { useShoppingCartListDispatch } from '@/hooks/useShoppingCartListContext.jsx';

export default function Product({ item }) {
  const shoppingCartListDispatch = useShoppingCartListDispatch();
  function handleClick() {
    shoppingCartListDispatch({
      type: 'add',
      product: {
        ...item,
      },
    });
  }
  return (
    <div className="product flex-none mx-10 mb-10">
      <div className="product__img mb-10">图片</div>
      <div className="flex">
        <div className="product-name flex-none mr-10 text-line-overflow-1">
          {item.name}
        </div>
        <div className="flex-1 mr-10 text-right f-18  text-line-overflow-1">
          {item.price}
        </div>
        <button type="button" className="flex-none" onClick={handleClick}>
          加入购物车
        </button>
      </div>
    </div>
  );
}
