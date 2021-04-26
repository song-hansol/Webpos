<template>
  <div id="parent">
     <div id="logo">POS</div>
     <div id="date" v-if="this.$store.state.user">{{ timestamp }}</div>
     <div id="user" v-if="this.$store.state.user">{{this.$store.state.user.name}}</div>
     <v-btn id="logout" v-if="this.$store.state.isLogIn" @click="logOut">LOGOUT</v-btn>
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
    const weekList = new Array('SUN','MON','TUE','WEB','THS','FRI','SAT');
    const week = weekList[now.getDay()];
    this.timestamp = year+'/'+month+'/'+date+' '+week;
    this.$store.state.date = this.timestamp
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
  height: 10%;
  /* position: relative; */
  background-color: #2fa8f8;
}
#logo {
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  position : absolute;
  top: 30px;
  left: 30px;
  font-family: 'Nanum Gothic';
}
#date {
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  position : absolute;
  top: 30px;
  right: 250px;
  font-family: 'Nanum Gothic';
}
#user {
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  position : absolute;
  top: 30px;
  right: 170px;
  font-family: 'Nanum Gothic';
}
#logout {
  height: 30px;
  width: 100px;
  text-align: center;
  position : absolute;
  right: 20px;
  top: 30px;
  font-family: 'Nanum Gothic';
}
</style>
