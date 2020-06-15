<template>
    <messanger header="true">
        <template slot="header">
            <div class="input-group input-group-sm">
                <div class="input-group-prepend px-1">
                    <span id="inputGroup-sizing-sm"
                          class="input-group-text bg-transparent text-primary border-0">
                        <i class="fa fa-search"></i>
                    </span>
                </div>
                <input type="text" placeholder="Търсене.."
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"
                       class="form-control bg-transparent border-0 text-primary">
            </div>
        </template>
        <div class="messages-block">
            <div v-for="(message, index) in messages" :key="index" class="chat-box">
                <router-link :to="'/messages/' + message.sender">
                    <div class="user-avatar icon-45">
                        <img :src="`/images/users/${message.avatar}`">
                    </div>
                    <div class="message-body">
                        <div class="sender">
                            <span class="name">{{message.sender}}</span>
                            <span class="date">{{message.date}}</span>
                        </div>
                        <div class="short-message">
                            {{message.shortMessage}}
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </messanger>
</template>
<script>
import authComputed from '@/store/helpers';
import Messanger from './Messanger.vue';

export default {
  name: 'AllMessages',
  components: {
    Messanger,
  },
  data() {
    return {};
  },
  computed: {
    ...authComputed,
    messages() {
      return [{
        sender: this.users[0].name,
        shortMessage: 'Lorem Ipsum is simply dummy text of the printing and typesey..',
        date: '2:30 pm',
        avatar: this.users[0].image,
      },
      {
        sender: this.users[1].name,
        shortMessage: 'Lorem Ipsum is simply dummy text of the printing and typesey..',
        date: '11:30 am',
        avatar: this.users[1].image,
      }];
    },
  },
};
</script>
