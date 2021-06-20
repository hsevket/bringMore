const STORAGE_KEY = "Current Order";

export const getCartItems = () => {
  
    const cartStorage = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(cartStorage) || [];
  
};

export const addToCart = (item) => {
  const cartStorage = getCartItems();
  if(cartStorage.filter(e => e.name === item.name).length > 0){
    const itemIndex = cartStorage.findIndex(x => x.name === item.name);
    cartStorage[itemIndex].quantity += 1;
  }else{
    cartStorage.push({...item, quantity: 1 });
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartStorage));
};

export const removeFromCart = (name) => {
  const cartStorage = getCartItems();
  const filteredCart = cartStorage.filter((c) => c.name !== name);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCart));
  return filteredCart;
};

export const increaseQuantity = (name) => {
  const cartStorage = getCartItems();
  const itemIndex = cartStorage.findIndex(x => x.name === name);
  cartStorage[itemIndex].quantity += 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartStorage));
};
export const decreaseQuantity = (name) => {

  const cartStorage = getCartItems();
  const itemIndex = cartStorage.findIndex(x => x.name === name);
  if(cartStorage[itemIndex].quantity> 1){
    cartStorage[itemIndex].quantity -= 1;
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartStorage));
};

export const calculateTotal = () => {
  const cartStorage = getCartItems();
  return cartStorage.reduce((acc, current) => acc + (current.quantity * current.qty), 0);
}