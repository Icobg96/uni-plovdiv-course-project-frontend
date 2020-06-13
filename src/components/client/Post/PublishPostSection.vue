<template>
    <div class="new-post-container section-block">
        <Tabs containerClass="post-tab-container">
            <Tab :activeTab="true" title="<i class='fa fa-edit'></i> Напиши пост">
                <div class="content-block">
                    <textarea type="text" name="post_content" placeholder="Какво ново?">
                    </textarea>
                </div>
            </Tab>
            <Tab title="<i class='fa fa-image'></i> Качи снимка">
                <div class="content-block">
                    <div class="upload-file image">
                        <div class="upload-input">
                            <i class='fa fa-image'></i>
                            <span>{{post.image.name ? post.image.name : 'Избери снимка'}}</span>
                            <input @change="getFile($event)"
                                   type="file"
                                   name="image"
                                   accept="image/png, image/jpeg">
                        </div>
                        <div v-show="post.image.name" class="preview-image">
                            <img id="postImagePreview" src="">
                            <span @click="clearInputs()" class="clear-file">
                                <i class="fa fa-times-circle"></i>
                            </span>
                        </div>
                    </div>
                    <textarea type="text" name="post_content" placeholder="Какво ново?">
                    </textarea>
                </div>
            </Tab>
            <Tab title="<i class='fa fa-file'></i> Качи материал">
                <div class="content-block">
                    <div class="document-info">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="science-area">
                                    Нaучна област:
                                </label>
                            </div>
                            <select class="custom-select" id="science-area">
                                <option selected value="">--</option>
                                <optgroup label="А">
                                    <option value="45">Авиационна и космическа техника</option>
                                    <option value="29">Автоматика и изчислителна техника</option>
                                    <option value="23">Агрономия и аграрни науки</option>
                                    <option value="3">Администрация и управление</option>
                                    <option value="32">Архитектура и строителство</option>
                                    <option value="79">Аудио и видео обработка</option>
                                </optgroup>
                                <optgroup label="Б">
                                    <option value="49">Биологически науки</option>
                                    <option value="22">Ботаника и растениевъдство</option>
                                    <option value="77">Български език и литература</option>
                                </optgroup>
                            </select>
                        </div>
                        <label for="science-area">Дисциплина:</label>
                        <input type="text" class="form-control mb-3"
                               placeholder="Въведи дисциплина">
                        <label for="">Описание</label>
                        <textarea class="form-control mb-3" placeholder="Въведи описание">
                        </textarea>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="science-area">
                                    Вид на документа:
                                </label>
                            </div>
                            <select class="custom-select" id="science-area">
                                <option selected value="">--</option>
                                <option value="13">Анализ</option>
                                <option value="17">Безплатна книга или учебник</option>
                                <option value="30">Бизнес план</option>
                                <option value="11">Доклад</option>
                                <option value="20">Други</option>
                                <option value="12">Есе</option>
                                <option value="18">Закони и кодекси</option>
                                <option value="16">Казус</option>
                                <option value="19">Конспект</option>
                                <option value="26">Курсов проект</option>
                                <option value="8">Курсова работа</option>
                                <option value="4">Лекция</option>
                                <option value="27">План-конспект</option>
                                <option value="1">Презентация</option>
                                <option value="24">Проект</option>
                                <option value="23">Протокол</option>
                                <option value="5">Реферат</option>
                                <option value="25">Решени задачи</option>
                                <option value="29">Статия</option>
                                <option value="28">Съкратена тема</option>
                                <option value="14">Тема</option>
                                <option value="15">Тест</option>
                                <option value="21">Чертеж или схема</option>
                            </select>
                        </div>
                        <div class="upload-file document">
                            <div class="upload-input">
                                <i class='fa fa-file'></i>
                                <span>
                                    {{post.document.name ? post.document.name : 'Избери материал'}}
                                </span>
                                <input @change="getFile($event)" type="file" name="image">
                                <span v-show="post.document.name"
                                      @click="clearInputs()"
                                      class="clear-file">
                                    <i class="fa fa-times-circle"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Tab>
        </Tabs>
        <div :title="currentUser.name"
             class="actions d-flex align-items-center justify-content-between mt-4 text-right">
          <div class="publisher">
            <div class="user-avatar icon-45">
              <img src="@/assets/images/users/avatar-4.jpg">
            </div>
          </div>
          <button class="btn btn-primary">Публикувай</button>
        </div>
    </div>
</template>
<script>
import Tabs from '@/components/client/Tabs/Tabs.vue';
import Tab from '@/components/client/Tabs/Tab.vue';
import authComputed from '@/store/helpers';

export default {
  name: 'PublishPostSection',
  components: {
    Tabs,
    Tab,
  },
  data() {
    return {
      post: {
        image: {
          name: '',
        },
        document: {
          name: '',
        },
      },
    };
  },
  computed: {
    ...authComputed,
  },
  methods: {
    getFile(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.type === 'image/jpeg' || file.type === 'image/jpng') {
          this.setImagePreview(file);
        } else {
          this.setDocumentPreview(file);
        }
      }
    },
    setImagePreview(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('postImagePreview').setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(file);
      this.post.image.name = file.name;
    },
    setDocumentPreview(file) {
      this.post.document.name = file.name;
    },
    clearInputs() {
      const inputs = document.querySelectorAll('input[type="file"]');
      /*    eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }]    */
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = null;
      }
      this.post.image.name = '';
      this.post.document.name = '';
    },
  },
};
</script>
