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
};
</script>
