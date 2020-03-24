<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
        <div id="chart">
            <PSIIndex></PSIIndex>
        </div>
        <div id="chart">
            <covid19></covid19>
        </div>
        <div id="chart">
            <transport-data></transport-data>
        </div>
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js';
import PSIIndex from '../PSIIndex.js';
import covid19 from '../covid19.js';
import transportData from '../transportData.js';

export default {
    components:{
        axiosExample,
        PSIIndex,
        covid19,
        transportData
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>