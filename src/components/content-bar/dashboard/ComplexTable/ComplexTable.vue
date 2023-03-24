<template>
  <div class="main">
    <div class="head">
      <div class="Heading">Complex Table</div>
      <div class="dots">...</div>
    </div>
    <div class="sub-head">
      <div class="first-col">
        <div class="names">Name</div>
        <div class="box-content-wrapp">
          <!-- <div class="checkbox">&#9745;</div> -->
          <div class="data">Horizon UI Pro</div>
        </div>
        <div class="box-content-wrapp">
          <!-- <div class="checkbox">&#9745;</div> -->
          <div class="data">Horizon UI Pro</div>
        </div>
        <div class="box-content-wrapp">
          <!-- <div class="checkbox">&#9745;</div> -->
          <div class="data">Horizon UI Pro</div>
        </div>
        <div class="box-content-wrapp">
          <!-- <div class="checkbox">&#9745;</div> -->
          <div class="data">Horizon UI Pro</div>
        </div>
      </div>
      <div class="second-col">
        <div class="names" >Status</div>
        <div class="wrapper">
          <img
            src="./Vector (11).png"
            alt=""
            style="height: 16px; margin-right: 6px"
          />
          <div class="percentage">Approved</div>
        </div>
        <div class="wrapper">
          <img
            src="./Vector (12).png"
            alt=""
            style="height: 16px; margin-right: 6px"
          />
          <div class="percentage">Disable</div>
        </div>
        <div class="wrapper">
          <img
            src="./Vector (13).png"
            alt=""
            style="height: 16px; margin-right: 6px"
          />
          <div class="percentage">Error</div>
        </div>
        <div class="wrapper">
          <img
            src="./Vector (11).png"
            alt=""
            style="height: 16px; margin-right: 6px"
          />
          <div class="percentage">Approved</div>
        </div>
      </div>
      <div class="third-col">
        <div class="names" >Date</div>

        <div class="dates">24Jan2021</div>
        <div class="dates">24Jan2021</div>
        <div class="dates">24Jan2021</div>
        <div class="dates">24Jan2021</div>
      </div>
      <div class="fourth-col">
        <div class="names">Progress</div>
        <div class="datess">
          <img class="pics" src="./Progress bar.png" alt="" style="margin-bottom: 18px;margin-top: 3px;" />
          <img class="pics" src="./Progress bar (1).png" alt="" style="margin-bottom: 16px;"/>
          <img class="pics" src="./Progress bar (2).png" alt="" style="margin-bottom: 12px;"/>
          <img class="pics" src="./Progress bar (2).png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 35px;
}
.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #2b3674;
  font-weight: 700;
  font-family: "DM Sans";
}

.dots {
  
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  #eee;
  border-radius: 10px;
  color: blue;
}
.sub-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}
.box-content-wrapp {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.first-col {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 10px;
  font-family: "DM Sans";
  color: #2b3674;
  gap:20px;
}
.second-col {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 10px;
  font-family: "DM Sans";
  color: #2b3674;
  gap:25px;
}
.name {
  display: flex;
  margin-bottom: 10px;
}
.third-col {
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  margin-bottom: 10px;
  gap:25px;
  font-family: "DM Sans";
  color: #2b3674;
}
.fourth-col {
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  margin-bottom: 10px;
  gap: 25px;
  font-family: "DM Sans";
  color: #2b3674;
}
.checkbox {
  display: flex;
  margin-right: 10px;
  background-color: #eee;
}
.tick:after {
  content: "✔";
  /* position: absolute; */
  /* left:0; top: 2px; */
  width: 20px;
  /* height: 20px; */
  text-align: center;
  border: 1px solid green;
  background: green;
  border-radius: 60%;
  color: white;
  /* box-shadow: inset 0 1px 3px rgba(0,0,0,.3) */
}
.wrapper {
  display: flex;
  flex-direction: row;
}
.datess {
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 100%;
  gap: 20px;
  
}
.names {
    font-family: "DM Sans";
    color: #A3AED0;
    text-transform: uppercase;
    font-size: 12px;
}
.data {
    font-size: 12px;
}
.percentage  {
    font-size: 12px;
}
.dates {
    font-size: 12px;
}
.pics {
    width: 4.1rem;
    height: -0.4rem;
}
</style>
