import catchAsync from "../../utility/catchAsync";
import sendResponse from "../../utility/sendResponse";
import { academicFacultyAllservice } from "./academicFaculty.service";

const academicFacultyCreate = catchAsync(async (req, res)=>{
    const data = await academicFacultyAllservice.academicFacultyCreatefromService(req.body)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"sucessfull create AcademicFaculty",
        data:data

    })
})
const academicFacultyAllget = catchAsync(async (req, res)=>{
    const data = await academicFacultyAllservice.academicFacultyAllgetfromService()
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"sucessfull All get AcademicFaculty",
        data:data

    })
})
const academicFacultysingleGet = catchAsync(async (req, res)=>{
    const{FcaultyID} = req.params
    const data = await academicFacultyAllservice.academicFacultysingleGetfromService(FcaultyID)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"sucessfull single Get AcademicFaculty",
        data:data

    })
})
const academicFacultyUpdate = catchAsync(async (req, res)=>{
    const{FcaultyID} = req.params

    const data = await academicFacultyAllservice.academicFacultyUpdatefromService(FcaultyID,req.body)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"sucessfull Update AcademicFaculty",
        data:data

    })
})

export const academicFacultyAllContorllers ={
    academicFacultyCreate,
    academicFacultyAllget,
    academicFacultyUpdate,
    academicFacultysingleGet
}
