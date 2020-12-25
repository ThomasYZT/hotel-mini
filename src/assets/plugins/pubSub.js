import PubSub from 'pubsub-js';
export default {
  topic : {
    'SHOW_CALENDAR': 'SHOW_CALENDAR',
    'SHOW_RANGE': 'SHOW_RANGE'
  },
  subscribe (topic, fn) {
    PubSub.subscribe(topic, fn);
  },
  publish (topic, data) {
    PubSub.publish(topic, data);
  },
  unsubscribe (token) {
    PubSub.unsubscribe(token);
  },
  clearAllSub () {
    PubSub.clearAllSubscriptions();
  }
};
