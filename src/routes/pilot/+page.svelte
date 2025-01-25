<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import {
    LayerHeader,
    LayerAnimationLoading,
    LayerMap,
    WidgetBarRideStages,
    IconArrival,
    IconPickup,
    IconPilot,
    IconRay,
    IconRoute
  } from '$lib/components';
  
  let isLoading = true;
  let showContent = false;

  onMount(() => {
    if (browser) {
      setTimeout(() => {
        isLoading = false;
        setTimeout(() => showContent = true, 300);
      }, 2100);
    }
  });
</script>

<svelte:head>
  <title>Ray Pilot</title>
  <meta name="description" content="Ray navigation and ride tracking" />
  <link rel="preload" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" as="style" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
</svelte:head>

<div class="map-screen" role="region" aria-label="Pilot view">
  <LayerHeader />
  
  <div class="ride-progress">
    <WidgetBarRideStages />
  </div>

  {#if isLoading || !showContent}
    <div 
      class="loading-indicator" 
      class:fade-out={!isLoading}
      role="status"
      aria-label="Loading map"
    >
      <LayerAnimationLoading />
    </div>
  {/if}
  
  {#if showContent}
    <div 
      class="map-wrapper" 
      class:fade-in={showContent}
      aria-hidden={!showContent}
    >
      <LayerMap>
        <IconPilot slot="map-icons" />
        <IconPickup slot="map-icons" />
        <IconArrival slot="map-icons" />
        <IconRoute slot="map-icons" />
        <IconRay slot="map-icons" />
      </LayerMap>
    </div>
  {/if}
</div>

<style>
  .map-screen {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    background: var(--color-background);
    overflow: hidden;
  }

  .ride-progress {
    height: 200px;
    padding: var(--spacing-md);
    background: #2e2e27;
    z-index: 2;
  }

  .map-wrapper {
    position: relative;
    flex: 1;
    width: 100%;
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  .loading-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 1;
    background-color: var(--color-background);
    transition: opacity 0.3s ease-out;
    position: absolute;
    top: calc(200px + 56px);
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .fade-out {
    opacity: 0;
    pointer-events: none;
  }

  .fade-in {
    opacity: 1;
  }

  :global(.route-progress) {
    width: 45%;
    background: none;
  }
</style> 