export const base = [
    {
        prop: "jobid",
        label: "工号"
    },
    {
        prop: "name",
        label: "姓名"
    },
    {
        prop: "age",
        label: "年龄",
    },
    {
        prop: "sex",
        label: "性别",
    },
    {
        prop: "unit",
        label: "部门"
    },
    {
        prop: "jobname",
        label: "职称"
    },
    {
        prop: "jobdata",
        label: "就职日期"
    },
    {
        prop: "jobyear",
        label: "合同年限"
    },
    {
        prop: "jobstatus",
        label: "在职状态"
    },
    {
        prop: "allgrade",
        label: "累计积分"
    },
    {
        prop: "phone",
        label: "联系电话"
    },
    {
        prop: "address",
        label: "现住址"
    },
    {
        prop: "school",
        label: "毕业院校"
    },
    {
        prop: "native",
        label: "籍贯"
    },
    {
        prop: "id",
        label: "身份证号"
    },
    {
        prop: "birthday",
        label: "出生日期"
    }
]
export const baseinfo = {
    // "elemid": "工号",
    // "elemname": "姓名",
    "jobid":"10001",
    "name":"姓名",
    "age": "年龄",
    "sex": "性别",
    "birthday": "出生日期",
    "address":'住址',
    "phone":'电话',
    "id": "身份证号",
    "native": "籍贯",
    "school": "毕业院校",
    // "unitname": "部门",
    // "jobname": "职称",
    // "intojob": "就职日期",
    "unit":"部门",
    "jobname":"职称",
    "jobdata":"就职日期",
    "jobyear": "合同年限",
    "jobstatus": "在职状态",  
}
// 培训
export const peixun = {
    "jobid": "工号",
    "name": "姓名",
    "sex": "性别",
    "unitP": "培训部门",
    "startdate": "开始日期",
    "jobnameP": "培训岗位",
    "enddate": "结束时间",
    "statusP": "培训状态",
    "resultP": "培训成绩"
}
// 奖惩
export const jiangcheng = {
    "jobid": "工号",
    "name": "姓名",
    "sex": "性别",
    "unit": "部门",
    "Jdate": "奖罚时间",
    "type": "奖罚类别",
    "reason": "理由",
    "grade": "奖罚积分",
    "allgrade": "总积分"
}
// 调动
export const diaodog = {
    "jobid": "工号",
    "name": "姓名",
    "sex": "性别",
    "Ddate": "调动时间",
    "oldunit": "调前部门",
    "newunit": "调后部门",
    "reason": "调动理由"
}
// 调薪
export const tiaoxing = {
    "jobid": "工号",
    "name": "姓名",
    "sex": "性别",
    "Tdate": "调薪时间",
    "oldunit": "调前底薪",
    "newunit": "调后底薪",
    "reason": "调薪理由"
}
// 考勤
export const kaoqin = {
    "jobid": "工号",
    "name": "姓名",
    "sex": "性别",
    "date": "日期",
    "unit": "部门",
    "Cday": "迟到天数",
    "Qday": "请假天数",
    "Xday": "休假天数",
    "newstats": "当前在职状态"
}
// 信息表名称
export const sheetname={
    basedata:"员工基础信息表",
    jiangdata:"奖惩信息表",
    kaodata:"考勤信息表",
    diaodata:'调动信息表',
    tiaodata:'调薪信息表',
    peidata:'培训信息表'
}
// 公司账套
export const companyacc=
    {
        "accountid":"账套编号",
        "accountname":"账套名称",
        "basepay":"基本工资",
        "jiaobu":"交通补助",
        "fanbu":"饭补",
        "prize":"奖金",
        "startdate":"启用时间",
        "yanglao":"养老金",
        "yiliao":"医疗保险",
        "gongji":"公积金"
    }
//个人账套 
export const persionacc=
    {
        
        "jobid": "工号",
        "name": "姓名",
        "sex": "性别",
        "unit": "部门",
        "jobname": "职称",
        // "accountbelong": "账套部门"
    }
