<template>
  <div id="login">
    <v-app>
    <br></br>
    <br></br>
    <v-form @submit.prevent="onSubmit" id="check-login-form">
      <v-text-field
              align="center"
              label="Id"
              outlined
              style="width:300px;
              margin-right:auto; margin-left:auto;"

              id="UserInput" type="text" name="id" v-model="id"></v-text-field>
      <v-text-field
              align="center"
              label="Password"
              outlined
              style="width:300px;
              margin-right:auto; margin-left:auto;"
              id="PwInput" type="password" name="password" v-model="password"></v-text-field>

      <v-btn id="LoginBtn" class="black--text" type="submit" form="check-login-form">Login</v-btn>
    </v-form>
  </v-app>
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

</style>
