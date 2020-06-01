<template>
    <div class="container profile-page">
        <div class="row">
            <div class="col-md-4">
                <div class="section-block p-0">
                    <Avatar :user="currentUser"/>
                </div>
                <div class="section-block p-0 mt-3">
                    <Friends />
                </div>
            </div>
            <div class="col-md-8">
                <div class="section-block p-0">
                    <PersonalUserInfo :user="currentUser" />
                </div>
                <div class="section-block p-0 mt-3">
                    <UserImages :user="currentUser" />
                </div>
                <div class="section-block user-posts mt-3 pt-0">
                    <div class="header">
                        {{currentUser.name}}'s posts
                    </div>
                    <div v-for="(post, index) in posts" :key="index" class="posts-container">
                        <NewsPost :post="post"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NewsPost from '@/components/client/Post/NewsPost.vue';
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
    return {
      posts: [
        {
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
          publisher: {
            id: 12,
            name: 'Ivan Ivanov',
            avatar: 'avatar.png',
          },
          date: new Date(),
          likes: 10,
          comments: [
            {
              ownerName: 'Dimitur Vasielv',
              text: 'Some comment goes here..',
            },
          ],
          featuredImage: 'image.jpg',
          document: null,
        },
      ],
    };
  },
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-sidebar-layout');
  },
  computed: {
    currentUser() {
      const curUser = this.$store.getters['authentication/users'].filter((user) => user.name === this.user);
      return curUser[0] ? curUser[0] : { name: 'me', image: 'avatar-4.jpg' };
    },
  },
};
</script>
