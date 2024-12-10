<template>
    <div>
      <h1>List of People:</h1>
      <ul>
        <li v-for="person in people" :key="person.id">
          <h2>{{ person.name }}</h2>
          <p><strong>Language:</strong> {{ person.language }}</p>
          <p><strong>Bio:</strong> {{ person.bio }}</p>
          <p><strong>Version:</strong> {{ person.version }}</p>
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
  /* สไตล์ CSS ตามที่ต้องการ */
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  </style>
  