<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    components: {
        ProjectCard
    },
    data() {
        return {
            base_link: 'http://127.0.0.1:8000/',
            project: {},
        }
    },
    methods: {
        call($url) {
            axios
                .get($url)
                .then(response => {
                    this.project = response.data.result;
                })
                .catch(error => {
                    console.error(error);
                })
        }
    },
    mounted() {
        this.call(this.base_link + 'api/projects/' + this.$route.params.slug)
    }
}
</script>

<template>
    <div class="container mb-3">

        <ProjectCard style="width: 50%;" :image="project.image" :base_link="base_link" :title="project.title" :type="project.type"
            :description="project.description" :code_link="project.code_link" :preview_link="project.preview_link"
            :technologies="project.technologies" :project_slug="project.slug"></ProjectCard>
    </div>
</template>
