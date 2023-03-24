<template>
  <div class="maintag">
    <div class="pic-head-wrapper">
      <img src="./Icon.png" alt="" />
      <div class="content">
        <div class="grey-head">Business Desing</div>
        <div class="black-head">New Lesson Is Available</div>
      </div>
    </div>
    <div class="center">
      What do you need to know to <br>create better products?
    </div>
    <div class="buttons">
      <div class="first-button">
        <img src="./timer.png" alt=""  style="width: 20px; height: 20px;">
        <div class="minute">85 mins</div>
      </div>
      <div class="second-button">
       <img src="./slow_motion_video.png" alt="" style="width: 20px; height: 20px;">
        <div class="video">Video format</div>
      </div>
    </div>
    <div class="foot-items">
     <img src="./Avatars (1).png" alt="">
      <div class="blue-button">Get Started</div>
    </div>
  </div>
</template>
<style scoped>
.pic-head-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
}
.content {
    display: flex;
    flex-direction: column;
margin-left: 10px;
    
}
.grey-head {
    color: #A3AED0;
    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 12px;
}
.black-head {
    font-family: 'DM Sans';
    font-weight: 700;
    color: #2B3674;
    font-size: 14px;
}
.center {
    color: #2B3674;
    font-family: 'DM Sans';
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.buttons {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 20px;
}
.first-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    margin-left: 25px;

}
.second-button {
    display: flex;
    flex-direction: row;
    lign-items: center;
}
.minute {
    color: #2B3674;
    font-family: 'DM Sans';
    font-size: 12px;
    margin-left: 4px;
}
.video {
    color: #2B3674;
    font-family: 'DM Sans';
    font-size: 12px;
    margin-left: 4px;
}
.foot-items {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    justify-content: space-between;

}
.blue-button  {
    border: 1px solid blue;
    background-color: blue;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: white;
    padding: 5px;
    width: 90px;
    justify-content: center;
}

</style>
