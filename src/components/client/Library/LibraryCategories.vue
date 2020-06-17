<template>
    <div>
        <div class="header">
            <div class="heading">
                Намеи категория
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
        <div class="library-categories">
            <div v-for="(category, index) in categories" :key="index" class="library-category">
                <router-link :to="`/library/${category}`">

                    <div class="image">
                        <img src="/images/folder-icon.png">
                    </div>
                    {{category}}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import authComputed from '@/store/helpers';

export default {
  name: 'LibraryCategories',
  components: {},
  mounted() {},
  computed: {
    ...authComputed,
    categories() {
      return this.library.categories.map((cat) => cat.name);
    },
  },
};
</script>
