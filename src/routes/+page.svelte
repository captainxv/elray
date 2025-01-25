<script>
  // Layer components
  import {
    LayerBarNavigation,
    WidgetBarFavorites,
    WidgetCalendar,
    WidgetTraffic,
    LayerHeader
  } from '$lib/components';
  
  // Widget components
  import Header from '$lib/components/layerHeader.svelte';
</script>

<svelte:head>
  <title>Ray App</title>
  <meta name="description" content="Your personal mobility assistant" />
</svelte:head>

<div class="main-screen">
  <LayerHeader />
  <div class="content">
    <section class="widgets-section">
      <div class="top-widgets">
        <WidgetCalendar />
        <WidgetTraffic />
      </div>
      <WidgetBarFavorites />
    </section>

    <section class="interactive-section">
      <div class="background-layer">
        <div class="gradient-overlay"></div>
        <img src="/images/wallback.png" alt="" class="car-background"/>
      </div>
      
      <LayerBarNavigation />
    </section>
  </div>
</div>

<style>
  .main-screen {
    background-color: var(--color-background);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    overflow: hidden;
  }

  .content {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .widgets-section {
    padding: var(--spacing-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    z-index: 2;
  }

  .top-widgets {
    display: flex;
    gap: var(--spacing-sm);
  }

  .weather-widget {
    flex: 1;
    background: #27251e;
    border-radius: 8px;
    display: grid;
    place-items: center;
  }

  .car-section {
    flex: 1;
    position: relative;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: transparent;
  }

  .background-layer {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 10%, var(--color-secondary) 70%);
    opacity: 0.8;
    pointer-events: none;
  }

  .car-background {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 100%;
    height: 100vh;
    object-fit: contain;
    object-position: bottom;
    z-index: 1;
  }

  .interactive-layer {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 3;
  }

  .ray-menu {
    position: absolute;
    bottom: 10px;
    left: 30px;
    width: 100px;
    height: 50px;
    background: #f4cd0e;
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    cursor: pointer;
    z-index: 3;
  }

  .ray-menu img {
    height: 24px;
  }

  .menu-icon {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 10px;
  }

  .menu-icon span {
    display: block;
    width: 18px;
    height: 2px;
    background: #1A1A1A;
    border-radius: 1px;
  }

  :global(.navigation-bar) {
    margin-top: auto;
  }

  /* Add styles to create a button container */
  .bottom-buttons {
    position: absolute;
    bottom: 100px;
    left: 0;
    right: 0;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    z-index: 3;
  }
</style>
