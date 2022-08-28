<template>
  <button
    class="inline-block py-4 px-4 text-white border-[0.5px] rounded-[5px] hover:hover:bg-slate-500"
  >
    <img
      :src="`../assets/images/` + icon"
      alt="icon"
      class="inline-block mr-2 text-2xl fill-current text-white"
    />
    <img src="../assets/images/apple_icon.svg" alt="" />
    <p class="inline-block align-middle">{{ msg }}</p>
  </button>
</template>

<script>
export default {
  name: 'HomeBtn',
  props: {
    icon: String,
    msg: String
  }
}
</script>

<style></style>
