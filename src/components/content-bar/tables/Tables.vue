<script setup>
    import ContentHead from '../content-head/ContentHead.vue';
    import ContentFoot from '../content-foot/ContentFoot.vue';

    import TableStruct from './TableStruct.vue';
</script>

<template>
    <ContentHead head="Tables"/>
    <div id="table">
<div class="first-row">
        <TableStruct :noOfRows='11' />
        <TableStruct :noOfRows='11' />
    </div>
    <div class="second-row">
        <TableStruct :noOfRows='5' />
        <TableStruct :noOfRows='5' /></div>
        <!-- <TableStruct />
        <TableStruct /> -->

    </div>
    <ContentFoot />
</template>

<script>
</script>

<style scoped>
    #table{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .first-row {
        display: flex;
        flex-direction: row;
        gap:20px;
        margin-left: 40px;
    }
    .second-row {
        display: flex;
        flex-direction: row;
        gap:20px;
        margin-left: 40px;
    }
    /* @media screen and (max-width:1200px) {
        #table{
            flex-direction: column;
            align-items: stretch;
        }
    } */
</style>
