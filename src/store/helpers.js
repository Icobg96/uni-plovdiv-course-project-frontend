import { mapGetters } from 'vuex';

const authComputed = {
  ...mapGetters({
    loggedIn: 'authentication/loggedIn',
    currentUser: 'authentication/user',
  }),
};

export default authComputed;
