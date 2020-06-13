<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['title', 'activeTab'],
  // title: String,
  // activeTab: false,
  //   },
  name: 'Tab',
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.isActive = this.activeTab;
  },
};
</script>
