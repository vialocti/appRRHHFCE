import { configureStore } from "@reduxjs/toolkit";

import agenteReducer from "./agente-slice";


export const store= configureStore({
    reducer:{
        agente:agenteReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})

