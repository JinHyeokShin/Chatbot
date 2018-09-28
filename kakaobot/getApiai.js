var apiai = require('apiai');
var message = require('../kakaobot/message');
    
var app = apiai("38ac3bbbc7dd4dc1baec7947719bea95");

var INTENT_DEFAULT = 'Default Fallback Intent'
var INTENT_MENU = 'Menu'

var imageRamen = "https://i1.wp.com/dilite.co.kr/wp-content/uploads/2018/02/%EB%9D%BC%EB%A9%B4.jpg?fit=800%2C533";
var urlRamen = "https://dbsxjf2.github.io/food/ramen"

var imageDon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZAFGCI3graWcM0LoaOEqkhprMHxnnbd7YhwvehQTyTkqVC8LcA";
var urlDon = "https://dbsxjf2.github.io/food/don"

var imageCold = "https://sp.yimg.com/ib/th?id=OIP.Gy4j3F2hVp6v1CrNHnvwCwHaE8&pid=15.1&rs=1&c=1&qlt=95&w=166&h=110"
var urlCold = "https://dbsxjf2.github.io/food/cold"

var imageMeal = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH08prGBk5aohdM_Rr0ofF27rkGNU9K_5GnBl2ldTt6GUaH0ec";
var urlMeal = "https://dbsxjf2.github.io/food/backban"


function getApiai(quetion, callback){
    var request = app.textRequest(quetion, {
        sessionId: '111'
    });
    
    request.on('response', function(response) {
      console.log(response)
      var intent = response.result.metadata.intentName;
      var food = response.result.parameters.Food;
      var location = response.result.parameters.Location;
      var actionIncomplete = response.result.actionIncomplete;
      
      console.log('intentName: ' + intent)
      console.log('food: ' + food)
      console.log('location: ' + location)
      console.log('actionIncomplete: ' + actionIncomplete)
      
      if (actionIncomplete == true) {
        callback(message.baseTypeText(response.result.fulfillment.speech));   
      }
      else { // complete actoin
        if (intent == INTENT_DEFAULT) {
          callback(message.baseTypeText(response.result.fulfillment.speech));   
        }
        else if (intent == INTENT_MENU) {
          if (food == '라면')
            callback(message.photoType(response.result.fulfillment.speech, imageRamen, "식권 구매하기", urlRamen));  
          else if (food == '냉면')
            callback(message.photoType(response.result.fulfillment.speech, imageCold, "식권 구매하기", urlCold));  
          else if (food == '돈까스')
            callback(message.photoType(response.result.fulfillment.speech, imageDon, "식권 구매하기", urlDon));  
          else if (food == '백반')
            callback(message.photoType(response.result.fulfillment.speech, imageMeal, "식권 구매하기", urlMeal));  
          
          else
            callback(message.baseTypeText("제가 모르는 메뉴입니다. 다시 한번 말씀해 주세요."));   
        }      
        else { // Unknow intent
          callback(message.baseTypeText(response.result.fulfillment.speech));
        }    
      }
    });
    
    request.on('error', function(error) {
        callback("에러가 발생했습니다.");
    });      

    request.end();
}

module.exports = getApiai;