import { Student } from "../../interface/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASEURL = "http://localhost:8080/api";
export const allStudentApi = createApi({
  reducerPath: "allStudentApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    getAllStudent: builder.query<Student, void>({
      query: () => `/v1/students`,
    }),
  }),
});

export const { useGetAllStudentQuery } = allStudentApi;
