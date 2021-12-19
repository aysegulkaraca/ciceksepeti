<template>
    <div class="campaigns">
        <div class="container">  
            <ul class="list">
                <li class="campaign-item col-md-4 col-12" id="free-cargo-campaign">
                    <div class="campaign-img-wrapper">
                        <img src="../assets/images/campaigns/freeCargo.png">
                    </div>
                    <div class="campaign-text-wrapper">
                        <div>75 TL Üzerine Teslimat Ücreti Bizden</div>
                        <a class="detail-info-btn" href="/">Detaylı Bilgi</a>
                    </div>
                </li>
                <li class="campaign-item col-md-4 col-12" id="gift-discount-campaign">
                    <div class="campaign-img-wrapper">
                        <img src="../assets/images/campaigns/gift.png">
                    </div>
                    <div class="campaign-text-wrapper">
                        <div>Hediye Kategorisi için Sepette %15 İndirim</div> 
                        <a class="detail-info-btn" href="/">Hediye Ürünleri</a>
                    </div>
                </li>
                <li class="campaign-item col-md-4 col-12" id="stationary-discount-campaign">
                    <div class="campaign-img-wrapper">
                        <img src="../assets/images/campaigns/stationary.png">
                    </div>
                    <div class="campaign-text-wrapper">
                        <div>Kırtasiye Kategorisi için Sepette %15 İndirim</div>
                        <a class="detail-info-btn" href="/">Detaylı Bilgi</a>
                    </div>
                </li>
            </ul>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Campaigns'
}
</script>

<style lang="scss">
    @import "../assets/scss/campaigns.scss";
</style>