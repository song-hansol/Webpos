<template>
  <div class="total">
    <div class="footertop">
      <span class="priceArea">
        <div class="parentArea">
          <div class="textArea">COUNT</div>
          <div class="intArea">{{ propsdata }}</div>
        </div>
        <div class="parentArea">
          <div class="textArea">SUBTOTAL</div>
          <div class="intArea">{{ propsdata1 }}</div>
        </div>
        <div class="parentArea">
          <div class="textArea">DISCOUNT</div>
          <div class="intArea">0</div>
        </div>
      </span>
      <span class="payamountArea">
        <template>
            <v-dialog v-model="dialog" width="700px">
              <template v-slot:activator="{ on, attrs}">
                <v-btn class="cash" v-bind="attrs" height="70px" v-on="on">CASH</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  결제
                </v-card-title>
                <v-card-text>
                  현금 결제를 하시겠습니까?</br>
                  결제 금액 : {{ propsdata1 }}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog=true">cancel</v-btn>
                  <v-btn color="green darken-1" text @click="dialog=false" @click="closeDialog">ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
        </template>
      </span>
    </div>
    <div class="footerbottom">
      <v-btn class="clearAllBtn" v-on:click="clearItem">CANCEL</v-btn>
      <v-btn class="footerBtn">HOLD</v-btn>
      <v-btn class="footerBtn">NOTES</v-btn>
      <v-btn class="footerBtn">DISCOUNT</v-btn>
      <v-btn class="footerBtn">REPRINT</v-btn>
      <v-btn text class="etc">MORE</v-btn>
    </div>
  </div>
</template>
<script>
export default{
  props: [ 'propsdata', 'propsdata1' ],
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    clearItem() {
      this.$emit('clearAll')
    },
    closeDialog() {
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
  height: 80%;
  width: 30%;
  float: left;
  margin-top: 30px;
}
.payamountArea{
  height: 80%;
  width: 70%;
  float: right;
  margin-top: 10px;
}
.parentArea{
  position: relative;
  height: 30%;
  width: 100%;
}
.textArea{
  height: 100%;
  width: 50%;
  float : left;
  text-align: left;
  padding-left: 10px;
  font-family: 'Nanum Gothic';
}
.intArea{
  height: 100%;
  width: 50%;
  float: right;
  text-align: right;
  padding-right: 10px;
  font-family: 'Nanum Gothic';
}
.cash{
  width: 250px;
  margin-top: 35px;
  border-radius: 10px;
  margin-left: 70px;
  font-family: 'Nanum Gothic';
}
.clearAllBtn{
  height: 50px;
  width: 100px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  border-radius: 10px;
  font-family: 'Nanum Gothic';
}
.footerBtn{
  height: 50px;
  width: 100px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  border-radius: 10px;
  font-family: 'Nanum Gothic';
}
.etc{
  height: 50px;
  width: 40px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}
</style>
