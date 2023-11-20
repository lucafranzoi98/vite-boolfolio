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
    <div class="container">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sint mollitia iusto corporis saepe repellat
            vitae, labore commodi cumque sapiente qui eos in. Ipsa, rerum autem? Eaque, unde. Id, asperiores. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Vel, accusantium modi? Libero provident maiores distinctio.
            Suscipit consectetur sunt rerum eum voluptate adipisci, dolores deleniti ducimus, veritatis quod id et earum.
        </p>

        <div class="latest-projects mt-5">
            <h3 class="mb-3">Latest projects</h3>
            <div class="row row-cols-3 g-3">
                <div class="col" v-for="project in projects">
                    <ProjectCard :image="project.image" :base_link="base_link" :title="project.title" :type="project.type"
                        :description="project.description" :code_link="project.code_link"
                        :preview_link="project.preview_link" :technologies="project.technologies"></ProjectCard>
                </div>
            </div>
        </div>
    </div>
</template>
