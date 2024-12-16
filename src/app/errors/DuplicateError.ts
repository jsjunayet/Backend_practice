import { TErrorGenetic, TErrorSource } from "../interface/Error.interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const DuplicateError = (err:any):TErrorGenetic=>{
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
  const errorSource: TErrorSource = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;
  return{
    statusCode,
    message:"Duplicate error",
    errorSource
  }

}