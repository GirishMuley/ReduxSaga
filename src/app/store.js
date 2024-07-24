import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import createSagaMiddleware from "@redux-saga/core";
// import cartReducer from "../features/cart/cartSlice";

import { mySaga } from "../features/cart/cartSaga";
import cartReducer from "../features/cart/cartSlice";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(mySaga);
