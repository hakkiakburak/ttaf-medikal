<template>
  <!--====================  blog grid area ====================-->
  <div class="blog-grid-area section-space--inner--120" :class="addClass">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- section title -->
          <div class="section-title-area text-center">
            <h2 class="section-title section-space--bottom--50">
              {{ data.sectionTitle }}
              <span class="title-icon"></span>
            </h2>
            <p
              class="class= blog-text section-space--bottom--50"
            >Türkiye ve dünyanın sağlık gündemini sizlerle paylaşmak için TTAF Medikal Blog'u oluşturduk. Eğer sağlık teknolojilerine ilgi duyuyor, araştırıyor, yeni gelişmeler ile ilgili konuşuyor ve paylaşımda bulunuyorsanız, gelin medikal çözümleri ve yeni teknolojileri birlikte keşfedelim!</p>
          </div>
        </div>

        <div class="col-lg-12">
          <div class="blog-grid-wrapper">
            <div class="row">
              <div
                class="col-lg-4 col-md-6"
                v-for="blog in data.blogPosts.slice(0, 3)"
                :key="blog.id"
              >
                <BlogPost :blog="blog" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of blog grid area  ====================-->
</template>

<script>
import BlogPost from "../BlogPost";
import data from "../../data/blog.json";
export default {
  components: {
    BlogPost,
  },
  props: ["addClass"],
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="scss">
</style>
