<template>
    <div class="max-w-4xl mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-6">List of People</h1>
      <ul class="space-y-6">
        <li v-for="person in people" :key="person.id" class="p-6 bg-white shadow-md rounded-lg hover:bg-gray-50 transition">
          <h2 class="text-2xl font-semibold text-gray-800">{{ person.name }}</h2>
          <p class="text-lg text-gray-600 mt-2">
            <strong class="font-medium text-gray-700">Language:</strong> {{ person.language }}
          </p>
          <p class="text-lg text-gray-600 mt-2">
            <strong class="font-medium text-gray-700">Bio:</strong> {{ person.bio }}
          </p>
          <p class="text-lg text-gray-600 mt-2">
            <strong class="font-medium text-gray-700">Version:</strong> {{ person.version }}
          </p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        people: [], // เก็บข้อมูลที่ดึงมา
      };
    },
    created() {
      // ใช้ axios ดึงข้อมูลจาก URL
      axios
        .get('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')  // ใส่ URL ที่แท้จริงที่คุณใช้
        .then(response => {
          this.people = response.data;  // เก็บข้อมูลใน array
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  