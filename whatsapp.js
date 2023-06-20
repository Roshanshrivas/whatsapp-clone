// Button Select

var chatButton = document.querySelector("#btn2");
var statusButton = document.querySelector("#btn3");
var callButton = document.querySelector("#btn4");

var content = document.querySelector("#content");


// Users Data import

const arr = [
             {name:"Jetha Lal", img:"https://www.jansatta.com/wp-content/uploads/2022/01/Jethalal.jpg", msg:"Daya Tu Kya chahti ha"}, 
             {name:"Daya", img:"https://static.toiimg.com/thumb/msid-60770461,width-1280,resizemode-4/60770461.jpg", msg:"Tappu ke papa Kya banaun aaj"},
             {name:"Bapu ji", img:"https://staticimg.amarujala.com/assets/images/2020/03/04/750x506/ul_1583302332.jpeg", msg:"jethiya tu chai pii chai bs"},
             {name:"Tarak Mehta", img:"https://dailyhindipost.com/wp-content/uploads/2022/10/Shailesh-Lodha-Height-Net-Worth-Age-Affairs-Bio-and-More-2022-The-Personage.jpg", msg:"Yll mere se nhi khaya jata ye"},
             {name:"Anjali", img:"https://img.indiaforums.com/article/900x900/18/8589-tmkoc-makers-counter-neha-mehtas-claim-on-nonpayment-says-actress-refused-to-sign-documents-and-answ.jpg", msg:"Tarak Aaj mene apke liye kuch naya banaya ha"},
             {name:"Bhide", img:"https://www.bollywoodhungama.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-18-at-5.09.33-PM.jpeg", msg:"Jethalal tum Bill Bhar rhe ho ya nahi"},
             {name:"Madhuri", img:"https://i0.wp.com/countrycircle.in/wp-content/uploads/2021/11/0fe50ef58556b55198e4c2a5a0cee300.jpg?resize=736%2C633&ssl=1", msg:"aho ye thoda press Kar doge kya"},
             {name:"Madhuri", img:"https://i0.wp.com/countrycircle.in/wp-content/uploads/2021/11/0fe50ef58556b55198e4c2a5a0cee300.jpg?resize=736%2C633&ssl=1", msg:"aho ye thoda press Kar doge kya"},
             {name:"Madhuri", img:"https://i0.wp.com/countrycircle.in/wp-content/uploads/2021/11/0fe50ef58556b55198e4c2a5a0cee300.jpg?resize=736%2C633&ssl=1", msg:"aho ye thoda press Kar doge kya"},
             {name:"Jethalal", img:"https://www.jansatta.com/wp-content/uploads/2022/01/Jethalal.jpg", time:"Today, 11:20 PM"},
             {name:"Daya", img:"https://static.toiimg.com/thumb/msid-60770461,width-1280,resizemode-4/60770461.jpg", time:"Today, 10:20 AM"},
             {name:"Jethalal", img:"https://www.jansatta.com/wp-content/uploads/2022/01/Jethalal.jpg", call:"Today, 11:20 PM"},
             {name:"Anjali", img:"https://img.indiaforums.com/article/900x900/18/8589-tmkoc-makers-counter-neha-mehtas-claim-on-nonpayment-says-actress-refused-to-sign-documents-and-answ.jpg", call:"Today, 11:20 PM"},
             {name:"Madhuri", img:"https://i0.wp.com/countrycircle.in/wp-content/uploads/2021/11/0fe50ef58556b55198e4c2a5a0cee300.jpg?resize=736%2C633&ssl=1", call:"Today, 11:20 PM"},
             {name:"Daya", img:"https://static.toiimg.com/thumb/msid-60770461,width-1280,resizemode-4/60770461.jpg", call:"Today, 10:20 AM"}
            ];



function chats(arr) {

    chatButton.addEventListener("click", function(){
    
    var newArr = arr.filter( function (elem){
        
        return elem.msg;
    });

    initializechat(newArr);

    });
            
    }


function initializechat(newArr){
    var template = ``;

    newArr.forEach(function (elem) {
        console.log(elem);

        template += `<div class="rectangle">

                                 <div class="circle">

                            <img src="${elem.img}" alt="">
                          </div>
    
                      <h3>${elem.name}</h3>
                      <p>${elem.msg}</p>
              </div>`;

    });

    content.innerHTML = template;
}



// Status section 


function status(arr){
    statusButton.addEventListener('click', function(){

        var newArr = arr.filter(function(data){
            return data.time;
        });

        initializestatus(newArr);
    })
}


function initializestatus(newArr) {
    var tempelate = ``;

newArr.forEach(function (elem){
    console.log(elem);

    tempelate += `<div class="rectangle">
                     <div class="circle">
                     <img src="${elem.img}" alt="">
                </div>
                     <h3>${elem.name}</h3>
                     <p>${elem.time}</p>
                </div>`;
});

content.innerHTML = tempelate;

}


// call section 

function call(arr){

    callButton.addEventListener("click", function(){

        // console.log(arr);

    var newArr = arr.filter( function(singel){

        // console.log(singel.call);

        return singel.call
    })


    initializecall(newArr)

    })
}



function initializecall(newArr){
    var temp = ``;

    newArr.forEach(function(data){
        // console.log(data);

    temp += `<div class="rectangle">
               <div class="circle">
               <img src="${data.img}" alt="">
            </div>
                <h3>${data.name}</h3>
                <p>${data.call}</p>
                <i class="fa-solid fa-phone"></i>
                <i class="fa-thin fa-arrow-down"></i>
            </div>`;
    })

    content.innerHTML = temp;
}



status(arr);
chats(arr);
call(arr);
