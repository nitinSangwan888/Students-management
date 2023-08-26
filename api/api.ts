import axios from "axios";

 export const searchStudents = async (name: string) => {
  const res = await axios.get(
    `http://localhost:8080/api/v1/students?name=${name}`
  );
  return res.data;
};
