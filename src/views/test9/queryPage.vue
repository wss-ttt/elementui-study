<template>
  <div class="wrapper">
    <div class="demo">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="navbar">主菜单
              <ul class="menu">
                <li><a href="#" class="fa fa-facebook">1</a></li>
                <li><a href="#" class="fa fa-google-plus">2</a></li>
                <li><a href="#" class="fa fa-twitter"></a>3</li>
                <li><a href="#" class="fa fa-linkedin"></a>4</li>
                <li><a href="#" class="fa fa-pinterest">5</a></li>
                <li><a href="#" class="fa fa-rss">6</a></li>
                <li><a href="#" class="fa fa-instagram">7</a></li>
                <li><a href="#" class="fa fa-skype">8</a></li>
                <li><a href="#" class="fa fa-github">9</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {

      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {},
    filters: {}
  }

</script>
<style scoped lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: #262626
  }

  .demo {
    padding: 2em 0;
    transform: translate3d(0, 0, 0);
  }

  .navbar {
    width: 150px;
    height: 150px;
    line-height: 150px;
    border-radius: 50%;
    background: #fff;
    margin: 70px auto;
    position: relative;
    cursor: pointer;
    text-align: center;
    font-size: 1.75em;
    font-weight: bold;
    color: #383838;
    transition: 0.24s 0.2s;
  }

  .navbar:hover {
    background: rgba(255, 255, 255, 0.75);
  }

  .navbar .menu {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: -75px;
    left: -75px;
    border: 150px solid transparent;
    cursor: default;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 1.4s 0.07s;
    z-index: -1;
  }

  .navbar:hover .menu {
    transition: transform 0.4s 0.08s, z-index 0s 0.5s;
    transform: scale(1);
    z-index: 1;
  }

  .navbar .menu li {
    position: absolute;
    top: -100px;
    left: -100px;
    transform-origin: 100px 100px;
    transition: all 0.5s 0.1s;
  }

  .navbar:hover .menu li {
    transition: all 0.6s;
  }

  .navbar .menu li a {
    transition: all .4s ease 0s;
    width: 45px;
    height: 45px;
    line-height: 45px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    font-size: 60%;
    color: #99b977;
    transition: 0.6s;
    text-decoration: none;
  }

  .navbar .menu li a:hover {
    background-color: #2860F8;
    color: #fff;
  }

  // 使用for循环
  @for $i from 1 through 9 {
    .navbar:hover .menu li:nth-child(#{$i}) {
      transition-delay: 0.02s * $i;
      transform: rotate(85deg + ($i - 1) * 40);
    }

    .navbar:hover .menu li:nth-child(#{$i}) a {
      transition-delay: 0.04s * $i;
      transform: rotate(635deg - ($i - 1) * 40);
    }
  }

  /* .navbar:hover .menu li:nth-child(1) {
    transition-delay: 0.02s;
    transform: rotate(85deg);
  }

  .navbar:hover .menu li:nth-child(1) a {
    transition-delay: 0.04s;
    transform: rotate(635deg);
  }

  .navbar:hover .menu li:nth-child(2) {
    transition-delay: 0.04s;
    transform: rotate(125deg);
  }

  .navbar:hover .menu li:nth-child(2) a {
    transition-delay: 0.08s;
    transform: rotate(595deg);
  }

  .navbar:hover .menu li:nth-child(3) {
    transition-delay: 0.06s;
    transform: rotate(165deg);
  }

  .navbar:hover .menu li:nth-child(3) a {
    transition-delay: 0.12s;
    transform: rotate(555deg);
  }

  .navbar:hover .menu li:nth-child(4) {
    transition-delay: 0.08s;
    transform: rotate(205deg);
  }

  .navbar:hover .menu li:nth-child(4) a {
    transition-delay: 0.16s;
    transform: rotate(515deg);
  }

  .navbar:hover .menu li:nth-child(5) {
    transition-delay: 0.1s;
    transform: rotate(245deg);
  }

  .navbar:hover .menu li:nth-child(5) a {
    transition-delay: 0.2s;
    transform: rotate(475deg);
  }

  .navbar:hover .menu li:nth-child(6) {
    transition-delay: 0.12s;
    transform: rotate(285deg);
  }

  .navbar:hover .menu li:nth-child(6) a {
    transition-delay: 0.24s;
    transform: rotate(435deg);
  }

  .navbar:hover .menu li:nth-child(7) {
    transition-delay: 0.14s;
    transform: rotate(325deg);
  }

  .navbar:hover .menu li:nth-child(7) a {
    transition-delay: 0.28s;
    transform: rotate(395deg);
  }

  .navbar:hover .menu li:nth-child(8) {
    transition-delay: 0.16s;
    transform: rotate(365deg);
  }

  .navbar:hover .menu li:nth-child(8) a {
    transition-delay: 0.32s;
    transform: rotate(355deg);
  }

  .navbar:hover .menu li:nth-child(9) {
    transition-delay: 0.18s;
    transform: rotate(405deg);
  }

  .navbar:hover .menu li:nth-child(9) a {
    transition-delay: 0.36s;
    transform: rotate(315deg);
  } */

</style>
