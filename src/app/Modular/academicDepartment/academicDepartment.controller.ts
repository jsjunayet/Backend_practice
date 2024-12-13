import catchAsync from "../../utility/catchAsync";
import sendResponse from "../../utility/sendResponse";
import { academicDepartmentAllservice } from "./academicDepartment.service";

const academicDepartmentCreate = catchAsync(async (req, res)=>{
    const data = await academicDepartmentAllservice.academicDepartmentCreatefromService(req.body)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"sucessfull create AcademicDepartment",
        data:data

    })
})
const academicDepartmentAllget = catchAsync(async (req, res)=>{
    const data = await academicDepartmentAllservice.academicDepartmentAllgetfromService()
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"sucessfull All get AcademicDepartment",
        data:data

    })
})
const academicDepartmentsingleGet = catchAsync(async (req, res)=>{
    const{departmentID} = req.params
    const data = await academicDepartmentAllservice.academicDepartmentsingleGetfromService(departmentID)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"sucessfull single Get AcademicDepartment",
        data:data

    })
})
const academicDepartmentUpdate = catchAsync(async (req, res)=>{
    const{departmentID} = req.params

    const data = await academicDepartmentAllservice.academicDepartmentUpdatefromService(departmentID,req.body)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"sucessfull Update AcademicFaculty",
        data:data

    })
})

export const academicDepartmentAllContorllers ={
  academicDepartmentAllget,
  academicDepartmentCreate,
  academicDepartmentUpdate,
  academicDepartmentsingleGet
}
