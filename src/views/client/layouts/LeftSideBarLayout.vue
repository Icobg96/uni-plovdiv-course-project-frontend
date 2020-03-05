<template>
    <div id="app-layout" class="container">
      <div class="row">
        <div class="col-md-3">
          <nav class="user-left-side-bar">
            <UserSideBar/>
          </nav>
        </div>
        <div class="col-md-9">
          <div class="app-content">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import UserSideBar from '@/components/client/UserSideBar.vue';

export default {
  name: 'LeftSideBarLayout',
  components: {
    UserSideBar,
  },
};
</script>
