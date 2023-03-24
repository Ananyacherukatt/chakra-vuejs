<template>
  <div id="pie-chart">
        <div id="pie-head">
            <div id="pie-head-1">Weekly Revenue</div>
            <div id="pie-head-2"><img class="vector" src="./Vector (21).png" alt=""></div>
        </div>
        </div>
    <Bar :data="data" :options="options" />
 
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Bar,
  },
  data() {
    return {
      data: {
        //   labels: ["17", "18", "19", "20"],
        //   datasets: [{ backgroundColor: "blue", data: [300, 200, 100, 200] }],
        labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "blue",
            data: [40, 39, 10, 40, 39, 80, 40, 50, 60, 70],
            
                barThickness:20,
            //     categoryPercentage: 13,
            // barPercentage: 190,
          },
          {
            label: "Data Two",
            backgroundColor: " #6AD2FF",
            data: [40, 39, 10, 40, 39, 80, 40, 50, 60, 70],
            barThickness:20,
            // categoryPercentage: 13,
            // barPercentage: 190,
          },
          {
            label: "Data Three",
            backgroundColor: " #EFF4FB",
            data: [20, 10, 12, 33, 22, 4, 0, 50, 60, 70],
            barThickness:20,
            // categoryPercentage: 13,
            // barPercentage: 190,
          },
        ],
      },

      options: {
        responsive: true,
        scales: {
          xAxes: {
            
            stacked: true,
        
            // barPercentage: 0.9,
            // barThickness:0.1,
            display: false,
                    drawOnChartArea: false,
                    drawBorder: false,
                    categoryPercentage: 0.1,
                     barCategoryGap: '10%'
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
.revenue {
  color: blue;

  
}
.main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.graph {
    display: flex;
    /* margin-left: 20rem; */
}
#pie{
        height: 150px;
        width: 150px;
    }
    #pie-chart{
        /* height: 360px; */
        width: 300px;
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    #pie-head{
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        font-family: 'DM Sans';
        font-weight: 700;
    }
    #pie-head-1{
        font-size: 16px;
        color: #2B3674;
    }
    #pie-head-2{
        font-size: 14px;
        color:  #A3AED0;
    }
    .vector {
        margin-left: 28rem;
    }
</style>
