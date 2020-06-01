<template>
    <div class="images-block m-0">
        <div v-if="!isThisMe" >
            <div class="header">
                {{user.name}}'s photos
                <span class="counter">150</span>
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
        <div v-else>
            <div class="images-list text-center">
                <i class="fa fa-camera"></i> Upload images
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['user'],
  name: 'UserImages',
  computed: {
    isThisMe() {
      return this.user.name === 'me';
    },
  },
};
</script>
