<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid justify-content-end">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/dashboard/products">產品列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/dashboard/orders">訂單列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">回到前台</RouterLink>
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env

export default {
  methods: {
    checkAdmin() {
      this.$http
        .post(`${VITE_URL}/api/user/check`)
        .then(() => {
          // console.log(res.data);
        })
        .catch(() => {
          // console.log(err);
          setTimeout(() => {
            this.$router.push('/login')
          }, 0)
        })
    }
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // console.log(token);
    this.$http.defaults.headers.common['Authorization'] = token
    this.checkAdmin()
  }
}
</script>

<style scoped lang="scss"></style>
