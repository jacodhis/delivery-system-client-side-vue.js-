<template>
    <div>
          <div class="container col-md-4 mx-auto">
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email </label>
                    <input type="email" class="form-control" autocomplete placeholder="Enter email" v-model="email">
                   
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" autocomplete  placeholder="Password" v-model="password">
                </div><br>
            
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
              email:'',
              password:'',

              user:''
          }
      },
      methods:{
          async handleSubmit(){
           const data ={
                email:this.email,
                password:this.password,
            }
              const response = await axios.post('login',data)
            //   console.log(response.data)
              if(response.data.message == "success"){
                   
                   localStorage.setItem('token',response.data.token)
                    localStorage.setItem('user',response.data.user.id)
                    this.$router.push({name:'home'}) 
              }else{
                  console.log('error')
              }
              
          }
      }
}
</script>