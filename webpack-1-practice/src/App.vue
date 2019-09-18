<template>
  <div>
      hello vue
      <li v-for='(todo, index) in todos' :key='index'>{{todo}}</li>
  </div>
</template>

<script lang='ts'>
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Todo extends Vue {
  public todos:string[] = [];
  async mounted () {
    let { data } = await axios.get('/api/list');
    this.todos = data;
  }
}
</script>