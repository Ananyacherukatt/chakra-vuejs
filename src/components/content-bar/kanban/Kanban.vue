<script setup>
import ContentHead from "../content-head/ContentHead.vue";
import ContentFoot from "../content-foot/ContentFoot.vue";
</script>

<template>
  <ContentHead head="Kanban" />
  <div id="Kanban">
    <div class="total">
      <div class="first-column">
        <div class="main1">
        <div class="col1-sec1">
        <div class="main-head-wrapp">
          <div class="main-head">Backlog</div>
          <div class="add">+</div>
        </div>
        <div class="sub-head1-wrapp">
          <div class="sub-head1">
            Option to "use local/server version" feature
          </div>
          <div class="pencil"></div>
        </div>
        <div class="sub-head-des">
          It usually displays this message when you close an unsaved page when
          you do it on purpose, and it's getting frustrated to see this every
          time.
        </div>
        <div class="end-wrapper">
            <div>
         
          <img src="./Avatars Group 3 (Horizontal).png" alt="" /></div>
          <div class="update">Updates
        </div></div></div>
        <div class="col1-sec2">
          <div class="sub-head1-wrapp">
            <div class="sub-head1">Add/modify your own CSS-Selectors</div>
            <img src="./Vector (10).png" alt="" style="width: 0.6rem;height: 0.9rem;">
          </div>
          <img src="./Cover 1.png" alt="" />
          <div class="sub-head-des" id="col1-sec2-sub-head">
            Website Design: The ability to add/modify your own CSS-Selectors
            like its done in Venus.
          </div>
          <div class="end-wrapper">
            <div>
            <img src="./Avatars (1).png" alt="" style="width: 5rem;" />
       
           </div>
            <div class="update" id="update">Pending</div>
          </div>
        </div>
        <div class="col1-sec3">
          <div class="sub-head1-wrapp" id="sub-head1-wrapp">
            <div class="sub-head1" id="sub-head1">
              Shortcode for templates to display correctly
            </div>
            <div class="pencil"></div>
            <div class="sub-head-des">
              When you save some sections as a template and then paste a
              shortcode to a new page, the layout is broken, some styles are
              missing - in the editor.
            </div>
            <div class="end-wrapper">
              <img src="./Credits to Unsplash.com.png" alt="" />
              <div class="update3" id="update3">Errors</div>
            </div>
          </div>
        </div></div>
      </div>
      <div class="second-col">
        <div class="col2-sec1">
          <div class="main-head-wrapp">
            <div class="main-head">In progress</div>
            <div class="add">+</div>
          </div>
          <div class="sub-head1-wrapp">
            <div class="sub-head1">
              General ideas to improve 'Edit' workflow
            </div>
            <div class="pencil"></div>
          </div>
          <div class="sub-head-des">
            Currently, I have a few templates in the Local Library and <br>when I
            want to add them I'm always presented (by default).
          </div>
          <div class="end-wrapper">
            <div>
              <img src="./Avatars (1).png" alt="" style="width: 5rem;" />
            
            </div>
            <div class="update" id="update2">Pending</div>
          </div>
        </div>
        <div class="col2-sec2" id="col2-sec22">
          <div class="main-head-wrapp">
            <div class="main-head">In progress</div>
            <div class="add">+</div>
          </div>
          <div class="sub-head1-wrapp">
            <div class="sub-head1">
              Shortcode for templates to display correctly
            </div>
            <div class="pencil"></div>
          </div>
          <div class="sub-head-des">
            When you save some sections as a template and then paste a shortcode
            to a new page, the layout is broken, some styles are missing - in
            the editor.
          </div>
          <div class="end-wrapper">
            <img src="./Credits to Unsplash.com.png" alt="" />
           
            <div class="update">Updates</div>
          </div></div>

          <div class="col2-sec3" id="col2-sec3">
            <div class="sub-head1-wrapp" id="sub-head1-wrapper">
              <div class="sub-head1" id="sub-headd1">
                [UX Design] - Set the default Library tab
              </div>
              <div class="pencil"></div>
              <img class="back" src="./Image (9).png" alt="" />
              <div class="sub-head-des" id="sub-head-dess">
                I want to be able to set the default Library tab (or a way to
                remember the last active tab), especially when I already...
              </div>
              <div class="end-wrapper">
                <img src="" alt="" />
                <img src="" alt="" />
                <div class="update3">Errors</div>
              </div>
            </div>
         
        </div>
      </div>
      <div class="third-col">
        <div class="col3-sec1">
          <div class="main-head-wrapp">
            <div class="main-head">Done</div>
            <div class="add">+</div>
          </div>
          <div class="sub-head1-wrapp">
            <div class="sub-head1">Copy/Paste elements between pages</div>
            <img src="./Vector (10).png" alt="" style="width: 0.6rem;height: 0.9rem;">
          </div>
          <div class="sub-head-des" id="sub-head-des">
            We can only copy/paste elements (or group of elements) in the same
            page, which is quite limited.
          </div>
          <div class="end-wrapper">
            <img src="./Credits to Unsplash.com.png" alt="" />
            <div class="update1">Done</div>
          </div>
        </div>
        <div class="col3-sec2">
          <div class="sub-head1-wrapp">
            <div class="sub-head1">
              Remove Extra DIV for each container added
            </div>
            <img src="./Vector (10).png" alt="" style="width: 0.6rem;height: 0.9rem;">
            <div class="pencil"></div>
          </div>
          <div class="sub-head-des">
            I still hope there won't have an extra div for each container we
            added. It should be something for better styling...
          </div>
          <div class="end-wrapper">
            <img src="./Credits to Unsplash.com.png" alt="" />
           
            
            <div class="update1">Done</div>
          </div>
        </div>
        <div class="col3-sec3">
          <div class="sub-head1-wrapp">
            <div class="sub-head1">
              Add Figma files for the Library design blocks
            </div>
            <img src="./Vector (10).png" alt="" style="width: 0.6rem;height: 0.9rem;">
            <div class="pencil"></div>
          </div>
          <div class="sub-head-des">
            I want to present my clients the Figma files first, so it would be
            great if you add those as well, more manual downloads...
          </div>
          <div class="end-wrapper">
            <img src="./Credits to Unsplash.com (1).png" alt="" />
            
            <div class="update1">Done</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ContentFoot />
</template>

<script></script>

<style scoped>
.total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.first-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 375px;
    background-color: #756d6d0f;
    align-items: center;
    padding: 10px;
   
}
.main-head-wrapp {
    display: flex;
    flex-direction: row;
    justify-content: space-between;



}
.main-head {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 525;
font-size: 16.5px;
color: #2B3674;

}
.add {
 
    border: 1px solid #b5b7b9;
    padding: 3px;
    width: 6%;
    border-radius: 4px;
    align-items: center;
    display: flex;
    justify-content: center;

}
.sub-head1-wrapp {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
}
.sub-head1 {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 525;
font-size: 15px;
color: #2B3674;


}
.sub-head-des  {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 200;
font-size: 14px;
color: #A3AED0;
}
.end-wrapper {
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
    margin-top: 20px;
}
img {
    border-radius: 20px;
    left:20%;
}
  
  
.update1 {
    border: 1px solid blue;
    color: white;
    background-color:green;
    border-radius: 10px;
    font-size: 15px;
    width:35%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.update {
    border: 1px solid blue;
    color: white;
    background-color:blue;
    border-radius: 10px;
    font-size: 15px;
    width:35%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.col1-sec1 {
    display: flex;
    background-color: white;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
    width: 300px;
    
}
.col1-sec2 {
    display: flex;
    background-color: white;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
    width: 300px;
}
.col1-sec3 {
    display: flex;
    background-color: white;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 300px;
}
#col1-sec2-sub-head {
    margin-top: 30px;
    display: flex;
}
#sub-head1-wrapp {
    /* margin-top: 40px; */
    /* display: unset; */
    /* width: 40%; */
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    padding: 20px;
}
#sub-head1 {
margin-bottom: 20px;
}
#update {
    background-color: orange;
    border: none;
}
.update3 {
    background-color: red;
    border: none;
    width: 30%;
    height: 150%;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.second-col {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    width: 385px;
    background-color: #756d6d0f;
    align-items: center;
    padding: 10px;
}
.col2-sec1 {
    display: flex;
    background-color: white;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
    width: 385px;
}
.col2-sec2  {
    display: flex;
    background-color: white;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 385px;
}
#update2 {
    background-color: orange;
    border: none;
}
.col2-sec3 {
    /* display: flex; */
    background-color: white;
    border-radius: 15px;
    flex-direction:row;
    justify-content: space-between;
    padding: 20px;
    width: 385px;
    
}


#sub-head1-wrapper {
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    padding: 20px;
}
#sub-headd1 {
    margin-bottom: 20px;
}
#sub-head-dess {
    margin-top: 20px;
}
.third-col {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    width: 375px;
    background-color: #756d6d0f;
    align-items: center;
    padding: 10px;
}
.col3-sec1 {
    display: flex;
    background-color: white;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
}
.col3-sec2 {
    display: flex;
    background-color: white;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
}
.col3-sec3 {
    display: flex;
    background-color: white;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
}
#col2-sec22 {
    margin-bottom: 20px;
}
.back {
   justify-content: center;
   align-items: center;
   width: 355px;
   height: 213px;
}

</style>
