<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
        base_link: String
    }
}
</script>

<template>
    <div class="card h-100 shadow border-0 rounded-5 card-hover">
        <router-link class="text-decoration-none text-dark" :to="{ name: 'project', params: { slug: project.slug } }">
            <div v-if="project.image">
                <img v-if="project.image.includes('http')" class="card-img-top rounded-top-5" :src="project.image">
                <img v-else="!project.image.includes('http')" class="card-img-top rounded-top-5"
                    :src="base_link + 'storage/' + project.image">
            </div>
            <div v-else class="m-3">N/A</div>
        </router-link>
            <div class="card-body px-4 d-flex flex-column justify-content-between">
                <div>
                    <h5 class="card-title">
                        <router-link class="text-decoration-none text-dark"
                            :to="{ name: 'project', params: { slug: project.slug } }">{{ project.title }}</router-link>
                    </h5>
                    <h6 class="card-subtitle text-muted mb-2" v-if="project.type">
                        {{ project.type.name }}
                    </h6>
                </div>

                <ul class="list-unstyled d-flex gap-1 mt-3" v-if="project.technologies">
                    <li class="badge bg-dark" v-for="technology in project.technologies">{{ technology.name }}</li>
                </ul>
            </div>
    </div>
</template>