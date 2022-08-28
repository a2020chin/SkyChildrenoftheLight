<template>
  <div class="container py-[260px]">
    <img
      src="@/assets/images/SkyLogo360x360.png"
      alt="Logo"
      class="ml-[50px] mb-2"
    />
    <div class="flex gap-5">
      <Tilt parallax="true">
        <button
          class="inline-block py-4 px-4 text-white border-[0.5px] rounded-[5px] duration-300 hover:hover:bg-slate-500"
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
          class="inline-block py-4 px-4 text-white border-[0.5px] rounded-[5px] duration-300 hover:hover:bg-slate-500"
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
          class="inline-block py-4 px-4 text-white border-[0.5px] rounded-[5px] duration-300 hover:hover:bg-slate-500"
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
