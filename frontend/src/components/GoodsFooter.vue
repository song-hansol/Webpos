<template>
  <div class="Total">
    <div class="footertop">
      <span class="PriceArea">
        <div id="CountArea">
          <span>Count</span>
          <span>{{ propsdata }}</span>
        </div>
        <div id="SubtotalArea">
          <span>Subtotal</span>
          <span>{{ propsdata1 }}</span>
        </div>
        <div id="DiscountAre">
          <span>Discount</span>
          <span>{{ discount }}</span>
        </div>
      </span>
      <span class="PayamountArea">
        <button id="Cash">Cash</button>
      </span>
    </div>
    <div class="footerbottom">
      <button class="clearAllBtn" v-on:click="clearItem">Cancle</button>
      <button class="FooterBtn">Save</button>
      <button class="FooterBtn">Notes</button>
      <button class="FooterBtn">Discount</button>
      <button class="FooterBtn">Reprint</button>
      <button class="Etc">More</button>
    </div>
  </div>
</template>
<script>
export default{
  props: {
    propsdata: Number,
    propsdata1: Number
  },
  data(){
    return{
      discount: 0
    }
  },
  methods: {
    clearItem() {
      this.$emit('clearAll')
    }
  }
}
</script>
<style>
.Total{
  height: 60%;
}
.footertop{
  height: 60%;
}
.footerbottom{
  height: 40%;
}
.PriceArea{
  float: left;
  height: 100%;
  width: 50%;
  background-color: #a5ec6e;
  margin-right: 5px;
}
.PayamountArea{
  float: right;
  height: 100%;
  width: 50%;
  background-color: #f3cea4;
  margin: 0px;
}
#Cash{
  border: 3px;
}
.clearAllBtn{
  height: 50px;
  width: 80px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  background-color: #f03a37;
  border-radius: 5px;
}
.FooterBtn{
  height: 50px;
  width: 80px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  background-color: #2fa8f8;
  border-radius: 5px;
}
.Etc{
  height: 50px;
  width: 40px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}
</style>
