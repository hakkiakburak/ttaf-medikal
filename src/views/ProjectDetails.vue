<template>
  <div class="main-container">
    <Header />

    <Breadcrumb :items="items" title="Ürün Detayı" />

    <ProjectDetailsWrapper />
    <ServiceDetailsWrapper />
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
import data from "../data/project.json";
import Header from "@/components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProjectDetailsWrapper from "../components/sections/ProjectDetailsWrapper";
import ServiceDetailsWrapper from "../components/sections/ServiceDetailsWrapper";

import Footer from "../components/Footer";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
export default {
  components: {
    Header,
    Breadcrumb,
    ProjectDetailsWrapper,
    ServiceDetailsWrapper,
    Footer,
    OffCanvasMobileMenu,
  },
  data() {
    return {
      data,
      items: [
        {
          text: "Anasayfa",
          to: "/",
        },
        {
          text: "Ürün Detay",
          active: true,
        },
      ],
    };
  },
  metaInfo: {
    title: "TTAF Medikal - Ürün Detay",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
};
</script>

