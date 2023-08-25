export interface Student {
    message: string;
    success: boolean;
    status: number;
    data?: (StudentEntity)[] | null;
  }
  export interface StudentEntity {
  
    _id: string;
    photo: string;
    name: string;
    email: string;
    phone: number;
    batch: string;
    batchId: string;
    course: string;
    address: string;
    fees: number;
    __v: number;
  }
  