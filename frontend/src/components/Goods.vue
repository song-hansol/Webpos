<template>
  <div id="main">
    <GoodsInput id="goodsInput" v-on:selectItem="selectItem"></GoodsInput>
    <GoodsList id="goodsList" v-bind:propsdata="Items" v-on:removeItem="removeItem"></GoodsList>
    <GoodsFooter id="goodsFooter" v-bind:propsdata="count" v-bind:propsdata1="price" v-on:clearAll="clearAll"></GoodsFooter>
  </div>
</template>
<script>
import GoodsList from './GoodsList'
import GoodsInput from './GoodsInput'
import GoodsFooter from './GoodsFooter'

export default{
  data() {
    return {
      Items: [],
      count: 0,
      price: 0,
      chckflg: false
    }
  },
  created() {
      if(!this.$store.state.isLogIn){
        this.$router.push({name: "Login"});
      }
  },
  methods: {
    selectItem(Item, index) {
      this.Items.push(Item)
      console.log("Items length : " + this.Items.length)
      console.log("Items 요소 : " + this.Items.slice(index, index+1))
      this.count = this.count+1
      this.price = this.price+Item.price
    },
    removeItem(Item, index) {
      localStorage.removeItem(Item)
      this.Items.splice(index, 1)
    },
    clearAll() {
      localStorage.clear()
      this.Items = []
      this.count = 0
      this.price = 0
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
  background-color: #ffffff;
  width: 40%;
  height: 70%;
  position : absolute;
  left: 0px;
  /* margin-left: 0px; */
}
#goodsFooter{
  background-color: #d2ebfd;
  width: 40%;
  height: 30%;
  position : absolute;
  left: 0px;
  bottom: 0px;
  /* margin-left: 0px; */
}
</style>
