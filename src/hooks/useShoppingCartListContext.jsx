import { createContext, useContext, useReducer } from 'react';
// [
//   {
//     id: '',
//     name: '',
//     price: 0,
//     num: 0,
//   },
// ]
const ShoppingCartListContext = createContext(null);

const ShoppingCartListDispatchContext = createContext(null);

function shoppingCartListReducer(tasks, action) {
  switch (action.type) {
    case 'add': {
      const id = action.product.id;
      const foundIndex = tasks.findIndex((t) => t.id === id);
      if (foundIndex === -1) {
        action.product.num = 1;
        return tasks.concat([action.product]);
      }
      action.product.num = tasks[foundIndex].num + 1;
      return [
        ...tasks.slice(0, foundIndex),
        action.product,
        ...tasks.slice(foundIndex + 1),
      ];
    }
    case 'delete': {
      const id = action.id;
      return tasks.filter((t) => t.id !== id);
    }
    case 'clear': {
      return [];
    }
    default:
      throw new Error('不存在此操作');
  }
}

export function ShoppingCartListProvider({ children }) {
  const [tasks, dispatch] = useReducer(shoppingCartListReducer, []);

  return (
    <ShoppingCartListContext.Provider value={tasks}>
      <ShoppingCartListDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartListDispatchContext.Provider>
    </ShoppingCartListContext.Provider>
  );
}

export function useShoppingCartListTasks() {
  return useContext(ShoppingCartListContext);
}

export function useShoppingCartListDispatch() {
  return useContext(ShoppingCartListDispatchContext);
}
