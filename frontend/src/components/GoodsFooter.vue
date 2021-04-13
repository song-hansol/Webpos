<template>
  <div class="clearAllItem">
    <button class="clearAllBtn" v-on:click="clearItem">Clear All</button>
  </div>
</template>
<script>
export default{
  methods: {
    clearItem() {
      this.$emit('clearAll')
    }
  }
}
</script>
<style>
</style>
