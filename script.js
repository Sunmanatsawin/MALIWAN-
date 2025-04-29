const questions = {
    dead: [
      "ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3", "ทดสอบ 4"
    ],
    love: [
      "ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3", "ทดสอบ 4"
    ],
    loneliness: [
      "ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3", "ทดสอบ 4"
    ],
    decision: [
      "ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3", "ทดสอบ 4"
    ]
  };
  
  let remainingQuestions = [];
  let history = [];
  
  function selectCategory(category) {
    const categoryPrompt = document.getElementById('categoryPrompt');
    const categoryPromptImg = document.getElementById('categoryPromptImg');
    
    // ซ่อนข้อความและแสดง GIF
    categoryPrompt.style.display = 'none';
    categoryPromptImg.style.display = 'block';
    
    // เปลี่ยนสีเป็นเขียวเมื่อเลือกหมวดหมู่
    categoryPrompt.style.color = 'green';
    categoryPrompt.textContent = "พร้อมแล้วลุยโลด";
    categoryPrompt.style.opacity = '1'; // ทำให้ข้อความมองเห็นได้
  
    // รีเซ็ต remainingQuestions ตามหมวดหมู่ที่เลือก
    remainingQuestions = [...questions[category]];
  
    const questionDisplay = document.getElementById('questionDisplay');
    questionDisplay.textContent = "คำถามจะปรากฏที่นี่...";  // รีเซ็ตข้อความคำถาม
  }
  
  function getRandomQuestion() {
    if (remainingQuestions.length === 0) {
      alert("ยังทำไม่เสร็จค่าาา!");
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const randomQuestion = remainingQuestions.splice(randomIndex, 1)[0];
  
    const questionDisplay = document.getElementById('questionDisplay');
    questionDisplay.textContent = randomQuestion;
  
    // เปลี่ยนสีของคำถามเป็นสีดำเมื่อสุ่มคำถาม
    questionDisplay.style.color = 'black';
  
    // บันทึกประวัติคำถาม
    history.unshift(randomQuestion);
    updateHistory();
  }
  
  function updateHistory() {
    const historyList = document.getElementById('history');
    historyList.innerHTML = "";  // ลบรายการเก่าออกก่อน
  
    // เพิ่มคำถามทั้งหมดในประวัติ
    history.forEach(q => {
      const li = document.createElement('li');
      li.textContent = q;
      historyList.appendChild(li);
    });
  }
  
  function toggleHistory() {
    const historySection = document.getElementById('historySection');
    const toggleBtn = document.getElementById('toggleHistoryBtn');
  
    // เช็คว่า section ประวัติคำถามซ่อนอยู่หรือไม่
    if (historySection.style.display === 'none' || historySection.style.display === '') {
      // แสดงประวัติคำถาม
      historySection.style.display = 'block';
      toggleBtn.textContent = 'ซ่อน';
    } else {
      // ซ่อนประวัติคำถาม
      historySection.style.display = 'none';
      toggleBtn.textContent = 'ประวัติคำถาม';
    }
  }
  