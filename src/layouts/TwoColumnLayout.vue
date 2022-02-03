<template>
  <div class="two-column-layout">
    <aside>
      <slot name="sideBar" />
    </aside>
    <main>
      <slot name="content" />
    </main>
  </div>
</template>

<style>
  .two-column-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }

  .two-column-layout aside,
  .two-column-layout main {
    border: 1px solid;
    border-radius: 5px;
  }

  .two-column-layout aside {
    grid-column: span 1;
  }

  .two-column-layout main {
    grid-column: span 2;
  }
</style>
