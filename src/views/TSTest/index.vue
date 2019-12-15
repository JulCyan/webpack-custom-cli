<template>
  <div id>
    <div>{{ test }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Test extends Vue {
  private test: number = 8421;
  private created() {
    console.log(1)
  }
}
</script>

<style scoped lang="less">
</style>