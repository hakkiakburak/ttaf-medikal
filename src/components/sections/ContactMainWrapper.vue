<template>
  <div class="page-wrapper section-space--inner--120">
    <!--Contact section start-->
    <div class="conact-section">
      <div class="container">
        <div class="row section-space--bottom--50">
          <div class="col">
            <!-- google map component -->
            <GoogleMap />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="contact-information">
              <h3>{{ data.contactInfo.title }}</h3>
              <ul>
                <li>
                  <span class="icon">
                    <i :class="data.contactInfo.address.icon"></i>
                  </span>
                  <span class="text">{{ data.contactInfo.address.location }}</span>
                </li>
                <li>
                  <span class="icon">
                    <i :class="data.contactInfo.telephone.icon"></i>
                  </span>
                  <span class="text">
                    <a href="tel:+902128558220">{{ data.contactInfo.telephone.no_1 }}</a>
                    <a href="tel:+902128558221">{{ data.contactInfo.telephone.no_1 }}</a>
                  </span>
                </li>
                <li>
                  <span class="icon">
                    <i :class="data.contactInfo.mail.icon"></i>
                  </span>
                  <span class="text">
                    <a href="mailto:info@ttaf.com.tr">{{ data.contactInfo.mail.email }}</a>
                    <a href="#">{{ data.contactInfo.mail.web }}</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 col-12">
            <div class="contact-form">
              <h3>Bizimle İletişime Geçin</h3>
              <form id="contact-form">
                <div class="row row-10">
                  <div class="col-md-6 col-12 section-space--bottom--20">
                    <input name="con_name" type="text" placeholder="İsminiz" />
                  </div>
                  <div class="col-md-6 col-12 section-space--bottom--20">
                    <input name="con_email" type="email" placeholder="E-mail Adresiniz" />
                  </div>
                  <div class="col-12">
                    <textarea name="con_message" placeholder="Mesajınız"></textarea>
                  </div>
                  <div class="col-12">
                    <button>Mesajı Gönder</button>
                  </div>
                </div>
              </form>
              <p class="form-message"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Contact section end-->
  </div>
</template>

<script>
import data from "../../data/contact.json";
import GoogleMap from "@/components/GoogleMap";
export default {
  components: {
    GoogleMap,
  },
  data() {
    return {
      data,
    };
  },
};
</script>
