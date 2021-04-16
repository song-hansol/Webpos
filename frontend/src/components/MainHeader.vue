<template>
  <div id="parent">
     <div id="logo">Web Pos</div>
     <div id="date">{{ timestamp }}</div>
     <div id="user" v-if="this.$store.state.user">{{this.$store.state.user.name}}</div>
     <button id="logout" v-if="this.$store.state.isLogIn" @click="logOut">LogOut</button>
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
      return this.$store.state.user.name;
    }
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
  height: 100px;
  position: relative;
  background-color: #2fa8f8;
}
#logo {
  /* font-weight: bold; */
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  position : absolute;
  top: 30px;
  left: 10px;
}
#date {
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  position : absolute;
  top: 30px;
  right: 250px;
}
#user {
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  position : absolute;
  top: 30px;
  right: 100px;
}
#logout {
  height: 30px;
  width: 70px;
  border: 1px blue;
  border-radius: 5px;
  background-color: #ffffff;
  text-align: center;
  position : absolute;
  right: 20px;
  top: 30px;
}
</style>
