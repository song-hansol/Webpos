<template>
  <div id="login">
    <form @submit.prevent="onSubmit">
      <p>사용자</p>
      <input id="UserInput" type="text" name="id" v-model="id">
      <p>비밀번호</p>
      <input id="PwInput" type="password" name="password" v-model="password">
      <br><br>
      <button id="LoginBtn">button</button>
    </form>
  </div>
</template>
<script>
export default{
  data() {
    return{
      id: '',
      password: ''
    }
  },
  created() {
    if (this.$store.state.isLogIn) {
      this.$router.push({name: "Goods"})
    } else{
      this.$http.get("/api/login")
      .then((res) => {
          const user = res.data.user
          if(user){
            this.$store.commit("setUser", user);
            this.$store.commit("setLogInState", true);
            this.$router.push({name: "Goods"});
          }
      });
    }
  },
  methods: {
    onSubmit(){
      const id = this.id;
      const password = this.password;
      this.$http.post("api/login", {id,password,}, {"Content-Type":"application-json"})
        .then((res) => {
          if(res.data.user){
            this.$store.commit("setUser", res.data.user);
            this.$store.commit("setLogInState", true);
            this.$router.push({name: "Goods"});
          }
          else if(res.data.message){
            alert(res.data.message);
          }
        })
        .catch((err)=>{
          console.error(err);
        });
    }
  }
}
</script>
<style>
#login{
  background-position: center;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}
#UserInput{
  border: 1px;
}
#PwInput{
  border: 1px;
}
#LoginBtn{
  border: 1px;
}
</style>
