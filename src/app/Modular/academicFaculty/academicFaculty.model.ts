
import { model, Schema } from "mongoose";
import { TacademicFaculty } from "./academicFaculty.interface";
import AppErrors from "../../errors/AppErrors";


const academicFacultySchema = new Schema<TacademicFaculty>({
    name:{
        type:String,
        unique:true,
        required:[true, "please enter Academic Faculty Name"]
    }
},{
    timestamps:true
}
)


academicFacultySchema.pre("save", async function (next){
    const existAcadenucFaculty = await AcademicFaculty.findOne({name:this.name})
    if(existAcadenucFaculty){
        throw new AppErrors(400, "This Academic Faculty name is exists!")
    }
    next()
})
academicFacultySchema.pre("findOneAndUpdate", async function (next){
    const query = this.getQuery()
    const existAcadenucFaculty = await AcademicFaculty.findOne(query)
    if(!existAcadenucFaculty){
        throw new AppErrors(400, "This Academic Faculty ID is not exists!")
    }
    next()
})


export const AcademicFaculty = model<TacademicFaculty>("AcademicFaculty", academicFacultySchema)