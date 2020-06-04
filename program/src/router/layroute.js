import Layout from '../component/layout/layout'
import Baseinfo from '../component/eleminfo/baseelem'
import Home from '../component/home/home'
import Diao from '../component/peopledo/diaodong'
import Jiang from '../component/peopledo/jiangcheng'
import Tiaoxin from '../component/peopledo/tiaoxin'
import Kaoqin from '../component/peopledo/kaoqin'
import Peixun from '../component/peopledo/peixun'
import Look from '../component/statistics/lookresult'
import Company from '../component/account/company'
import Persion from '../component/account/persion'
import Admin from '../component/sytemset/adminer'
import Unit from '../component/sytemset/unit'
export default {
    path: '/home',
    component: Layout,
    children: [
        { path: '/home', component: Home },
        { path: '/baseinfo', component: Baseinfo },
        { path: '/diao', component: Diao },
        { path: '/jiang', component: Jiang },
        { path: '/tiaoxin', component: Tiaoxin },
        { path: '/kaoqin', component: Kaoqin },
        { path: '/peixun', component: Peixun },
        { path: '/look', component: Look },
        { path: '/company', component: Company },
        { path: '/persion', component: Persion },
        { path: '/admin', component: Admin },
        { path: '/unit', component: Unit },
    ]
}