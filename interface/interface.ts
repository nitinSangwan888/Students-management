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
  
  export interface users {
    _id: string;
    name: string;
    email: string;
    phone: number;
    role: string;
    __v: number;
  }
  
  export interface userResponse{
      message:string,
      success:boolean,
      token?:string
      data?:users[];
  }

  export interface loginResponse{
    data:Logindata;
    error:Loginerror
  }

  interface Logindata{
    message:string;
    success:boolean;
    status:Number;
    token:string
  }
  interface Loginerror{
    message:string;
    success:boolean;
    status:Number;
  }