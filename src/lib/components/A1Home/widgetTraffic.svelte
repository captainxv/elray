<div class="traffic">
  <div class="traffic-levels">
    <div class="graphic-levels">
      <div class="overlap-group">
        <div class="level-background">
          {#each Array(7) as _, i}
            <div class="chart-background" style="left: {i * 18.5}px"></div>
          {/each}
        </div>
        <div class="levels">
          {#each [15, 20, 20, 27, 24, 24, 28] as height, i}
            <div 
              class="chart-foreground" 
              style="
                left: {i * 18.5}px; 
                height: {height}px; 
                top: ${28 - height}px">
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <img src="/images/traffic-light-SVG.svg" alt="" class="traffic-light"/>
</div>

<style>
  .traffic {
    position: relative;
    width: 100%;
    height: 89px;
    background-color: #1f1e1a;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 0px 6px #00000082;
    display: flex;
    align-items: center;
    padding: 10px 16px;
  }

  .traffic-levels {
    position: relative;
    width: 38%;
    height: 50%;
    margin-left: auto;
  }

  .graphic-levels {
    height: 50px;
  }

  .overlap-group {
    position: relative;
    width: 120px;
    height: 50px;
  }

  .chart-background {
    position: absolute;
    width: 5px;
    height: 43px;
    border-radius: 100px;
    background: linear-gradient(
      180deg,
      rgb(104, 206, 102) 10.42%,
      rgb(255, 230, 32) 37.5%,
      rgb(255, 149, 0) 61.46%,
      rgb(170, 0, 255) 100%
    );
    opacity: 0.3;
  }

  .chart-foreground {
    position: absolute;
    width: 5px;
    border-radius: 100px;
    background: linear-gradient(
      180deg,
      rgb(104, 206, 102) 10.42%,
      rgb(255, 230, 32) 72.92%
    );
  }

  .traffic-light {
    position: absolute;
    width: 38px;
    height: 69px;
    left: 20px;
  }
</style> 