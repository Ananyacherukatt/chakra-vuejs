<script setup>
import sidebarHead from "./sidebar-head.vue";
import sidebarItems from "./sidebar-items.vue";
import sidebarUpgrade from "./sidebar-upgrade.vue";
import sidebarListItems from "./sidebarListItem.vue";
</script>

<template>
  <div id="sidebar">
    <div id="top">
      <sidebarHead />
      <!-- <sidebarItems :currentPage="currentPage" :setCurrentPage="setCurrentPage"  /> -->
      <div v-for="item in sidebarLists">
        <sidebarListItems
          :name="item.name"
          :icon="item.icon"
          :setCurrentPage="setCurrentPage"
          :type="item.type"
        />
      </div>
    </div>
    <div id="bottom">
      <sidebarUpgrade />
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  props: ["currentPage", "setCurrentPage"],
  data() {
    return {
      sidebarLists: [
        { type: "DASHBOARD", name: "Dashboard", icon: "fa-solid fa-house" },
        {
          type: "NFT_MARKETPLACE",
          name: "Marketplace",
          icon: "fa-sharp fa-cart-shopping",
        },
        {
          type: "TABLES",
          name: "Tables",
          icon: "fa-solid fa-chart-simple",
        },
        {
          type: "KANBAN",
          name: "Kanban",
          icon: "fa-solid fa-cart-shopping",
        },

        { type: "PROFILE", name: "Profile", icon: "fa-solid fa-user" },
        { type: "SIGN", name: "Sign In", icon: "fa-solid fa-lock" },
        
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
div#sidebar {
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-sizing: border-box;
  padding-bottom: 10px;
}
div#sidebar #bottom {
  align-self: center;
  width: 75%;
}
</style>
