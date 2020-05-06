<template>
    <div class="page-block p-0">
        <ChatRoom :sender="sender" v-if="sender" />
        <AllMessages v-else/>
    </div>
</template>
<script>
import ChatRoom from '../../components/client/Messanger/ChatRoom.vue';
import AllMessages from '../../components/client/Messanger/AllMessages.vue';

export default {
  props: ['sender'],
  components: {
    AllMessages,
    ChatRoom,
  },
  name: 'Messages',
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-right-sidebars-layout');
    this.$store.commit('layouts/SET_LEFT_SIDEBAR', 'messages-sidebar');
  },
};
</script>
