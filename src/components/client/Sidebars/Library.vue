<template>
    <div class="right-sidebar library-sidebar section-block p-0">
        <ul>
            <li class="all-categories">
                <router-link :class="{'active' : $route.fullPath === '/library'}" to="/library">
                    Всички категории
                </router-link>
                <span
                  class="drop-caret d-flex align-items-center justify-content-center d-sm-none"
                  @click="showCategories = !showCategories">
                    <i class="fa fa-caret-down"></i>
                </span>
            </li>
            <div :class="{'visible' : showCategories}" class="library-category-links">
              <li v-for="(category, index) in categories" :key="index"
              @click="showCategories = !showCategories">
                  <router-link :to="`/library/${category}`"
                              :class="{'active' : $route.params.category ?
                              $route.params.category.toLowerCase() ===
                              category.toLowerCase() : false}">
                      {{category}}
                  </router-link>
              </li>
            </div>
        </ul>
    </div>
</template>

<script>
import authComputed from '@/store/helpers';

export default {
  name: 'Library',
  data() {
    return {
      showCategories: false,
    };
  },
  methods: {},
  mounted() {
    console.log(this.$route);
  },
  computed: {
    ...authComputed,
    categories() {
      return this.library.categories.map((cat) => cat.name);
    },
  },
};
</script>
