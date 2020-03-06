<template>
    <header id="header" class="bg-primary text-white">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="logo d-flex align-items-center">
                        <img src="../../assets/images/SN-Logo.png">
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
                    <div class="user-profile d-flex align-items-center">
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
                                Username
                            </div>
                            <div class="user-avatar">
                                <img src="../../assets/images/camera_50.png">
                            </div>
                            <DropDown>
                                <div class="user-links text-primary text-left">
                                    <a href="#" class="link bordered-bottom">My profile</a>
                                    <a href="#" class="link">Edit</a>
                                    <a href="#" class="link bordered-bottom">Settings</a>
                                    <a href="#" class="link">Log out</a>
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
