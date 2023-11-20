<script>
export default {
    name: 'ProjectsView'
}
</script>

<template>
    <h1 class="text-center my-3">All projects</h1>

    <div class="container mb-3">
        <div class="row row-cols-3 g-3">
            <div class="col" v-for="project in projects">


                <ProjectCard :image="project.image" :base_link="base_link" :title="project.title" :type="project.type"
                    :description="project.description" :code_link="project.code_link" :preview_link="project.preview_link"
                    :technologies="project.technologies"></ProjectCard>
            </div>
        </div>

        <nav aria-label="Page navigation" class="mt-3">
            <ul class="pagination    ">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" @click="paginationPrev">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" :class="activePage == 1 ? 'active' : ''" aria-current="page">
                    <a class="page-link" href="#" @click="paginationByNumber(1)">1</a>
                </li>
                <li class="page-item" :class="activePage == 2 ? 'active' : ''" aria-current="page">
                    <a class="page-link" href="#" @click="paginationByNumber(2)">2</a>
                </li>
                <li class="page-item" :class="activePage == 3 ? 'active' : ''" aria-current="page">
                    <a class="page-link" href="#" @click="paginationByNumber(3)">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" @click="paginationNext">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
