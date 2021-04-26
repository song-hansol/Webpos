<template>
  <div id="goodsInput">
    <v-app id="inspire">
    <v-card style="height: 100%;">
      <v-tabs
        grow
        v-model="tab"
        color="deep-purple accent-4"
        right>
        <v-tab v-for="category in categories" :key="category">
          {{category}}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="category in categories" :key="category">
          <v-container fluid>
            <v-row>
              <v-col v-for="(good, index) in goods" v-if="good.category === category || category === 'All'" :key="n" cols="12" md="4" sm="4" v-bind:key="good.id" v-bind:title="good.name" v-on:click="selectItem(good, index+1)">
                <v-car
                  outlined
                  rounded
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
                    >
                    <v-img :src="require(`@/assets/${good.name}.png`)"></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
      </v-tabs>
    </v-card>
    </v-app>
  </div>

</template>
<script>
export default{
  data(){
    return{
      Item: '',
      goods: null,
      tab: null,
      categories: ["All", "fruit", "beverage", "clothes", "homeappliance"]
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
    clearInput() {
      this.Item = ''
    },
    selectItem(good, index){
      this.$emit('selectItem', good, index)
    }
  }
}
</script>
<style>
</style>
