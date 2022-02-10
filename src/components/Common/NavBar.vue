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
                  :src="loginUserImage"
                  class="avatar"
                  rounded="circle"
                  alt="Circle image"
                  height="40px"
                ></b-img>
              </template>
              <div style="min-width: 150px; font-weight: 700">
                <div class="col-12 p-3 border-bottom" v-if="authenticated">
                  {{ loginUserName }}
                </div>
                <div class="col-12 p-3">
                  <router-link
                    v-if="authenticated"
                    to="/login"
                    v-on:click.native="logout"
                    replace
                    >Logout</router-link
                  >
                </div>
              </div>
            </b-dropdown>
          </b-nav-item>
        </b-navbar-nav>
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
  computed: {
    loginUserName () {
      if (this.loginUser && this.loginUser.google) {
        return this.loginUser.google.user.name
      } else if (this.loginUser && this.loginUser.site) {
        return this.loginUser.site.user.name
      } else if (
        this.loginUser &&
        this.loginUser.fb &&
        this.loginUser.fb.user
      ) {
        return this.loginUser.fb.user.name
      }
      return 'Admin'
    },
    loginUserType () {
      if (this.loginUser) {
        return this.loginUser.loginType
      }
      return ''
    },
    loginUserImage () {
      if (this.loginUserType === 'google') {
        return this.loginUser.google.user.profileImage
      } else {
        return require('@/assets/image-avatar.png')
      }
    }
  },
  data () {
    return {
      mainCategory: 'Dashboard',
      categories: ['Dashboard'],
      loginUser: this.$helpers.getStore('user')
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
