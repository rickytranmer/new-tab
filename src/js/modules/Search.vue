<template>
    <form id="form" @submit.prevent="handleSubmit">
        <label for="searchBar">{{message}}</label>
        <keep-alive>
            <input type="text" name="searchBar" id="searchBar" v-model="searchText">
        </keep-alive>
    </form>
</template>


<script>
// import Vue from 'vue';
// const _template = () => import('./_template.vue');

let searchKeys = [
    {
        short: 'w',
        long: 'Wikipedia',
        loc: 'https://en.wikipedia.org/wiki/%s',
    },
    {
        short: 'y',
        long: 'Youtube',
        loc: 'https://www.youtube.com/results?search_query=%s',
    },
    {
        short: 't',
        long: 'Twitter',
        loc: 'https://twitter.com/search?q=%s',
    },
    {
        short: 'g',
        long: 'Google',
        loc: 'https://www.google.com/search?q=%s',
    },
    {
        short: 'b',
        long: 'bing',
        loc: 'https://www.bing.com/search?q=%s',
    },
    {
        short: 'amz',
        long: 'Amazon',
        loc: 'https://smile.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=%s',
    },
    {
        short: 'e',
        long: 'eBay',
        loc: 'https://www.ebay.com/sch/i.html?_trksid=p2050601.m570.l1313&_nkw=%s&_sacat=0&_from=R40',
    },
    {
        short: 'es',
        long: 'sold on ebay',
        loc: 'https://www.ebay.com/sch/i.html?_trksid=p2050601.m570.l1313&_nkw=%s&_sacat=0&_from=R40&LH_Sold=1&LH_Complete=1',
    },
    {
        short: 'gm',
        long: 'google past month',
        loc: 'https://www.google.com/search?q=%s&tbs=qdr%3Am',
    },
    {
        short: 'gy',
        long: 'google past year',
        loc: 'https://www.google.com/search?q=%s&tbs=qdr:y',
    },
    {
        short: 'map',
        long: 'google maps',
        loc: 'https://www.google.com/maps/search/%s',
    },
    {
        short: 'play',
        long: 'google play music',
        loc: 'https://play.google.com/music/listen#/sr/%s',
    },
    {
        short: 'gc',
        long: 'gyro clients',
        loc: 'http://%s.gyroclients35.com',
    },
    {
        short: 'h',
        long: 'history',
        loc: 'chrome://history/?q=%s',
    },
    {
        short: 'imdb',
        long: 'imdb',
        loc: 'http://www.imdb.com/find?q=%s&s=all',
    },
    {
        short: 'kh',
        long: 'Kurogane Hammer',
        loc: 'http://kuroganehammer.com/Smash4/%s',
    },
    {
        short: 'lmgtfy',
        long: 'let me google that for you',
        loc: 'http://letmegooglethatforyou.com/?q=%s',
    },
    {
        short: 'lh',
        long: 'localhost:',
        loc: 'http://localhost:%S',
    },
    {
        short: 'mdn',
        long: 'mdn',
        loc: 'https://www.google.com/search?q=%s+developer.mozilla.org',
    },
    {
        short: 'n',
        long: 'netflix',
        loc: 'https://www.netflix.com/search/%s',
    },
    {
        short: 'gp',
        long: 'google play store',
        loc: 'https://www.netflix.com/search/%s',
    },
    {
        short: 'w3',
        long: 'w3',
        loc: 'https://www.google.com/search?q=%s+w3schools.com',
    },
    {
        short: 'wb',
        long: 'Wayback Archive',
        loc: 'https://web.archive.org/save/%s',
    },
    {
        short: 'wa',
        long: 'Wolfram Alpha',
        loc: 'http://www.wolframalpha.com/input/?i=%s&dataset=',
    },
];

export default {
/* eslint-disable no-console*/
    name: 'Search',
    // props: [],
    // components: {},
    data() { return {
        searchText: '',
        message: '',
        target: {
            short: '',
            loc: '',
        },
        searching: false,
    } },
    // beforeCreate() {},
    // created() {},
    // beforeMount() {},
    mounted() {
        document.getElementById('searchBar').focus();
    },
    // beforeUpdate() {},
    // updated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // computed: {},
    methods: {
        handleSubmit() {
            let newUrl = '' ;
            if (this.searching) {
                newUrl = this.target.loc.replace(/%s/gi, this.searchText.substring(this.target.short.length+1));
            } else {
                newUrl = this.searchText;
                if (newUrl.indexOf('http://') == -1) newUrl = 'http://'+newUrl;
                if (newUrl.indexOf('.') == -1) newUrl = newUrl+'.com';
            }
            window.location.assign(newUrl);
        },
        checkForKey() {
            for (let i=0; i < searchKeys.length; i++) {
                if (this.searchText && (this.searchText.toLowerCase() === searchKeys[i].short + ' ')) {
                    this.message = searchKeys[i].long;
                    this.target.short = searchKeys[i].short;
                    this.target.loc = searchKeys[i].loc;
                    this.searching = true;
                    break;
                } else {
                    this.message = '';
                    this.target.short = '';
                    this.target.loc = '';
                }
            }
        },
    },
    watch: {
        searchText: function(val) {
            if (!this.searching || (val.indexOf(this.target.short + ' ') === -1)) {
                this.searching = false;
                this.checkForKey();
            }
        },
    },
    //<keep-alive>
    // activated() {},
    // deactivated() {},
}

/* eslint-enable no-console*/
</script>