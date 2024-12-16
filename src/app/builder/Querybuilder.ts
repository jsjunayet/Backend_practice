import { Query } from "mongoose";

class Querybuilder<T>{
public QueryModel: Query<T[], T>;
public query:Record<string, T>;
constructor( QueryModel:Query<T[], T>, query:Record<string,T> ){
this.QueryModel = QueryModel;
this.query= query
}
searching(searchArray:string[]){
    const searchTerm = this.query.searchTerm
    if(searchTerm){
        this.QueryModel = this.QueryModel.find({
            $or:searchArray.map((fields)=>({
                [fields]:{$regex:searchTerm, $options:'i'}
            }))
        })
    }
    return this
}
Filtering(){
    const queryObj = {...this.query}
    const ExculsiveFeild =["searchTerm", "sort", "limit", "page", "field"]
    ExculsiveFeild.forEach((el)=>delete queryObj[el])
    this.QueryModel= this.QueryModel.find(queryObj)
    return this
}
sorting(){
    let sort = "-createdAt"
 if(this.query.sort){
  sort = this.query.sort as string
 }
 this.QueryModel =this.QueryModel.sort(sort)
 return this
}
pagination(){
    const page = Number(this.query.page) || 1
 const limit = Number(this.query.limit) || 10
 const skip = (page-1)*limit
 this.QueryModel = this.QueryModel.skip(skip).limit(limit)
 return this
}
}
export default Querybuilder
