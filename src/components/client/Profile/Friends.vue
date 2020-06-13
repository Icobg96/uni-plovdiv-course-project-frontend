<template>
    <div class="friends-block">
        <div class="counter">
            Friends <span>{{friends.lenght}}</span>
        </div>
        <ul class="friends-list">
            <li v-for="(friend, index) in friends" :key="index">
              <router-link :to="`/profile/${friend.name}`">
                <img :src="`/images/users/${friend.image}`">
                <span>{{friend.name}}</span>
              </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['user'],
  name: 'Friends',
  data() {
    return {};
  },
  computed: {
    friends() {
      return this.$store.getters['authentication/users'];
    },
  },
};
</script>
