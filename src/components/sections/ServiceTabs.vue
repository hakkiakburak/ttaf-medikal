<template>
  <!--====================  service tab area ====================-->
  <div class="service-tab-area section-space--inner--120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-area text-center">
            <h2 class="section-title section-space--bottom--50">
              Daha sağlıklı bir dünya için araştırıyor, geliştiriyor ve üretiyoruz !
              <span
                class="title-icon"
              ></span>
            </h2>
          </div>
        </div>
        <div class="col-lg-12">
          <!-- service tab wrapper -->
          <div class="service-tab-wrapper">
            <div class="row no-gutters">
              <div class="col-md-4">
                <div class="nav nav-tabs flex-column service-tab__link-wrapper">
                  <a
                    class="nav-item nav-link"
                    @click.prevent="setActive('home')"
                    :class="{ active: isActive('home') }"
                    href="#home"
                  >
                    <span class="icon">
                      <i class="flaticon-002-welding"></i>
                    </span>
                    <span class="text">Sektörel çözümler</span>
                  </a>
                  <a
                    class="nav-item nav-link"
                    @click.prevent="setActive('profile')"
                    :class="{ active: isActive('profile') }"
                    href="#profile"
                  >
                    <span class="icon">
                      <i class="flaticon-004-walkie-talkie"></i>
                    </span>
                    <span class="text">Kişiye Özel Ürünlerimiz</span>
                  </a>
                  <a
                    class="nav-item nav-link"
                    @click.prevent="setActive('contact')"
                    :class="{ active: isActive('contact') }"
                    href="#contact"
                  >
                    <span class="icon">
                      <i class="flaticon-010-tank-1"></i>
                    </span>
                    <span class="text">Ultraviyole Teknolojilerimiz</span>
                  </a>
                </div>
              </div>
              <div class="col-md-8">
                <div class="tab-content service-tab__content-wrapper">
                  <div class="tab-pane fade" :class="{ 'active show': isActive('home') }" id="home">
                    <div
                      class="service-tab__single-content-wrapper bg-img"
                      :style="{'background-image':'url(assets/img/backgrounds/service-tab1.jpg)'}"
                    >
                      <div class="service-tab__single-content">
                        <h3 class="service-tab__title">Sektörel Çözümler</h3>
                        <p
                          class="service-tab__text"
                        >30 yılı aşkın sektörel araştırma ve geliştirme yolculuğumuz boyunca birlikte çalışma fırsatı bulduğumuz tüm iş ortaklarımız, müşterilerimiz ve paydaşlarımızdan edindiğimiz tecrübeler doğrultusunda sağlık sektörünün kullanıcı ihtiyaçları özelinde geliştirdiğimiz teknolojiler ile değer yaratan çözümler sunuyoruz.</p>
                        <router-link to="/service-details" class="see-more-link">Daha Fazla</router-link>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    :class="{ 'active show': isActive('profile') }"
                    id="profile"
                  >
                    <div
                      class="service-tab__single-content-wrapper bg-img"
                      :style="{'background-image':'url(assets/img/backgrounds/service-tab1.jpg)'}"
                    >
                      <div class="service-tab__single-content">
                        <h3 class="service-tab__title">Kişiye Özel Ürünlerimiz</h3>
                        <p
                          class="service-tab__text"
                        >Yenilikçi yaklaşımımız, uzman ekiplerimiz ve bünyemizde geliştirdiğimiz ürünler ile daha sağlıklı bir yaşam için insan hayatını kolaylaştırmayı ve değer yaratmayı hedefleyen ürünler tasarlıyor, geliştiriyor ve üretiyoruz.</p>
                        <router-link to="/service-details" class="see-more-link">Daha Fazla</router-link>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    :class="{ 'active show': isActive('contact') }"
                    id="contact"
                  >
                    <div
                      class="service-tab__single-content-wrapper bg-img"
                      :style="{'background-image':'url(assets/img/backgrounds/service-tab1.jpg)'}"
                    >
                      <div class="service-tab__single-content">
                        <h3 class="service-tab__title">Ultraviyole Teknolojilerimiz</h3>
                        <p
                          class="service-tab__text"
                        >Sağlık sektörünün sterilizasyon teknolojisi öncüsü UV-C çözümlerimiz ile daha sağlıklı çalışma ve yaşam alanları sunuyoruz. UV-C teknolojilerimiz ile virüslere, mikroplara ve bakterilere karşı mücadelenizde yanınızda yer alıyoruz.</p>
                        <router-link to="/service-details" class="see-more-link">Daha Fazla</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of service tab area  ====================-->
</template>

<script>
export default {
  data() {
    return {
      activeItem: "home",
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>
