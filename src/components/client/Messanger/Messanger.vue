<template>
    <div class="messanger">
        <div class="container">
            <div class="row">
                <div class="col-md-12 p-0">
                    <div v-if="header" class="header">
                        <slot name="header"></slot>
                    </div>
                    <div class="messanger-body">
                        <slot></slot>
                    </div>
                    <div v-if="footer" class="messanger-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
/* eslint-disable */
  props: {
    header: false,
    footer: false,
  },
/* eslint-disable */
};
</script>
