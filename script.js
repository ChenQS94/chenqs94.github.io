const greetings = [
    "节日快乐啊丫头！",
    "愿你的每一天都充满阳光！",
    "愿你生活充满乐趣和惊喜！",
    "该说不说，记仇那么久也是有你的！",
    "你不说的话我也莫名奇妙的，此仇到此结束啦！"
];

document.getElementById('changeGreeting').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    document.getElementById('greeting').innerText = greetings[randomIndex];
});

