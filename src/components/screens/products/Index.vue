<template>
    <div>
        <div class="container">
         <h1 style="text-align:center">OUR DELIVERABLES</h1>
         <hr>
         <div>
             <router-link to="/myorders" class="nav-link">myOrders</router-link>
         </div>
         <div>
             <table class="table table-hover">
                 <thead class="bg-dark" style="color:white">
                     <tr>
                         <td>name</td>
                         <td>Description</td>
                         <td>Location</td>
                         <td>Order</td>
                         
                     </tr>
                 </thead>
                 <tbody>
                      
                       <tr v-for="product in products" :key="product.id">
                         <td>{{product.name}}</td>
                         <td>{{product.description}}</td>
                         <td>{{product.location}}</td>
                         <td><router-link :to=" `/product/show/${product.id}` " class="btn btn-primary">Order</router-link> </td>
                     </tr>
                      
                 </tbody>
             </table>
         </div>
         
      </div>
    </div>
</template>

<script>
export default{
   props:['products'] ,
   data(){
    return{
         userId:""
    }
   },
   computed(){
    const userId = localStorage.getItem(token)
  console.log(userId)
   }
}
</script>
