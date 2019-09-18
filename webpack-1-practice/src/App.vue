<template>
  <div>
      hello vue
      <li v-for='(todo, index) in todos' :key='index'>{{todo}}</li>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    // todos...
  }
})
export default class Todo extends Vue {
  public todos:string[] = ['apple', 'banana', 'pear']
}
</script>