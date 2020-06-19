import VueRouter from 'vue-router'
import HomePage from '../components/04_templates/HomePage'
import AboutPage from '../components/04_templates/AboutPage'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage }
]

const router = new VueRouter({
    routes
})

export default router;