<template>
  <div class="main">
    <div class="header">
      <img class="grey-bac" src="./Vector (20).png" alt="" />
      <div class="task">Tasks</div>
    </div>
<div class="wrapper">
    <div class="dot"></div>
    <div class="first-row">
      <!-- <img
        class="box"
        src="./Button.png"
        alt=""
        style="width: 25px; height: 25px"
      /> -->
     <div class="rectangel"></div>
      <div class="des">Landing Page Design</div>
      
    </div>
    <div class="second-row">
      <img src="./Vector (20).png" alt="" />
      <div class="des1">Dashboard Builder</div>
      <!-- <img class="dots" src="./Vector (19).png" alt="" style="width: 3%;height: 3%;" /> -->
    </div>
    <div class="third-row">
      <img src="./Vector (20).png" alt="" />
      <div class="des1">Mobile App Design</div>
      <!-- <img class="dots" src="./Vector (19).png" alt="" style="width: 3%;height: 3%; " /> -->
    </div>
    <div class="fourth-row">
      <!-- <img src="./Button.png" alt="" style="width: 25px; height: 25px"/> -->
      <div class="rectangel"></div>

      <div class="des3">Illustrations</div>
      <!-- <img class="dots" src="./Vector (19).png" alt="" style="width: 3%;height: 3%; " /> -->
    </div>
    <div class="fifth-row">
      <img src="./Vector (20).png" alt="" />
      <div class="des1">Promotional LP</div>
      <!-- <img class="dots" src="./Vector (19).png" alt="" style="width: 3%;height: 3%;" /> -->
    </div></div>
    <div class="sixth-row">
        <img class="dots" src="./Vector (19).png" alt="" style="width: 0.5rem;height: 0.7rem;" />
        <img class="dots" src="./Vector (19).png" alt="" style="width: 0.5rem;height: 0.7rem;" />
        <img class="dots" src="./Vector (19).png" alt="" style="width: 0.5rem;height: 0.7rem;"/>
        <img class="dots" src="./Vector (19).png" alt="" style="width: 0.5rem;height: 0.7rem;"/>
        <img class="dots" src="./Vector (19).png" alt="" style="width: 0.5rem;height: 0.7rem;" />
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.main {
  /* gap: 20px; */
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.task {
  margin-left: 20px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;

  color: #2b3674;
}
.first-row {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}
.box {
    margin-right: 10px;
}
.des {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 375;
font-size: 12px;



color: #A3AED0;
}
.second-row {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}
/* .des1 {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 375;
font-size: 14px;
margin-top: 20px;
color: #2b3674;
} */

.des1 {
    margin-left: 20px;
    font-family: 'DM Sans';
    color: #2b3674;
    font-size: 12px;
}
.third-row {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}
.fourth-row {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}
.des2 {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 375;
font-size: 14px;
margin-left: 20px;
color: #A3AED0;


}
.fifth-row {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}
.dots {
   display: flex;
   flex-direction: column;
   margin-bottom: 28px;

}
.rectangel {
    height: 15px;
  width: 15px;
  /* background-color: #555; */
  border: 2px solid grey;
  background-color: white;
  margin-right: 20px;
}
.des3{
    font-family: 'DM Sans';
font-style: normal;
font-weight: 375;
font-size: 14px;
/* margin-left: 10px; */
color: #A3AED0;
}
.sixth-row {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
   justify-content: space-between;
   margin-left: 240px;
    margin-top: -168px;
}

</style>
