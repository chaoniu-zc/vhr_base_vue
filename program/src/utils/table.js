
//列表删除
export function deletedata(params, data) {
    if (Array.isArray(params)) {
        params.map((item, index) => {
            data.forEach(it => {
                if (it['jobid'] == item ||it['accountid']==item) {
                    data.splice(it, 1)
                }
            })
        })
    }
}
//列表编辑
export function tableedit(params, data) {
    console.log(data,'我收到啥了')
    data.forEach((item, index) => {
        if (params['jobid']?item['jobid']== params['jobid']:item['accountid']== params['accountid']) {
            data[index] = params;
        }
    })
}
//列表查询
export function query(params, data){
    Object.keys(params).map(item=>{
        data=data.filter(it=>{
            return it[item]==params[item]
        })
    })
    return data
}