<template>
    <div class="images-block m-0">
        <div>
            <div class="header">
                Снимки
                <span class="counter">23</span>
            </div>
            <div class="images-list">
                <ul>
                    <li>
                        <img src="@/assets/images/users/avatar-4.jpg">
                    </li>
                    <li>
                        <img src="@/assets/images/camera_50.png">
                    </li>
                    <li>
                        <img src="@/assets/images/camera_50.png">
                    </li>
                    <li>
                        <img src="@/assets/images/camera_50.png">
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div v-if="actions" class="btn btn-primary mt-2 w-100 images-list text-center">
                Виж всички
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['user', 'actions'],
  name: 'UserImages',
  computed: {
    isThisMe() {
      return this.user.name === 'me';
    },
  },
};
</script>
