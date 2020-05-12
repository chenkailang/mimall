<template>
    <div>
        <order-header>header</order-header>
        cart
        <router-view></router-view>
        <order-footer>footer</order-footer>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import OrderFooter from '../components/OrderFooter'
export default {
  name: 'cart',
  components:{
    OrderHeader,
    OrderFooter
  }
}
</script>

<style scoped>

</style>