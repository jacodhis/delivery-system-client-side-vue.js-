<template>
    <div v-if="token">
      <products :products="products"/>
    </div>
    <div v-if="!token">
    <div class="container mt-3 col-md-4 mx-auto" >
          <p class="alert alert-danger" style="text-align:center">you have to Login First</p>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import products from '../components/screens/products/Index.vue'

export default {
  name:'home',
  data(){
      return{
          products:[],
          token:''
      }
  },
  components:{
      products
  },

  methods:{
      async fetchProducts(){
        const response =  await axios.get('products')
         this.products = response.data.data
      }
  },
    mounted(){
       const token =  localStorage.getItem('token')
       if(token){ 
           this.token = token
           this.fetchProducts();
       }
       
    }

}
</script>
