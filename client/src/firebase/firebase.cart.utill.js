import { firestore } from './firebase.utill';

/**
 * Add cartitem to firebase
 * @param  {Object} userAuth user data from firebase
 * @param  {Object} cartItemData cartitem data
 */
export const addCartItemsToDocument = async (userAuth, newItem) => {
  if (!userAuth) return;

  const cartRef = firestore.doc(`usersCart/${userAuth.uid}`);
  const cartSnapShot = await cartRef.get();
  const cartData = cartSnapShot.data();

  const existsItemIndex = cartData.items.findIndex(
    item => item.id === newItem.id
  );

  try {
    if (existsItemIndex !== -1) {
      const existData = cartData.items[existsItemIndex];
      const cloneArray = [...cartData.items];
      cloneArray[existsItemIndex] = {
        ...existData,
        quantity: existData.quantity + 1
      };
      await cartRef.update({
        items: [...cloneArray]
      });
    } else {
      await cartRef.update({
        items: [...cartData.items, { ...newItem, quantity: 1 }]
      });
    }
  } catch (error) {
    console.log("addCartItems is error", error.message);
  }

  return cartRef;
};

export const removeCartItemsFromFireStore = async (userAuth, newItem) => {
  const cartRef = firestore.doc(`usersCart/${userAuth.uid}`);
  const cartSnapShot = await cartRef.get();
  const cartData = cartSnapShot.data();

  const existsItemIndex = cartData.items.findIndex(
    item => item.id === newItem.id
  );

  const existData = cartData.items[existsItemIndex];
  const cloneArray = [...cartData.items];
  cloneArray[existsItemIndex] = {
    ...existData,
    quantity: existData.quantity > 0 ? existData.quantity - 1 : existData.quantity
  };
  await cartRef.update({
    items: [...cloneArray]
  });
}

export const fetchCartItemsFromFirestore = async (userAuth) => {
  const cartRef = firestore.doc(`usersCart/${userAuth.uid}`);
  const cartSnapShot = await cartRef.get();
  const cartData = await cartSnapShot.data();
  return cartData.items;
}
