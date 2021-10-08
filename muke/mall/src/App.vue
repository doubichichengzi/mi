<template>
  <div id="app">
    <div>
      <p>性别</p>
      <input type="radio" value="男" v-model="sex" id="boy" />
      <label for="boy">男</label>
      <input type="radio" value="女" v-model="sex" id="girl" />
      <label for="girl">女</label>

      <br />
      <span>性别是 {{ sex }}</span>
    </div>
    <div v-if="1 == 1">111</div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
import jsonp from "jsonp";
var a = 1;
console.log(a);
export default {
  name: "App",
  components: {
    HelloWorld,
    //  axios,
  },
  data() {
    return {
      sex: "1",
      data: "",
      // num: 1,
    };
  },
  mounted() {
    // let url = "https://db.topcdb.com/api/get-chain";
    let url = "/dbapi/api/get-chain"; //获取院线
    // let url = "https://db.topcdb.com/api/get-chain"; //获取院线
    let url2 = "/dbapi/api/get-schedule"; //获取院线
    // let data = axios.get(url);
    // console.log(data);
    //promise 接口
    axios.get(url).then((data) => {
      console.log(data, "axios");
    });
    axios.get(url2).then((data) => {
      console.log(data, "axios");
    });
    jsonp(url, (err, xhr) => {
      let data = xhr;
      this.data = data;
      console.log(data);
      console.log(111);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
