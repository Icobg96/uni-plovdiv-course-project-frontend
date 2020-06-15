<template>
    <messanger header="true" footer="true">
        <template slot="header">
            <div class="back-row">
                <div class="back-btn">
                    <router-link to="/messages">
                        <i class="fa fa-chevron-left"></i> назад
                    </router-link>
                </div>
                <div class="sender-name">
                    {{sender.name}}
                </div>
                <div class="user-avatar icon-45">
                    <img :src="`/images/users/${sender.image}`">
                </div>
            </div>
        </template>
        <div class="message-block receiver">
            <div class="message">
                <span class="time">10:20pm</span>
                <div class="user-avatar icon-45">
                    <img :src="`/images/users/${sender.image}`">
                </div>
                <div class="user-message">
                    here goes sender's message
                </div>
            </div>
        </div>

        <div v-for="(senderMessage, index) in senderMessages"
             :key="index"
             class="message-block sender">
            <div class="message">
                <span class="time">{{senderMessage.time}}</span>
                <div class="user-avatar icon-45">
                    <img :src="`/images/users/${currentUser.image}`">
                </div>
                <div class="user-message">
                    {{senderMessage.message}}
                </div>
            </div>
        </div>
        <template slot="footer">
            <div class="input-group">
                <div class="input-group-prepend">
                    <DropDown
    :button="`<span class='input-group-text'><i class='fa fa-paperclip'></i></span>`">
                        <div class="notifications-dropdown">
                            <div v-if="1" class="attachments">
                                <div class="attachment">
                                    <div class="image">
                                        <input title="Attach image" type="file">
                                        <i class="fa fa-image"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DropDown>
                </div>
                <input v-model="currentMessage"
                       type="text" class="form-control"
                       placeholder="Напиши съобщение.."
                       aria-label="Write a message"
                       aria-describedby="send-chat-message">
                <div class="input-group-append">
                    <button @click="sendMessage()"
                            class="btn btn-primary"
                            type="button"
                            id="send-chat-message">
                        Изпрати
                    </button>
                </div>
            </div>
        </template>
    </messanger>
</template>
<script>
import DropDown from '../DropDown.vue';
import Messanger from './Messanger.vue';

export default {
  props: ['sender', 'currentUser'],
  name: 'ChatRoom',
  components: {
    DropDown,
    Messanger,
  },
  data() {
    return {
      senderMessages: [{
        sender: 'Ivan',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesey..',
        time: '2:30 pm',
      },
      {
        sender: 'Ivan',
        message: 'Lorem g and typesey..',
        time: '2:31 pm',
      }],
      currentMessage: '',
    };
  },
  methods: {
    sendMessage() {
      this.senderMessages.push({ message: this.currentMessage });
      this.currentMessage = '';
    },
  },
  mounted() {
    console.log(this.sender);
  },
};
</script>
