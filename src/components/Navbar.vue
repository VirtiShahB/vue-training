<template>
  <div>
    <b-button v-b-toggle.sidebar-border>=</b-button>
    <b-sidebar
      id="sidebar-border"
      shadow
      text-variant="dark"
      bg-variant="light"
    >
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Hello,</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">My Order</b-nav-item>
              <b-nav-item href="#link-1" @click="hide"
                >Shop By Category</b-nav-item
              >
              <b-nav-item href="#link-2" @click="hide">Your Account</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
