<template>
    <div>
      <div class="container col-md-4 mx-auto">
         
           <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name </label>
                <input type="text" class="form-control" placeholder="Enter Name" v-model="name">
               
            </div>
             <div class="form-group">
                <label for="email">Email </label>
                <input type="email" class="form-control" placeholder="Enter email" v-model="email">
            
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control"  placeholder="Password" v-model="password">
            </div>
            <br>
           
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
      data(){
          return{
              name:'',
              email:'',
              password:'',

              user:""
           
          }
      },
      methods:{
          async handleSubmit(){
           const data ={
                name :this.name,
                email:this.email,
                password:this.password,
            }
               await axios.post( 'register',data)
                this.$router.push({path:'/ods/login'}) 
          }
      }
}
</script>
