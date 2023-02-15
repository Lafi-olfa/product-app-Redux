import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FILTER_PRODUCT,
} from "./actionType";

//function js retourne type et payload
export const del = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: productId,
  };
};
export const add = (newProduct) => {
  return {
    type: ADD_PRODUCT,
    payload: newProduct,
  };
};
export const ed = (editP) => {
  return {
    type: EDIT_PRODUCT,
    payload: editP,
  };
};
export const solde = (ProductId) => {
  return {
    type: FILTER_PRODUCT,
    payload: ProductId,
  };
};
