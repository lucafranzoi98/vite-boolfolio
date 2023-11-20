<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'SingleProjectView',
    components: {
        ProjectCard
    }
}
</script>

<template>
    <div class="container mb-3">
        <h1 class="mb-3">All projects</h1>

        <div>
            <div class="row row-cols-3 g-3">
                <div class="col" v-for="project in projects">
                    <ProjectCard :image="project.image" :base_link="base_link" :title="project.title" :type="project.type"
                        :description="project.description" :code_link="project.code_link"
                        :preview_link="project.preview_link" :technologies="project.technologies"></ProjectCard>
                </div>
            </div>

            <nav class="mt-3">
                <ul class="pagination">
                    <li class="page-item" role="button">
                        <span class="page-link" @click="paginationPrev">
                            <span>&laquo;</span>
                        </span>
                    </li>
                    <li class="page-item" role="button" :class="activePage == 1 ? 'active' : ''">
                        <span class="page-link" @click="paginationByNumber(1)">1</span>
                    </li>
                    <li class="page-item" role="button" :class="activePage == 2 ? 'active' : ''">
                        <span class="page-link" @click="paginationByNumber(2)">2</span>
                    </li>
                    <li class="page-item" role="button" :class="activePage == 3 ? 'active' : ''">
                        <span class="page-link" @click="paginationByNumber(3)">3</span>
                    </li>
                    <li class="page-item" role="button">
                        <span class="page-link" @click="paginationNext">
                            <span>&raquo;</span>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
