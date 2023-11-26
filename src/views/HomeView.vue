<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'HomeView',
    components: {
        ProjectCard
    },
    data() {
        return {
            base_link: 'http://127.0.0.1:8000/',
            projects: [],
        }
    },
    methods: {
        call($url) {
            axios
                .get($url)
                .then(response => {
                    this.projects = response.data.result;
                })
                .catch(error => {
                    console.error(error);
                })
        }
    },
    mounted() {
        this.call(this.base_link + 'api/projects-latest')
    }
}
</script>

<template>
    <div class="container text-light">

        <div class="jumbo row row-cols-md-2">
            <div class="col-md-8">
                <h1 class="my-name-home text-uppercase fw-bold">Luca<br>Franzoi</h1>
                <h2 class="text-uppercase fst-italic">Full-stack web developer</h2>
            </div>
            <div class="col-md-4 d-flex justify-content-end">
                <img src="../assets/img/Me2.0.png" class="my-img-home">
            </div>
        </div>


        <div class="latest-projects pb-5">
            <h2 class="mb-4">My latest projects</h2>
            <div class="row row-cols-3 g-5">
                <div class="col" v-for="project in projects">
                    <ProjectCard :image="project.image" :base_link="base_link" :title="project.title" :type="project.type"
                        :description="project.description" :code_link="project.code_link"
                        :preview_link="project.preview_link" :technologies="project.technologies"
                        :project_slug="project.slug"></ProjectCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>