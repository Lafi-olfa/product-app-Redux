import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "./actionType";

const init = {
  products: [
    {
      id: Math.random(),
      name: "pull",
      url: "https://www.niagara-pressing.fr/wp-content/uploads/2019/08/Pull.jpg",
      price: "20dt",
      rate: 3,
    },
    {
      id: Math.random(),
      name: "shoes",
      url: "https://rukminim1.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      price: "20dt",
      rate: 2,
    },
    {
      id: Math.random(),
      name: "shoes jordan",
      url: "https://www.highsnobiety.com/static-assets/thumbor/sIXrFE4Vq0rXm84fOoldYg2RGSc=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/01/15142607/valuable-Jordan-sneakers-ebay-main1.jpg",
      price: "20dt",
      rate: 4,
    },
    {
      id: Math.random(),
      name: "pull",
      url: "https://shopa.tn/wp-content/uploads/2022/11/pull-rouge.jpg",
      price: "20dt",
      rate: 3,
    },
  ],
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((el) => el.id !== payload),
      };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, payload] };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };

    default:
      break;
  }

  return state;
};
export default reducer;
