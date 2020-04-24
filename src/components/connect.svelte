<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<style>
  .shadow1 {
    box-shadow: 0px 7px 20px rgba(124, 124, 124, 0.173);
  }
  .hidescroll::-webkit-scrollbar {
    width: 0 !important;
  }
</style>

<svelte:head>
  <script
    type="text/javascript"
    src="https://assets.calendly.com/assets/external/widget.js">

  </script>
</svelte:head>

<div
  class="absolute mt-6 ml-6 rounded-xl py-1 px-3 flex items-center max-w-sm
  shadow1 overflow-hidden z-20"
  style="backdrop-filter: blur(10px); background-color: rgba(255,255,255,0.93);"
  in:fly={{ duration: 250, x: -500, opacity: 0.5, easing: quintOut }}>
  <img
    class="w-1/2 mx-auto flex-shrink z-20"
    alt="grow with aryan logo"
    src="gwa-sm.svg"
    in:fade={{ duration: 150 }} />
  <p
    class="font-medium text-center text-gray-500 font-semibold text-xl mr-3 z-20"
    in:fade={{ duration: 150 }}>
    Connect
  </p>
</div>

<div
  id="connect"
  class="calendly-inline-widget block overflow-scroll rounded-xl hidescroll"
  data-url="https://calendly.com/aryansingh/30min-meeting"
  style="min-width:320px; height:90vh;" />