<template>
    <div class="avatar-block">
        <div class="avatar">
            <img :src="`/images/users/${user.image}`">
        </div>
        <div v-if="isThisMe" class="actions">
            <button class="btn btn-primary">Редактирай профил</button>
        </div>
        <div v-else class="actions">
            <button class="btn btn-primary">
              <router-link class="text-white" :to="`/messages/${user.name}`">
                Напиши съобщение
                <i class="fa fa-comments ml-2"></i>
              </router-link>
            </button>
            <!-- <button class="btn btn-primary">Add friend</button> -->
        </div>
    </div>
</template>

<script>
export default {
  props: ['user'],
  name: 'Avatar',
  computed: {
    isThisMe() {
      return this.$route.path.toLowerCase() === '/profile/me';
    },
  },
};
</script>
