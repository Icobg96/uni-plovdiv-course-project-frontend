<template>
    <div class="section-block p-0 friends-page">
        <FindFriendsSection />
    </div>
</template>
<script>
import FindFriendsSection from '../../components/client/Friends/FindFriendsSection.vue';

export default {
  name: 'Friends',
  components: {
    FindFriendsSection,
  },
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-right-sidebars-layout');
    this.$store.commit('layouts/SET_LEFT_SIDEBAR', 'friends-sidebar');
  },
};
</script>
