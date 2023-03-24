<!-- <script setup>
import { Line } from "vue-chartjs";
</script>

<template>
  <div>
    <Line :data="this.chartData" :options="this.options" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        labels: [
          "Babol",
          "Cabanatuan",
          "Daegu",
          "Jerusalem",
          "Fairfield",
          "New York",
          "Gangtok",
          "Buenos Aires",
          "Hafar Al-Batin",
          "Idlib",
        ],
        datasets: [
          {
            label: "Line Chart",
            data: [600, 1150, 342, 6050, 2522, 3241, 1259, 157, 1545, 9841],
            fill: false,
            borderColor: "#2554FF",
            backgroundColor: "#2554FF",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script> -->

<template>
  <div id="pie-chart">
    <div id="pie-head">
      <div class="wrap">
        <img src="./Vector (22).png" alt="" />
        <div id="pie-head-1">This month</div>
      </div>
      <img class="graph" src="./Vector (21).png" alt="" />
    </div>
    <div class="main-head">
    <div class="dollar">$37.5K</div>
    <div class="sub-head-wrapp">
      <div class="grey-head">Total Spent</div>
      <div class="img"><img src="./Vector (23).png" alt="" /></div>
      <div class="increase">+2.45%</div>
    </div>
    <div class="track-wrapp">
      <div class="img1"><img src="./Frame 5.png" alt="" /></div>
      <div class="track">Track</div>
    </div>
  </div>
  </div>

  <Line :data="this.data" :options="this.options" />
</template>

<script lang="ts">
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS,
  CategoryScale,
  //   LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  //   LinearScale,
  PointElement,
  LineElement,
  //   Title,
  Tooltip
  //   Legend
);

export default {
  name: "App",
  components: {
    Line,
  },
  data() {
    return {
      data: {
        labels: ["SEPT", "OCT", "NOV", "DEC", "JAN", "FEB"],
        datasets: [
          {
            label: "Line Chart",
            data: [600, 1150, 342, 6050, 2522, 3241],
            fill: false,
            borderColor: "#2554FF",
            backgroundColor: "#2554FF",
            borderWidth: 1,
          },
          {
            label: "Line Chart",
            data: [900, 5150, 442, 8050, 12522, 5241],
            fill: false,
            borderColor: "pink",
            backgroundColor: "green",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          xAxes: {
            stacked: true,
            categoryPercentage: 1,
            // barPercentage: 0.9,
            // barThickness:0.1,
            display: false,
                    drawOnChartArea: false,
                    drawBorder: false,
                    // barCategoryGap: '100%'
            // grid: {
            //   linewidth: 0,
            // },
          },
          

          y: {
            stacked: true,
            display: false,
                    drawOnChartArea: false,
                    drawBorder: false
            
          },
        },
      },
   
    };
  },
};
</script>
<style scoped>
#pie-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
}
.wrap {
  display: flex;
  flex-direction: row;
  background-color: aliceblue;
  border-radius: 10px;
  padding: 5px;
  /* margin-top: 20px; */
}

.graph {
  width: 15px;
  height: 15px;
}
#pie-head-1 {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #a3aed0;
  margin-left: 5px;
}
.dollar {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 25px;
color: #2B3674;

}
.sub-head-wrapp {
    display: flex;
    flex-direction: row;
    gap:5px;
}
.grey-head {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
color: #a3aed0;
}
.increase {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
color: #05CD99;
}
.main-head {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
   
}
.track-wrapp {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

.img1 {
    margin-right: 5px;
}
.track {

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
color: #05CD99;
}
</style>
