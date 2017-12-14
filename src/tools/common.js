/**
 * 定义rem,基于640px的设计稿,1rem=10px
 * Created by jfhuang on 17/12/13.
 */

const setRem = () => {
    const $root = document.documentElement || document.body;
    let width = $root.offsetWidth;
    if (width > 640) {
        width = 640;
    }
    const fontSize = width / 64.0;
    const $html = document.getElementsByTagName('html')[0]
    $html.style.fontSize = fontSize + 'px';
};

window.addEventListener('resize', () => {
    setRem();
}, false);

setRem();
