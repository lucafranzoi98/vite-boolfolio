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
            this.call(this.base_link + 'api/projects?page=' + $page);
            this.activePage = $page;
            this.scrollToTop();
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
    <div class="container mb-3">
        <h1 class="mb-3">All projects</h1>

        <div>
            <div class="row row-cols-3 g-3">
                <div class="col" v-for="project in projects">
                    <ProjectCard :image="project.image" :base_link="base_link" :title="project.title" :type="project.type"
                        :description="project.description" :code_link="project.code_link"
                        :preview_link="project.preview_link" :technologies="project.technologies"
                        :project_slug="project.slug"></ProjectCard>
                </div>
            </div>

            <nav class="mt-3">
                <ul class="pagination">
                    <li class="page-item" role="button">
                        <span class="page-link" @click="paginationPrev">
                            <span>&laquo;</span>
                        </span>
                    </li>
                    <li class="page-item" role="button" :class="activePage == 1 ? 'active' : ''">
                        <span class="page-link" @click="paginationByNumber(1)">1</span>
                    </li>
                    <li class="page-item" role="button" :class="activePage == 2 ? 'active' : ''">
                        <span class="page-link" @click="paginationByNumber(2)">2</span>
                    </li>
                    <li class="page-item" role="button" :class="activePage == 3 ? 'active' : ''">
                        <span class="page-link" @click="paginationByNumber(3)">3</span>
                    </li>
                    <li class="page-item" role="button">
                        <span class="page-link" @click="paginationNext">
                            <span>&raquo;</span>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
