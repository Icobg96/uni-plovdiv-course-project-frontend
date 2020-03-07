<template>
    <div class="page-block p-0 friends-page">
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
    this.$store.commit('set_layout', 'left-right-sidebars-layout');
    this.$store.commit('set_left_sidebar', 'friends-sidebar');
  },
};
</script>
