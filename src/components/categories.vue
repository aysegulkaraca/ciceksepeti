<template>
    <div class="categories">
        <div class="container">  
            <div class="breadcrumb">
                <ul>
                    <li>Çiçeksepeti ></li>
                    <li>İstanbul ></li>
                    <li class="active">BreadCrumb</li>
                </ul>
            </div>
            <div class="category-area">
                <div class="category-list">
                    <div class="category-header" @click="toggleMenu">
                        <img alt="categories" src="../assets/images/categories.svg">
                        <span>Kategoriler </span> <!-- <img alt="categories" src="../assets/images/arrow-down.svg"> -->
                    </div>
                    <div class="category-item" v-for="item in categories.list" :key="item.id" v-show="menuOpen">
                        <div class="category-content">
                            <a href="#" class="btn" :class="{'active' : item.active }" @click="selectedCategory(item)" >{{ item.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="selected-category">
                <img alt="leaf" src="../assets/images/leaf.svg">
                <span> {{ categoryName }}</span>
                <span v-if="notFoundAlertVisible" class="not-found-product">kategorisinde ürün bulunamamıştır..</span>
            </div>
        </div>
      </div>
</template>

<script>

export default {
    name: 'Categories',
    data() {
        return {
            menuOpen: !this.$isMobile(),
            categories: this.$store.state.categories,
            categoryName:"Tüm Kategoriler",
            notFoundAlertVisible: false
        }
    },
    computed: {
        filteredProducts() {
            return this.$store.state.filteredProducts;
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        selectedCategory(item) {
            this.resetProductsVisible();
            var alertCount = 0;
            this.categories.list.forEach(element => {
                if(element.id == item.id) {
                    element.active = true;
                    if(item.id == "0") { // all categories button selected..
                        this.filteredProducts.list.forEach(itm => {
                            itm.visible = true;
                        });
                        alertCount++;
                    } else {
                        this.filteredProducts.list.filter(function(el){
                            if(el.productTypeId != item.id) {
                                el.visible = false;
                            } else {
                                alertCount++;
                            }
                        });
                    }
                } else {
                    element.active = false;
                }
            });
            
            this.categoryName = item.name;
            if(alertCount > 0) {
                this.notFoundAlertVisible = false;
            }  else {
                this.notFoundAlertVisible = true;
            }
            if(this.$isMobile()) {
                this.menuOpen = false;
            }
        },
        resetProductsVisible() {
            this.filteredProducts.list.forEach(item => {
                item.visible = true;
            });
            this.$store.dispatch('resetProductsVisible', this.filteredProducts);
        }
    }
}

</script>

<style lang="scss">
    @import "../assets/scss/categories.scss";
</style>