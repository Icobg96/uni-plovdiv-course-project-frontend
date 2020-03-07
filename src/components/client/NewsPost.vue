<template>
    <div class="news-post">
        <div class="post-header">
            <div class="user-avatar">
                <img :src="`/images/users/${user.image}`">
            </div>
            <div class="user-info">
                <span class="name">{{user.name}}</span>
                <span class="posted-time">24 Dec 2019</span>
            </div>
        </div>
        <div class="post-content">
            <div v-if="1" class="content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in</p>
            </div>
            <div v-if="image" class="image">
                <img src="../../assets/images/ex-image.jpg">
            </div>
        </div>
        <div class="post-footer">
            <div class="likes">
                <span class="like-btn">
                    <i class="fa fa-heart"></i>
                </span>
                <span class="likes-count">10</span>
            </div>
            <div class="comments">
                <span class="comment-btn">
                    <i class="fa fa-comments"></i>
                </span>
                <span class="comments-count">
                    0
                </span>
            </div>
            <div class="share">
                <span class="share-btn">
                    <i class="fa fa-share"></i>
                </span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  props: ['image', 'user'],
  name: 'NewsPost',
};
</script>
