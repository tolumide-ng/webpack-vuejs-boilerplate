import Vue from 'vue';
import Main from './components/Main/index.vue';

new Vue({
  render: (createEl) => createEl(Main),
}).$mount('#app');
