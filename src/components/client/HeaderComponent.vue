<template>
    <header id="header" class="bg-white text-primary">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="logo d-flex align-items-center">
                        <router-link to="/">
                            <img src="../../assets/images/logo.png">
                        </router-link>
                    </div>
                </div>
                <div v-if="loggedIn" class="col-md-6 text-left">
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
                            <li @click="setActiveLink($event)" class="header-link active">
                                <router-link to="/feeds">Дашборд</router-link>
                            </li>
                            <li @click="setActiveLink($event)" class="header-link">
                                <router-link to="/feed">Новини</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div v-if="loggedIn" class="col-md-3 text-right">
                    <div class="user-profile d-flex align-items-center justify-content-end">
                        <div
                            class="user-notifications
                               text-white d-flex align-items-center text-dark-primary">
                            <div class="messages">
                                <DropDown :button="`<i class='fa fa-comments'></i>`">
                                    <div class="messages-dropdown">
                                        <div v-if="!notifications" class="no-messages">
                                            There are no new messages.
                                        </div>
                                    </div>
                                    <div>
                                        <router-link to="/messages"
                                                     class="d-block w-100 btn btn-light-primary">
                                            Go to messages
                                        </router-link>
                                    </div>
                                </DropDown>
                            </div>
                            <div class="notifications">
                                <DropDown :title="'Notifications'"
                                          :button="`<i class='fa fa-bell'></i>`">
                                    <div class="notifications-dropdown">
                                        <div v-if="!notifications" class="no-notifications">
                                            There are no new notifications.
                                        </div>
                                    </div>
                                </DropDown>
                            </div>
                        </div>
                        <div class="user-drop-settings d-flex align-items-center">
                            <div class="user-name">
                                {{currentUser.name}}
                            </div>
                            <div class="user-avatar">
                                <img src="../../assets/images/camera_50.png">
                            </div>
                            <DropDown>
                                <div class="user-links text-primary text-left">
                                    <div class="main-links">
                                        <router-link class="link" to="/profile/me">
                                            <i class="fa fa-user"></i> My profile
                                        </router-link>
                                        <router-link class="link" to="/profile/me/edit">
                                            <i class="fa fa-edit"></i> Edit
                                        </router-link>
                                        <router-link class="link" to="/setting">
                                            <i class="fa fa-wrench"></i> Settings
                                        </router-link>
                                    </div>
                                    <div class="footer">
                                        <div @click="logOut()"
                                                     class="link logout"
                                                     to="/setting">
                                            <i class="fa fa-power-off"></i> Log out
                                        </div>
                                    </div>
                                </div>
                            </DropDown>
                        </div>
                    </div>
                </div>
                <div v-else class="col-md-9 text-right">
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
