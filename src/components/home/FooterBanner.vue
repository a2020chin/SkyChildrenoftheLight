<template>
  <div class="container flex flex-col items-center">
    <h2
      class="pt-[180px] pb-20 tracking-[0.15em] leading-loose text-5xl drop-shadow-md text-white text-center md:tracking-[1.5em]"
    >
      溫暖的靈<span class="tracking-normal">魂</span><br />終將相<span
        class="tracking-normal"
        >遇</span
      >
    </h2>
    <div class="flex flex-col items-stretch gap-5 pb-[500px] md:flex-row">
      <Tilt parallax="true">
        <button
          class="inline-block py-4 w-full text-white border-[0.5px] rounded-[5px] duration-300 hover:hover:bg-slate-500 md:px-4"
        >
          <img
            src="@/assets/images/apple_icon.svg"
            class="inline-block mr-2 text-2xl fill-current text-white"
            alt="icon"
          />
          <p class="inline-block align-middle">IOS下載</p>
        </button>
      </Tilt>
      <Tilt parallax="true">
        <button
          class="inline-block py-4 w-full text-white border-[0.5px] rounded-[5px] duration-300 hover:hover:bg-slate-500 md:px-4"
        >
          <img
            src="@/assets/images/google_play_icon.svg"
            class="inline-block mr-2 text-2xl fill-current text-white"
            alt="icon"
          />
          <p class="inline-block align-middle">play下載</p>
        </button>
      </Tilt>
      <Tilt parallax="true">
        <button
          class="inline-block py-4 px-4 w-full text-white border-[0.5px] rounded-[5px] duration-300 hover:hover:bg-slate-500"
        >
          <img
            src="@/assets/images/switch_icon.svg"
            class="inline-block mr-2 text-2xl fill-current text-white"
            alt="icon"
          />
          <p class="inline-block align-middle">switch下載</p>
        </button>
      </Tilt>
    </div>
  </div>
</template>

<script>
import Tilt from 'vanilla-tilt-vue'
export default {
  components: {
    Tilt
  }
}
</script>

<style></style>
