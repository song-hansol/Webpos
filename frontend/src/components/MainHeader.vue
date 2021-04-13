<template>
  <div id="parent">
    <p id="logo">Web Pos</p>
    <p id="date">{{ timestamp }}</p>
    <p id = "user" v-if="this.$store.state.user">{{this.$store.state.user.name}}</p>
    <button id ="logout" v-if="this.$store.state.isLogIn" @click="logOut">LogOut</button>
  </div>
</template>
<script>
export default{
  data(){
    return {
      timestamp: "",
      user: ""
    };
  },
  created(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekList = new Array('Sun','Mon','Tue','Wed','Ths','Fri','Sat');
    const week = weekList[now.getDay()];
    this.timestamp = year+'/'+month+'/'+date+' '+week;
  },
  computed: {
    user() {
      return this.$store.state.user.name;}
  },
  methods: {
    logOut() {
        this.$http.post("/api/login/logout")
        .then((res) => {
          this.$store.commit("setUser", null);
          this.$store.commit("setLogInState", false);
          this.$router.push({name: "Login"})
        })
        .catch((err)=>{
          console.error(err);
        });
    }
  }
}
</script>
<style>
#parent{
  height: 50px;
  position: relative;
}
#logo {
  font-weight: bold;
  position : absolute;
  left: 10px;
}
#date {
  position : absolute;
  right: 190px;
}
#user {
  font-weight: bold;
  position : absolute;
  right: 80px;
}
#logout {
  position : absolute;
  right: 10px;
  top: 10px;
}
</style>
