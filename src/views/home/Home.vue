<template>
  <div>
       <nav-hearder/>
       <service-bar/>
       <nav-footer/>
       
  </div>
</template>

<script>
import NavHearder from 'components/common/NavHearder'

import NavFooter from 'components/common/NavFooter'

import ServiceBar from 'components/common/ServiceBar'
export default {
    name:"Home",
    mounted() {

    },
    components:{
      NavHearder,
      NavFooter,
      ServiceBar
    }

}
</script>

<style lang="scss">
  
  
</style>