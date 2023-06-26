// /*
//   초성검색 부분
// */
// const CHO_HANGUL = [
//   'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ',
//   'ㄹ', 'ㅁ', 'ㅂ','ㅃ', 'ㅅ',
//   'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ',
//   'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
// ];

// const HANGUL_START_CHARCODE = "가".charCodeAt();//문자열 '가'라는 유니코드를 가져옴

// const CHO_PERIOD = Math.floor("까".charCodeAt() - "가".charCodeAt());
// const JUNG_PERIOD = Math.floor("개".charCodeAt() - "가".charCodeAt());

// function combine(cho, jung, jong) {
//   return String.fromCharCode(
//     HANGUL_START_CHARCODE + cho * CHO_PERIOD + jung * JUNG_PERIOD + jong
//   );
// }

// // 초성검색
// function makeRegexByCho(search = "") {
//   const regex = CHO_HANGUL.reduce(
//     (acc, cho, index) =>
//       acc.replace(
//         new RegExp(cho, "g"),
//         `[${combine(index, 0, 0)}-${combine(index + 1, 0, -1)}]`
//       ),
//     search
//   );

//   return new RegExp(`(${regex})`, "g");
// }

// function includeByCho(search, targetWord) {
//   return makeRegexByCho(search).test(targetWord);
// }

// /*
//   자동완성 부분
// */ 
// // const dataList = ["빨간색", "파란색", "노란색", "검정색"];
// const dataList = ["닥터지", "낫포유", "헤라", "라운드캡"];

// const $search = document.querySelector("#search");//#id,.class
// const $autoComplete = document.querySelector(".autocomplete");

// let nowIndex = 0;

// $search.onkeyup = (event) => {
//   // 검색어
//   const value = $search.value.trim();

//   // 자동완성 필터링
//   const matchDataList = value
//     ? dataList.filter((label) => includeByCho(value, label))
//     : [];

//   switch (event.keyCode) {
//     // UP KEY
//     case 38:
//       nowIndex = Math.max(nowIndex - 1, 0);
//       break;

//     // DOWN KEY
//     case 40:
//       nowIndex = Math.min(nowIndex + 1, matchDataList.length - 1);
//       break;

//     // ENTER KEY
//     case 13:
//       document.querySelector("#search").value = matchDataList[nowIndex] || "";

//       // 초기화
//       nowIndex = 0;
//       matchDataList.length = 0;
//       break;
      
//     // 그외 다시 초기화
//     default:
//       nowIndex = 0;
//       break;
//   }

//   // 리스트 보여주기
//   showList(matchDataList, value, nowIndex);
// };

// const showList = (data, value, nowIndex) => {
//   // 초성 정규식으로 변환
//   const regex = makeRegexByCho(value);
  
//   $autoComplete.innerHTML = data
//     .map(
//       (label, index) => `
//       <div class='${nowIndex === index ? "active" : ""}'>
//         ${label.replace(regex, "<mark>$1</mark>")}
//       </div>
//     `
//     )
//     .join("");
// };

// // const searchEl = document.querySelector('.search');
// // const searchInputEl = searchEl.querySelector('input');

// // searchEl.addEventListener('click', function () {
// //   searchInputEl.focus();
// // });

// // searchInputEl.addEventListener('focus', function () {
// //   searchEl.classList.add('focused');
// //   searchInputEl.setAttribute('placeholder', '통합검색');
// // });

// // searchInputEl.addEventListener('blur', function () {
// //   searchEl.classList.remove('focused');
// //   searchInputEl.setAttribute('placeholder', '');
// // });


// // const thisYear = document.querySelector('.this-year');
// // thisYear.textContent = new Date().getFullYear(); // 2021


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

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();

var cosmetics = [
  {
    id:1,
    brand:'닥터지',
    price:'38,000',
    url: '/public/image/1.jpg'
  },
  {
    id:2,
    brand:'낫포유',
    price:'21,900',
    url: '/public/image/1.jpg'
  },
  {
    id:3,
    brand:'헤라',
    price:'66,000',
    url: '/public/image/1.jpg'
  },
  {
    id:4,
    brand:'라운드랩',
    price:'25,000',
    url: '/public/image/1.jpg'
  },
  {
    id:5,
    brand:'투쿨포스쿨',
    price:'36,000',
    url: '/public/image/1.jpg'
  },
  {
    id:6,
    brand:'오쏘몰',
    price:'75,000',
    url: '/public/image/1.jpg'
  },
  {
    id:7,
    brand:'아워글래스',
    price:'52,000',
    url: '/public/image/1.jpg'
  },
  {
    id:8,
    brand:'마녀공장',
    price:'25,000',
    url: '/public/image/1.jpg'
  },
  {
    id:9,
    brand:'넘버즈인',
    price:'34,000',
    url: '/public/image/1.jpg'
  },
  {
    id:10,
    brand:'구달',
    price:'28,000',
    url: '/public/image/1.jpg'
  },

  {
    id:11,
    brand:'스킨푸드',
    price:'26,000',
    url: '/public/image/1.jpg'
  },

  {
    id:12,
    brand:'닥터지',
    price:'29,000',
    url: '/public/image/1.jpg'
  },

  {
    id:13,
    brand:'바이오더마',
    price:'42,000',
    url: '/public/image/1.jpg'
  },

  {
    id:14,
    brand:'어반디케이',
    price:'45,000',
    url: '/public/image/1.jpg'
  },

  {
    id:15,
    brand:'메디힐',
    price:'39,900',
    url: '/public/image/1.jpg'
  },

  {
    id:16,
    brand:'어노브',
    price:'42,000',
    url: '/public/image/1.jpg'
  },

  {
    id:17,
    brand:'넘버즈인',
    price:'28,000',
    url: '/public/image/1.jpg'
  },

  {
    id:18,
    brand:'아비브',
    price:'39,000',
    url: '/public/image/1.jpg'
  },

  {
    id:19,
    brand:'트리헛',
    price:'22,500',
    url: '/public/image/1.jpg'
  },


  {
    id:20,
    brand:'파티온',
    price:'38,000',
    url: '/public/image/1.jpg'
  },


  {
    id:21,
    brand:'메디힐',
    price:'24,900',
    url: '/public/image/1.jpg'
  },

  {
    id:22,
    brand:'웨이크메이크',
    price:'34,000',
    url: '/public/image/1.jpg'
  },

  {
    id:23,
    brand:'힌스',
    price:'34,000',
    url: '/public/image/1.jpg'
  },

  {
    id:24,
    brand:'아이소이',
    price:'30,000',
    url: '/public/image/1.jpg'
  },

  {
    id:25,
    brand:'라보에이치',
    price:'36,0000',
    url: '/public/image/1.jpg'
  },

  {
    id:26,
    brand:'브링그린',
    price:'27,000',
    url: '/public/image/1.jpg'
  },

  {
    id:27,
    brand:'아비브',
    price:'28,000',
    url: '/public/image/1.jpg'
  },

  {
    id:28,
    brand:'프리메라',
    price:'18,000',
    url: '/public/image/1.jpg'
  },

  {
    id:29,
    brand:'아도르',
    price:'32,000',
    url: '/public/image/1.jpg'
  },

  {
    id:30,
    brand:'키스미',
    price:'28,000',
    url: '/public/image/1.jpg'
  },

  {
    id:31,
    brand:'닥터지',
    price:'40,000',
    url: '/public/image/1.jpg'
  },

  {
    id:32,
    brand:'넘버즈인',
    price:'14,800',
    url: '/public/image/1.jpg'
  },

  {
    id:33,
    brand:'토리든',
    price:'25,000',
    url: '/public/image/1.jpg'
  },

  {
    id:34,
    brand:'식물나라',
    price:'17,000',
    url: '/public/image/1.jpg'
  },

  {
    id:35,
    brand:'일소',
    price:'25,000',
    url: '/public/image/1.jpg'
  },

  {
    id:36,
    brand:'3CE',
    price:'17,000',
    url: '/public/image/1.jpg'
  },

  {
    id:37,
    brand:'파넬 ',
    price:'37,000',
    url: '/public/image/1.jpg'
  },

  {
    id:38,
    brand:'메디힐',
    price:'20,000',
    url: '/public/image/1.jpg'
  },

  {
    id:39,
    brand:'바닐라코',
    price:'38,000',
    url: '/public/image/1.jpg'
  },

  {
    id:40,
    brand:'식물나라',
    price:'32,000',
    url: '/public/image/1.jpg'
  },

  {
    id:41,
    brand:'마녀공장',
    price:'12,000',
    url: '/public/image/1.jpg'
  },

  {
    id:42,
    brand:'닥터지',
    price:'39,000',
    url: '/public/image/1.jpg'
  },

  {
    id:43,
    brand:'헤라',
    price:'68,000',
    url: '/public/image/1.jpg'
  },

  {
    id:44,
    brand:'에스쁘아',
    price:'38,000',
    url: '/public/image/1.jpg'
  },

  {
    id:45,
    brand:'넘버즈인',
    price:'42,000',
    url: '/public/image/1.jpg'
  },

  {
    id:46,
    brand:'미니레코드',
    price:'14,600',
    url: '/public/image/1.jpg'
  },

  {
    id:47,
    brand:'비플레인',
    price:'24,000',
    url: '/public/image/1.jpg'
  },

  {
    id:48,
    brand:'아비브',
    price:'40,000',
    url: '/public/image/1.jpg'
  },

  {
    id:49,
    brand:'그린몬스터',
    price:'3,800',
    url: '/public/image/1.jpg'
  },

  {
    id:50,
    brand:'에뛰드',
    price:'15,000',
    url: '/public/image/1.jpg'
  },

  {
    id:51,
    brand:'쉬크',
    price:'24,900',
    url: '/public/image/1.jpg'
  },

  {
    id:52,
    brand:'넘버즈인',
    price:'16,000',
    url: '/public/image/1.jpg'
  },

  {
    id:53,
    brand:'에스네이처',
    price:'24,000',
    url: '/public/image/1.jpg'
  },

  {
    id:54,
    brand:'아떼',
    price:'42,000',
    url: '/public/image/1.jpg'
  },

  {
    id:55,
    brand:'크리스탈',
    price:'13,000',
    url: '/public/image/1.jpg'
  },

  {
    id:56,
    brand:'어노브',
    price:'35,000',
    url: '/public/image/1.jpg'
  },

  {
    id:57,
    brand:'그로우어스',
    price:'26,000',
    url: '/public/image/1.jpg'
  },

  {
    id:58,
    brand:'아누아',
    price:'45,000',
    url: '/public/image/1.jpg'
  },

  {
    id:59,
    brand:'유세린',
    price:'49,000',
    url: '/public/image/1.jpg'
  },

  {
    id:60,
    brand:'닥터텅스',
    price:'6,000',
    url: '/public/image/1.jpg'
  },

  {
    id:61,
    brand:'셀퓨전씨',
    price:'29,400',
    url: '/public/image/1.jpg'
  },

  {
    id:62,
    brand:'포맨트',
    price:'39,000',
    url: '/public/image/1.jpg'
  },

  {
    id:63,
    brand:'바이오더마',
    price:'38,000',
    url: '/public/image/1.jpg'
  },

  {
    id:64,
    brand:'투쿨포스쿨',
    price:'12,000',
    url: '/public/image/1.jpg'
  },

  {
    id:65,
    brand:'닥터지',
    price:'21,000',
    url: '/public/image/1.jpg'
  },

  {
    id:66,
    brand:'발란스핏',
    price:'29,800',
    url: '/public/image/1.jpg'
  },



]