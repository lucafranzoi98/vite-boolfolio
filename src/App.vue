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

    <div class="container">
        <div class="row row-cols-3 g-3">
            <div class="col" v-for="project in projects">
                <div class="card h-100">
                    <img v-if="project.image.includes('http')" class="card-img-top" :src="project.image">
                    <img v-else-if="!project.image.includes('http')" class="card-img-top" :src="base_link + 'storage/' + project.image">
                    <div v-else class="m-3">N/A</div>
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <h6 class="card-subtitle text-muted mb-2" v-if="project.type">
                            {{ project.type.name }}
                        </h6>
                        <p class="card-text">{{ project.description }}</p>
                        <div>
                            <span>Code link: </span>
                            <a :href="project.code_link" target="_blank" class="card-link">{{ project.code_link }}</a>
                        </div>
                        <div>
                            <span>Preview link: </span>
                            <a :href="project.preview_link" target="_blank" class="card-link">{{ project.preview_link }}</a>
                        </div>
                        <ul class="list-unstyled d-flex gap-1 mt-3" v-if="project.technologies">
                            <li class="badge bg-dark" v-for="technology in project.technologies">{{ technology.name }}</li>
                        </ul>

                    </div>
                </div>

                <!-- <ProjectCard  :title="project.title" :type="project.type ? project.type.name : ''" :description="project.description" :code_link="project.code_link" :preview_link="project.preview_link" :technologies="project.technologies" :technology_name="technology.name"></ProjectCard> -->
            </div>
        </div>
    </div>
</template>
