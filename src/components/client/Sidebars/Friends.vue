<template>
    <div class="right-sidebar friends-sidebar section-block p-0">
        <ul>
            <li>
                <router-link to="/friends" :class="{'active' : $route.fullPath === '/friends'}">
                    Моите приятели
                </router-link>
            </li>
            <li>
                <router-link to="/friends"
                :class="{'active' : $route.fullPath === '/friends/search'}">
                    Намери приятели
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
