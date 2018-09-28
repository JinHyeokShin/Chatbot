/**
 * Created by cheese on 2017. 2. 9..
 */

var imageRamen = "https://i1.wp.com/dilite.co.kr/wp-content/uploads/2018/02/%EB%9D%BC%EB%A9%B4.jpg?fit=800%2C533";
var urlRamen = "https://dbsxjf2.github.io/food/ramen"

var imageDon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZAFGCI3graWcM0LoaOEqkhprMHxnnbd7YhwvehQTyTkqVC8LcA";
var urlDon = "https://dbsxjf2.github.io/food/don"

var imageCold = "https://sp.yimg.com/ib/th?id=OIP.Gy4j3F2hVp6v1CrNHnvwCwHaE8&pid=15.1&rs=1&c=1&qlt=95&w=166&h=110"
var urlCold = "https://dbsxjf2.github.io/food/cold"

var imageMeal = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH08prGBk5aohdM_Rr0ofF27rkGNU9K_5GnBl2ldTt6GUaH0ec";
var urlMeal = "https://dbsxjf2.github.io/food/backban"

var urltable = "https://www.gist.ac.kr/kr/html/sub05/050601.html?mode=IMG&no=188409&file_id="

const
  request = require('request'),
  cheerio = require('cheerio'),
  async = require('async'),
  message = require('../kakaobot/message'),
  getApiai = require('../kakaobot/getApiai'),
  Bot = {};
  

//const getApiai = require('../service/getApiai');
//const cache = require('memory-cache');

Bot.choseMenu = (req, content, callback) => {

  switch (content) {
    case message.buttons[0]: // 이번달 식단표 보기 ! 
      callback(null, message.baseType2('안녕하세요? 저는 한신푸드파이터입니다. 다음과 같이 말씀해 보세요. "임마누엘 식당에서 라면 줘"'));
      break;

    case message.buttons[1]: 
      callback(null, message.baseTypeWithButtons("식당을 선택하세요.", message.buttonsRestaurant));
      break;
      
    case message.buttonsRestaurant[0]: // 60주년
      callback(null, message.baseTypeWithButtons("메뉴를 선택하세요.", message.buttonsSixtyRestaurant));
      break;
      
    case message.buttonsRestaurant[1]: // 임마누엘
      callback(null, message.baseTypeWithButtons("메뉴를 선택하세요.", message.buttonsImmanuelRestaurant));
      break;
  
    case "라면":
      callback(null, message.photoType("라면 구매를 원하시면 구매하기를 눌러주세요.", imageRamen, "구매하기", urlRamen));      
      break;
         
    case "돈까스":
      callback(null, message.photoType("돈까스 구매를 원하시면 구매하기를 눌러주세요.", imageDon, "구매하기", urlDon));      
      break;
      
    case "냉면":
      callback(null, message.photoType("냉면 구매를 원하시면 구매하기를 눌러주세요.", imageCold, "구매하기", urlCold));      
      break;
   
    case "백반":
      callback(null, message.photoType("백반 구매를 원하시면 구매하기를 눌러주세요.", imageMeal, "구매하기", urlMeal));      
      break;
      
    case "상위 메뉴":
    case "상위메뉴":
    case "상위":
      callback(null, message.baseType("버튼을 선택해주세요."));
      break;
      
    default:
      getApiai(content, function (data) {
        // callback(null, message.baseTypeText(data));
        callback(null, data);
      });
      break;
      /*
      getApiai(content, function (data) {
        callback(null, message.baseTypeText(data));
      });
      */
      break;
  }
};

module.exports = Bot;