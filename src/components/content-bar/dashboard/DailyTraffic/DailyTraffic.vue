<template>
    <div class="main">
        <div class="cont">
            <div class="wrapper">
    <div class="mains">
  <div class="revenu">Daily Traffic</div>
  <div class="green">+2.45%</div></div>
  <div class="wrapp">
  <div class="price">2.579</div>
  <div class="grey-head">Visitors</div></div></div>
      <!-- <div class="revenue">weekly revenue</div> -->
      <Bar :data="data" :options="options" />
    </div></div>
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
          labels: ["17", "18", "19", "20"],
          datasets: [
            {
              label: "Data One",
              backgroundColor: "blue",
              data: [40, 39, 10, 40],
              barThickness:10
            },
            {
            //   label: "Data Two",
              backgroundColor: " blue",
              data: [40, 39, 10, 40, 39],
              barThickness:10
            },
            {
            //   label: "Data Three",
              backgroundColor: " blue",
              data: [20, 10, 12, 33],
              barThickness:10
            },

            
          ],
        },
  
        options: {
            plugins: {
            legend: {
                display: false
            },
          responsive : true,
        },
          scales: {
            xAxes: {
              stacked: true,
              categoryPercentage: 0.5,
              barPercentage: 0,
              // grid: {
              //   linewidth: 0,
              // },
              display: false,
                    drawOnChartArea: false,
                    drawBorder: false
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
      flex-direction: column;
      margin-top: -40px;
  }
  .mains {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }
  .revenu {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 24px;
/* or 171% */

letter-spacing: -0.02em;

color: #A3AED0;

  }
  .green {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 11px;
line-height: 20px;
/* identical to box height, or 167% */

text-align: center;
letter-spacing: -0.02em;

color: #05CD99;
padding: 5px;

  }
  .price {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 42px;
/* identical to box height, or 124% */

letter-spacing: -0.02em;

color: #2B3674;
padding: 5px;

  }
  .wrapp {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .grey-head {
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 24px;
/* or 171% */

letter-spacing: -0.02em;

color: #A3AED0;

  }
  .wrapper
   {
   
    display: flex;
    flex-direction: column;
    margin-top: -40px;
}
   .mains {
    padding: 5px;
   }
  </style>
  