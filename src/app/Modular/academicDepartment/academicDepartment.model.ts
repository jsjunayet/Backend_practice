
import { model, Schema } from "mongoose";
import { TacademicDepartment } from "./academicDepartment.interface";
import AppErrors from "../../errors/AppErrors";


const academicDepartmentSchema = new Schema<TacademicDepartment>({
    name:{
        type:String,
        unique:true,
        required:[true, "please enter Academic Department Name"]
    },
    academicFaculty:{
        type:Schema.Types.ObjectId,
        required:[true, "please enter Academic Department ID"],
        ref:"AcademicFaculty"
    }
},{
    timestamps:true
}
)


academicDepartmentSchema.pre("save", async function (next){
    const existAcadenucDepartment = await AcademicDepartment.findOne({name:this.name})
    if(existAcadenucDepartment){
        throw new AppErrors(400, "This Academic Department name is exists!")
    }
    next()
})
academicDepartmentSchema.pre("findOneAndUpdate", async function (next){
    const query = this.getQuery()
    const existAcademicDepartment = await AcademicDepartment.findOne(query)
    if(!existAcademicDepartment){
        throw new AppErrors(400, "This Academic Department ID is not exists!")
    }
    next()
})

export const AcademicDepartment = model<TacademicDepartment>("AcademicDepartment", academicDepartmentSchema)