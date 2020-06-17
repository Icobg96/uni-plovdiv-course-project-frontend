<template>
    <div class="right-sidebar library-sidebar section-block p-0">
        <ul>
            <li>
                <router-link :class="{'active' : $route.fullPath === '/library'}" to="/library">
                    Всички категории
                </router-link>
            </li>
            <li v-for="(category, index) in categories" :key="index">
                <router-link :to="`/library/${category}`"
                             :class="{'active' : $route.params.category ?
                             $route.params.category.toLowerCase() ===
                             category.toLowerCase() : false}">
                    {{category}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import authComputed from '@/store/helpers';

export default {
  name: 'Library',
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
