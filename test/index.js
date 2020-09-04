// hash 变化
window.onhashchange =(event) => {
  console.log('old url: ', event.oldURL)
  console.log('new url: ', event.newURL)
  console.log('hash: ', location.hash)
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('hash: ', location.hash)
})

document.getElementById('btn1').addEventListener('click', function(){
  location.href = '#/user'
})


// history 模式
// 初次加载获取path
document.addEventListener('DOMContentLoaded', () => {
  console.log('load', location.pathname)
})

// 打开一个新路由
// pushState 不会刷新页面
document.getElementById('btn2').addEventListener('click', function(){
  const state = {name: 'page1'}
  console.log('切换路由到', 'page1')
  history.pushState(state, '', 'page1')
})

// 监听浏览器前进、后退
window.onpopstate = (event) => {
  console.log('onpopstate', event.state, location.pathname)
}