<template>
    <div>
        <div class="header">
            <div class="heading">
                Намери материал в <b>{{category}}</b>
            </div>
            <div class="search-friends">
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
            </div>
        </div>
        <div class="documents-explore-list">
            <ul v-if="documents[0]">
                <li class="list-heading">
                    <span class="name">
                        Име
                    </span>
                    <span class="created">
                        Добавено:
                    </span>
                    <span class="author">
                        Автор:
                    </span>
                    <span class="actions">
                    </span>
                </li>
                <li v-for="(document, index) in documents" :key="index">
                    <span class="name">
                        <img width="35" class="mr-2" v-if="document.fileFormat"
                             :src="`/images/${document.fileFormat}-icon.png`">{{document.name}}
                    </span>
                    <span class="created">
                        {{document.created}}
                    </span>
                    <span class="author">
                        <router-link :to="`/profile/${document.author}`">
                            {{document.author}}
                        </router-link>
                    </span>
                    <span class="actions">
                        <i data-toggle="modal" :data-target="'#modal'+index"
                           title="Виж документа" class="fa fa-eye"></i>
                    </span>

                    <!-- Modal -->
                    <div class="modal fade" :id="'modal'+index" tabindex="-1"
                         role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{{document.name}}</h5>
                            </div>
                            <div class="modal-body">
                                <div class="head d-flex align-items-center justify-content-between">
                                    <div class="title">
                                        <b>{{document.name}}</b>
                                        <p class="mb-3">{{document.subject}}</p>
                                        <div class="info">
                                            <!-- <p class="m-0">{{document.subject}}</p> -->
                                            <p class="m-0">Добавен: {{document.created}}</p>
                                            <p class="m-0">
                                                Автор:
                                                <router-link data-dismiss="modal"
                                                             :to="`/profile/${document.author}`">
                                                    {{document.author}}
                                                </router-link>
                                            </p>
                                            <p class="m-0">Тип: {{document.fileType}}</p>
                                        </div>
                                    </div>
                                    <div class="icon">
                                        <img width="60" class="mr-2" v-if="document.fileFormat"
                                        :src="`/images/${document.fileFormat}-icon.png`">
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <p class="mb-1"><b>Описание:</b></p>
                                    <div class="description">
                                        Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry.
                                        <br>
                                        Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer
                                        took a galley of type and scrambled it to make a
                                        <br>
                                        ype specimen book. It has survived not only five centuries,
                                        but also the leap into electronic typesetting, remaining
                                        essentially unchanged. It was popularised in the 1960s with
                                        the release of Letraset sheets containing Lorem Ipsum
                                        passages.
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">
                                    <i :title="'Свали ' + document.name" class="fa fa-download"></i>
                                </button>
                                <button type="button"
                                        class="btn btn-light-primary" data-dismiss="modal">
                                    Затвори
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import authComputed from '@/store/helpers';

export default {
  props: ['category'],
  name: 'LibrarySingleCategory',
  components: {},
  mounted() {},
  computed: {
    ...authComputed,
    documents() {
      const currentCategory = this.library.categories.filter((cat) => cat.name === this.category);
      return currentCategory[0] ? currentCategory[0].files : null;
    },
  },
};
</script>
