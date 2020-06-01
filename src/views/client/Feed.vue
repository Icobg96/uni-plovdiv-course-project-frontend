<template>
    <div class="feed-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <PublishPostSection/>
                    <div v-for="(post, index) in posts" :key="index" class="section-block mb-4">
                        <NewsPost :post="post"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PublishPostSection from '@/components/client/Post/PublishPostSection.vue';
import NewsPost from '@/components/client/Post/NewsPost.vue';

export default {
  components: {
    PublishPostSection,
    NewsPost,
  },
  name: 'Feed',
  data() {
    return {
      user: { name: 'me', image: 'camera_50.png' },
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
        {
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
          publisher: {
            id: 12,
            name: 'Petur Georgiev',
            avatar: 'avatar.png',
          },
          date: new Date(),
          likes: 20,
          comments: [
            {
              ownerName: 'Ivan Ivanov',
              text: 'Some comment goes here..',
            },
            {
              ownerName: 'Dimitur Vasielv',
              text: 'comment goes here..',
            },
          ],
          document: {
            id: 124,
            scienceArea: 'Български език и литература',
            subject: 'Български език',
            description: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind.',
            type: 'Реферат',
            file: 'referat-bg.pdf',
          },
        },
        {
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
          publisher: {
            id: 'Petur Georgiev',
            name: 'Ivan Ivanov',
            avatar: 'avatar.png',
          },
          date: new Date(),
          likes: 10,
          comments: [
            {
              ownerName: 12,
              text: 'Some comment goes here..',
            },
          ],
        },
        {
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
          publisher: {
            id: 12,
            name: 'Ivan Ivanov',
            avatar: 'avatar.png',
          },
          date: new Date(),
          likes: 10,
          comments: [],
          featuredImage: 'image.jpg',
        },
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
              ownerName: 12,
              text: 'Some comment goes here..',
            },
          ],
          document: {
            id: 124,
            scienceArea: 'Български език и литература',
            subject: 'Български език',
            description: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind.',
          },
        },
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
              ownerName: 12,
              text: 'Some comment goes here..',
            },
          ],
          featuredImage: 'image.jpg',
          document: {
            id: 124,
            scienceArea: 'Български език и литература',
            subject: 'Български език',
            description: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind.',
          },
        },
      ],
    };
  },
  created() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-right-sidebars-layout');
    this.$store.commit('layouts/SET_LEFT_SIDEBAR', 'feeds-sidebar');
  },
};
</script>
