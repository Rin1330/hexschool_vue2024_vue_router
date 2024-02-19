<template>
  <div class="vw-100 vh-100 d-flex flex-column align-items-center justify-content-center">
    <h2 class="my-3 text-center fw-bold">Login Page</h2>
    <div class="loginBox mx-auto my-5 bg-light rounded-3 overflow-hidden p-2">
      <div class="row g-0">
        <div class="col-md-6">
          <div class="rounded-3 overflow-hidden loginBoxImg">
            <img
              src="https://plus.unsplash.com/premium_photo-1663852705829-aa8707495e2e?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-md-6 p-4 p-0">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div>
              <div class="text-center mb-4">
                <h3 class="fw-bold mb-2 font-salsa">Hello!</h3>
                <h4 class="fw-bold mb-0 font-salsa">Welcome Back Your Account</h4>
              </div>
              <form id="form" class="form-signin text-center">
                <div class="form-floating mb-2">
                  <input
                    type="email"
                    class="form-control"
                    id="username"
                    placeholder="name@example.com"
                    required
                    autofocus
                    v-model="user.username"
                  />
                  <label for="username">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    required
                    v-model="user.password"
                  />
                  <label for="password">Password</label>
                </div>
                <template v-if="loginErrMsg">
                  <p><small class="text-danger font-salsa">Email or Password Invalid</small></p>
                </template>
                <div>
                  <button class="btn btn-sm btn-primary w-50" type="button" @click="login">
                    登入
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginErrMsg: false,
      user: {
        username: '',
        pawwdoed: ''
      }
    }
  },
  methods: {
    login() {
      const { VITE_URL } = import.meta.env
      this.$http
        .post(`${VITE_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          // MDN set cookie template
          document.cookie = `hexVueToken=${token}; expires=${new Date(expired)}`
          this.clearInput()
          this.$router.push('/dashboard/products')
          this.loginErrMsg = false
        })
        .catch((err) => {
          console.log(err)
          this.loginErrMsg = true
          this.clearInput()
        })
    },
    clearInput() {
      this.user.username = ''
      this.user.password = ''
    }
  },
}
</script>

<style scoped lang="scss">
.loginBox {
  max-width: 700px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  img {
    object-fit: cover;
  }
}
</style>
