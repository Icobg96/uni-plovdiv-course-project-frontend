<template>
    <div class="news-post">
        <div v-if="post.document"
             class="post-document-mark d-flex align-items-center justify-content-center">
            <i class="fa fa-folder-open"></i> {{post.document.type}}
        </div>
        <div class="post-header">
            <div class="user-avatar">
                <img :src="`/images/users/camera_50.png`">
            </div>
            <div class="user-info">
                <span class="name">{{post.publisher.name}}</span>
                <span class="posted-time">{{post.date}}</span>
            </div>
        </div>
        <div class="post-content">
            <div v-if="post.document" class="document-info">
                <div class="info-row">
                    <span class="area"><i class="fa fa-flask"></i> Област: </span>
                    <span class="name"><b>{{post.document.scienceArea}}</b></span>
                </div>
                <div v-if="post.document.subject" class="info-row">
                    <span class="area"><i class="fa fa-clipboard"></i> Дисциплина: </span>
                    <span class="name"><b>{{post.document.subject}}</b></span>
                </div>
            </div>
            <div v-if="post.content" class="content">
                <p>{{post.content}}</p>
            </div>
            <div v-if="post.document" class="document-source">
                <i class="fa fa-download"></i> {{post.document.file}}
            </div>
            <div v-if="post.featuredImage" class="image">
                <img src="@/assets/images/ex-image.jpg">
            </div>
        </div>
        <div class="post-footer">
            <div class="stats">
                <div class="likes">
                    <span class="like-btn">
                        <i class="fa fa-heart"></i>
                    </span>
                    <span class="likes-count">{{post.likes}}</span> харесвания
                </div>
                <div title="Виж коментари" @click="showComments = !showComments" class="comments">
                    <span class="comment-btn">
                        <i class="fa fa-comments"></i>
                    </span>
                    <span class="comments-count">
                        {{post.comments.length}} коментари
                    </span>
                </div>
                <div class="share">
                    <span class="share-btn">
                        <i class="fa fa-share"></i>
                    </span>
                </div>
            </div>
            <div class="write-comment d-flex justify-content-between align-items-center">
                <span class="user-avatar icon">
                    <img :src="`/images/users/camera_50.png`">
                </span>
                <input v-model="newComment"
                       type="text" name="comment" placeholder="Напиши коментар..">
                <span class="actions">
                    <i @click="addComment()" class="fa fa-paper-plane"></i>
                </span>
            </div>
            <div v-if="showComments && comments.length" class="post-comments">
                <div v-for="(comment, index) in comments" :key="index"
                     class="comment d-flex align-items-center">
                    <span class="user-avatar icon owner">
                        <img :src="`/images/users/camera_50.png`">
                    </span>
                    <span class="text">
                        <b>{{comment.ownerName}}</b>: {{comment.text}}
                    </span>
                </div>
                <div v-if="post.comments.length > 1" class="actions text-center">
                    <span @click="getAllComments()" class="more-comments">Виж повече</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  props: ['image', 'post'],
  name: 'NewsPost',
  data() {
    return {
      showComments: false,
      comments: [],
      newComment: '',
    };
  },
  created() {
    this.comments = [this.post.comments[0]];
  },
  methods: {
    getAllComments() {
    //   to do request
      this.comments = this.post.comments;
    },
    addComment() {
    //   TO DO
      if (this.newComment) {
        this.showComments = true;
        this.comments.push({
          ownerName: 12,
          text: this.newComment,
        });
        this.newComment = '';
      }
    },
  },
};
</script>
