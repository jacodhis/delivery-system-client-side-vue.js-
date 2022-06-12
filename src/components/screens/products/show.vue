<template>
    <div>
       <div class="container pt-3">
            <h3 style="text-align:center">{{product.name}} ({{product.location}})</h3>
            <p  style="text-align:center">{{product.description}}</p>
               
               <form @submit.prevent="handSubmit">
                    <div class="col-md-6 mx-auto"  >
                    <label for="">Select Destination Location </label>
                   
                    <select class="form-control" v-model="deliveryDestination">
                       <option value="1">Nairobi</option>
                       <option value="2">Mombasa</option>
                    </select>

                </div>

                <div class="col-md-6 mx-auto">
                <label for="">Quantity</label>
                <input type="text" class="form-control" v-model="quantity">
                </div><br>

                <div class="col-md-6 mx-auto">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
               </form>

       </div>
    </div>
</template>


<script>
import axios from 'axios';

export default{
    data(){
        return {
             deliveryDestination:"",
             quantity:"",
             product:"",

             locations:[]
        }
    },
    methods:{
        async getProduct(){
           const response = await axios.get("http://127.0.0.1:8000/api/product/show/"+this.$route.params.id)
           this.product = response.data.data
        },
          async getLocations(){
           const response = await axios.get("http://127.0.0.1:8000/api/locations")
            this.loactions = response.data
        },


        async handSubmit(){
            const data = {
                depotLocationId :this.deliveryDestination,
                quantity:this.quantity,
                product_id:this.$route.params.id,
                customer_id:localStorage.getItem('user')
            }
         await axios.post('http://127.0.0.1:8000/api/order',data)
          this.$router.push({path:'/'}) 

        }
    },
   
    created(){
          this.getProduct()
          this.getLocations()
       
    }
}
</script>
