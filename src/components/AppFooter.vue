<template>
  <footer>
    <div class="footer-logo">
      <div>
        <img src="../../public/assets/pluralsight-white.png" />
        <div>
          This site is created for demonstrative purposes only and does not offer any real products
          or services.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background-color: #130f24;
  color: #fff;
  min-height: 75px;
  margin-top: auto;

  .footer-logo {
    background-color: #130f24;
    padding: 10px 30px;
    float: left;
    width: 40%;
    line-height: 25px;
    text-align: left;

    img {
      height: 40px;
    }

    div > div:before {
      content: '';
      display: block;
      height: 1px;
      margin: 10px 0;
      background: linear-gradient(to right, #f05a28 0, #e80a89 100%);
    }
  }
}
</style>
