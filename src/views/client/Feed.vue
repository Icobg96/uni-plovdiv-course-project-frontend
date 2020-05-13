<template>
    <div class="feed-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="new-post-container">
                        <div class="post-content d-flex align-items-start">
                            <div class="user-avatar">
                                <img src="../../assets/images/camera_50.png">
                            </div>
                            <div class="content-block">
                                <textarea type="text" name="post_content"
                                       id="new-post-content" placeholder="What's new?">
                                </textarea>
                                <div class="footer-block text-right mt-4
                                            d-flex align-items-center
                                            justify-content-between">
                                    <div class="uploads">
                                        <div class="image">
                                            <input type="file">
                                            <i class="fa fa-image"></i>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page-block mb-4">
                        <NewsPost :user="user"/>
                    </div>
                    <div class="page-block">
                        <NewsPost :user="user" :image="true"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NewsPost from '../../components/client/NewsPost.vue';

export default {
  components: {
    NewsPost,
  },
  name: 'Feed',
  data() {
    return {
      user: { name: 'me', image: 'camera_50.png' },
    };
  },
  created() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-right-sidebars-layout');
    this.$store.commit('layouts/SET_LEFT_SIDEBAR', 'feeds-sidebar');
  },
};
</script>
