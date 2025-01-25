<script>
  import { onMount } from 'svelte';
  import './MapComponent.css';
  let isLoading = true;
  let showMap = false;
  
  onMount(() => {
    // Start loading sequence
    setTimeout(() => {
      isLoading = false;
      // Add a small delay before showing the map for smooth transition
      setTimeout(() => {
        showMap = true;
      }, 300);
    }, 1500); // Reduced to match new animation duration
  });
</script>

<div class="map-container">
  {#if isLoading || !showMap}
    <div class="loading-overlay" class:fade-out={!isLoading}>
      <div class="progress"></div>
    </div>
  {/if}
  
  {#if showMap}
    <div class="map-content" class:fade-in={showMap}>
      <!-- Your map content here -->
    </div>
  {/if}
</div>

<style>
  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1f1d1d;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: opacity 0.3s ease-out;
  }

  .fade-out {
    opacity: 0;
  }

  .map-content {
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  .fade-in {
    opacity: 1;
  }

  :global(.progress) {
    width: 200px;
  }
</style> 