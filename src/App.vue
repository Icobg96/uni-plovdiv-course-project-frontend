<template>
  <div id="app">
    <HeaderComponent :ass="'asdasdasds'"/>
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
  </div>
</template>
<script>
import HeaderComponent from '@/components/client/HeaderComponent.vue';
import UserSideBar from '@/components/client/UserSideBar.vue';

export default {
  components: {
    HeaderComponent,
    UserSideBar,
  },
};
</script>
