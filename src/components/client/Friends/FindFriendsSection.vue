<template>
    <div class="find-friends">
        <div class="header">
            <div class="heading">
                Find friends
            </div>
            <div class="search-friends">
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend px-1">
                        <span id="inputGroup-sizing-sm"
                            class="input-group-text bg-transparent text-primary border-0">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                    <input type="text" placeholder="Search.."
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"
                       class="form-control bg-transparent border-0 text-primary">
                </div>
            </div>
        </div>
        <div class="suggesting-friends-list">
            <div v-for="(friend, index) in friends" :key="index" class="friend-box">
                <router-link :to="'/profile/'+friend.name">
                <div class="friend">
                    <div class="friend-avatar">
                        <img :src="`/images/users/${friend.image}`">
                    </div>
                    <div class="friend-info">
                        <div class="info">
                            <div class="name">
                                {{friend.name}}
                            </div>
                            <div class="mutual-friends">
                                no mutual friends
                            </div>
                        </div>
                        <div class="actions">
                            <i class="fa fa-user-plus"></i>
                        </div>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    friends() {
      return this.$store.getters.users;
    },
  },
};
</script>
