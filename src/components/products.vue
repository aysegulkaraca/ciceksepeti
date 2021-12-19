<template>
    <div class="products">
        <div class="container">  
            <div class="product-list"> 
                <span v-for="item in products.list" :key="item.id">
                    <div class="product-item" v-show="item.visible">
                        <div class="item-content"> 
                            <div class="item-position">
                                <div class="product-img">
                                    <img alt="product" v-bind:src="require('../assets/images/products/' + item.imgUrl + '.png')">
                                </div>
                                <div class="product-detail">
                                    <div class="product-name">{{item.name}}</div>
                                    <div class="free-cargo">
                                        <span v-if="item.freeCargo">Ücretsiz Teslimat</span>
                                        <span v-else></span>
                                    </div>
                                    <div class="price">{{item.price.amount}} {{item.price.currency}}</div>
                                    <div class="add-basket-area">
                                        <div class="basket-btn" :id="'basketBtn_' + item.id" v-if="!((showSpinner == item.id) && (showBasketBtn != item.id))">
                                            <button class="add-basket" @click="showBasketSpinner(item.id)">Sepete Ekle</button>
                                        </div>
                                        <div :id="'productSpinner_' + item.id" class="input-group product-spinner" v-if="showSpinner == item.id">
                                            <span class="input-group-btn">
                                                <button type="button" class="quantity-left-minus btn btn-spinner"  data-type="minus" data-field="" @click="decrementProductCount(item)">
                                                    <img alt="categories" src="../assets/images/plus.svg">
                                                </button>
                                            </span>
                                            <input type="text" :id="'quantityProduct_' + item.id" name="quantity" class="form-control input-spinner" :value="item.count" min="1" max="10">
                                            <span class="input-group-btn">
                                                <button type="button" class="quantity-right-plus btn btn-spinner" data-type="plus" data-field="" @click="incrementProductCount(item)">
                                                    <img alt="categories" src="../assets/images/plus.svg">
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
                <span v-if="this.searchNotFound">Aradığınız ürün bulunamamıştır..</span>
            </div>
        </div>
      </div>
</template>

<script>


export default {
    name: 'Products',
    data() {
        return {
            products: this.$store.state.filteredProducts,
            showSpinner: "-1",
            showBasketBtn: ""
        }
    },
    computed: {
        basket() {
            return this.$store.state.basket;
        },
        searchNotFound() {
            return this.$store.state.searchNotFound;
        },
        
    },
    methods: {
        showBasketSpinner(productId) {
            this.products.list.forEach(element => {
                if(element.id == productId) {
                    this.showSpinner = productId;
                    this.showBasketBtn = "-1";
                } 
            });
        },
        decrementProductCount(item) {
            if(item.count > 0) {
                item.count--;
                const basketStore = this.basket;
                var updateEl = {};
                for(var el = 0; el < basketStore.products.length; el++) {
                    if(basketStore.products[el].id == item.id) {
                        if(basketStore.products[el].count == 1) {
                            basketStore.products.splice(el,1);
                        } else {
                            updateEl = basketStore.products[el];
                            updateEl.count--;
                            updateEl.price.amount -=item.price.amount;
                        }
                    }
                }
                basketStore.totalCount--;
                basketStore.totalPrice.amount -= item.price.amount;
                if(!item.freeCargo) {
                    basketStore.totalPrice.amountWithOutFreeCargo -= item.price.amount;
                }
            }
            
        },
        incrementProductCount(item) {
            if(item.count <= 10) {
                const basketStore = this.basket;
                var itemDetect = false;
                var updateEl = {};
                if(basketStore.products.length > 0) {
                    for(var el = 0; el < basketStore.products.length; el++) {
                        if(basketStore.products[el].id == item.id) {
                            itemDetect = true;
                            updateEl = basketStore.products[el];
                        }
                    }
                } 

                if(itemDetect) {
                    updateEl.count++;
                    updateEl.price.amount +=item.price.amount;
                } else {
                    const basketItem = {
                        id: item.id,
                        count: 1,
                        freeCargo: item.freeCargo,
                        price: {
                            amount: item.price.amount,
                            currency: item.price.currency
                        }
                    }
                    basketStore.products.push(basketItem);
                }
                item.count++;
                basketStore.totalCount++;
                basketStore.totalPrice.amount += item.price.amount;
                if(!item.freeCargo) {
                    basketStore.totalPrice.amountWithOutFreeCargo += item.price.amount;
                }
            }
        }
    }
}
</script>

<style lang="scss">
    @import "../assets/scss/products.scss";
</style>