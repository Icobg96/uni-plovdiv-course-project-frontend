<template>
    <div v-if="currentUser">
        <div class="header">
            <div class="heading">
                Моят профил
            </div>
        </div>
        <div class="user">
            <div class="user-avatar">
                <img src="../../assets/images/users/avatar-4.jpg">
            </div>
            <div class="user-name">
                {{currentUser.name}}
                <!-- <router-link to="/">@{{currentUser.name}}</router-link> -->
            </div>
            <div class="user-info">
                <span class="user-type">
                    <i class="fa fa-graduation-cap"></i> Студент
                </span>
                <span class="uni-place">
                    , ПУ „Паисий Хилендарски“
                </span>
            </div>
            <div class="actions">
                <router-link :to="`/profile/${currentUser.name}/edit`">
                    Редактиране на профил
                </router-link>
            </div>
        </div>
        <ul>
            <li :class="$route.name=='Feeds' ? 'active' : ''">
                <router-link to="/feeds">
                    <i class="fa fa-address-book"></i> Дашборд
                </router-link>
            </li>
            <li :class="$route.name=='Profile' ? 'active' : ''">
                <router-link to="/Profile/me"><i class="fa fa-home"></i> Моят профил</router-link>
            </li>
            <li :class="$route.name=='Messages' ? 'active' : ''">
                <router-link to="/Messages"><i class="fa fa-comments"></i> Съобщения</router-link>
            </li>
            <li :class="$route.name=='Friends' ? 'active' : ''">
                <router-link to="/Friends"><i class="fa fa-users"></i> Приятели</router-link>
            </li>
             <li :class="$route.name=='Library' ? 'active' : ''">
                <router-link to="/library/me">
                    <i class="fa fa-book"></i> Моята библиотека
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import authComputed from '@/store/helpers';

export default {
  name: 'UserSideBar',
  data() {
    return {
      currentRoute: '',
    };
  },
  computed: {
    ...authComputed,
  },
  methods: {},
};
</script>
