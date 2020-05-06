<template>
  <div id="app">
    <HeaderComponent/>
    <component :is="layout"/>
  </div>
</template>
<script>
import HeaderComponent from '@/components/client/HeaderComponent.vue';
import LeftSideBarLayout from './views/client/layouts/LeftSideBarLayout.vue';
import FullWidthLayout from './views/client/layouts/FullWidthLayout.vue';
import LeftRightSidebars from './views/client/layouts/LeftRightSidebars.vue';

export default {
  components: {
    HeaderComponent,
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
  },
};
</script>
