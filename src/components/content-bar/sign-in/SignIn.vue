<script setup>
import ContentHead from "../content-head/ContentHead.vue";
import ContentFoot from "../content-foot/ContentFoot.vue";
</script>

<template>
  <ContentHead head="Sign In" />
  <div id="Sign-In">
    <div class="right-content">
      <div class="sign">Sign In</div>
      <div class="sub-head">Enter your email and password to sign in!</div>
      <div class="button-wrap">
        
          <div class="enter">Sign in with Google</div>
          <div class="G-img">
          <img src="./Google__G__Logo 1.png" alt="" />
</div>
        
      </div>
      <div class="line-wrap">
        <div class="hr1">
          <p class="or">or</p>
          <div class="hr"></div>
        </div>
      </div>
      <div class="email">Email &#42;</div>
      <div class="value">mail@simmple.com</div>
      <div class="passs">Password</div>
      <div class="value2">Min 8 characters</div>
      <div class="total">
        <div class="check"> <span class="check-col"> &#9745;</span> Keep me logged in</div>
        <div class="forget"> <span class="right-bottom"> Forget Password?</span></div>
      </div>
      <div class="blue">Sign in</div>
      <div class="register">Not registered yet? Create an Account</div>
    </div>
    <div class="left-content">
      <img  class="horizon"
      src="./Image (4).png" alt="" />
    </div>
  </div>
  <ContentFoot />
</template>

<script></script>

<style scoped>
.right-content {
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  /* margin: auto; */
  margin-top: 100px;
  
 
}
.sign {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 525;
  font-size: 27px;
  color: #2b3674;
  margin-bottom: 10px;
}
.sub-head {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #a3aed0;
  margin-bottom: 10px;
}
.enter {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 375;
  font-size: 10px;
  color: #2b3674;
  border: 1px solid white;
  padding: 10px;
  background-color:  #2b367417;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  display:flex;

  box-sizing: border-box;
    width: 170%;
  margin-bottom: 10px;
}
.button-wrap {
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  box-sizing: border-box;
    width: 170%;
  margin-bottom: 10px;
  /* position: absolute; */
}
/* .hr1{
    border-bottom: 1px solid #E0E5F2;
    width: 100px;
    /* margin: auto; */
    /* display: flex; */
    /* flex-direction: row; */
/* } */ 
/* .hr{
    border-bottom: 1px solid #E0E5F2;
    width: 100px;
    margin: auto;
    display: flex;
    flex-direction: row;
} */
.line-wrap  {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 10px;
}
.value {
    border: 1px solid #E0E5F2;
    padding: 10px;
    border-radius: 10px;
    color: #A3AED0;
    margin-top: 15px;
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 170%;

}
.value2 {
    border: 1px solid #E0E5F2;
    padding: 10px;
    border-radius: 10px;
    color: #A3AED0;
    margin-top: 15px;
    margin-bottom: 10px;
    width: 170%;
    box-sizing: border-box;
}
.check-col {
color: blue;
}

.check{
    font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
margin-bottom: 10px;

}
.total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.forget {
    color: blue;
    /* margin-left: 60px; */
}
.blue {
    border: 1px solid blue;
    background-color: blue;
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 170%;
}
.register {
    margin-top: 10px;
}
.left-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;

}
.horizon {

    width:723px;
    height: 700px;

}
#Sign-In {
display: flex;
flex-direction: row;
justify-content: space-between;
width: 1440px;
height: 864px;
background-color: white;
}
.or {
    align-items: center;
    display: flex;
    align-items: center;
    left: 200px;
    position: relative;
}
.right-bottom {
    display: flex;
    position: absolute;
    /* left:32%; */
    
}
.G-img {
    position:absolute;
    left: 32.5rem;
    top: 18.5rem;
}



</style>
