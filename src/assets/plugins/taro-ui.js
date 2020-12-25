import AtRange from 'taro-ui-vue/src/components/range/index.vue'
import AtFloatLayout from 'taro-ui-vue/src/components/float-layout/index.vue'
import AtSearchBar from 'taro-ui-vue/src/components/search-bar/index.vue';
export default {
  install(Vue) {
    Vue.component('AtRange', AtRange)
    Vue.component('AtFloatLayout', AtFloatLayout)
    Vue.component('AtSearchBar', AtSearchBar)
  }
}
