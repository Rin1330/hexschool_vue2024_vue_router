<template>
  <small>Single Product Page - {{ product.title }}</small>
  <hr />
  <div class="row">
    <div class="col-5">
      <div class="mb-1">
        <img :src="product.imageUrl" :alt="product.title" class="img-fluid mainImage" />
      </div>
      <template v-if="Array.isArray(product.imagesUrl)">
        <ul class="list-unstyled mb-2 d-flex row row-cols-5 g-1 subImageDiv">
          <li class="col" v-for="(image, index) in product.imagesUrl" :key="product.title + index">
            <img :src="image" :alt="`${product.title}-${index + 1}`" class="img-fluid w-100" />
          </li>
        </ul>
      </template>
    </div>
    <div class="col-7">
      <table class="table table-hover">
        <tbody>
          <template v-if="product.category">
            <tr>
              <td width="100"><small>分類:</small></td>
              <td>{{ product.category }}</td>
            </tr>
          </template>
          <template v-if="product.title">
            <tr>
              <td><small>產品名稱:</small></td>
              <td>{{ product.title }}</td>
            </tr>
          </template>
          <template v-if="product.description">
            <tr>
              <td><small>產品描述:</small></td>
              <td>{{ product.description }}</td>
            </tr>
          </template>
          <template v-if="product.unit">
            <tr>
              <td><small>產品單位:</small></td>
              <td>{{ product.unit }}</td>
            </tr>
          </template>
          <template v-if="product.price">
            <tr>
              <td><small>產品價錢:</small></td>
              <td>
                <template v-if="product.origin_price"><div class="mb-1"><del><small class="text-danger">${{ product.origin_price }}</small></del></div></template>
                <h5>${{ product.price }}</h5>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    // console.log(this.$route);
    const { id } = this.$route.params
    let loader = this.$loading.show()
    this.$http
      .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        this.product = res.data.product
        console.log(this.product)
        loader.hide()
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
</script>

<style scoped lang="scss">
img {
  object-fit: cover;
}

.mainImage {
  max-height: 400px;
}
.subImageDiv {
  img {
    height: 75px;
  }
}
</style>
