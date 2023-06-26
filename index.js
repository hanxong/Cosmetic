const express = require('express')
const app = express();
const port = 3000;
app.use(express.static('public'))
const mysql      = require('mysql'); //mysql 플러그인 실행
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jhsong1376!',
  database : 'test'
}); //MYSQL 설정잡아주기

connection.connect();
//클라이언트에서HTTP 요청 메소드 중 Get 을 이용해서 'HOST:PORT'로 요청을 보내면 실행된다 한송아 정친차려라

app.get('/',(req,res) => {
  res.send('우리는 1921 팀이에요! 멋지죠?');
});

//app.listen() 함수를 사용해서 서버를 실행하는거라고 지선아
app.listen(port,() => {
  console.log('서버 온!!!!!!!!')
});

app.get('/main',(req,res) => { // index.html로 이동 
  res.sendFile(__dirname + "/Main/index.html")
})

app.get('/test',(req,res) => { // index2.html로 이동 
  res.sendFile(__dirname + "/Main/index2.html")
})

app.get('/login_main',(req,res) => { // login_main.html로 이동 
  res.sendFile(__dirname + "/Main/login_main.html")
})


app.get('/login_D',(req,res) => { // loginmainD.html로 이동 
  res.sendFile(__dirname + "/Main/loginmainD.html")
})

app.get('/login_O',(req,res) => { // loginmainO.html로 이동 
  res.sendFile(__dirname + "/Main/loginmainO.html")
})

app.get('/login_DO',(req,res) => { // loginmainDO.html로 이동 
  res.sendFile(__dirname + "/Main/loginmainDO.html")
})

app.get('/not_login_DO',(req,res) => { // notloginmainDO.html로 이동
  res.sendFile(__dirname + "/Main/notloginmainDO.html")
})

app.get('/not_login_D',(req,res) => { // notloginmainD.html로 이동
  res.sendFile(__dirname + "/Main/notloginmainD.html")
})

app.get('/not_login_O',(req,res) => { // notloginmainO.html로 이동
  res.sendFile(__dirname + "/Main/notloginmainO.html")
})



app.get('/auth/login',(req,res) => { // login.html로 이동
  res.sendFile(__dirname + "/Main/login.html")
})

app.get('/auth/login_process',(req,res) => { //login.html 로 이동
  console.log('로그인 완료 확인')
  const {username,pwd} = req.query;//html에서 넘어온 값을 자바스크립트 변수에 넣어준다.
  console.log(pwd);//html에서 넘어온 pwd
  /**쿼리**/connection.query('select user_pw from usertable where user_id = ?;', [username],
  function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
    if (error) throw error;
    console.log(results);//반환값 확인
    if (results[0].user_pw === pwd) { //results 반환값 = 배열 로 오기때문에 0번쨰 객체값을 받아와서 html에서 넘어온 pwd값이랑 비교해준다.
      res.writeHead(200,{'Content-Type': 'text/html;charset=UTF-8'})//한글 인코딩을 위한 코드
      res.write('<script charset=utf-8>alert("로그인완료")</script>');
      res.write('<script>window.location="/login_main"</script>'); 
    }
    else {
      //200을주면 ok, 400을 주면 badrequest    
      res.writeHead(400,{'Content-Type': 'text/html;charset=UTF-8'})//한글 인코딩을 위한 코드
      res.write('<script charset=utf-8>alert("로그인실패")</script>'); 
      res.write('<script>window.location="/auth/login"</script>');
    }            
});

});

app.get('/auth/register',(req,res) => { // signUp.html 로 이동
  console.log('회원가입 완료 확인')
  res.sendFile(__dirname + "/Main/signUp.html")
})

app.get('/auth/register_process',(req,res) => { // login.html 로 이동
  console.log('회원가입 확인')
  const {username,pwd,pwd2,email,gender,age} = req.query;
  connection.query('insert into usertable (user_id,user_pw,email,skin_type,gender,age) values(?,?,?,?,?,?);',
  [username,pwd,email,'건성',gender,age],
  (error,rows,field) => {
    if(error) throw error;
     console.log('complete',rows);
  });
  console.log('complete');
  res.sendFile(__dirname + "/Main/login.html")
})


app.get('/not_login_item',(req,res) => { // not_login_item.html 로 이동
  console.log('되냐?')
  res.sendFile(__dirname + "/Main/not_login_item.html")
 })

 app.get('/login_item',(req,res) => { // login_item.html 로 이동
  console.log('되냐?')
  res.sendFile(__dirname + "/Main/login_item.html")
 })

 app.get('/mypage',(req,res) => { // mypagemain.html 로 이동
  console.log('되냐?')
  res.sendFile(__dirname + "/Main/mypagemain.html")
 })

 app.get('/type',(req,res) => { // type.html 로 이동
  console.log('되냐?')
  res.sendFile(__dirname + "/Main/type.html")
 })

 app.get('/mypage/modify',(req,res) => { // mypagemain_modify.html 로 이동
  console.log('되냐?')
  res.sendFile(__dirname + "/Main/mypagemain_modify.html")
 })


app.get('/users/:answer', (req, res) => {//'/users'url 로 들어오면 전체회원 조회
  var answer = req.params.answer;
  
  console.log(answer);
    connection.query('SELECT * from usertable', (error, rows) => {
      if (error) throw error;
      console.log('User info is: ', rows);
      res.send(rows);
    });
})

app.get('/signIn',(req,res) =>{//'/signIn'url 로 들어오면 회원가입 쿼리를 실행
 
    // connection.connect();
    connection.query('insert into usertable (user_id,user_pw,email,skin_type,gender,age) values(?,?,?,?,?,?);',
    ['신재은', '조한송','건성','asd@naver.com', '여',22],
    (error,rows,field) => {
      if(error) throw error;
       console.log('complete',rows);
    });
    // connection.end();
})



