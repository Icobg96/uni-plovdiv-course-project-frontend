<template>
  <div id="app" :class="currentRouteName">
    <HeaderComponent/>
    <component :is="layout"/>
    <FooterComponent/>
  </div>
</template>
<script>
import HeaderComponent from '@/components/client/HeaderComponent.vue';
import FooterComponent from '@/components/client/FooterComponent.vue';
import LeftSideBarLayout from './views/client/layouts/LeftSideBarLayout.vue';
import FullWidthLayout from './views/client/layouts/FullWidthLayout.vue';
import LeftRightSidebars from './views/client/layouts/LeftRightSidebars.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    'left-sidebar-layout': LeftSideBarLayout,
    'full-width-layout': FullWidthLayout,
    'left-right-sidebars-layout': LeftRightSidebars,
  },
  mounted() {
  },
  computed: {
    layout() {
      return this.$store.getters['layouts/layout'];
    },
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
