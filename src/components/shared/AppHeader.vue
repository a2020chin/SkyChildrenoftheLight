<template>
  <header
    class="bg-gradient-to-b from-[#174057] to-transparent w-full absolute top-0"
  >
    <div class="container py-10 flex justify-between items-center">
      <h1 class="logo">
        <router-link to="/" class="logo-btn">Sky 光遇</router-link>
      </h1>
      <div class="flex items-center">
        <nav class="flex gap-3 mr-12">
          <router-link
            to="/whotoplay"
            class="relative text-white after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-0 after:border-b-2 after:border-transparent after:duration-500 hover:text-primary hover:after:w-full hover:after:border-b-2 hover:after:border-primary"
            >如何遊玩</router-link
          >
          <span class="opacity-30">|</span>
          <router-link
            to="/meetyou"
            class="relative text-white after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-0 after:border-b-2 after:border-transparent after:duration-500 hover:text-primary hover:after:w-full hover:after:border-b-2 hover:after:border-primary"
            >與你相遇</router-link
          >
          <span class="opacity-30">|</span>
          <router-link
            to="/season"
            class="relative text-white after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-0 after:border-b-2 after:border-transparent after:duration-500 hover:text-primary hover:after:w-full hover:after:border-b-2 hover:after:border-primary"
            >奇妙之旅</router-link
          >
        </nav>
        <router-link
          to="/login"
          class="text-white border-[0.5px] rounded-[5px] inline-block py-1 px-[18.5px] hover:text-primary hover:bg-slate-500"
          >登入</router-link
        >
      </div>
    </div>
  </header>
</template>

<script></script>

<style></style>
