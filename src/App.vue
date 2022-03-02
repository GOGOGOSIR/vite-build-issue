<template>
  <div>
    <h2>host</h2>

  <remote-hello></remote-hello>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

const RemoteHello = defineAsyncComponent(() => import('static-remote/Hello'))

export default defineComponent({
  name: 'App2',
  components: {
    RemoteHello
  },
  setup() {
    //
  }
})
</script>
