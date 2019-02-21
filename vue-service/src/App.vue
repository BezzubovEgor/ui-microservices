<template>
  <div id="vue-service" class="vue-service">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Vue Logging Service</h5>
        <ul class="list-group">
          <li class="list-group-item" v-bind:key="index" v-for="(event, index) in events">
            <span class="badge badge-primary">{{event.type}}</span>
            <code>{{JSON.stringify(event.item)}}</code>
          </li>
          <li v-if="!events.length" class="list-group-item list-group-item-primary">No events</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { EVENT_BUS } from './EventBus';

export default {
  name: 'vue-service',
  data: () => ({
    events: [],
  }),
  created: function () {
    EVENT_BUS.on('actions', event => this.events.unshift(event));
  }
}

</script>

<style>
</style>
