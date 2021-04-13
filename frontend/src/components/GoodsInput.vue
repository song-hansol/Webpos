<template>
  <div id="goodsInput">
    <!-- <input type="text" v-model="Item" v-on:keyup.enter="addItem"></input>
    <button v-on:click="addItem">add</button> -->
      <ul>
        <li is="goods" v-for="(good, index) in goods" v-bind:key="good.id" v-bind:title="good.name" v-on:click="selectItem(good, index+1)">
          {{good.id}} . {{good.name}} <br>
        </li>
    </ul>
  </div>
</template>
<script>
export default{
  data(){
    return{
      Item: '',
      goods: null
    }
  },
  created(){
    if(this.$store.state.isLogIn){
      this.$http.get("/goods")
      .then((res)=>{
          const goods = res.data.goods;
          if(goods){
            this.goods = goods;
          }
      });
    }
  },
  methods: {
    addItem() {
      if (this.Item !== '') {
        var value = this.Item && this.Item.trim()
        // localStorage.setItem(value, value)
        this.$emit('addItem', value)
        this.clearInput()
      }
    },
    clearInput() {
      this.Item = ''
    },
    selectItem(good, index){
      console.log(index+'.'+good.name)
      this.$emit('selectItem', good.name, index)
    }
  }
}
</script>
<style>
</style>
