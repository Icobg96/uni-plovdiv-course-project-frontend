import { mapGetters } from 'vuex';

const authComputed = {
  ...mapGetters({
    loggedIn: 'authentication/loggedIn',
    currentUser: 'authentication/user',
    users: 'authentication/users',
    library: 'library/library', //  to delete
  }),
};

export default authComputed;
