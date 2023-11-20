import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from '../src/views/HomeView.vue';
import ProjectsView from '../src/views/ProjectsView.vue';
import ContactsView from '../src/views/ContactsView.vue';
import AboutView from '../src/views/AboutView.vue';
import SingleProjectView from '../src/views/SingleProjectView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: SingleProjectView
        }
    ]
})

export { router };