<template>
  <!-- <div class="main">
    <div class="head">
      <div class="Heading">Check Table</div>
      <div class="dots">...</div>
    </div>
    <div class="sub-head">
      
     
      
      
   
    <div class="first-col">
        <div class="name"  style="color: grey;">name</div>
        <div class="box-content-wrapp">
            <div class="checkbox">&#9745;</div>
            <div class="data">Horizon UI Pro</div>
        </div>
        <div class="box-content-wrapp">
            <div class="checkbox">&#9745;</div>
            <div class="data">Horizon UI Pro</div>
        </div>
        <div class="box-content-wrapp">
            <div class="checkbox">&#9745;</div>
            <div class="data">Horizon UI Pro</div>
        </div>
        <div class="box-content-wrapp">
            <div class="checkbox">&#9745;</div>
            <div class="data">Horizon UI Pro</div>
        </div>
        <div class="box-content-wrapp">
            <div class="checkbox">&#9745;</div>
            <div class="data">Horizon UI Pro</div>
        </div>
    </div>
    <div class="second-col">
        <div class="progress" style="color: grey; margin-bottom: 20px;">Progress</div>
        <div class="percentage" >10.5%</div>
        <div class="percentage">10.5%</div>
        <div class="percentage">10.5%</div>
        <div class="percentage">10.5%</div>
        <div class="percentage">10.5%</div>
    </div>
    <div class="third-col">
        <div class="Quantity"  style="color: grey;">Quantity</div>
        <div class="qua">245</div>
        <div class="qua">245</div>
        <div class="qua">245</div>
        <div class="qua">245</div>
        <div class="qua">245</div>
    </div>
    <div class="fourth-col">
        <div class="date"  style="color: grey;">Date</div>
        <div class="dates">24Jan2021</div>
        <div class="dates">24Jan2021</div>
        <div class="dates">24Jan2021</div>
        <div class="dates">24Jan2021</div>
        <div class="dates">24Jan2021</div>
    </div> </div>
  </div> -->

<div class="main-content">
    
    <div class="first-col">
        <div class="name">NAME</div>
    <div class="part1">
        <div class="box4"></div>
        <div class="cont">Horizon UI Pro</div>
    </div>
    <div class="part1">
        <div class="box">&#10003;</div>
        <div class="cont">Horizon UI Pro</div>
    </div>
    <div class="part1">
        <div class="box">&#10003;</div>
        <div class="cont">Horizon UI Pro</div>
    </div>
    <div class="part1">
        <div class="box">&#10003;</div>
        <div class="cont">Horizon UI Pro</div>
    </div>
    <div class="part1">
        <div class="box4"></div>
        <div class="cont">Horizon UI Pro</div>
    
    </div>
</div>
<div class="second-col">
    <div class="name">PROGRESS</div>
    <div class="cont2-wrapp">
    <div class="cont">10.5%</div>
    <div class="cont">10.5%</div>
    <div class="cont">10.5%</div>
    <div class="cont">10.5%</div>
    <div class="cont">10.5%</div></div>
</div>
<div class="third-col">
    <div class="name">QUANTITY</div>
    <div class="cont2-wrapp">
    <div class="cont">245</div>
    <div class="cont">245</div>
    <div class="cont">245</div>
    <div class="cont">245</div>
    <div class="cont">245</div></div>
    
</div>
<div class="fourth-col">
    <div class="name">DATE</div>
    <div class="cont2-wrapp">
    <div class="cont">24/5/20</div>
    <div class="cont">24/5/20</div>
    <div class="cont">24/5/20</div>
    <div class="cont">24/5/20</div>
    <div class="cont">24/5/20</div></div>
</div>
</div>


</template>
<style scoped>
.box{
    height: 17px;
  width: 17px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.first-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
}
.main-content {
   padding: 40px;
   display: flex;
   flex-direction: row;
   
}
.dot {
    background-color: #555;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.part1 {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;
    
}
.name {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 24px;
color: #A3AED0;
margin-bottom: 10px;

}
.box4 {
    height: 13px;
  width: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
border: 2px solid grey;
} 
.cont {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 24px;
color: #2B3674;
}
.second-col {
    display: flex;
    flex-direction: column;
gap:20px;
margin-left: 65px;

}
.cont2-wrapp {
    gap:20px;
    display: flex;
    flex-direction: column;
    margin-top: -20px;
}
.third-col {
    display: flex;
    flex-direction: column;
gap:20px;
margin-left: 65px;
}
.fourth-col {
    display: flex;
    flex-direction: column;
gap:20px;
margin-left: 65px;
}
.head {
    display: flex;
    flex-direction: row;
    margin-top: -20px;
    justify-content: space-between;
}


</style>
