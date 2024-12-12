<template>
    <div class="text-center">
      <h2>About Us</h2>
    </div>
    <div class="w-20 h-20 bg-purple-500 animate-fade-in">
      Fade-in Animation
    </div>
    <div class="flex space-x-4">
      <div class="w-10 h-10 bg-blue-500 rounded-full animate-spin"></div>
      <div class="w-10 h-10 bg-green-500 rounded-full animate-ping"></div>
      <div class="w-10 h-10 bg-red-500 rounded-full animate-pulse"></div>
      <div class="w-10 h-10 bg-yellow-500 rounded-full animate-bounce"></div>
    </div>
    <div class="w-16 h-16 rounded-full animate-spin-color">A</div>
    <div class="w-10 h-10 bg-green-500 rounded-full animate-ping-once">A</div>
  </template>

  <script>
  export default {
    name: 'AboutPage', // เปลี่ยนชื่อจาก "About" เป็น "AboutPage"
  };
  </script>