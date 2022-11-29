<template>
  <div >
    <p id="status"></p>
  
  </div>
</template>

<script>
const checkOnlineStatus = async () => {
  try {
    const online = await fetch("https://demo-live-data.highcharts.com/aapl-ohlcv.json");
    return online.status >= 200 && online.status < 300; // either true or false
  } catch (err) {
    return false; // definitely offline
  }
};

setInterval(async () => {
  const result = await checkOnlineStatus();
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = result ? "Online" : "OFFline";
}, 1000); // probably too often, try 30000 for every 30 seconds

// forgot to include async load event listener in the video! 
// window.addEventListener("load", async () => {
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = (await checkOnlineStatus())
//     ? "Online"
//     : "OFFline";
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
