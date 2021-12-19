<template>
  <div class="home">
    <div>
      <SearchForm></SearchForm>
      <Header></Header>
      <Categories></Categories>
      <Products></Products>
      <Campaigns></Campaigns>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>

import SearchForm from '@/components/searchForm.vue'
import Header from '@/components/header.vue'
import Categories from '@/components/categories.vue'
import Products from '@/components/products.vue'
import Campaigns from '@/components/campaigns.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'Home',
  components: { SearchForm, Header, Categories, Products, Campaigns, Footer }
}
</script>

<style lang="scss">
    @import "../assets/scss/home.scss";
</style>
