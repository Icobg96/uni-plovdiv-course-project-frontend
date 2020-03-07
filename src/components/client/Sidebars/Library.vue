<template>
    <div class="right-sidebar library-sidebar page-block p-0">
        <ul>
            <li @click="toggleActive($event)">
                <router-link active-class="active" to="/library">
                    All documents
                </router-link>
            </li>
            <li @click="toggleActive($event)">
                <router-link to="">
                    Category 1
                </router-link>
            </li>
            <li @click="toggleActive($event)">
                <router-link to="">
                    Category 2
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Library',
  methods: {
    toggleActive(e) {
      if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
      } else {
        e.target.classList.add('active');
      }
    },
  },
};
</script>
