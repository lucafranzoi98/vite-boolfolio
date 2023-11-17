<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
    name: 'App',
    components: {
        ProjectCard,
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
    <h1 class="text-center my-3">All projects</h1>

    <div class="container mb-3">
        <div class="row row-cols-3 g-3">
            <div class="col" v-for="project in projects">


                <ProjectCard :image="project.image" :base_link="base_link" :title="project.title" :type="project.type"
                    :description="project.description" :code_link="project.code_link" :preview_link="project.preview_link"
                    :technologies="project.technologies"></ProjectCard>
            </div>
        </div>

        <nav aria-label="Page navigation" class="mt-3">
            <ul class="pagination    ">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" @click="paginationPrev">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" :class="activePage == 1 ? 'active' : ''" aria-current="page">
                    <a class="page-link" href="#" @click="paginationByNumber(1)">1</a>
                </li>
                <li class="page-item" :class="activePage == 2 ? 'active' : ''" aria-current="page">
                    <a class="page-link" href="#" @click="paginationByNumber(2)">2</a>
                </li>
                <li class="page-item" :class="activePage == 3 ? 'active' : ''" aria-current="page">
                    <a class="page-link" href="#" @click="paginationByNumber(3)">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" @click="paginationNext">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
