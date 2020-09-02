<template>
  <div class="main-container">
    <Header />

    <Breadcrumb :items="items" title="İletişim" />

    <ContactMainWrapper />

    <Footer />

    <OffCanvasMobileMenu />

    <!-- back to top start -->
    <back-to-top class="scroll-top" bottom="60px">
      <i class="ion-android-arrow-up"></i>
    </back-to-top>
    <!-- back to top end -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ContactMainWrapper from "../components/sections/ContactMainWrapper";
import Footer from "../components/Footer";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

export default {
  components: {
    Header,
    Breadcrumb,
    ContactMainWrapper,
    Footer,
    OffCanvasMobileMenu,
  },
  data() {
    return {
      items: [
        {
          text: "Anasayfa",
          to: "/",
        },
        {
          text: "İletişim",
          active: true,
        },
      ],
    };
  },
  metaInfo: {
    title: "TTAF Medikal - İletişim",
    htmlAttrs: {
      lang: "tr",
      amp: true,
    },
  },
};
</script>

