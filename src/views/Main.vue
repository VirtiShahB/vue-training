<template>
   <div>
      <b-navbar class="p-3" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <img width="50px"
            src="data:image/png;base64,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"
            alt="Kitten">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link class="nav-link" active-class="active" to="/">Home</router-link>
            </b-nav-item>

            <b-nav-item href="#">
              <router-link active-class="active" class="nav-link" to="/cart">Product</router-link>
            </b-nav-item>

            <b-nav-item href="#">
              <router-link class="nav-link" active-class="active" to="/checkout">Checkout</router-link>
            </b-nav-item>

            <b-nav-item href="#" right>
              <router-link class="nav-link" active-class="active" to="/checkout">My Wishlist</router-link>
            </b-nav-item>

          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

      <br>

      

      <div class="container">
          <b-breadcrumb>Home / <slot name="iteminbread"></slot> </b-breadcrumb>
          <slot name="content"></slot> 
      </div>

    </div>
    

</template>
