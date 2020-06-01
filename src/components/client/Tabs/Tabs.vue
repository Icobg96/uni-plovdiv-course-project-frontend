<template>
  <div :class="['tabs-container', containerClass]">
    <div class="tabs-header">
        <div class="tab"
             v-for="(tab,index) in tabs"
             :key="index"
             :class="{'active' : tab.isActive}">
          <div @click="setActiveTab(tab)" v-html="tab.title"></div>
        </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['containerClass'],
  name: 'Tabs',
  mounted() {
    this.tabs = this.$children;
  },
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    setActiveTab(currentTab) {
      this.tabs.forEach((tab, index) => {
        this.tabs[index].isActive = tab.title === currentTab.title;
      });
    },
  },
};
</script>
