<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Michroma" rel="stylesheet">
</svelte:head>

<div class="calendar-widget">
  <div class="circular">
    <div class="overlap-group">
      <div class="hour">1 2</div>
      <div class="hour-text">6</div>
      <div class="hour-2">9</div>
      <div class="hour-3">3</div>
      <img src="/images/ticks.svg" alt="" class="ticks" />
      <img src="/images/hands.svg" alt="" class="hands" />
    </div>
  </div>
  <div class="calendar">
    <div class="calendar-content">
      <div class="date-display">
        <div class="date">22</div>
      </div>
    </div>
  </div>
</div>

<style>
  .calendar-widget {
    position: relative;
    width: 159px;
    height: 78px;
    background-color: #28251f;
    border-radius: 6px;
    box-shadow: 0px 1px 5px #00000073;
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 24px;
  }

  .circular {
    position: relative;
    width: 54px;
    height: 50px;
    background-color: var(--baseprimary-background);
    border-radius: 100px;
    overflow: hidden;
  }

  .overlap-group {
    position: relative;
    width: 48px;
    height: 48px;
    margin: 1px 2px;
  }

  .hour, .hour-text, .hour-2, .hour-3 {
    position: absolute;
    width: 12px;
    height: 12px;
    font-family: "Michroma";
    font-weight: 500;
    color: #F2F2F2;
    font-size: 6.5px;
    text-align: center;
    letter-spacing: -1px;
  }

  .hour { top: 3px; left: 18px; }
  .hour-text { top: 32px; left: 19px; }
  .hour-2 { top: 18px; left: 3px; }
  .hour-3 { top: 18px; left: 34px; }

  .calendar {
    position: relative;
    width: 50px;
    height: 50px;
  }

  .date-display {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .date {
    font-family: "Michroma", sans-serif;
    font-weight: 600;
    top: 10px;
    font-size: 22px;
    align-self: center;
    color: #F2F2F2;
    letter-spacing: 2px;
  }
</style> 