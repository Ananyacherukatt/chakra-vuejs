<template>
  <div>
    I'm {{ profile }} component
    <div>Name : {{ studentName }}</div>
    <div>Age: {{ studentAge }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: "profileeee",
    };
  },
  props: {
    studentName: String,
    studentAge: Number,
  },
};
</script>
