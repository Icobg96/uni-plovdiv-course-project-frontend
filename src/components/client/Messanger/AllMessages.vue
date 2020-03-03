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
                <input type="text" placeholder="Search.."
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"
                       class="form-control bg-transparent border-0 text-primary">
            </div>
        </template>
        <div class="messages-block">
            <div v-for="(message, index) in messages" :key="index" class="chat-box">
                <router-link :to="'/messages/' + message.sender">
                    <div class="sender-avatar">
                        <img src="../../../assets/images/camera_50.png">
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
import Messanger from './Messanger.vue';

export default {
  name: 'AllMessages',
  components: {
    Messanger,
  },
  data() {
    return {
      messages: [{
        sender: 'Ivan',
        shortMessage: 'Lorem Ipsum is simply dummy text of the printing and typesey..',
        date: '2:30 pm',
      },
      {
        sender: 'Georgi',
        shortMessage: 'Lorem Ipsum is simply dummy text of the printing and typesey..',
        date: '11:30 am',
      }],
    };
  },
};
</script>
