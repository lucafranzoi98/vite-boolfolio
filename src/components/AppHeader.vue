<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="bg-dark py-3">
        <div class="container">
            <nav>
                <router-link class="text-white text-decoration-none me-3" to="/">Home</router-link>
                <router-link class="text-white text-decoration-none me-3" to="/about">About</router-link>
                <router-link class="text-white text-decoration-none me-3" to="/projects">Projects</router-link>
                <router-link class="text-white text-decoration-none" to="/contacts">Contacts</router-link>
            </nav>
        </div>
    </header>
</template>

