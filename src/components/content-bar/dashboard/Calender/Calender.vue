<template>
    <!-- <Calendar /> -->
    <DatePicker v-model="date" :color="green" />
    
  </template>
  
  <script >
  import { Calendar, DatePicker } from 'v-calendar';
  import 'v-calendar/style.css';
  
  export default {
    components: {
      Calendar,
      DatePicker,
    },
    data() {
      return {
        date: new Date(),
      };
    },
  }
  </script>
  