import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
import ErrorCmp from './pages/Error.vue'

// const Cars = resolve => {
//     require.ensure(['./pages/Cars'], () => {
//         resolve(
//             require('./pages/Cars.vue')
//         )
//     })
// }

export default new VueRouter({
    routes: [
        { path: '', component: Home },
        { path: '/cars', component: Cars, name: 'cars' },
        {
            path: '/car/:id', component: Car, children: [{
                path: 'full',
                component: CarFull,
                name: 'carFull',
                beforeEnter(to, from, next) {
                    console.log('wtf', 'beforeEnter')
                    next()
                    // if(true){
                    //     next(true)
                    // }else{
                    //     next(false)
                    // }
                }
            }]
        },
        { path: '/none', redirect: '/' },
        { path: '/ccc', redirect: { name: 'cars' } },
        { path: '*', component: ErrorCmp }
    ],
    mode: 'history',
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition
        }

        if (to.hash) {
            return { selector: to.hash }
        }
        return {
            x: 0,
            y: 0
        }
    }
})