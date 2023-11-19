import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "@/pages/home/HomePage.vue";
import CompanyIntro from "@/pages/home/CompanyIntro.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', routes: [
        {
            path: '/',
            name: '/home',
            component: HomePage
        },
        {
            path: '/about',
            name: '/about',
            component: CompanyIntro
        }
    ]
});