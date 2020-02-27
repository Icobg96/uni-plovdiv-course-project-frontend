<template>
    <div class="cs-dropdown-menu">
        <div class="drop-down-btn" @click="toggle($event)">
            <div v-if="button" v-html="button">
            </div>
            <button v-else
                class="dropdown-toggle bg-transparent border-0"
                type="button">
            </button>
        </div>
        <div v-show="active" class="cs-dropdown-container">
            <div v-if="title" class="cs-dropdown-title" v-text="title"></div>
            <div class="cs-dropdown-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['button', 'title'],
  data() {
    return {
      active: false,
      target: null,
    };
  },
  methods: {
    toggle(event) {
      this.target = event.target;
      this.active = !this.active;
    },
  },
  mounted() {
    const app = document.getElementById('app');
    app.addEventListener('click', (e) => {
      if (this.target) {
        this.active = e.target === this.target;
      }
    });
  },
};
</script>
