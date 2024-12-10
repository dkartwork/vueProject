<template>
    <div class="sign-up-container">
      <!-- ฟอร์มกรอกอีเมลและรหัสผ่าน -->
      <div v-if="step === 1">
        <h2>สมัครสมาชิก</h2>
        <form @submit.prevent="sendOTP">
          <div>
            <label for="email">อีเมล</label>
            <input type="email" v-model="email" required />
          </div>
          <div>
            <label for="password">รหัสผ่าน</label>
            <input type="password" v-model="password" required />
          </div>
          <button type="submit">ส่ง OTP</button>
        </form>
      </div>
  
      <!-- ฟอร์มกรอก OTP -->
      <div v-if="step === 2">
        <h2>กรอก OTP</h2>
        <form @submit.prevent="verifyOTP">
          <div>
            <label for="otp">OTP</label>
            <input type="text" v-model="otp" required />
          </div>
          <button type="submit">ยืนยัน OTP</button>
        </form>
        <p v-if="otpError" class="error-text">OTP ไม่ถูกต้อง กรุณาลองใหม่</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        otp: "",
        step: 1, // 1 = ฟอร์มอีเมล/รหัสผ่าน, 2 = ฟอร์ม OTP
        otpError: false, // แสดงข้อความผิดพลาดถ้า OTP ไม่ถูกต้อง
      };
    },
    methods: {
      async sendOTP() {
        try {
          // ส่งอีเมลและรหัสผ่านไปยัง API เพื่อขอ OTP
          const response = await this.$axios.post('/api/send-otp', {
            email: this.email,
            password: this.password,
          });
  
          if (response.data.success) {
            this.step = 2; // เปลี่ยนไปที่ฟอร์มกรอก OTP
          } else {
            alert('เกิดข้อผิดพลาดในการส่ง OTP');
          }
        } catch (error) {
          console.error(error);
          alert('ไม่สามารถส่ง OTP ได้');
        }
      },
  
      async verifyOTP() {
        try {
          // ตรวจสอบ OTP ที่กรอกมา
          const response = await this.$axios.post('/api/verify-otp', {
            email: this.email,
            otp: this.otp,
          });
  
          if (response.data.success) {
            alert('สมัครสมาชิกสำเร็จ');
            // เปลี่ยนหน้าหลังจากยืนยัน OTP สำเร็จ (เช่น redirect ไปหน้าหลัก)
          } else {
            this.otpError = true; // แสดงข้อความผิดพลาด
          }
        } catch (error) {
          console.error(error);
          alert('ไม่สามารถยืนยัน OTP ได้');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Style สำหรับฟอร์ม */
  .sign-up-container {
    max-width: 400px;
    margin: 0 auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    padding: 8px;
    margin: 10px 0;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .error-text {
    color: red;
  }
  </style>
  