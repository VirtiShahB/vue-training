<template>
  <div class="">
    <div class="appbar-desktop d-none d-lg-block border-bottom">
      <b-navbar variant="faded" type="light" toggleable="lg" class="py-0">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-brand class="mb-0">
          <span style="font-size: 20px; font-weight: 700"> Shoppee </span>
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav class="">
          <b-navbar-nav>
            <b-nav-item
              class="py-4 category"
              v-for="(category, index) in categories"
              :key="index"
              @click="goToHome(category)"
            >
              <div class="px-2">
                <span class="text-muted text">
                  {{ category }}
                </span>
              </div>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-nav class="ml-auto d-flex flex-row align-items-center">
          <b-nav-item class="col-4" v-show="this.$route.name != 'Checkout'">
            <Cart />
          </b-nav-item>
          <b-nav-item v-show="this.$route.name != 'WishList'" class="col-4"
            ><b-icon
              @click="goToWishList"
              icon="heart-fill"
              class="p-2"
              font-scale="2 "
              variant="danger"
              v-b-tooltip.hover
              title="Click to view wishList"
            ></b-icon
          ></b-nav-item>
          <b-nav-item class="col-4">
            <b-dropdown
              size="xl"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              right
            >
              <template #button-content>
                <b-img
                  :src="require('@/assets/image-avatar.png')"
                  class="avatar"
                  rounded="circle"
                  alt="Circle image"
                  height="40px"
                ></b-img>
              </template>
              <div style="min-width: 150px">
                <div class="d-flex flex-column">
                  <div class="col-6 p-3 border-bottom">
                    <span style="font-weight: 700">
                      <router-link
                        v-if="authenticated"
                        to="/signup"
                        v-on:click.native="logout"
                        replace
                        >Logout</router-link
                      >
                    </span>
                  </div>
                </div>
              </div>
              <!-- </b-dropdown-item> -->
            </b-dropdown>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <div class="appbar-mobile d-lg-none d-md-block">
      <b-navbar variant="faded" type="light" toggleable="lg">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand tag="h1" class="mb-0 mx-3">
          <span style="font-size: 20px; font-weight: 700"> Shoppee </span>
        </b-navbar-brand>

        <b-navbar-nav
          class="
            ml-auto
            d-flex
            flex-row
            justify-content-between
            align-items-center
          "
        >
          <b-nav-item class="col-6">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <b-img :src="require('@/assets/icon-cart.svg')" alt=""></b-img>
              </template>

              <b-dropdown-item href="#">Action</b-dropdown-item>
            </b-dropdown>
          </b-nav-item>
          <b-nav-item class="col-6">
            <span>
              <b-img
                :src="require('@/assets/user.jpg')"
                rounded="circle"
                alt="Circle image"
                height="35px"
              ></b-img>
            </span>
          </b-nav-item>
        </b-navbar-nav>

        <b-collapse id="nav-collapse" is-nav class="">
          <b-navbar-nav>
            <b-nav-item class="" @click="goToHome('Dashboard')">
              <span class="text-muted"> Dashboard </span>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Cart from '../Products/Cart'
export default {
  name: 'NavBar',
  components: { Cart },
  props: ['authenticated'],
  data () {
    return {
      mainCategory: 'Dashboard',
      categories: ['Dashboard']
    }
  },
  methods: {
    goToWishList () {
      this.$router.push({
        name: 'WishList'
      })
    },
    goToHome (type) {
      if (type === 'Dashboard') {
        this.$router.push({ name: 'Dashboard' })
      }
    },
    logout () {
      this.$emit('logout')
    }
  }
}
</script>
