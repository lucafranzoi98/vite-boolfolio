<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<template>
    <AppHeader></AppHeader>

    <main class="py-5">
        <router-view></router-view>
    </main>
    
    <AppFooter></AppFooter>
</template>
