

<script>
export default{
    mounted(){
     localStorage.removeItem('token')
      this.$router.push({path:'/ods/login'})
    }
}
</script>
