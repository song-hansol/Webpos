<template>
  <div class="total">
    <div class="footertop">
      <span class="priceArea">
        <div id="countArea">
          <span>Count</span>
          <span>{{ propsdata }}</span>
        </div>
        <div id="subtotalArea">
          <span>Subtotal</span>
          <span>{{ propsdata1 }}</span>
        </div>
        <div id="discountArea">
          <span>Discount</span>
          <span>0</span>
        </div>
      </span>

      <span class="payamountArea">
        <button id="cash">Cash</button>
      </span>

    </div>
    <div class="footerbottom">
      <button class="clearAllBtn" v-on:click="clearItem">Cancle</button>
      <button class="footerBtn">Save</button>
      <button class="footerBtn">Notes</button>
      <button class="footerBtn">Discount</button>
      <button class="footerBtn">Reprint</button>
      <button class="etc">More</button>
    </div>
  </div>
</template>
<script>
export default{
  props: [ 'propsdata', 'propsdata1' ],
  methods: {
    clearItem() {
      this.$emit('clearAll')
    }
  }
}
</script>
<style>
.total{
  height: 40%;
}
.footertop{
  position: relative;
  height:50%;
}
.footerbottom{
  height: 50%;
}

.priceArea{
  position : absolute;
  height: 80%;
  width: 50%;
  background-color: #a5ec6e;
  left: 0px
}
.payamountArea{
  position : absolute;
  height: 80%;
  width: 50%;
  background-color: #f3cea4;
  right: 0px;
}
#cash{
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
.footerBtn{
  height: 50px;
  width: 80px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  background-color: #2fa8f8;
  border-radius: 5px;
}
.etc{
  height: 50px;
  width: 40px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}
</style>
