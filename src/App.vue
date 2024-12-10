<template>
  <div id="app">
    <header>
      <h1 class="text-3xl font-bold text-center py-4">Welcome to Vue Router Example</h1>
      <nav class="flex justify-center space-x-4">
        <router-link to="/" class="text-blue-500 hover:underline">Home</router-link>
        <router-link to="/about" class="text-blue-500 hover:underline">About</router-link>
      </nav>
    </header>

    <main class="py-8">
      <!-- แสดงเนื้อหาของ Route -->
      <router-view></router-view>
    </main>

    <footer class="text-center text-gray-500 py-4">
      © 2024 Vue Router Example
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* ตัวอย่างการใช้ Tailwind CSS */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}
#app {
  max-width: 800px;
  margin: 0 auto;
}
</style>
