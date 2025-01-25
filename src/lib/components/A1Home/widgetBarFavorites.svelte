<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  let isOpen = false;
  let menuContainer;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function handleClickOutside(event) {
    if (isOpen && menuContainer && !menuContainer.contains(event.target)) {
      isOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="places-menu" bind:this={menuContainer}>
   <button class="places-trigger" class:pressed={isOpen} on:click={toggleMenu} aria-label="Mis Lugares">
    <div class="trigger-img">
      <img src="/images/myplaces/flashroute.svg" alt="Flash" />
    </div>
  </button>

  {#if isOpen}
    <div class="places-dropdown"
         transition:slide={{ duration: 1000 }}>

      <button class="place-button">
        <div class="place-box" alt= "Place Box">
          <img src="/images/myplaces/school.svg" alt="School"/>
        </div>
      </button>

      <button class="place-button">
        <div class="place-box">
          <img src="/images/myplaces/work.svg" alt="Work"/>
        </div>
      </button>

      <button class="place-button">
        <div class="place-box">
          <img src="/images/myplaces/love.svg" alt="Love"/>
        </div>
      </button>

      <button class="place-button">
        <div class="place-box">
          <img src="/images/myplaces/home.svg" alt="Home"/>
        </div>
      </button>

    </div>
  {/if}
</div>

<style>
  .places-menu {
    position: absolute;
    bottom: 6px;
    right: 2em;
    z-index: 10;
  }

  .places-trigger {
    width: 110px;
    height: 55px;
    background: rgba(255, 233, 37, 0.761);
    border: 1px solid #779f13;
    box-shadow: 0 0 3px 0 rgba(52, 52, 52, 0.2);
    border-radius: 8px;
    display: flex;
    place-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
    transition: all 1.2s ease-in-out;
  }

  .places-trigger.pressed {
    background: linear-gradient(45deg, 
      rgba(221, 218, 65, 0.87) 0%,
      rgba(237, 36, 36, 0.9) 50%,
      rgba(24, 43, 255, 0.87) 100%
    );
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
    transition: all 1.2s ease-in-out;
  }

  .trigger-img {
    width: 34px;
    height: 34px;
    filter: brightness(0.1);
    transition: filter 1.2s ease-in-out;
  }

  .pressed .trigger-img {
    filter: invert(30%) sepia(42%) saturate(1211%) hue-rotate(329deg) brightness(150%) contrast(85%);
    transition: filter 1.2s ease-in-out;
  }

  .places-dropdown {
    position: absolute;
    bottom: 53px;
    right: 4px;
    width: 102px;
    height: auto;
    background: linear-gradient(45deg, #240e25df, #b6e90deb);
    border: 2px solid #678716;
    text-align: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 8px;
    display: flex;
    flex-direction: column-reverse;
    gap: 8px;
    transform-origin: top;
    overflow: hidden;
  }

  .place-box {
    background: none;
    border-radius: 6px;
    display: flex;
    object-fit: contain;
    align-items: center;
    justify-content: center;
  }

  .place-button {
    padding: 8px;
    display: flex;
    background: #201a1aee;
    border: 2px ridge rgba(238, 249, 27, 0.718);
    border-radius: 8px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s;
  }

  .place-button:hover {
    filter: brightness(1.2) contrast(1.2) sepia(0.2);
  }

  .place-button img {
    display: block;
    scale: 0.85;
    background: none;
    width: 30px;
    height: 30px;
  }

</style> 