<template>
  <div>
      <div class="section-block mb-3 p-4">
         <div class="text-center mb-4">
          <h4 class="m-0">Влез в своя профил</h4>
        </div>
        <form>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <input v-model="user.email" type="email" class="form-control"
                  placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input v-model="user.password"
                     type="password"
                     class="form-control"
                     placeholder="Парола">
            </div>
          </div>
          <div class="form-row align-items-center">
            <div class="form-group col-md-4">
              <button @click.prevent="login()" type="submit" class="btn btn-primary">Влез</button>
            </div>
            <div class="form-group col-md-8 text-right">
              <span>Забравена парола?</span>
            </div>
          </div>
        </form>
      </div>
      <div class="section-block p-4">
        <div class="text-center mb-4">
          <h4 class="m-0">За пръв път сте тук?</h4>
          <small>Направете своята регистрация тук</small>
        </div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control"
                    id="first_name"
                    placeholder="Име"
                    v-model="user.name">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control"
                    id="last_name"
                    placeholder="Фамилия"
                    v-model="user.surname">
            </div>
          </div>
          <div class="form-group">
            <input type="email" class="form-control"
                   id="email"
                   placeholder="Email"
                   v-model="user.email">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="password" placeholder="Парола"
                     class="form-control"
                     id="password"
                     v-model="user.password">
            </div>
            <div class="form-group col-md-6">
              <input type="repeat_password"
                     placeholder="Повтори парола"
                     class="form-control" id="repeat_password"
                     v-model="user.repeat_password">
            </div>
          </div>
          <small class="d-block mb-1">Пол</small>
          <div class="form-row align-items-center mb-4">
              <div class="form-check mr-3">
                <input class="form-check-input"
                       type="radio"
                       name="Gender"
                       value="Male"
                       id="gender-male"
                       checked
                       v-model="user.gender">
                <label class="form-check-label" for="gender-male">
                  Мъж
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input"
                       type="radio"
                       name="Gender"
                       value="Female"
                       id="gender-female"
                       v-model="user.gender">
                <label class="form-check-label" for="gender-female">
                  Жена
                </label>
              </div>
          </div>
          <button type="submit" class="btn btn-primary d-block w-100">Регистрация</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLoginForm',
  data() {
    return {
      user: {
        email: 'admin@admin.net',
        name: 'Admin',
        password: '123123',
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch('authentication/login', this.user)
        .then(() => {
          this.$router.push({ name: 'Feeds' });
        })
        .catch((err) => {
          console.log(err); //  TO DO: handle error
        });
    },
    register() {
      this.$store.dispatch('authentication/register', this.user)
        .then(() => {
          this.$router.push({ name: 'Feeds' });
        })
        .catch((err) => {
          console.log(err); //  TO DO: handle error
        });
    },
  },
};
</script>
