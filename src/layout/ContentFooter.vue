<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{ path: '/admin' }">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="#" target="_blank">kayyum khan</a>. Designed by
        <a href="https://www.bacancytechnology.com" target="_blank"
          >Bacancy Team</a
        >.
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
