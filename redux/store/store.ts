import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from '../features/darkmode/darkmodeSlice'
import { allStudentApi ,createStudentApi} from "../StudentApi/StudentApi";
export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    [allStudentApi.reducerPath]: allStudentApi.reducer,
    [createStudentApi.reducerPath]: createStudentApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(allStudentApi.middleware).concat(createStudentApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
