export type TErrorSource={
    path:string | number,
    message:string
}[];
export type TErrorGenetic ={
    statusCode:number,
    message:string,
    errorSource:TErrorSource
}