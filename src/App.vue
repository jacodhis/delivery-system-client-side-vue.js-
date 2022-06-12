<template>
 <div>
   <div>
     <navigation />
   </div>
   <router-view />
 </div>
</template>

<script>

import navigation from './components/screens/Navigation.vue'
export default {
  name: 'App',
  components:{
    navigation
  }
}
</script>

<style>

</style>
