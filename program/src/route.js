import VueRouter from 'vue-router'
import layroute from './router/layroute'
import logroute from './router/logroute'
import Sign from './component/layout/sign'
const routes = [
    layroute,
    logroute,
    { path: '**', component: Sign }
]
const router = new VueRouter({ routes })
router.beforeEach((to, from, next) => {
    if(document.cookie||to.path=='/'){
        next(true)
    }else{
        next(false)
        router.push('/')
    }
})
export default router