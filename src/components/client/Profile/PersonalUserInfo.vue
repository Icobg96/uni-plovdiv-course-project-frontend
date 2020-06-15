<template>
    <div class="profile-personal-info-block h-100">
        <div class="d-flex flex-column h-100">
            <div class="name">
                {{user.name}}
            </div>
            <div class="info flex-grow-1">
                <div class="info-row">
                    <div class="label">
                        Дата на раждане:
                    </div>
                    <div class="data">
                        9 Април, 1996
                    </div>
                </div>
                <div class="info-row">
                    <div class="label">
                        Местоживеене:
                    </div>
                    <div class="data">
                        Пловдив
                    </div>
                </div>
                <div class="info-row">
                    <div class="label">
                        Университет:
                    </div>
                    <div class="data">
                        Пловдивски университет "Паисий Хилендарски"
                    </div>
                </div>
            </div>
            <div v-show="showFullInfo" class="info extra-info">
                <div class="info-row heading">
                    <div class="label">
                        Personal information:
                    </div>
                </div>
                 <div class="info-row">
                    <div class="label">
                        Interests:
                    </div>
                    <div class="data">
                        Reading, Sport, Swimming
                    </div>
                </div>
                <div class="info-row heading">
                    <div class="label">
                        Eductation:
                    </div>
                </div>
                 <div class="info-row">
                    <div class="label">
                        University:
                    </div>
                    <div class="data">
                        PU 15-20
                    </div>
                </div>
            </div>
            <div class="info">
                <!-- <div class="info-row">
                    <button @click="toggleMoreInfo($event)"
                            class="btn btn-light-primary d-block w-100">
                        <span v-show="showFullInfo">Show less</span>
                        <span v-show="!showFullInfo">Show full info</span>
                    </button>
                </div> -->
                <div class="info-row mt-1">
                    <button v-if="isThisMe" class="btn btn-light-primary d-block w-100">
                        <span>Edit profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['user'],
  name: 'PersonalUserInfo',
  data() {
    return {
      showFullInfo: false,
    };
  },
  methods: {
    toggleMoreInfo(e) {
      this.showFullInfo = !this.showFullInfo;
      console.log(e.target);
    },
  },
  computed: {
    isThisMe() {
      return this.user.name === 'me';
    },
  },
};
</script>
