<template>
    <div class="searchForm container">
        <div class="sf-menu">
            <div class="sf-menu-left">
                <a id="categories-mobile"></a>
                <a href="/" id="mainLogo"><img alt="ciceksepeti" src="../assets/images/ciceksepeti.svg"></a>
                <a href="/" id="basket-mobile"></a>
            </div>
            <div class="sf-menu-right">
                <div class="search-area">
                    <img alt="search icon" src="../assets/images/search.svg">
                    <input type="text" class="search-input" name="searchInput" value="" placeholder="Ürün ara" @keyup="searchProduct($event)">
                    <button type="submit" class="btn search-button">Ara</button>
                </div>
                <div class="my-basket-area">
                    <button type="submit" class="btn my-basket-btn">
                        <img alt="basket" v-if="!(this.$isMobile())" src="../assets/images/basket.svg">
                        <img alt="basket" v-else src="../assets/images/basket_blue.svg">
                        <span v-if="!(this.$isMobile())">Sepetim</span>
                        <div class="basket-count" v-if="this.basket.totalCount > 0">{{ this.basket.totalCount }}</div>
                    </button>
                    <div class="progressbar" v-if="this.basket.totalPrice.amountWithOutFreeCargo > 0">
                        <div class="">
                            <div class="criterion">
                                <span class="">
                                    <div v-if="this.basket.totalPrice.amountWithOutFreeCargo <= this.basket.totalPrice.minFreeCargoLimit">
                                        <img alt="ciceksepeti" src="../assets/images/lightning.svg">
                                        <span> 
                                            {{ (Math.round((this.basket.totalPrice.minFreeCargoLimit - this.basket.totalPrice.amountWithOutFreeCargo)*100 )/100).toFixed(2)}} {{ this.basket.totalPrice.currency }} 
                                            <p>ürün daha ekleyin kargo bedava</p>
                                        </span>
                                    </div>
                                    <span class="free-cargo-price" v-else><p>Tebrikler! Kargonuz bedava.</p></span>
                                </span>
                            </div> 
                            <div class="meter" v-if="(this.basket.totalPrice.amountWithOutFreeCargo <= this.basket.totalPrice.minFreeCargoLimit)">
                                <span class="meter-sp" :style="'width:'+((this.basket.totalPrice.amountWithOutFreeCargo*100)/this.basket.totalPrice.minFreeCargoLimit)+'% !important;'"></span>
                                <input type="hidden" class="hidden-mtr">
                            </div>	
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchForm',
  computed: {
    basket() {
      return this.$store.state.basket;
    }
  },
  methods: {
        searchProduct(e) {
            var value = e.target.value.toLocaleLowerCase();
            const products = this.$store.state.filteredProducts;
            var searchCount = 0;
            if(value.length >= 3) {
                    products.list.forEach(item => {
                        var searchItem = item.name.toLocaleLowerCase();
                        if(searchItem.indexOf(value) > -1) {
                            item.visible = true;
                            searchCount++;
                        } else {
                            item.visible = false;
                        }
                    });
            } else {
                products.list.forEach(item => {
                    item.visible = true;
                    searchCount++;
                });
                
            }
            if(searchCount > 0) {
                this.$store.state.searchNotFound = false;
            } else {
                this.$store.state.searchNotFound = true;
            }
            
            this.$store.dispatch('searchProduct', products);
        }
  }
}
</script>

<style lang="scss">
    @import "../assets/scss/search-form.scss";
</style>