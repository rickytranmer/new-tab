<template>
    <section class="shortcuts">
        <h1>Shortcuts</h1>
        <div class="shortcuts-container">
            <div class="shortcut" v-for="(bookmark, index) in bookmarks" :key="index">
                <a :href="bookmark.loc">{{bookmark.name}}</a>
            </div>
        </div>
    </section>
</template>


<script>
// import Vue from 'vue';
// const _template = () => import('./_template.vue');

let bookmarks = [
    {
        name: 'Calendar',
        loc: 'https://calendar.google.com/calendar/render#main_7',
    },
    {
        name: 'Google Play Music',
        loc: 'https://play.google.com/music/listen',
    },
    {
        name: 'HBO',
        loc: 'https://play.hbogo.com/?reentered=true&userProfileType=liteUserProfile',
    },
    {
        name: 'Netflix',
        loc: 'https://www.netflix.com/browse',
    },
    {
        name: 'Showtime',
        loc: 'https://www.showtimeanytime.com/?s_cid=da-default-4031',
    },
    {
        name: 'Twitch',
        loc: 'https://www.twitch.tv/directory/following',
    },
    {
        name: 'Twitter',
        loc: 'https://twitter.com/',
    },
    {
        name: 'Youtube',
        loc: 'https://www.youtube.com/feed/subscriptions',
    },
];

export default {
    name: 'Shortcuts',
    // props: [],
    // components: {},
    data() { return {
        bookmarks,
    } },
    // beforeCreate() {},
    // created() {},
    // beforeMount() {},
    // mounted() {},
    // beforeUpdate() {},
    // updated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // computed: {},
    // methods: {},
    // watch: {},
    //<keep-alive>
    // activated() {},
    // deactivated() {},
}
</script>