// const express = require('express');
// const mysql = require('mysql');  // mysql 모듈 로드
// const conn = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'jhsong1376!',
//     database: 'test'
// }); // DB 커넥션 생성
 
// // function SignIn(username,password,email){
// //     conn.query('INSERT INTO usertable (username,password,email) VALUES (?, ?, ?);'
// //         , [username,password,email]
// //         , function (error, results, fields) {
// //     conn.end();
// //     if (error)
// //         throw error;
// //     let member_no = results.insertId;
// //     console.log('The new member_no: ', member_no);

// //  });
// // } 



// var express = require('express');
// var router = express.Router();

// // var template = require('./template2.js');
// // var db = require('./db.js');

// // 로그인 화면
// //get은 데이터를 가져오는것
// // router.get('/login', function (request, response) {
// //     var title = '로그인';
// //     // var html = template.HTML(title,`
// //     //         <h2>로그인</h2>
// //     //         <form action="/auth/login_process" method="post">
// //     //         <p><input class="login" type="text" name="username" placeholder="아이디"></p>
// //     //         <p><input class="login" type="password" name="pwd" placeholder="비밀번호"></p>
// //     //         <p><input class="btn" type="submit" value="로그인"></p>
// //     //         </form>
// //     //         <p><a href="http://192.168.0.101:5500/var2.html">메인화면으로 돌아가기</a></p>          
// //     //         <p>계정이 없으신가요?  <a href="/auth/register">회원가입</a></p> 
// //     //     `, '');
// //     // // response.send(html);
// //     response.sendFile('/login.html')
// // });

// // 로그인 프로세스\
// //post는 데이터를 보내는것
// // router.post('/login_process', function (request, response) {
// //     var username = request.body.username;
// //     var password = request.body.pwd;
// //     if (username && password) {             // id와 pw가 입력되었는지 확인 &&> 둘 다 입력되었을 때
        
// //         db.query('SELECT * FROM usertable WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// //             if (error) throw error;
// //             if (results.length > 0) {       // db에서의 반환값이 있으면 로그인 성공
// //                 request.session.is_logined = true;      // 세션 정보 갱신
// //                 request.session.nickname = username;
// //                 request.session.save(function () {
// //                     response.redirect(`/`);
// //                 });
// //             } else {              
// //                 response.send(`<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); 
// //                 document.location.href="/auth/login";</script>`);    
// //             }            
// //         });

// //     } else {
// //         response.send(`<script type="text/javascript">alert("아이디와 비밀번호를 입력하세요!"); 
// //         document.location.href="/auth/login";</script>`);    
// //     }
// // });

// // 로그아웃 세션에 있는 정보를 지움으로서 로그아웃
// router.get('/logout', function (request, response) {
//     request.session.destroy(function (err) {
//         response.redirect('/');
//     });
// });


// // // 회원가입 화면
// // router.get('/register', function(request, response) {
// //     var title = '회원가입';    
// //     var html = template.HTML(title, `
// //     <h2>회원가입</h2>
// //     <form action="/auth/register_process" method="post">
// //     <p><input class="login" type="text" name="username" placeholder="아이디"></p>
// //     <p><input class="login" type="password" name="pwd" placeholder="비밀번호"></p>    
// //     <p><input class="login" type="password" name="pwd2" placeholder="비밀번호 재확인"></p>
// //     <p><input class="login" type="email" name="email" placeholder="이메일 인증"></p>
// //     <p><input class="btn" type="submit" value="제출"></p>
// //     </form> 
// //     <p><a href="http://192.168.0.101:5500/var2.html">메인화면으로 돌아가기</a></p>      
// //     <p><a href="/auth/login">로그인화면으로 돌아가기</a></p>
// //     `, '');
// //     response.send(html);
// // });
 
// // 회원가입 프로세스
// router.post('/register_process', function(request, response) {    
//     var username = request.body.username;
//     var password = request.body.pwd;    
//     var password2 = request.body.pwd2;
//     var email = 'bill7666@naver.com';
//     /*const nodemailer = require('nodemailer');

//     const smtpTransport = nodemailer.createTransport({
//       service: "Naver",
//       auth: {
//         user: " ",
//         pass: " "
//       },
//       tls: {
//         rejectUnauthorized: false
//       }
//     });
//     module.exports={
//       smtpTransport
//     }*/

//     // if (username && password && password2 && email ) { 
        
//     //     db.query('SELECT * FROM usertable WHERE username = ?', [username], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
//     //         if (error) throw error;
//     //         if (results.length <= 0 && password == password2) {     // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우 
//     //             db.query('INSERT INTO usertable (username, password,email) VALUES(?,?,?)', [username, password,email], function (error, data) {
//     //                 if (error) throw error2;
//     //                 response.send(`<script type="text/javascript">alert("회원가입이 완료되었습니다!");
//     //                 document.location.href="/";</script>`);
//     //             });
//     //         } else if (password != password2) {                     // 비밀번호가 올바르게 입력되지 않은 경우
//     //             response.send(`<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다."); 
//     //             document.location.href="/auth/register";</script>`);    
//     //         }
//     //         else {                                                  // DB에 같은 이름의 회원아이디가 있는 경우
//     //             response.send(`<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); 
//     //             document.location.href="/auth/register";</script>`);    
//     //         }            
//     //     });

//     // } else {        // 입력되지 않은 정보가 있는 경우
//     //     response.send(`<script type="text/javascript">alert("입력되지 않은 정보가 있습니다."); 
//     //     document.location.href="/auth/register";</script>`);
//     // }
//     // username = request.body.username;
//     // var password = request.body.pwd;    
//     // var password2 = request.body.pwd2;
//     // var email = request.body.pwd;  
//     Mysql(username,password,email)
// });

// module.exports = router;


// const express = require('express');
// const session = require('express-session');
// const app = express();
// const port = pack;
// const mysql = require('mysql');

// // MySQL 연결 설정
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'jhsong1376!',
//   database: 'test',
//   port: '3306'
// });

// // 데이터베이스 연결
// connection.connect((err) => {
//   if (err) {
//     console.error('데이터베이스 연결 오류: ', err);
//     return;
//   }
//   console.log('MySQL 데이터베이스에 연결되었습니다.');
// });

// // 회원가입 정보를 데이터베이스에 저장하는 함수
// function saveUserData(username,password,email) {
//   // INSERT 문 생성
//   const query = `INSERT INTO usertable (username,password,email) VALUES (?, ?, ?, ?, ?)`;

//   // INSERT 문 실행
//   connection.query(query, [username,password,email], (err, result) => {
//     if (err) {
//       console.error('데이터 삽입 오류: ', err);
//       return;
//     }
//     console.log('회원가입 정보가 데이터베이스에 저장되었습니다.');
//   });
// }

// // select 쿼리 실행
// const query = 'SELECT * FROM usertable';
// connection.query(query, (err, results) => {
//   if (err) {
//     console.error('쿼리 실행 오류:', err);
//     return;
//   }

//   console.log('조회된 데이터:', results);

//   connection.end((err) => {
//     if (err) {
//       console.error('데이터베이스 연결 종료 오류:', err);
//       return;
//     }
//     console.log("MySQL 데이터베이스 연결이 종료되었습니다.");
//   });
// });

// // 세션 설정
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false
// }));

// // Body Parser 설정
// app.use(express.urlencoded({ extended: true }));

// // // 로그인 페이지 라우트
// // app.get('/login', (req, res) => {
// //   res.send(`
// //     <h1>로그인 페이지</h1>
// //     <form action="/login" method="POST">
// //       <input type="text" name="username" placeholder="아이디" required>
// //       <input type="password" name="password" placeholder="비밀번호" required>
// //       <button type="submit">로그인</button>
// //     </form>
// //   `);
// // });

// // // 회원가입 페이지 라우트
// // app.get('/signup', (req, res) => {
// //   res.sendFile(__dirname + '/template2.html'); 

  
// // });

// // 회원가입 처리
// app.post('/signup', (req, res) => {
//   const {username,password,email} = req.body;
//   saveUserData(username,password, email);
//   res.redirect('/login'); // 로그인 페이지로 리디렉션
// });

// // 로그인 처리
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   // 로그인 처리 로직 추가

//   // 예시: 세션에 사용자 정보 저장
//   req.session.isLoggedIn = true;
//   req.session.username = username;
//   res.redirect('/dashboard');
// });

// // 대시보드 페이지 라우트
// app.get('/dashboard', (req, res) => {
//   // 로그인 상태인지 확인
//   if (req.session.isLoggedIn) {
//     res.send(`<h1>로그인 성공! 환영합니다, ${req.session.username}님</h1>`);
//   } else {
//     res.send('로그인되지 않았습니다.');
//   }
// });
