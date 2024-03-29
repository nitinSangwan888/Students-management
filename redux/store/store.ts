import { loginUserApi, registerUserApi } from './../StudentApi/userApi';
import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from '../features/darkmode/darkmodeSlice'
import { allStudentApi ,createStudentApi, deleteStudentApi, updateStudentApi} from "../StudentApi/StudentApi";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    [allStudentApi.reducerPath]: allStudentApi.reducer,
    [createStudentApi.reducerPath]: createStudentApi.reducer,
    [registerUserApi.reducerPath]: registerUserApi.reducer,
    [loginUserApi.reducerPath]: loginUserApi.reducer,
    [deleteStudentApi.reducerPath]: deleteStudentApi.reducer,
    [updateStudentApi.reducerPath]: updateStudentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(allStudentApi.middleware)
  .concat(createStudentApi.middleware).concat(registerUserApi.middleware)
  .concat(loginUserApi.middleware).concat(updateStudentApi.middleware).concat(deleteStudentApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
