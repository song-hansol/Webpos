<template>
  <div id="main">
    <GoodsInput id="goodsInput" v-on:selectItem="selectItem"></GoodsInput>
    <GoodsList id="goodsList" v-bind:propsdata="Items" v-on:removeItem="removeItem"></GoodsList>
    <GoodsFooter id="goodsFooter" v-on:clearAll="clearAll"></GoodsFooter>
  </div>
</template>
<script>
import GoodsList from './GoodsList'
import GoodsInput from './GoodsInput'
import GoodsFooter from './GoodsFooter'

export default{
  data() {
    return {
      Items: []
    }
  },
  created() {
      if(!this.$store.state.isLogIn){
        this.$router.push({name: "Login"});
      }

      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
          console.log(localStorage.getItem(localStorage.key(i)));
          this.Items.push(localStorage.getItem(localStorage.key(i)));
        }
      }
  },
  methods: {
    selectItem(Item, index) {
      localStorage.setItem(index, Item)
      this.Items.push(Item)
      console.log("log"+Item)
    },
    removeItem(Item, index) {
      localStorage.removeItem(Item)
      this.Items.splice(index, 1)
    },
    clearAll() {
      localStorage.clear()
      this.Items = []
    }
  },
  components: {
    'GoodsList': GoodsList,
    'GoodsInput': GoodsInput,
    'GoodsFooter': GoodsFooter
  }
}
</script>
<style>
#main{
  height: 100%;
  position: relative;
}
#goodsInput{
  background-color: #7FFFD4;
  width: 60%;
  height: 100%;
  position : absolute;
  right: 0px;
}
#goodsList{
  background-color: #00FFFF;
  width: 40%;
  height: 80%;
  position : absolute;
  left: 0px;
  /* margin-left: 0px; */
}
#goodsFooter{
  background-color: #5F9EA0;
  width: 40%;
  height: 20%;
  position : absolute;
  left: 0px;
  bottom: 0px;
  /* margin-left: 0px; */
}
</style>
