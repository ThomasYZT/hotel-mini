import Vue from 'vue'
import plugins from './assets/plugins/index';
import TaroUi from './assets/plugins/taro-ui'
import './assets/style/theme/taroui/index.scss'
import './app.scss'

Vue.use(TaroUi)
Vue.use(plugins);

const App = new Vue({
  onShow (options) {},
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
