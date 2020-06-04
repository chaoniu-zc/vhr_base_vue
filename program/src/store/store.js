import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const moduleA = {
    state: {
        aaa: null,
    }
}
const moduleB = {
    state: {
        bbb: null,
    }
}
const store = new Vuex.Store({
    state: {

        // 编辑模态框
        showDlig: false,
        //编辑界面数据
        editData: null,
        // 删除指定数据
        deleteData: null,
        // 基本数据
        basedata: null,
        // 调动信息
        diaodata: null,
        // 培训信息
        peidata: null,
        // 奖惩信息
        jiangdata: null,
        // 考勤信息
        kaodata: null,
        //调薪信息
        tiaodata: null,
        //设置综合信息查询参数
        setquerydata: null,
        // 公司账套信息
        companydata: [],
        //个人账套信息
        persiondata: null,
        //部门对应的职位信息
        unitjob:[],
        // 部门信息
        unitinfo:null,
        // 职位信息
        jobinfo:null
    },
    mutations: {
        // 展示table列表数据
        getTabledata(state, { who, data }) {
            if (who == 'persiondata' && state.companydata) {
                data.map(item => {
                    state.companydata.forEach(it => {
                        if (item['accountid'] == it['accountid']) {
                            item['accountbelong'] = it['accountname'] + '账套'
                        }
                    })
                })
            }
            state[who] = data;
        },
        // 获取编辑模态框改变
        Showdlig(state, show) {
            state.showDlig = show
        },
        //设置编辑界面数据
        Editdata(state, editdata) {
            state.editData = editdata.data;
        },
        // 获取要删除的指定数据
        Deletedata(state, delteData) {
            state.deleteData = delteData
        },
        // 综合信息查询设置查询参数
        Setquerylabel(state, setdata) {
            state.setquerydata = setdata
        }
    },
    actions: {
        // 获取列表数据
        Suredeltet({ commit }, payload) {
            axios({ ...payload.http })
             
                .then(res => {   console.log(res)
                    commit(
                        'getTabledata',
                        {
                            who: payload.who,
                            data: res.data
                        })
                }).catch(err => {
                    console.log('失败了吗？')
                    console.log(err)
                })
        },
        // 设置综合信息参数参数
        Setquery({ commit }, payload) {
            commit('Setquerylabel', payload,payload.who)
        }
    }
})
export default store