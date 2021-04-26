<template>
  <div id="main">
    <GoodsInput id="goodsInput" v-on:selectItem="selectItem"></GoodsInput>
    <GoodsList id="goodsList" v-bind:propsdata="Items" v-on:removeItem="removeItem"></GoodsList>
    <GoodsFooter id="goodsFooter" v-bind:propsdata="totalCount" v-bind:propsdata1="totalPrice" v-on:clearAll="clearAll"></GoodsFooter>
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
      totalCount: 0,
      totalPrice: 0,
      trnum: 1
    }
  },
  created() {
      if(!this.$store.state.isLogIn){
        this.$router.push({name: "Login"});
      }
  },
  methods: {
    selectItem(Item, index) {
      var flag = false;
      for(var i=0; i<this.Items.length; i++){
        if(this.Items[i].item.id == Item.id){
          this.Items[i].count++;
          this.Items[i].price += this.Items[i].item.price;
          flag = true;
          break;
        }
      }
      if(!flag){
        this.Items.push({item: Item, count: 1, price: Item.price})
      }
      this.totalCount++
      this.totalPrice += Item.price
    },
    removeItem(Item, index) {
      this.totalCount -= Item.count
      this.totalPrice -= Item.price
      this.Items.splice(index, 1)
    },
    clearAll() {

      const object = {
        Items : this.Items,
        totalPrice : this.totalPrice,
        totalCount : this.totalCount,
        trnum : this.trnum,
        posNo : this.$store.state.posNo,
        date : this.$store.state.date
      }

      this.$http.post("/api/finish", {object}, {"Content-Type":"application-json"})
      .then((res) => {
        if(res.data.success) {
          console.log("finish")
          this.Items = []
          this.totalCount = 0
          this.totalPrice = 0
          this.trnum++
          console.log(this.trnum)
        }
        else {
          console.log("error")
        }
      });
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
  height: 60%;
  position : absolute;
  top: 0px;
  left: 0px;
  /* margin-left: 0px; */
}
#goodsFooter{
  background-color: #d2ebfd;
  width: 40%;
  height:40%;
  position : absolute;
  left: 0px;
  bottom: 0px;
  /* margin-left: 0px; */
}
</style>
