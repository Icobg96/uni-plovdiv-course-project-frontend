<template>
    <div class="friends-block">
        <div class="counter">
            Приятели <span>{{friends.length}}</span>
        </div>
        <ul class="friends-list">
            <li v-for="(friend, index) in friends" :key="index">
              <router-link :to="`/profile/${friend.name}`">
                <img :src="`/images/users/${friend.image}`">
                <span>{{friend.name}}</span>
              </router-link>
            </li>
        </ul>
        <div v-if="actions" class="actions">
            <div class="btn btn-primary mt-2 w-100 images-list text-center">
                Виж всички
            </div>
        </div>
    </div>
</template>

<script>
import authComputed from '@/store/helpers';

export default {
  props: ['user', 'actions'],
  name: 'Friends',
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.user);
  },
  computed: {
    ...authComputed,
    friends() {
      return this.users.filter((user) => user.name !== this.$route.params.user);
    },
  },
};
</script>
