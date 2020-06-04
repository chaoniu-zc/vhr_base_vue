//列表格式
export default function Takecolums (obj){
    let cloums=[]
    for(let item in obj ){
        cloums.push({
            fixed:item=="jobid"||item=="name"?true:false,
            prop:item,
            label:obj[item],
        })
    }
    return cloums
}