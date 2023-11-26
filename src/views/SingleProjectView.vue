<script>
import axios from 'axios';

export default {
    name: 'SingleProjectView',
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
    <div class="container text-white pb-5">
        <h1 class="bauhaus my-size jumbo mb-5">{{ project.title }}</h1>
        <div class="row row-cols-md-2 g-5">
            <div class="col-md-7">
                <div v-if="project.image">
                    <img v-if="project.image.includes('http')" class="rounded-5 w-100" :src="project.image">
                    <img v-else="!project.image.includes('http')" class="rounded-5 w-100"
                        :src="base_link + 'storage/' + project.image">
                </div>
                <div v-else class="m-3">N/A</div>

            </div>
            <div class="col-md-5">                
                    <h4 class="text-uppercase mb-2 fst-italic" v-if="project.type">{{ project.type.name }}</h4>
                    <ul v-if="project.technologies" class="list-unstyled mb-4">
                        <li v-for="technology in project.technologies" class="badge bg-light text-dark me-2">{{ technology.name }}</li>
                    </ul>
                    <p>{{ project.description }}</p>
                    <a :href="project.code_link" class="text-secondary fs-3 me-3"><i class="fa-brands fa-github icon-link"></i></a>
                    <a :href="project.preview_link" class="text-secondary fs-4"><i class="fa-solid fa-desktop icon-link"></i></a>
            </div>

        </div>

    </div>
</template>
