const express = require('express');
const app = express();
const port = 3333;
// Embedded JavaScript templates
app.set('view engine', 'ejs');
app.listen(port, ()=>{
console.log('hi start');
});
app.get('/', (req,res) => {
    // <%= name %> 부분은 JavaScript 표현식입니다.
    // 이 부분은 서버에서 제공하는 name 변수의 값으로 대체됩니다.
    // 이런 방식으로 템플릿에 서버의 데이터를 적용할 수 있습니다.
    let data = {nm: 'Nick', age : 200};
    // views 하위 경로 (페이지 이동)
    res.render('index', data);

});
app.get('/users',(req, res) => {
    let users = [
        {id : 1, name : 'nick'}
        ,{id : 2, name : 'judy'}
        ,{id : 3, name : 'jack'}
    ];
    res.render('user',{users});
});