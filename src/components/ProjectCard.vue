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
    <div class="card h-100 shadow border-0 rounded-5 card-hover">
        <div v-if="image">
            <img v-if="image.includes('http')" class="card-img-top rounded-top-5" :src="image">
            <img v-else="!image.includes('http')" class="card-img-top rounded-top-5" :src="base_link + 'storage/' + image">
        </div>
        <div v-else class="m-3">N/A</div>
        <div class="card-body px-4 d-flex flex-column justify-content-between">
            <div>
                <h5 class="card-title">
                    <router-link class="text-decoration-none text-dark"
                        :to="{ name: 'project', params: { slug: project_slug } }">{{ title }}</router-link>
                </h5>
                <h6 class="card-subtitle text-muted mb-2" v-if="type">
                    {{ type.name }}
                </h6>
            </div>

            <ul class="list-unstyled d-flex gap-1 mt-3" v-if="technologies">
                <li class="badge bg-dark" v-for="technology in technologies">{{ technology.name }}</li>
            </ul>
        </div>
    </div>
</template>