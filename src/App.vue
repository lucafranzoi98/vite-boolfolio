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
            projects: []
        }
    },
    mounted() {
        axios
            .get(this.base_link + 'api/projects')
            .then(response => {
                this.projects = response.data.result.data;
                console.log(this.projects);
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
                

                <ProjectCard :image="project.image"
                :base_link="base_link"
                :title="project.title"
                :type="project.type"
                :description="project.description"
                :code_link="project.code_link"
                :preview_link="project.preview_link"
                :technologies="project.technologies"
                ></ProjectCard>
            </div>
        </div>
    </div>
</template>
