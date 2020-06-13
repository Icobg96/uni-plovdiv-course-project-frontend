<template>
    <div class="right-sidebar library-sidebar page-block p-0">
        <ul>
            <li @click="toggleActive($event)">
                <router-link active-class="active" to="/library">
                    All
                </router-link>
            </li>
            <li @click="toggleActive($event)">
                <router-link to="">
                    Folders
                </router-link>
            </li>
            <li @click="toggleActive($event)">
                <router-link to="">
                    Files
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
