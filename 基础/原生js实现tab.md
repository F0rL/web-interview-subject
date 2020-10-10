```html
<div class="container">
  <ul class="content-header">
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <ul class="content">
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
```
```css
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}

.content-header {
  display: flex;
}

.content-header li {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
}
.content-header li.active {
  background: red;
}

.content {
  display: flex;
  border: 1px solid #000;
}

.content li {
  display: none;
}

.content li.active {
  display: block;
}
```
```js
var el  = document.querySelector('.container')
var headerList = document.querySelectorAll('.content-header li')
var contentList = document.querySelectorAll('.content li')


headerList.forEach((e, index)=> {
  e.cindex = index+1
})


el.addEventListener('click', function(e) {
  var target = e.target.tagName.toLowerCase()
  if(target === 'li' && e.target.cindex) {
    headerList.forEach(el => {
      removeClass(el, 'active')
    })
    contentList.forEach(el => {
      removeClass(el, 'active')
    })
    addClass(headerList[e.target.cindex-1], 'active')
    addClass(contentList[e.target.cindex-1], 'active')
  }
})

function addClass(n, className) {
  var arr = n.className.split(' ')
  arr.push(className)
  n.className = arr.join(' ')
}

function removeClass(n, className) {
  var arr = n.className.split(' ')
  var index = arr.findIndex(val => {
    return val === className
  })
  arr.splice(index, 1)
  n.className = arr.join(' ')
}
```