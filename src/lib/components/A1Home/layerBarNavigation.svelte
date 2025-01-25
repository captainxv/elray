<script>
	import { goto } from '$app/navigation';

	function navigateToPilot() {
		goto('/pilot');
	}

</script>

<nav class="navigation-bar">
  <div class="nav-bg">
    <div class="nav-content">
      <button class="nav-button">
        <img class="box-bg" src="./images/navbar/teleportbox.svg" alt="Teleport Box"/>
        <img class="icon" src="./images/navbar/teleport.svg" alt="Teleport"/>
      </button>

      <button class="nav-button" on:click={navigateToPilot}>
        <img class="box-bg" src="/images/navbar/pilotbox.svg" alt="Pilot Box"/>
        <img class="icon" src="/images/navbar/pilot.svg" alt="Pilot"/>
      </button>

      <button class="nav-button">
        <img class="box-bg" src="/images/navbar/radarbox.svg" alt="Radar Box"/>
        <img class="icon" src="/images/navbar/radar.svg" alt="Radar"/>
      </button>
    </div>
  </div>
</nav>

<style>
  .navigation-bar {
    width: 93%;
    height: 70px;
    bottom: 8px;
    position: fixed;
    background: #1e1e22;
    left: 12px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    width: 102%;
    max-width: 450px;
    height: 100%;
    gap: 4px;
  }

.nav-button {
    width: 105px;
    height: 50px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.icon {
  position: relative;
  height: 32px;
  width: 32px;
  transform-origin: center;
  justify-content: center;
  align-items: center;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  }

</style>
