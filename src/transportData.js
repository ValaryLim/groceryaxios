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
                label: 'Average MRT Ridership',
                data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"grey",
                backgroundColor:'grey',
                fill:false
            },
            {
                label: 'Average LRT Ridership',
                data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"lightpink",
                backgroundColor: "lightpink",
                fill:false
            },
            {
                label: 'Average Taxi Ridership',
                data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"slateblue",
                backgroundColor: "slateblue",
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
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results = response.data['result']['records'];
        // console.log(this.results, "results")
        for(let key in this.results){
            if (this.results[key]['type_of_public_transport'] == "MRT") {
                this.chartdata.datasets[0].data.push(this.results[key]['average_ridership']);
                this.chartdata.labels.push(this.results[key]['year']);
            } else if (this.results[key]['type_of_public_transport'] == "LRT") {
                this.chartdata.datasets[1].data.push(this.results[key]['average_ridership']);
            } else if (this.results[key]['type_of_public_transport'] == "Taxi") {
                this.chartdata.datasets[2].data.push(this.results[key]['average_ridership']);
            }
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