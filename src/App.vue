<script setup>
import PAGE_TYPES from "./page-types";

import Sidebar from "./components/side-bar/Sidebar.vue";
import ContentBar from "./components/content-bar/ContentBar.vue";
</script>
<script>
export default {
  name: "App",
  data() {
    return {
      currentPage: PAGE_TYPES.DASHBOARD,
    };
  },
  methods: {
    setCurrentPage(value) {
      console.log(value);
      this.currentPage = value;
    },
  },
};
</script>

<template>
  <Sidebar
    :currentPage="currentPage"
    :setCurrentPage="setCurrentPage"
    :class="{ hidden: currentPage === PAGE_TYPES.SIGN_IN }"
  />
  <ContentBar :currentPage="currentPage" />
</template>

<style>
div#app {
  display: flex;
}
div#app .hidden {
  display: none;
}
.flexbox {
  display: flex;
}
.w-100 {
  width: 100%;
  margin-bottom: 20px;
}
.w-50 {
  width: 50%;
  background-color: white;
  margin-right: 20px;
  /* display: flex;
  align-items: center;
  flex-direction: column; */
}
.flex-box2 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.first-box {
  width: 580px;
  background-color: white;
  /* padding: 35px; */
  border-radius: 20px;
}
.second-box {
  width: 25%;
  background-color:white;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.flex-box3 {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;
}
.box1 {
  width: 50%;
  background-color: white;
  height: 300px;
  border-radius: 20px;
}
.box2 {
  width: 25%;
  background-color: white;
  border-radius: 20px;
  /* padding: 20px; */
}
.box3 {
  width: 25%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-box4 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-radius: 120px;
  margin-top: 20px;
}
.box11 {
  width: 25%;
  /* height: 300px; */
  background-color: white;
  padding: 20px;
  border-radius: 20px;
}
.box12 {
  width: 25%;
  height: 300px;
  background-color: white;
  border-radius: 20px;
}
.box13 {
  width: 25%;
  height: 300px;
  background-color: white;
  border-radius: 20px;
}
.box14 {
  width: 25%;
  height: 300px;
  background-color: white;
  border-radius: 20px;
}
</style>
