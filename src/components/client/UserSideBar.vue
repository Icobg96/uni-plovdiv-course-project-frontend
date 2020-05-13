<template>
    <div>
        <div class="user">
            <div class="user-avatar">
                <img src="../../assets/images/camera_50.png">
            </div>
            <div class="user-name">
                {{currentUser.name}}
                <!-- <router-link to="/">@{{currentUser.name}}</router-link> -->
            </div>
            <span class="user-type"><i class="fa fa-graduation-cap"></i> Студент</span>
        </div>
        <ul>
            <li class="active">
                <router-link to="/Profile/me"><i class="fa fa-home"></i> Моят профил</router-link>
            </li>
            <li>
                <router-link to="/Feeds"><i class="fa fa-address-book"></i> Новини</router-link>
            </li>
            <li>
                <router-link to="/Messages"><i class="fa fa-comments"></i> Съобщения</router-link>
            </li>
            <li>
                <router-link to="/Friends"><i class="fa fa-users"></i> Приятели</router-link>
            </li>
             <li>
                <router-link to="/Library"><i class="fa fa-book"></i> Библиотека</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'UserSideBar',
  computed: {
    currentUser() {
      return this.$store.getters['authentication/user'];
    },
  },
};
</script>
