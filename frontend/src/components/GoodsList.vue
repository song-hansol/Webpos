<template>
  <section>
    <ul>
      <li v-for="(Item,index) in propsdata" class="shadow">
        {{ Item }}
        <button class="removeBtn" type="button" v-on:click="removeItem(Item,index)">삭제</button>
      </li>
    </ul>
  </section>
</template>
<script>
export default{
  props: ['propsdata'],
  methods: {
    removeItem(Item, index){
      this.$emit('removeItem', Item, index)
    }
  }
}
</script>
<style>
</style>
