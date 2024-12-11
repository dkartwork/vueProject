<template>
    <div class="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">สมัครสมาชิก</h2>
  
      <form @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <div>
            <label for="name" class="block text-lg font-medium text-gray-700">ชื่อเต็ม</label>
            <input 
              id="name" 
              type="text" 
              v-model="form.name" 
              required
              class="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
  
          <div>
            <label for="email" class="block text-lg font-medium text-gray-700">อีเมล</label>
            <input 
              id="email" 
              type="email" 
              v-model="form.email" 
              required
              class="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
  
          <div>
            <label for="password" class="block text-lg font-medium text-gray-700">รหัสผ่าน</label>
            <input 
              id="password" 
              type="password" 
              v-model="form.password" 
              required
              class="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
  
          <div>
            <label for="confirmPassword" class="block text-lg font-medium text-gray-700">ยืนยันรหัสผ่าน</label>
            <input 
              id="confirmPassword" 
              type="password" 
              v-model="form.confirmPassword" 
              required
              class="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
  
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="terms" 
              v-model="form.terms"
              class="h-5 w-5 text-blue-500"
            />
            <label for="terms" class="ml-2 text-sm text-gray-600">ยอมรับข้อตกลงและเงื่อนไข</label>
          </div>
  
          <div class="mt-6">
            <button 
              type="submit" 
              class="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              สมัครสมาชิก
            </button>
          </div>
        </div>
      </form>
      <div v-if="responseMessage">
        <p>{{ responseMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          terms: false
        },
        responseMessage: ''
      };
    },
    methods: {
      async handleSubmit() {
        if (this.form.password !== this.form.confirmPassword) {
          alert('รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน');
          return;
        }
        if (!this.form.terms) {
          alert('กรุณายอมรับข้อตกลงและเงื่อนไข');
          return;
        }
        
          try {
            // ส่งข้อมูลไปยัง API ผ่าน POST request
            const response = await axios.post('http://localhost:3000/api/insert', this.form);          
            this.responseMessage = response.data.status;
          } catch (error) {
            console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
            this.responseMessage = 'เกิดข้อผิดพลาดในการส่งข้อมูล';
          }
        
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS จะจัดการสไตล์ทั้งหมด */
  </style>
  