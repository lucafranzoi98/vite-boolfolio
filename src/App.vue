<script>
import axios from 'axios';

export default {
    name: 'App',
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
    <h1>All projects</h1>
    <ul>
        <li v-for="project in projects">
            {{ project.title }}</li>
    </ul>
</template>
