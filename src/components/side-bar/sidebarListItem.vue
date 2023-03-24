<template>
  <div class="sidebar-item"  :class="selected&&'selected'" 
  @click="setCurrentPage(type)">
    <font-awesome-icon :icon="icon" />
    <div class="sidebar-item-text">
      {{ name }}
    </div>
    <div class="sidebar-item-highlighted"></div>
  </div>
  <!-- <div>hello</div> -->
</template>
<script>
export default {
  props: {
    name: String,
    icon: String,
    type: String,
    setCurrentPage: Function,
  },
};
</script>
<style scoped>
div.sidebar-item{
        display: flex;
        align-items: center;
        height: 40px;
        margin-left: 25px;
        position: relative;
        cursor: pointer;
    }
    div.sidebar-item .sidebar-item-text{
        margin-left: 15px;
    }
    div.sidebar-item.selected, div.sidebar-item:hover{
        color: black;
    }
    /* div.sidebar-item:hover .sidebar-item-highlighted */
    div.sidebar-item.selected .sidebar-item-highlighted{
        height: 70%;
        width: 3px;
        position: absolute;
        border-radius: 2px;
        right: 0;
        background: #4318FF;
    }
    div.sidebar-item.selected 
    svg{
        color: #4318FF;
    }
</style>