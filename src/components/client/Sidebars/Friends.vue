<template>
    <div class="right-sidebar friends-sidebar page-block p-0">
        <ul>
            <li @click="toggleActive($event)">
                <router-link to="">
                    My friends
                </router-link>
            </li>
            <li @click="toggleActive($event)">
                <router-link active-class="active" to="">
                    Find friends
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Friends',
  methods: {
    toggleActive(e) {
      console.log(e.target);
      if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
      } else {
        e.target.classList.add('active');
      }
    },
  },
};
</script>
