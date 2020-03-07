<template>
    <div id="app-layout" class="container">
      <div class="row">
        <div class="col-md-2">
          <nav class="user-left-side-bar">
            <UserSideBar/>
          </nav>
        </div>
        <div class="col-md-8">
          <div class="app-content">
            <router-view/>
          </div>
        </div>
        <div class="col-md-2">
            <component :is="leftSidebar" />
        </div>
      </div>
    </div>
</template>

<script>
import UserSideBar from '@/components/client/UserSideBar.vue';
import FriendsSideBar from '@/components/client/Sidebars/Friends.vue';
import FeedsSideBar from '@/components/client/Sidebars/Feeds.vue';
import MessagesSideBar from '@/components/client/Sidebars/Messages.vue';
import LibrarySideBar from '@/components/client/Sidebars/Library.vue';

export default {
  name: 'LeftRightSidebars',
  components: {
    UserSideBar,
    'friends-sidebar': FriendsSideBar,
    'feeds-sidebar': FeedsSideBar,
    'messages-sidebar': MessagesSideBar,
    'library-sidebar': LibrarySideBar,
  },
  computed: {
    leftSidebar() {
      return this.$store.state.leftSidebar;
    },
  },
};
</script>
