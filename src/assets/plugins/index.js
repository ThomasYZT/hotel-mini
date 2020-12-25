import pubSub from './pubSub';
import moment from 'moment';
import Taro from '@tarojs/taro'
export default {
  install(Vue) {
    Vue.prototype.$pubSub = pubSub;
    Vue.prototype.$date = moment;
    Vue.prototype.$Taro = Taro;
  }
}
