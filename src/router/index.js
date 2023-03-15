import Vue from "vue"
import Router from "vue-router"
import Home from "../components/Home.vue"

Vue.use(Router)


export default new Router({
    router:[
        {
            path:'/home',
            comment: Home,

        },
    ],
    mode: 'history'
})