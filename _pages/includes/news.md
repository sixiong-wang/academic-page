# 🔥 News

- 🛠️ *Sep 2023: Academic Page is under construction ...*

<div id="timestamp"></div>
<script>
  // 获取当前时间戳并格式化为可读的日期和时间
  function getCurrentTimestamp() {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return now.toLocaleDateString('en-US', options);
  }

  // 将时间戳显示在页面上的元素中
  function displayTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
      timestampElement.textContent = '最后更新时间：' + getCurrentTimestamp();
    }
  }

  // 在页面加载完成后执行displayTimestamp函数
  window.addEventListener('load', displayTimestamp);
</script>
