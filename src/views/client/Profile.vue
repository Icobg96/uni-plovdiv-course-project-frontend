<template>
    <div class="container profile-page">
        <div class="row">
            <div class="col-md-4">
                <div class="section-block p-0">
                    <Avatar :user="currentUserProfile"/>
                </div>
            </div>
            <div class="col-md-8">
                <div class="section-block p-0 h-100">
                    <PersonalUserInfo :user="currentUserProfile" />
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <Tabs containerClass="user-profile-tabs-container">
               <Tab :activeTab="true" title="<i class='fa fa-address-book'></i> Дневник">
                  <div class="container content-block p-0">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="section-block p-0">
                          <Friends :actions="false" />
                        </div>
                        <div class="section-block p-0 mt-3">
                          <UserImages :actions="false" :user="currentUserProfile" />
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div v-if="isCurrentUser" class="user-posts p-0">
                          <PublishPostSection/>
                        </div>
                        <div class="section-block user-posts pt-0">
                            <div v-for="(post, index) in posts" :key="index"
                                 class="posts-container">
                                <NewsPost :post="post"/>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </Tab>
              <Tab title="<i class='fa fa-users'></i> Приятели(6)">
                  <div class="content-block">
                    <div class="section-block user-profile-friends p-0 mt-3">
                        <Friends />
                    </div>
                  </div>
              </Tab>
              <Tab title="<i class='fa fa-image'></i> Снимки(4)">
                  <div class="content-block">
                    <div class="section-block user-profile-images p-0 mt-3">
                        <UserImages :user="currentUserProfile" />
                    </div>
                  </div>
              </Tab>
              <Tab title="<i class='fa fa-file'></i> Материали(0)">
                  <div class="content-block text-center">
                      Няма налични материали
                  </div>
              </Tab>
            </Tabs>
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
import Tabs from '@/components/client/Tabs/Tabs.vue';
import Tab from '@/components/client/Tabs/Tab.vue';
import PublishPostSection from '@/components/client/Post/PublishPostSection.vue';
import authComputed from '@/store/helpers';

export default {
  props: ['user'],
  name: 'Profile',
  components: {
    NewsPost,
    Avatar,
    PersonalUserInfo,
    Tabs,
    Tab,
    UserImages,
    Friends,
    PublishPostSection,
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
    ...authComputed,
    currentUserProfile() {
      if (this.$route.path.toLowerCase() === '/profile/me') {
        return this.currentUser;
      }
      const current = this.users.filter((user) => user.name === this.user)[0];
      return current;
    },
    isCurrentUser() {
      return this.$route.params.user === 'me';
    },
  },
};
</script>
