<template>
  <small>Products Page</small>
  <!-- <LoadingOverRay v-model:active="isLoading" /> -->
  <h2 class="text-center">產品列表</h2>
  <table class="table">
    <thead>
      <tr>
        <th width="150"></th>
        <th width="250">產品名稱</th>
        <th width="400">產品描述</th>
        <th>產品價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in tempProducts" :key="product.id">
        <th>
          <img :src="product.imageUrl" :alt="product.title" class="listImg img-fluid" />
        </th>
        <td>{{ product.title }}</td>
        <td class="pe-3">
          <small>{{ product.description }}</small>
        </td>
        <td class="">
          <template v-if="product.origin_price">
            <h5>
              原價<del>${{ product.origin_price }}</del>
            </h5>
            <h6 class="text-danger fw-bold">${{ product.price }}</h6>
          </template>
          <template v-else>
            <h6 class="fw-bold">${{ product.price }}</h6>
          </template>
        </td>
        <td>
          <button type="button" class="btn btn-primary" @click="showProductDetails(product.id)">
            查看更多
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      tempProducts: [],
      // loader: null
    }
  },
  methods: {
    getProducts() {
      // console.log(this);
      let loader = this.$loading.show()
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          console.log(res.data.products)
          this.tempProducts = res.data.products
          loader.hide()
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    showProductDetails(id) {
      this.$router.push(`/products/${id}`)
    }
  },
  mounted() {
    // this.loader = this.$loading
    this.getProducts()
  }
}
</script>

<style scoped lang="scss">
.listImg {
  height: 100px;
  width: 150px;
  object-fit: cover;
}
</style>
