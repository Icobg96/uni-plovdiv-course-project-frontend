<template>
    <div class="section-block p-0 library-page">
        <div class="header">
            <div class="heading">
                Find documents
            </div>
            <div class="search-friends">
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend px-1">
                        <span id="inputGroup-sizing-sm"
                            class="input-group-text bg-transparent text-primary border-0">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                    <input type="text" placeholder="Search.."
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"
                       class="form-control bg-transparent border-0 text-primary">
                </div>
            </div>
        </div>

        <div class="documents-explore-list">
            <ul>
              <li>
                <span class="icon">
                  <i class="fa fa-file"></i>
                </span>
                <span class="doc-info">
                  filename.pdf
                </span>
              </li>
               <li>
                <span class="icon">
                  <i class="fa fa-file"></i>
                </span>
                <span class="doc-info">
                  filename.pdf
                </span>
              </li>
               <li>
                <span class="icon">
                  <i class="fa fa-file"></i>
                </span>
                <span class="doc-info">
                  filename.pdf
                </span>
              </li>
               <li>
                <span class="icon">
                  <i class="fa fa-file"></i>
                </span>
                <span class="doc-info">
                  filename.pdf
                </span>
              </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
  name: 'Friends',
  components: {},
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-right-sidebars-layout');
    this.$store.commit('layouts/SET_LEFT_SIDEBAR', 'library-sidebar');
  },
};
</script>
