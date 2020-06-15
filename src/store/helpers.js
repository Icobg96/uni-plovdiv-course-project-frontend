import { mapGetters } from 'vuex';

const authComputed = {
  ...mapGetters({
    loggedIn: 'authentication/loggedIn',
    currentUser: 'authentication/user',
    users: 'authentication/users',
  }),
};

export default authComputed;
