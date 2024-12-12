<template>
  <div id="app">
  <header>
  <div className="bg-blue-600 text-white">
   <div className="container mx-auto flex justify-between py-4">
    <h1 className="text-2xl font-bold">Welcome to Vue Router Example</h1>
   <nav className="flex space-x-4">
    <router-link to="/" class="hover:underline">Home</router-link>
    <router-link to="/about" class="hover:underline">Users</router-link>
    <router-link to="/api" class="hover:underline">GET API</router-link>
    <router-link to="/regis" class="hover:underline">Sign Up</router-link>
   </nav>
   </div>
  </div>
  </header>

    <main className="container mx-auto my-8">
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
  margin: 0 auto;
}
</style>
