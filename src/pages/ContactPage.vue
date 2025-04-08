<template>
  <q-page class="contact-page q-pa-md">
    <div class="row">
      <!-- 左側表單區域 -->
      <div class="col-12 col-md-7">
        <h2 class="text-h3 text-weight-light" style="color: #00ff9d">Let's work together</h2>
        <div class="text-grey-7 q-mb-xl">
          有專案或是合作開發及新點子落地實現，歡迎來信，我會盡快回覆。
          <br />
          請留下您的聯絡方式，我們將盡快與您聯繫。
        </div>

        <div class="row q-col-gutter-md q-mb-md">
          <div class="col-12 col-sm-6">
            <q-input v-model="state.name" dark filled label="Name" class="contact-input" />
          </div>
          <div class="col-12 col-sm-6">
            <q-input v-model="state.email" dark filled label="Email" class="contact-input" />
          </div>
        </div>

        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-12">
            <q-input
              v-model="state.message"
              dark
              filled
              type="textarea"
              label="Message"
              class="contact-input"
              rows="4"
            />
          </div>
        </div>

        <q-btn
          label="Send message"
          class="send-btn q-px-md q-py-sm"
          rounded
          unelevated
          :loading="sending"
          @click="sendMessage"
        />
      </div>

      <!-- 右側聯絡資訊 -->
      <div class="col-12 col-md-5 q-pl-md q-pt-md-0 q-pt-xl">
        <div class="contact-info q-gutter-y-xl">
          <div class="contact-info-item">
            <q-icon name="email" size="md" style="color: #00ff9d" class="q-mr-sm" />
            <div>
              <div class="text-grey-7">Email</div>
              <div>dalehsudemo@gmail.com</div>
            </div>
          </div>

          <div class="contact-info-item">
            <q-icon name="place" size="md" style="color: #00ff9d" class="q-mr-sm" />
            <div>
              <div class="text-grey-7">Address</div>
              <div>出沒地點：台中，高雄</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Notify } from 'quasar';

const sending = ref(false);

const state = reactive({
  name: '',
  email: '',
  message: '',
});

const showNotify = (message: string, color: string) => {
  Notify.create({
    message,
    color,
    position: 'top',
  });
};

const sendMessage = async () => {
  // 基本驗證
  if (!state.name || !state.email || !state.message) {
    showNotify('請填寫所有欄位', 'negative');
    return;
  }

  // 驗證 email 格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(state.email)) {
    showNotify('請輸入有效的 email 地址', 'negative');
    return;
  }

  sending.value = true;

  try {
    const formData = new FormData();
    formData.append('name', state.name);
    formData.append('email', state.email);
    formData.append('message', state.message);

    await fetch(
      'https://script.google.com/macros/s/AKfycbxdA1HkBX00hkcji3qP8mzeUqYNPm1Tksg0qCh4rv1MLfqopdEs08j958ctFyKZEk8JbQ/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          message: state.message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    showNotify('訊息已送出，我們會盡快回覆您', 'positive');
    // 清空表單
    state.name = '';
    state.email = '';
    state.message = '';
  } catch (err: unknown) {
    console.error(err);
    showNotify('發生錯誤，請稍後再試', 'negative');
  } finally {
    sending.value = false;
  }
};
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding: 80px;
  background: #1e1e1e;
  color: white;
}

.contact-input {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.contact-info-item {
  display: flex;
  align-items: flex-start;
}

.send-btn {
  background: #00ff9d;
  color: #1e1e1e;
  font-weight: 500;
}

.send-btn:hover {
  background: #00cc7d;
}

:deep(.q-field--filled .q-field__control) {
  background: rgba(255, 255, 255, 0.1);
}

:deep(.q-field--filled.q-field--focused .q-field__control) {
  background: rgba(255, 255, 255, 1);
}

:deep(.q-field--focused) {
  .q-field__label {
    color: #1e1e1e !important;
  }
}

:deep(.q-field--focused .q-field__control:after) {
  display: none;
}

:deep(.q-field--filled.q-field--focused) {
  background: transparent;
}

:deep(.q-field--focused .q-field__native) {
  color: #1e1e1e;
}

@media (max-width: 600px) {
  .contact-page {
    padding: 40px 20px;
  }
}
</style>
