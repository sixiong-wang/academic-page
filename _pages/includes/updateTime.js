// 获取当前时间
function getCurrentTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return now.toLocaleDateString('en-US', options);
  }
  
  // 更新时间信息
  function updateUpdateTime() {
    const updateTimeElement = document.getElementById('update-time');
    if (updateTimeElement) {
      updateTimeElement.textContent = getCurrentTime();
    }
  }
  
  // 在页面加载时调用更新时间信息函数
  window.onload = function () {
    updateUpdateTime();
    // 每隔一分钟更新一次时间信息
    setInterval(updateUpdateTime, 60000);
  };
  