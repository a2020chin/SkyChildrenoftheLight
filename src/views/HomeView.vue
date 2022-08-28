<template>
  <div class="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <HeroBanner />
  </div>
  <div class="bg-content-prairie bg-cover bg-center bg-no-repeat">
    <ContentItem />
  </div>
  <div
    class="bg-[url(@/assets/images/3_Forest003.png)] bg-cover bg-center bg-no-repeat"
  >
    <FooterBanner />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBanner from '@/components/home/HeroBanner.vue'
import ContentItem from '@/components/home/ContentItem.vue'
import FooterBanner from '@/components/home/FooterBanner.vue'
export default {
  name: 'HomeView',
  components: {
    HeroBanner,
    ContentItem,
    FooterBanner
  }
}
</script>
