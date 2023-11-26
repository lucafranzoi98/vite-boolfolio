<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsView',
    components: {
        ProjectCard
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
        call($url) {
            axios
                .get($url)
                .then(response => {
                    this.projects = response.data.result.data;
                    this.totalPages = response.data.result.last_page;
                })
                .catch(error => {
                    console.error(error);
                })
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
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
            this.scrollToTop();
        },
        paginationNext() {
            this.activePage++;
            if (this.activePage > this.totalPages) {
                this.activePage = this.totalPages;
                this.paginationByNumber(this.totalPages);
            } else {
                this.paginationByNumber(this.activePage);
            }
            this.scrollToTop();
        },
    },
    mounted() {
        this.call(this.base_link + 'api/projects')
    }
}
</script>

<template>
    <div class="container pb-5">
        <h1 class="mb-3 text-white bauhaus">All projects</h1>

        <div>
            <div class="row row-cols-3 g-5">
                <div class="col" v-for="project in projects">
                    <ProjectCard :project="project"
                    :base_link="base_link"></ProjectCard>
                </div>
            </div>

            <div class="d-flex justify-content-between text-white mt-5 fs-2">
                <i class="fa-solid fa-circle-chevron-left" @click="paginationPrev()" role="button"></i>
    
                <i class="fa-solid fa-circle-chevron-right" @click="paginationNext()" role="button"></i>
            </div>

        </div>
    </div>
</template>
