<template>
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="#">
                  
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                       <li class="nav-item">
                            <router-link to="/ods/">Order Delivery System</router-link>
                        </li>
                               
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto" v-if="!token">
                        <!-- Authentication Links -->
                       
                                <li class="nav-item">
                                    <router-link to="/ods/login" class="nav-link">Login</router-link>
                                </li>
                                 <li class="nav-item">
                                    <router-link to="/ods/register" class="nav-link">Sign Up</router-link>
                                </li>
                       
                          
                       
                    </ul>
                     <ul class="navbar-nav ms-auto" v-if="token">
                            <li class="nav-item">
                               <router-link to="/ods/logout" class="nav-link">Logout</router-link>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
export default{
    data(){
        return{
            token:''
        }
    },
 
    mounted(){
         const token =  localStorage.getItem('token')
         this.token = token
    }
}
</script>
