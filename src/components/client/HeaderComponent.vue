<template>
    <header id="header" class="bg-white text-primary">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-6">
                    <div class="logo d-flex align-items-center">
                        <router-link v-if="!currentUser" to="/">
                            <img src="@/assets/images/logo.png">
                        </router-link>
                        <router-link v-else to="/feeds">
                            <img src="@/assets/images/logo.png">
                        </router-link>
                    </div>
                </div>
                <div v-if="loggedIn" class="col-md-6 text-left d-none d-md-block">
                    <!-- <div class="search-field bg-dark-primary">
                        <div class="input-group input-group-sm">
                            <div class="input-group-prepend px-1">
                                <span
                        class="input-group-text bg-transparent text-primary border-0"
                        id="inputGroup-sizing-sm">
                                    <i class="fa fa-search"></i>
                                </span>
                            </div>
                            <input type="text"
                            placeholder="Search.."
                            class="form-control bg-transparent border-0 text-primary"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div> -->
                    <nav class="header-menu">
                        <ul>
                            <li :class="{'active' : $route.name=='Dashboard'}"
                                class="header-link">
                                <router-link to="/dashboard">Дашборд</router-link>
                            </li>
                            <li :class="{'active' : $route.name=='Feeds'}" class="header-link">
                                <router-link to="/feeds">Новини</router-link>
                            </li>
                            <li :class="{'active' : $route.name=='Library'}" class="header-link">
                                <router-link to="/library">Библиотека</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div v-if="loggedIn" class="col-md-3 col-6 text-right xs-static">
                    <div class="user-profile d-flex align-items-center justify-content-end">
                        <div
                            class="user-notifications
                               text-white d-flex align-items-center text-dark-primary">
                            <div class="messages">
                                <DropDown :button="`<i class='fa fa-comments'></i>`">
                                    <div class="messages-dropdown">
                                        <div v-if="!notifications" class="no-messages">
                                            Няма нови съобщения.
                                        </div>
                                    </div>
                                    <div>
                                        <router-link to="/messages"
                                                     class="d-block w-100 btn btn-light-primary">
                                            Виж всички съобщения
                                        </router-link>
                                    </div>
                                </DropDown>
                            </div>
                            <div class="notifications">
                                <DropDown :title="'Известия'"
                                          :button="`<i class='fa fa-bell'></i>`">
                                    <div class="notifications-dropdown">
                                        <div v-if="!notifications" class="no-notifications">
                                            Няма нови известия.
                                        </div>
                                    </div>
                                </DropDown>
                            </div>
                        </div>
                        <div class="user-drop-settings d-flex align-items-center">
                            <div class="user-name">
                                {{currentUser.name}}
                            </div>
                            <div class="user-avatar icon">
                                <img src="../../assets/images/users/avatar-4.jpg">
                            </div>
                            <DropDown>
                                <div class="user-links text-primary text-left">
                                    <div class="main-links">
                                        <router-link class="link" to="/profile/me">
                                            <i class="fa fa-user"></i> Профил
                                        </router-link>
                                        <router-link class="link" to="/profile/me/edit">
                                            <i class="fa fa-edit"></i> Редактиране
                                        </router-link>
                                        <router-link class="link" to="/setting">
                                            <i class="fa fa-wrench"></i> Настройки
                                        </router-link>
                                    </div>
                                    <div class="footer">
                                        <div @click="logOut()"
                                                     class="link logout"
                                                     to="/setting">
                                            <i class="fa fa-power-off"></i> Изход
                                        </div>
                                    </div>
                                </div>
                            </DropDown>
                        </div>
                    </div>
                </div>
                <div v-else class="col-md-9 col-6 text-right">
                    <nav class="header-menu">
                        <ul>
                            <li class="header-link">
                                <router-link to="/about">За нас</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import DropDown from '@/components/client/DropDown.vue';
import authComputed from '@/store/helpers';

export default {
  name: 'HeaderComponent',
  components: {
    DropDown,
  },
  data() {
    return {
      notifications: false,
    };
  },
  computed: {
    ...authComputed,
  },
  methods: {
    logOut() {
      this.$store.dispatch('authentication/logOut');
    },
  },
};
</script>
