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
            <li @click="setActiveLink($event)" class="active">
                <router-link to="/Dashboard">
                    <i class="fa fa-address-book"></i> Дашборд
                </router-link>
            </li>
            <li @click="setActiveLink($event)">
                <router-link to="/Profile/me"><i class="fa fa-home"></i> Моят профил</router-link>
            </li>
            <li @click="setActiveLink($event)">
                <router-link to="/Messages"><i class="fa fa-comments"></i> Съобщения</router-link>
            </li>
            <li @click="setActiveLink($event)">
                <router-link to="/Friends"><i class="fa fa-users"></i> Приятели</router-link>
            </li>
             <li @click="setActiveLink($event)">
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
  computed: {
    ...authComputed,
  },
  methods: {
    setActiveLink(e) {
      const currentElement = e.target.parentNode;
      const allElements = e.target.parentNode.parentNode.childNodes;
      allElements.forEach((element) => {
        element.classList.remove('active');
      });
      currentElement.classList.add('active');
    },
  },
};
</script>
