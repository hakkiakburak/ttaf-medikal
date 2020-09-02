<template>
  <div class="main-container">
    <Header />

    <HeroOne :sliderData="data.heroOne" />

    <ServiceTabs />

    <BlogSection addClass="grey-bg" />

    <AboutSectionTwo />

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
import HeroOne from "../components/sections/HeroOne";
import ServiceTabs from "../components/sections/ServiceTabs";
import BlogSection from "../components/sections/BlogSection";
import AboutSectionTwo from "@/components/sections/AboutSectionTwo";

import Footer from "../components/Footer";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

import data from "../data/slider.json";
export default {
  data() {
    return {
      data,
    };
  },
  components: {
    Header,
    HeroOne,
    ServiceTabs,
    BlogSection,
    AboutSectionTwo,
    Footer,
    OffCanvasMobileMenu,
  },
  metaInfo: {
    title: "TTAF Medikal - Anasayfa",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
};
</script>
