import Product from './Product/index.jsx';
const list = [
  { id: '1', name: '苹果', price: 8.88 },
  { id: '2', name: '香蕉', price: 6.66 },
  { id: '3', name: '菠萝蜜', price: 45 },
  { id: '4', name: '橘子', price: 10.48 },
  { id: '5', name: '橙子', price: 70 },
  { id: '6', name: '柚子', price: 23.5 },
  { id: '7', name: '葡萄', price: 40 },
  { id: '8', name: '梨', price: 80 },
];
export default function ProductList() {
  return (
    <div className="flex flex-wrap">
      {list.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}
