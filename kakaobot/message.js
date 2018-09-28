/**
 * Created by cheese on 2017. 2. 10..
 */

/** menu tree
  60주년기념관
    |- 돈까스
    |- 냉면
    |- ...
  임마누엘관

*/

let message = {};

// message.buttons = [ "🤖챗봇에게 주문하기",
//                     "60주년기념관에서 주문하기",
//                     "임마누엘관에서 주문하기"];

message.buttons = [ "🤖챗봇에게 주문하기",
                    "🖐️버튼으로 주문하기" ];

message.buttonsRestaurant = ["60주년기념관에서 주문하기",
                              "임마누엘관에서 주문하기"];

message.buttonsSixtyRestaurant = [ "돈까스", "냉면", "백반", "라면", "상위 메뉴" ];
message.buttonsImmanuelRestaurant = [ "라면", "돈까스", "냉면", "백반", "상위 메뉴" ];
  
message.buttonsType = () => {
    return {
        type: 'buttons',
        buttons: message.buttons
    }
};


message.baseType = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'buttons',
            buttons: message.buttons
        }
    }
};

message.baseType2 = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'text',
            }
    }
};

message.baseTypeWithButtons = (text, buttons) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'buttons',
            buttons: buttons
        }
    }
};


message.baseTypeText = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'text',
        }
    }
};


message.photoType = (text, url_photo, label, url_button) => {
    return {
      message: {
        text: text,
        photo: {
          url: url_photo,
          width: 640,
          height: 480
        },
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.buttons
      }
    }
};

message.photoTypeWithButtons = (text, url_photo, label, url_button, buttons) => {
    return {
      message: {
        text: text,
        photo: {
          url: url_photo,
          width: 640,
          height: 480
        },
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: buttons
      }
    }
};

message.messageButtonType = (text, label, url_button) => {
    return {
      message: {
        text: text,
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.buttons
      }
    }
};

module.exports = message;