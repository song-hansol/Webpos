<template>
  <section>
    <ul>
      <li v-for="(Item, index) in propsdata" class="shadow">
        <div class="ItemName">{{ Item.item.name }}</div>
        <div class="ItemPrice">{{ Item.price}}</div>
        <div class="removeBtn" type="button" v-on:click="removeItem(Item,index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </div>
      </li>
      <hr></hr>
    </ul>
  </section>
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
.removeBtn{
  width: 20%;
  border: 1px;
  text-align: right;
  color: #de4343;
}
ul {
  height: 100%;
  overflow-y:scroll;
}
</style>
