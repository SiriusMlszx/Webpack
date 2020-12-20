import x from './x.js'
import png from './assets/1.png'
const div = document.getElementById('app')
console.log(x);
console.log('hi')
div.innerHTML = `
<img src="${png}">
`

// 懒人模块啊啊啊
const button = document.createElement('button')
button.innerText = 'LanJiaZai'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
            const fn = module.default
            fn()
        },
        () => {
            console.log('模块加载错误')
        })
}

div.appendChild(button)