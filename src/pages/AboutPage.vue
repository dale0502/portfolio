<template>
  <q-page class="q-pa-md bg-dark">
    <!-- 使用 Quasar 的動畫組件 -->
    <q-slide-transition appear>
      <div class="text-h3 q-mb-md text-center text-white">關於我</div>
    </q-slide-transition>

    <div class="row justify-center">
      <!-- 個人簡介卡片 -->
      <div class="col-12 col-md-10 col-lg-8">
        <q-slide-transition appear>
          <q-card class="q-pa-xl bg-dark text-white">
            <div class="text-h6 q-mb-md text-primary">
              <q-icon name="person" class="q-mr-sm" />個人簡介
            </div>
            <p class="text-body1">
              財務領域出身，目前是一名全端工程師，熱愛學習新技術，並且喜歡解決複雜的技術問題。
            </p>
            <div class="text-h6 q-mt-lg q-mb-md text-primary">
              <q-icon name="work" class="q-mr-sm" />工作經驗
            </div>
            <q-timeline>
              <q-timeline-entry
                v-for="exp in experience"
                :key="exp.year"
                class="custom-timeline-entry"
              >
                <template v-slot:title>
                  <div class="text-h6 text-white">{{ exp.position }}</div>
                  <div class="text-subtitle1 q-mt-sm text-primary">{{ exp.company }}</div>
                  <div class="text-caption text-grey-5">{{ exp.year }}</div>
                </template>
                <template v-slot:default>
                  <div class="text-body1 q-my-md">
                    <div v-for="(item, index) in exp.description" :key="index" class="q-mb-sm">
                      {{ item }}
                    </div>
                  </div>
                  <div class="q-gutter-sm">
                    <q-chip
                      v-for="skill in exp.skills"
                      :key="skill"
                      class="skill-chip"
                      color="primary"
                      text-color="white"
                      size="md"
                    >
                      {{ skill }}
                    </q-chip>
                  </div>
                </template>
              </q-timeline-entry>
            </q-timeline>
          </q-card>
        </q-slide-transition>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const experience = [
  {
    position: 'Golang 後端工程師',
    company: '凱博數位有限公司',
    year: '2024/02 - 現在',
    description: [
      '專案一：聊天室遊戲平台',
      '• 負責 WebSocket 即時通訊服務建置，支援高併發連線，提升用戶即時互動體驗',
      '• 設計金流核心邏輯，實作上下分流程規劃及報表數據，優化索引提升效能',
      '• 報表資料開發，分析並優化報表數據存取邏輯，加速數據查詢效能',
      '專案二：包網平台',
      '• 設計多階層代理會員核心架構，並優化查詢索引及設計共用方法',
      '• 設計 RBAC 權限控管架構，有效控管多層級使用者訪問權限',
      '• 設計會員返水核心邏輯，實現多階層返點精準計算，優化返水報表查詢',
      '• 整合第三方遊戲服務 API，設計穩定安全的錢包系統',
      'CI/CD 部署流程、Swagger 文件標準化',
      '• 主導 CI/CD 部署架構建置，運用 Docker 與 GitLab Runner，並串接 Telegram 通知',
      '• 自建 Swagger Server 集中管理多專案 API 文件，提升團隊協作效率',
    ],
    skills: ['Golang', 'WebSocket', 'Docker', 'GitLab CI', 'Swagger', 'MySQL'],
  },
  {
    position: 'PHP後端工程師',
    company: '鼎順數位科技有限公司',
    year: '2023/03 - 2023/12',
    description: [
      '• 負責代理後台系統的開發與日常維護',
      '• 實作多階層代理流水額度邏輯',
      '• 遊戲電子錢包重構，優化現存金流邏輯',
      '• 運用AWS Lambda處理遊戲注單的實時數據清洗與回寫',
      '• 串接Google Sheets API，實現自動化更新設定',
    ],
    skills: ['PHP', 'Laravel', 'AWS Lambda', 'MySQL', 'Redis', 'Google API'],
  },
  {
    position: 'Laravel 後端工程師',
    company: '敦謙國際智能科技股份有限公司',
    year: '2022/02 - 2023/02',
    description: [
      '• 負責飯店營運管理系統的邏輯重構，整合多來源訂房系統',
      '• 進行系統效能瓶頸分析，優化SQL查詢和索引設計',
      '• 增加單元測試覆蓋率，確保各類訂單邏輯的正確性',
      '• 開發財務對帳與票券管理系統，使用Vue.js實作前後端分離',
    ],
    skills: ['Laravel', 'Vue.js', 'MySQL', 'PHPUnit', 'RESTful API'],
  },
  {
    position: 'PHP助理工程師',
    company: '思騰資訊有限公司',
    year: '2021/10 - 2021/12',
    description: [
      '• 使用Laminas框架開發專案',
      '• 完成台中市教育局品德標語網路票選系統',
      '• 與UIUX設計師、PM合作，協助小型專案的開發',
    ],
    skills: ['PHP', 'Laminas', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    position: '財務顧問(主任)',
    company: '青山永續管理顧問有限公司',
    year: '2021/04 - 2021/09',
    description: [
      '• 負責協助客戶IPO時程規劃安排與內部控制建立',
      '• IPO前帳務處理及審計查核，出具財稅簽及有限確信查核',
      '• 創投及券商對接窗口',
      '• ERP系統分析及導入，擔任公司代表窗口',
      '• 永續報告協查',
      '工作績效：',
      '• 完成營業秘密法之確信查核，並出具會計師意見書',
      '• 重新架構事務所審計業務',
      '• 取得ISO14001稽核員認證',
    ],
    skills: ['IPO規劃', 'ERP系統', '內部控制', '審計查核', 'ISO14001'],
  },
  {
    position: '財務專員（廈門財務副理)',
    company: '參聯國際股份有限公司',
    year: '2019/11 - 2021/03',
    description: [
      '• 擔任ERP、PLM系統整合專案負責人，主導客製化需求規劃',
      '• 重新梳理集團各子公司系統流程，建立內控制度及財務作業規範',
      '• 負責大陸輔助款項目，統籌高新技術企業認定等相關專案',
      '• 負責委外開發合約擬定及法務溝通',
      '工作績效：',
      '• ERP系統整合於半年內完成上線',
      '• 縮短業務產品交期回覆時間從2周至3天',
      '• 整合大陸輔助款申請流程，實現統一窗口管理',
      '• 重新設計研發業務流程，導入金蝶PLM系統優化工作流',
    ],
    skills: ['ERP整合', '內控制度', '專案管理', '流程優化', '金蝶PLM'],
  },
  {
    position: '主辦會計',
    company: 'GOGOHOTEL',
    year: '2018/11 - 2019/11',
    description: [
      '• 負責審核各項費用支付之發票、單據及帳務處理',
      '• 編制每月收入報表及OTA分析',
      '• 統籌分公司營業稅合併申報及OTA佣金計算',
      '• 申請跨境電商租稅協定，降低稅負',
      '• 協助建立新產業財務制度及作業流程',
    ],
    skills: ['財務報表', '稅務申報', '帳務處理', '內控制度'],
  },
  {
    position: '審計員-副領組',
    company: '冠昱聯合會計師事務所',
    year: '2016/05 - 2018/10',
    description: [
      '• 負責建設業、投資業、飯店業等產業查核',
      '• 執行財務報表及內部控制實地審查',
      '• 運用Excel函數及巨集提升工作效率',
      '• 兼任資訊組，負責VPN系統及NAS管理',
      '• 擔任會計系統講師，編寫教材及培訓計畫',
      '• 建立LINE@生活圈，提供即時法令政策資訊',
      '工作績效：',
      '• 完成系統轉換專案，從奇勝系統轉為文中系統',
      '• 建立完善的財稅系統培訓制度',
    ],
    skills: ['審計實務', '內部控制', 'Excel進階應用', '系統管理', '教育訓練'],
  },
];
</script>

<style scoped>
.skill-item {
  transition: transform 0.2s;
}
.skill-item:hover {
  transform: translateX(10px);
}

.skill-chip {
  font-size: 14px;
  padding: 8px 12px;
}

.skill-chip:hover {
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

/* 重新設計時間線樣式 */
:deep(.custom-timeline-entry) {
  position: relative;
  padding-left: 40px;
  margin-bottom: 32px;
}

:deep(.custom-timeline-entry::before) {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: -32px; /* 延伸到下一個項目 */
  width: 2px;
  background: #00ff9d;
}

:deep(.custom-timeline-entry::after) {
  content: '';
  position: absolute;
  left: 11px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #00ff9d;
}

/* 最後一個項目不需要延伸線條 */
:deep(.custom-timeline-entry:last-child::before) {
  display: none;
}

/* 移除 Quasar 原有的時間線樣式 */
:deep(.q-timeline__line),
:deep(.q-timeline__dot),
:deep(.q-timeline__subtitle:before),
:deep(.q-timeline__subtitle:after) {
  display: none;
}

/* 調整內容區塊的位置 */
:deep(.q-timeline__content) {
  padding-left: 32px;
}

/* 調整技能標籤的顏色 */
:deep(.q-chip.skill-chip) {
  background: #00ff9d !important;
  color: #000 !important;
}

/* 調整標題文字顏色 */
.text-primary {
  color: #00ff9d !important;
}

/* 確保卡片內容在暗色背景下清晰可見 */
:deep(.q-card) {
  box-shadow: 0 1px 5px rgba(0, 255, 157, 0.2);
}
</style>
