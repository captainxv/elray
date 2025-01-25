<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<header class="header">
  <div class="logo">
    <img src="/images/raylogo.svg" alt="Ray Logo" />
  </div>
  <nav class="nav">
    <!-- Navigation items -->
  </nav>
</header>

<style>
  .header {
    background-color: var(--color-secondary);
    padding: var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  .logo img {
    height: 24px;
  }

  .nav {
    display: flex;
    gap: var(--spacing-md);
  }
</style> 