<template>
    <div>
        <ul>
            <li>
                <router-link to="/"><i class="fa fa-home"></i> My profile</router-link>
            </li>
            <li>
                <router-link to="/"><i class="fa fa-address-book"></i> News</router-link>
            </li>
            <li>
                <router-link to="/"><i class="fa fa-comments"></i> Messages</router-link>
            </li>
            <li>
                <router-link to="/"><i class="fa fa-users"></i> Friends</router-link>
            </li>
             <li>
                <router-link to="/"><i class="fa fa-book"></i> Library</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'UserSideBar',
};
</script>
