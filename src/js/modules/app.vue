<template>
    <main id="main" role="main">
        <Search />
        <Shortcuts />
    </main>
</template>


<script>
// import Vue from 'vue';
// const _template = () => import('./_template.vue');
const Shortcuts = () => import('./Shortcuts.vue');
const Search = () => import('./Search.vue');
// Vue.component('_template', _template);


export default {
    name: 'App',
    // props: [],
    components: { Search, Shortcuts },
    // data() { return {} },
    // beforeCreate() {},
    // created() {},
    // beforeMount() {},
    // mounted() {},
    // beforeUpdate() {},
    // updated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // computed: {},
    // watch: {},
}
</script>