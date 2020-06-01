<template>
    <div class="section-block">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>404</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: '404',
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'full-width-layout');
  },
};
</script>
