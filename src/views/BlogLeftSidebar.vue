<template>
  <div class="main-container">
    <Header />

    <Breadcrumb :items="items" title="TTAF Medikal Blog" />

    <BlogMainWrapper />

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
import BlogMainWrapper from "../components/sections/BlogMainWrapper";
import Footer from "../components/Footer";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

export default {
  components: {
    Header,
    Breadcrumb,
    BlogMainWrapper,
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
          text: "Blog",
          active: true,
        },
      ],
    };
  },
  metaInfo: {
    title: "TTAF Medikal - Blog",
    htmlAttrs: {
      lang: "tr",
      amp: true,
    },
  },
};
</script>

