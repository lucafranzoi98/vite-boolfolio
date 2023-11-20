<script>
export default {
    name: 'ProjectCard',
    props: {
        image: String,
        base_link: String,
        title: String,
        type: Object,
        description: String,
        code_link: String,
        preview_link: String,
        technologies: Array,
        project_slug: String
    }
}
</script>

<template>
    <div class="card h-100">
        <div v-if="image">
            <img v-if="image.includes('http')" class="card-img-top" :src="image">
            <img v-else="!image.includes('http')" class="card-img-top" :src="base_link + 'storage/' + image">
        </div>
        <div v-else class="m-3">N/A</div>
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <h6 class="card-subtitle text-muted mb-2" v-if="type">
                {{ type.name }}
            </h6>
            <p class="card-text">{{ description }}</p>
            <div>
                <span>Code link: </span>
                <a :href="code_link" target="_blank" class="card-link">{{ code_link }}</a>
            </div>
            <div>
                <span>Preview link: </span>
                <a :href="preview_link" target="_blank" class="card-link">{{ preview_link }}</a>
            </div>
            <ul class="list-unstyled d-flex gap-1 mt-3" v-if="technologies">
                <li class="badge bg-dark" v-for="technology in technologies">{{ technology.name }}</li>
            </ul>
        </div>
        <div class="card-footer">
            <router-link :to="{name: 'project', params: {slug: project_slug}}">Show project</router-link>
        </div>
    </div>
</template>