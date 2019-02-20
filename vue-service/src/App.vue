<template>
  <div id="microservice-content">
    <div class="hello">
      <h1>Welcome to Your Vue.js App</h1>
      {{container}}
      <div v-for="event in events">
        {{event.type}}
      </div>
    </div>
  </div>
</template>

<script>
import { EVENT_BUS } from './EventBus';

export default {
  name: 'microservice-content',
  props: {
    container: String,
  },
  data: () => ({
    events: [{type: 'aaaa'}],
  }),
  created: function () {
    EVENT_BUS.on('changes', event => this.events.push(event));
  }
}

</script>

<style>
#microservice-content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
</style>
