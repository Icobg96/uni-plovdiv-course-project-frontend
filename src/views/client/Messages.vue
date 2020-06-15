<template>
    <div class="section-block p-0">
        <ChatRoom :currentUser="currentUser" :sender="senderData" v-if="sender" />
        <AllMessages v-else/>
    </div>
</template>
<script>
import authComputed from '@/store/helpers';
import ChatRoom from '../../components/client/Messanger/ChatRoom.vue';
import AllMessages from '../../components/client/Messanger/AllMessages.vue';

export default {
  props: ['sender'],
  components: {
    AllMessages,
    ChatRoom,
  },
  name: 'Messages',
  computed: {
    ...authComputed,
    senderData() {
      return this.users.filter((user) => user.name === this.sender)[0];
    },
  },
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-right-sidebars-layout');
    this.$store.commit('layouts/SET_LEFT_SIDEBAR', 'messages-sidebar');
  },
};
</script>
