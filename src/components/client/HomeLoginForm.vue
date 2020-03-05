<template>
  <div>
      <div class="page-block mb-3 p-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="form-row align-items-center">
            <div class="form-group col-md-4">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div class="form-group col-md-8 text-right">
              <span>Forgot your password?</span>
            </div>
          </div>
        </form>
      </div>
      <div class="page-block p-4">
        <div class="text-center mb-4">
          <h4 class="m-0">First time here?</h4>
          <small>Sign up here</small>
        </div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control"
                    id="first_name"
                    placeholder="First name">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control"
                    id="last_name"
                    placeholder="Last name">
            </div>
          </div>
          <div class="form-group">
            <input type="email" class="form-control"
                   id="email"
                   placeholder="Email">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="password" placeholder="Password"
                     class="form-control"
                     id="password">
            </div>
            <div class="form-group col-md-6">
              <input type="repeat_password"
                     placeholder="Repeat password"
                     class="form-control" id="repeat_password">
            </div>
          </div>
          <small class="d-block mb-1">Your gender</small>
          <div class="form-row align-items-center mb-4">
              <div class="form-check mr-3">
                <input class="form-check-input"
                       type="radio"
                       name="gridRadios"
                       id="gridRadios1" value="option1" checked>
                <label class="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input"
                       type="radio"
                       name="gridRadios"
                       id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  Female
                </label>
              </div>
          </div>
          <button type="submit" class="btn btn-primary d-block w-100">Sign in</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLoginForm',
};
</script>
