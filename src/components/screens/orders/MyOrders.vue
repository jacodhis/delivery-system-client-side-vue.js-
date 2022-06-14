<template>
    <div>
       <h1 style="text-align:center"> My orders</h1>
      
        <div class="container"  >
             <table class="table table-hover">
                 <thead class="bg-dark" style="color:white">
                     <tr>
                         <td>Order(s)</td>
                         <td>Quantity</td>
                         <td>Description</td>
                         <td>Location</td>
                         <td>Status</td>
                         
                     </tr>
                 </thead>
                 <tbody>
                    <tr v-for="singleOrder in allordesrs" :key="singleOrder.id">
                        <td>{{singleOrder.product?.name}}</td>
                        <td>{{singleOrder.quantity}}</td>
                        <td>{{singleOrder.product?.description}}</td>
                        <td>{{singleOrder.location?.name}}</td>
                         <td style="color:green">{{singleOrder.status?.name}}</td>
                        
                    </tr>

                      
                      
                      
                 </tbody>
             </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
      return{
          allordesrs:""
      }
  },
    methods:{
          async getUserOrders(userId)
         {
            const response = await axios.get('order/'+userId)
            
            this.allordesrs = response.data.data
         }
    },

mounted(){
    const userId = localStorage.getItem('user')
    this.getUserOrders(userId);
   }
}
</script>