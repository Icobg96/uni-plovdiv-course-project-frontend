<template>
    <div class="section-block p-0 library-page">
        <div class="documents-explore-list">
            <LibrarySingleCategory :category="category" v-if="category"/>
            <LibraryCategories v-else/>
        </div>
    </div>
</template>
<script>
import LibraryCategories from '@/components/client/Library/LibraryCategories.vue';
import LibrarySingleCategory from '@/components/client/Library/LibrarySingleCategory.vue';

export default {
  props: ['category'],
  name: 'Library',
  components: {
    LibraryCategories,
    LibrarySingleCategory,
  },
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-right-sidebars-layout');
    this.$store.commit('layouts/SET_LEFT_SIDEBAR', 'library-sidebar');
  },
};
</script>
