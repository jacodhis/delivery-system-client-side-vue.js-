<template>
    <div>
       <h1 style="text-align:center"> my orders</h1>
        <div class="container">
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
                      
                      
                      
                 </tbody>
             </table>
        </div>
    </div>
</template>

<script>
export default {
mounted(){
    const userId = localStorage.getItem(user)
  console.log(userId)
   }
}
</script>