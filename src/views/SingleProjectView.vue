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
    <div class="container mb-3">
        <div class="card mb-3 rounded-5">
            <div class="row g-0">
                <div class="col-md-4">
                    <div v-if="project.image">
                        <img v-if="project.image.includes('http')" class="img-fluid rounded-start-5" :src="project.image">
                        <img v-else="!project.image.includes('http')" class="img-fluid rounded-start-5"
                            :src="base_link + 'storage/' + project.image">
                    </div>
                    <div v-else class="m-3">N/A</div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <h6 class="card-subtitle text-muted mb-2" v-if="project.type">
                            {{ project.type.name }}
                        </h6>
                        <p class="card-text">{{ project.description }}</p>

                        <div>Code link:
                            <a :href="project.code_link">{{ project.code_link }}</a>
                        </div>

                        <div>Preview link:
                            <a :href="project.preview_link">{{ project.preview_link }}</a>
                        </div>
                        <ul class="list-unstyled d-flex gap-1 mt-3" v-if="project.technologies">
                            <li class="badge bg-dark" v-for="technology in project.technologies">{{ technology.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
