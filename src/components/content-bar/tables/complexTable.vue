<script  setup>
</script>

<template>
    <div id="table-struct">
        <div id="table-head">
            <div id="head">Development Table </div>
            <div id="options">
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
            </div>
        </div>
        <div id="table-content">
            <div class="table-row table-title-row">
                <div v-for="n in 4">
                    title <font-awesome-icon icon="fa-solid fa-angle-down" />
                </div>
            </div>
            <div class="table-row" v-for="n in tData">
                <div>{{ n.data1 }}</div>
                <div class="table-row-logos">
                    
                    <img v-if="n.data2.isApproved" src="./approved.png" />
                    <img v-else-if="n.data2.isDisabled" src="./disabled.png" />
                    <img v-else src="./warning.png" />

                    <div v-if="n.data2.isApproved" >Approved</div>
                    <div v-else-if="n.data2.isDisabled" >Disabled</div>
                    <div v-else> Warning</div>

                </div>
                <div>{{ n.data3 }}</div>
                <div class="table-row-progress">
                    <div>{{ n.data4 }}%</div> 
                    <div id="progress">
                        <div :style="{ width : n.data4 + '%' }"></div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['tData']
}
</script>

<style scoped>
    #table-struct{
        width: 540px;
        background-color: white;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
    }
    #table-head{
        display: flex;
        justify-content: space-between;
        height: 40px;

        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 24px;
        color: #2B3674;
        margin-bottom: 20px;
    }
    #options{
        height: 40px;
        width: 40px;
        background-color: #F4F7FE;
        color: #4318FF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        border-radius: 10px;
    }
    .table-row{
        display: flex;
        justify-content: space-between;
        
    }
    .table-row > div {
        width: 20%;
        display: flex;
        align-items: center;
    }
    .table-row-logos > img{
        margin-right: 10px;
    }
    .table-row-progress{
        display: flex;
        justify-content: space-between;
    }
    .table-title-row{
        color: #A3AED0;
        border-bottom: 1px solid ;
    }
    .table-title-row>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #table-content{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 14px;
        color: #2B3674;
    }
    #table-content > div{
        margin-bottom: 15px;
    }
    #progress{
        height: 7px;
        width: 60%;
        border-radius: 5px;
        background-color: #EFF4FB;
        position: relative;
    }
    #progress div{
        height: 100%;
        border-radius: 5px;
        background-color: #4318FF;
        position: absolute;
        left: 0;
    }
    
    /* @media screen and (max-width:1200px) {
        #table-struct{
            width: auto;
            margin-bottom: 10px;
        }
    } */
</style>