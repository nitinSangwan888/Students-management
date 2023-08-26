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


export const createStudentApi = createApi({
  reducerPath: "createStudentApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    createStudent: builder.mutation<Student, FormData>({
      query: (formData) => ({
        url: "/v1/create/students",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const deleteStudentApi = createApi({
  reducerPath: "deleteProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    deleteStudent: builder.mutation<Student, string>({
      query: (id) => ({
        url: `/api/v1/delete/student/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const updateStudentApi = createApi({
  reducerPath: "updateStudentApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    updateStudent: builder.mutation<Student, string>({
      query: (id) => ({
        url: `/api/v1/update/student/${id}`,
        method: "put",
      }),
    }),
  }),
});

export const { useDeleteStudentMutation } = deleteStudentApi;
export const { useUpdateStudentMutation } = updateStudentApi;
export const { useCreateStudentMutation } = createStudentApi;
export const { useGetAllStudentQuery  } = allStudentApi;
