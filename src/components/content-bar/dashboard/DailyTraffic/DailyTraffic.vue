<template>
    <div class="main">
    
  
      <!-- <div class="revenue">weekly revenue</div> -->
      <Bar :data="data" :options="options" />
    </div>
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
              label: "Data Two",
              backgroundColor: " blue",
              data: [40, 39, 10, 40, 39],
              barThickness:10
            },
            {
              label: "Data Three",
              backgroundColor: " blue",
              data: [20, 10, 12, 33],
              barThickness:10
            },
          ],
        },
  
        options: {
          responsive: true,
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
  }
  </style>
  