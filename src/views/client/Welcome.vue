<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <HomeLoginForm/>
            </div>
             <div class="col-md-8">
                <WelcomeSection/>
            </div>
        </div>
    </div>
</template>

<script>
import HomeLoginForm from '@/components/client/HomeLoginForm.vue';
import WelcomeSection from '@/components/client/WelcomeSection.vue';

export default {
  name: 'Welcome',
  components: {
    HomeLoginForm,
    WelcomeSection,
  },
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'full-width-layout');
  },
};
</script>
