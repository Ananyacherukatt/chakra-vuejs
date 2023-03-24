<script setup>
import ContentHead from "../content-head/ContentHead.vue";
import ContentFoot from "../content-foot/ContentFoot.vue";

import Capsule from "./capsule/Capsule.vue";
import PieChart from "./pie-chart/PieChart.vue";
import Bar from "./bar/bar.vue";
import OnTrack from "./OnTrack/OnTrack.vue";
import CheckRevenew from "./CheckRevenew/CheckRevenew.vue";
import CheckTable from "./CheckTable/CheckTable.vue";
import DailyTraffic from "./DailyTraffic/DailyTraffic.vue";
import ComplexTable from "./ComplexTable/ComplexTable.vue";
import Task from "./Task/Task.vue";
import Calender from "./Calender/Calender.vue";
import NewLesson from "./NewLesson/NewLesson.vue";
import TeamMember from "./TeamMember/TeamMember.vue";
import Finger from "./Finger/Finger.vue";
import StarBucks from "./StarBucks/StarBucks.vue";


</script>

<template>
  <ContentHead head="Dashboard" />
  <div id="dashboard">
    <div id="capsules">
      <Capsule v-for="capsule in capsules" :capsule="capsule" />
    </div>
    <!-- <PieChart />
    <Bar /> -->
    <div class="flexbox w-100" id="row1">
      <div class="w-50">
        <OnTrack />
      </div>
      <div class="w-50">
        <CheckRevenew />
      </div>
    </div>
    <div class="flex-box2">
        <div class="first-box">
            <CheckTable />
        </div>
        <div class="second-box">
            <DailyTraffic />
        </div>
        <div class="third-box">
            <PieChart />
        </div>
    </div>
    <div class="flex-box3">
        <div class="box1">
            <ComplexTable />
        </div>
        <div class="box2">
            <Task />
        </div>
        <div class="box3">
            <Calender />
        </div>
    </div>
    <div class="flex-box4">
        <div class="box11">
            <NewLesson />
        </div>
        <div class="box12">
            <TeamMember />
        </div>
        <div class="box13">
            <Finger />
        </div>
        <div class="box14">
            <StarBucks />
        </div>
    </div>
    
  </div>
  <ContentFoot />
</template>

<script>
export default {
  data() {
    return {
      capsules: [
        {
          id: 1,
          head: "Earnings",
          subHead: "$350.4",
        },
        {
          id: 2,
          head: "Spend this month",
          subHead: "$642.39",
        },
        {
          id: 3,
          head: "Sales",
          subHead: "$574.34",
          subSubHead: "+23% since last month",
        },
        {
          id: 4,
          head: "Your Balance",
          subHead: "$1000",
        },
        {
          id: 5,
          head: "New Task",
          subHead: "154",
        },
        {
          id: 6,
          head: "Total Projects",
          subHead: "2935",
        },
      ],
    };
  },
};
</script>

<style scoped>
#capsules {
  margin: 10px 0;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  gap: 15px;
}
</style>
