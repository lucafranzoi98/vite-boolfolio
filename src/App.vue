<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        ProjectCard,
        AppFooter
    },
    data() {
        return {
            base_link: 'http://127.0.0.1:8000/',
            pagination_base_link: 'http://127.0.0.1:8000/api/projects',
            projects: [],
            activePage: 1,
            totalPages: null
        }
    },
    methods: {
        paginationByNumber($page) {
            axios
                .get(this.base_link + 'api/projects?page=' + $page)
                .then(response => {
                    this.projects = response.data.result.data;
                })
                .catch(error => {
                    console.error(error);
                })
            this.activePage = $page;
        },
        paginationPrev() {
            this.activePage--;
            if (this.activePage < 1) {
                this.activePage = 1;
                this.paginationByNumber(1);
            } else {
                this.paginationByNumber(this.activePage);
            }
            console.log(this.activePage);
        },
        paginationNext() {
            this.activePage++;
            if (this.activePage > this.totalPages) {
                this.activePage = this.totalPages;
                this.paginationByNumber(this.totalPages);
            } else {
                this.paginationByNumber(this.activePage);
            }
            console.log(this.activePage);
        }
    },
    mounted() {
        axios
            .get(this.base_link + 'api/projects')
            .then(response => {
                this.projects = response.data.result.data;
                this.totalPages = response.data.result.last_page;
            })
            .catch(error => {
                console.error(error);
            })
    }
}
</script>

<template>
    <AppHeader></AppHeader>


    <router-view></router-view>
    <AppFooter></AppFooter>
</template>
