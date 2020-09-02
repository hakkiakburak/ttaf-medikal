<template>
  <div class="error-not-found">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="error-inner text-center">
            <div class="image">
              <img src="assets/img/icons/404.png" alt="404" />
            </div>
            <h1 class="heading-h3 text-white">Aradığınız Sayfa Bulunamadı.</h1>
            <div class="error-text">
              <p
                class="text-white"
              >Anlaşılan birşeyler ters gitti ve kayboldunuz... Böyle bir sayfa yok, lütfen geri veya anasayfaya dönünüz.</p>
              <div class="error-button-group">
                <router-link class="btn-submit bg-wht" to="/">Geri Dön</router-link>
                <router-link class="btn-submit" to="/">Anasayfaya Dön</router-link>
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
  name: "NotFound",
};
</script>
