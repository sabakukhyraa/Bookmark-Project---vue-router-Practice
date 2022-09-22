import { createRouter, createWebHashHistory } from "vue-router";
import Home from "/views/HomePage.vue"
import About from "/views/AboutPage.vue"
import Contact from "/views/ContactPage.vue"
import NewBookmark from "/views/NewBookmarkPage.vue"

const router = createRouter({
    routes: [
        {
            name: "HomePage",
            path: "/",
            component: Home
        },
        {
            name: "NewBookmarkPage",
            path: "/new",
            component: NewBookmark
        },
        {
            name: "AboutPage",
            path: "/about",
            component: About
        },
        {
            name: "ContactPage",
            path: "/contact/:userID",
            component: Contact
        },
    ],
    history: createWebHashHistory()
});


export default router