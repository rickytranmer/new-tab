import 'assets/scss/index.scss';


// - Vue
import Vue from 'vue';
const app = () => import('../modules/app.vue'); //better load times
Vue.config.productionTip = false;
// const router = new VueRouter({
//     mode: 'hash',
//     routes: [
//         { path: '/', component: home },
//         { path: '*', redirect: '/' },
//     ]
// });
new Vue({ el: '#app', render: h => h(app) });
// new Vue({ el: '#app', render: h => h(app), router });


// - DOM ready?
// function checkReady(isReady) {
//     let attachEvent = document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading";
//     attachEvent ? isReady() : document.addEventListener('DOMContentLoaded', isReady);
// }
// checkReady(() => {
// // - DOM is ready
//     // - Fade-in animation
//     setTimeout(function () { document.querySelector('body').style.cssText = ''; }, 100);
// });


// - HMR
if (module.hot) {
    require('index.ejs');
    module.hot.accept('index.ejs', () => {
        window.console.info("HTML has been updated, reloading!");
        window.location.reload();
    });
    module.hot.accept();
}