<template>
    <header id="header" class="bg-primary text-white">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="logo d-flex align-items-center">
                        <router-link to="/">
                            Logo
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 text-left">
                    <div class="search-field bg-dark-primary">
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
                    </div>
                </div>
                <div class="col-md-3 text-right">
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
                                me
                            </div>
                            <div class="user-avatar">
                                <img src="../../assets/images/camera_50.png">
                            </div>
                            <DropDown>
                                <div class="user-links text-primary text-left">
                                    <router-link class="link bordered-bottom" to="/profile/me">
                                        My profile
                                    </router-link>
                                    <router-link class="link" to="/profile/me/edit">
                                        Edit
                                    </router-link>
                                    <router-link class="link bordered-bottom" to="/setting">
                                        Settings
                                    </router-link>
                                    <router-link class="link" to="/setting">
                                        Log out
                                    </router-link>
                                </div>
                            </DropDown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import DropDown from '@/components/client/DropDown.vue';

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
};
</script>
