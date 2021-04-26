<template>
  <v-card class="mx-auto" tile>
    <v-list>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(Item, index) in propsdata" :key="index">
          <!-- <v-list-item-content>
            <v-list-item style="width: 30px" v-text="Item.item.name"></v-list-item-title>
            <v-list-item style="width: 30px" v-text="Item.price"></v-list-item-title>
            <v-list-item style="width: 30px" v-text="Item.count"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <div class="removeBtn" type="button" v-on:click="removeItem(Item,index)">
              <i class="far fa-trash-alt" aria-hidden="true"></i>
            </div>
          </v-list-item-icon> -->
          <div class="ItemName">{{ Item.item.name }}</div>
          <div class="ItemPrice">{{Item.price}}</div>
          <div class="ItemCount">{{Item.count}}</div>
          <div class="removeBtn" type="button" v-on:click="removeItem(Item,index)">
            <i class="far fa-trash-alt" aria-hidden="true"></i>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
  <!-- <section>
    <ul>
      <li v-for="(Item, index) in propsdata" class="shadow">
        <div class="ItemName">{{ Item.item.name }}</div>
        <div class="ItemPrice">{{Item.price}}</div>
        <div class="ItemCount">{{Item.count}}</div>
        <div class="removeBtn" type="button" v-on:click="removeItem(Item,index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </div>
      </li>
      <hr></hr>
    </ul>
  </section> -->
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
ul{
  list-style-type: none;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 0px;
  overflow: auto;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
}
.ItemName{
  width: 40%;
  border: 1px;
  text-align: left;
}
.ItemPrice{
  width: 40%;
  border: 1px;
  text-align: right;
}
.ItemCount{
  width: 10%;
  border: 1px;
  text-align: right;
}
.removeBtn{
  width: 10%;
  border: 1px;
  text-align: right;
  color: #de4343;
}
ul {
  height: 100%;
  overflow-y:scroll;
}
</style>
