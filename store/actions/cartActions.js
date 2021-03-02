export const addItemToCart = (newItem) => {
  const foundItem = this.items.find(
    (item) => item.productId === newItem.productId
  );
  if (foundItem) foundItem.quantity += newItem.quantity;
  else this.items.push(newItem);
};
