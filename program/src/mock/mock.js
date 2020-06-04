import Mock from 'mockjs'
import eleminfo from './mockData/base.json'
import companyinfo from './mockData/company.json'
import persioninfo from './mockData/persion.json'
import { deletedata, tableedit, query } from '../utils/table'
// 数据更改
function putres(options, data) {
    if (options) {
        options = JSON.parse(options);
        switch (options.type) {
            case 'delete':
                // 删除数据
                deletedata(options.data, data);
                break;
            case 'edit':
                // 编辑数据
                tableedit(options.data, data);
                break;
            // 查询数据
            case 'query':
                return query(options.data, data)
        }
    }
    return data
}
//账套数据更改
function auntchange(){
    persioninfo.map(item=>{
        companyinfo.forEach(it=>{
            if(item['accountid']==it['accountid']){
                item['accountbelong']=it['accountname']+'账套'
            }
        }) 
    })

    return persioninfo
}
// auntchange();

// 员工基本数据接口
export const elemdata = Mock.mock('/elembase', (options) => {
    return putres(options.body, eleminfo.base)
})
// 员工培训接口
export const elempei = Mock.mock('/elempei', (options) => {
    return putres(options.body, eleminfo.height.peixun)
})
// 员工考勤接口
export const elemkao = Mock.mock('/elemkao', (options) => {
    return putres(options.body, eleminfo.height.kaoqin)
})
// 员工奖惩接口
export const elemjiang = Mock.mock('/elemjiang', (options) => {
    return putres(options.body, eleminfo.height.jiangcheng)
})
// 员工调薪接口
export const elemtiao = Mock.mock('/elemtiao', (options) => {
    return putres(options.body, eleminfo.height.tiaoxing)
})
// 员工调动接口
export const elemdiao = Mock.mock('/elemdiao', (options) => {
    return putres(options.body, eleminfo.height.diaodong)
})
// 工资账套接口
export const companyaccount = Mock.mock('/company', (options) => {
    return putres(options.body, companyinfo)
})
// 员工账套接口
export const persionaccount = Mock.mock('/persion', (options) => {
    const persiondata=auntchange()
    console.log(persioninfo)
    return putres(options.body,persiondata)
})

