<template>
  <div class="main-section">
    <div class="name-add-wrapper">
      <div class="head">Team Member</div>
      <img class="add" src="./Vector (14).png" alt="" />
    </div>
    <div class="three-container">
      <div class="container-1">
        <img src="./Ellipse 75.png" alt="" />
        <div class="wrapper">
          <div class="names">Adela Parkson</div>
          <div class="grey-name">Creative Director</div>
        </div>
   
      </div>
      <div class="container-2">
        <img src="./Ellipse 75 (1).png" alt="" />

        <div class="wrapper">
          <div class="names">Christian Mad</div>
          <div class="grey-name">Product Designer</div>
        </div>
        
      </div>
      <div class="container-3">
        <img src="./Ellipse 75 (2).png" alt="" />

        <div class="wrapper">
          <div class="names">Jason Statham</div>
          <div class="grey-name">Junior Graphic Designer</div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<style scoped>
.name-add-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.container-1 {
    display: flex;
    gap:30px;
    background-color:white;
    border-radius: 10px;
    margin-top: 10px;
}
.wrapper {
    display: flex;
    flex-direction:column;
}
.container-2 {
    display: flex;
   gap:30px;
   background-color:white;
    border-radius: 10px;

}
.container-3 {
    display: flex;
    gap:30px;
    background-color:white;
    border-radius: 10px;

}

.three-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
}

.main-section  {
    padding: 20px;
}
.names {

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #2B3674;
}
.grey-name {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
color: #A3AED0;
}
.head {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 32px;
color: #2B3674;
}
.add {
    width: 18px;
    height: 18px;
    /* background-color: #A3AED0; */
}
</style>
