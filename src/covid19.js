import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
                label: 'Deaths',
                data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"red",
                backgroundColor:'red',
                fill:false
            },
          ]
          
        },
        options: { 
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('http://covid19.soficoop.com/country/us').then(response=>{
        this.results = response.data['snapshots'];
        // console.log(this.results, "results")
        for(let key in this.results){
            this.chartdata.datasets[0].data.push(this.results[key]['deaths'])
            this.chartdata.labels.push(this.results[key]['timestamp'])
        }
        // console.log(this.chartdata);
        this.renderChart(this.chartdata,this.options);
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }   
    
}