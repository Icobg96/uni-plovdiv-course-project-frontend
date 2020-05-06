<template>
    <div class="container profile-page">
        <div class="row">
            <div class="col-md-4">
                <div class="page-block p-0">
                    <Avatar :user="currentUser"/>
                </div>
                <div class="page-block p-0 mt-3">
                    <Friends />
                </div>
            </div>
            <div class="col-md-8">
                <div class="page-block p-0">
                    <PersonalUserInfo :user="currentUser" />
                </div>
                <div class="page-block p-0 mt-3">
                    <UserImages :user="currentUser" />
                </div>
                <div class="page-block user-posts mt-3 pt-0">
                    <div class="header">
                        {{currentUser.name}}'s posts
                    </div>
                    <div class="posts-container">
                        <NewsPost :user="currentUser"/>
                        <NewsPost :user="currentUser" :image="true"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NewsPost from '@/components/client/NewsPost.vue';
import Avatar from '@/components/client/Profile/Avatar.vue';
import PersonalUserInfo from '@/components/client/Profile/PersonalUserInfo.vue';
import UserImages from '@/components/client/Profile/UserImages.vue';
import Friends from '@/components/client/Profile/Friends.vue';

export default {
  props: ['user'],
  name: 'Profile',
  components: {
    NewsPost,
    Avatar,
    PersonalUserInfo,
    UserImages,
    Friends,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-sidebar-layout');
  },
  computed: {
    currentUser() {
      const curUser = this.$store.getters['authentication/users'].filter((user) => user.name === this.user);
      return curUser[0] ? curUser[0] : { name: 'me', image: 'camera_50.png' };
    },
  },
};
</script>
