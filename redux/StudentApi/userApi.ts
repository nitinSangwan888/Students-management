import { userResponse } from './../../interface/interface';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASEURL = "http://localhost:8080/api";
import { users } from "../../interface/interface";


export const allUserApi = createApi({
    reducerPath: "allUserApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
    endpoints: (builder) => ({
      getAllUsers: builder.query<users, void>({
        query: () => `/api/auth/users`,
      }),
    }),
  });



  export const loginUserApi = createApi({
    reducerPath: "loginUserApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
    endpoints: (builder) => ({
      loginUser: builder.mutation<userResponse, FormData>({
        query: (formData) => ({
          url: "/api/auth/login",
          method: "POST",
          body: formData,
        }),
      }),
    }),
  });

  export const registerUserApi = createApi({
    reducerPath: "registerUserApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
    endpoints: (builder) => ({
      registerUser: builder.mutation<userResponse, FormData>({
        query: (formData) => ({
          url: "/api/auth/register",
          method: "POST",
          body: formData,
        }),
      }),
    }),
  });



  export const { useGetAllUsersQuery } = allUserApi;
  export const { useRegisterUserMutation  } = registerUserApi;
  export const { useLoginUserMutation } = loginUserApi;