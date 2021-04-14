<template>
  <div id="goodsInput">
    <!-- <input type="text" v-model="Item" v-on:keyup.enter="addItem"></input>
    <button v-on:click="addItem">add</button> -->

      <!-- <ul>
        <li is="goods" v-for="(good, index) in goods" v-bind:key="good.id" v-bind:title="good.name" v-on:click="selectItem(good, index+1)">
          {{good.id}} . {{good.name}} <br>
        </li>
    </ul> -->

    <v-container fluid>
      <v-row>
        <v-col v-for="(good, index) in goods" :key="n" cols="12" md="4" sm="4" v-bind:key="good.id" v-bind:title="good.name" v-on:click="selectItem(good, index+1)">
          <!-- <v-card class="pa-3" outlined tile  style="height: 100px;" color="#1F7087">
              <v-col class="shrink">
                  <v-card-title class="pa-0">{{good.name}}</v-card-title>
                  <v-img :src="require(`@/assets/${good.name}.png`)" max-width="40" class="ml-3"></v-img>
              </v-col>
          </v-card> -->
          <v-card
            class="mx-auto"
            outlined
            rounded
            color="#1F7087"
          >
            <v-list-item>
              <v-list-item-content>
                <div class="overline mb-4">
                  {{good.name}}
                </div>
              </v-list-item-content>
              <v-list-item-avatar
                rounded
                outlined
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
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
