<template>
  <div id="dashboard">
    <h1>
      Quiz
    </h1>
    <product-list-one/>
    <product-list-two/>
  </div>
</template>

<script>
  import ProductListOne from '@/components/ProductListOne'
  import ProductListTwo from '@/components/ProductListTwo'

  export default {
    name: "quiz-view",
    components: {
      'product-list-one': ProductListOne,
      'product-list-two': ProductListTwo
    }
  }
</script>

<style scoped>

</style>
