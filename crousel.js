'use strict';


const currDisplayYear = membersOf2024;
// for storing all names as the keys of displays
const nameKey = [];
for(let key in currDisplayYear){
  nameKey.push(key);
}


const selectonNum = [];
while (selectonNum.length < 5) {
  let i = Math.floor(Math.random() * nameKey.length);
  if (!selectonNum.includes(i)) {
    selectonNum.push(i);
  }
}

const html = `  <main>

    <div id="carousel">
      <h6>Our Team</h6>

      <div class="prevLeftSecond common" >
        <img class="aksargyan_crousel_image_person" src="${currDisplayYear[nameKey[selectonNum[0]]].pic}">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
              currDisplayYear[nameKey[selectonNum[0]]].linkedin
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            currDisplayYear[nameKey[selectonNum[0]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                currDisplayYear[nameKey[selectonNum[0]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${currDisplayYear[nameKey[selectonNum[0]]].name}</h2><br/>
                    <h3><p>${
                      currDisplayYear[nameKey[selectonNum[0]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>

          <div class="prev common" >
        <img class="aksargyan_crousel_image_person" src="${
          currDisplayYear[nameKey[selectonNum[1]]].pic
        }">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
               currDisplayYear[nameKey[selectonNum[1]]].linkedIn
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            currDisplayYear[nameKey[selectonNum[1]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                currDisplayYear[nameKey[selectonNum[1]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${currDisplayYear[nameKey[selectonNum[1]]].name}</h2><br/>
                    <h3><p>${
                      currDisplayYear[nameKey[selectonNum[1]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>
          <div class="selected common" >
        <img class="aksargyan_crousel_image_person" src="${
          currDisplayYear[nameKey[selectonNum[2]]].pic
        }">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
               currDisplayYear[nameKey[selectonNum[2]]].linkedIn
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            currDisplayYear[nameKey[selectonNum[2]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                currDisplayYear[nameKey[selectonNum[2]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${currDisplayYear[nameKey[selectonNum[2]]].name}</h2><br/>
                    <h3><p>${
                      currDisplayYear[nameKey[selectonNum[2]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>
          <div class="next common" >
        <img class="aksargyan_crousel_image_person" src="${
          currDisplayYear[nameKey[selectonNum[3]]].pic
        }">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
               currDisplayYear[nameKey[selectonNum[3]]].linkedIn
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            currDisplayYear[nameKey[selectonNum[3]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                currDisplayYear[nameKey[selectonNum[3]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${currDisplayYear[nameKey[selectonNum[3]]].name}</h2><br/>
                    <h3><p>${
                      currDisplayYear[nameKey[selectonNum[3]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>
          <div class="nextRightSecond common" >
        <img class="aksargyan_crousel_image_person" src="${
          currDisplayYear[nameKey[selectonNum[4]]].pic
        }">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
               currDisplayYear[nameKey[selectonNum[4]]].linkedIn
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            currDisplayYear[nameKey[selectonNum[4]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                currDisplayYear[nameKey[selectonNum[4]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${currDisplayYear[nameKey[selectonNum[4]]].name}</h2><br/>
                    <h3><p>${
                      currDisplayYear[nameKey[selectonNum[4]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>


     
    </div>

     


  </main>`;

// console.log(html);

const crouserSection = document.querySelector('.ourT');

const crouselDataDisplay = document.createElement('div');

crouserSection.insertAdjacentHTML('afterbegin', html);

function moveToSelected(element) {
  if (element == 'next') {
    var selected = $('.selected').next();
  } else if (element == 'prev') {
    var selected = $('.selected').prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass('selected');
  // .removeClass().
  $(prev).removeClass().addClass('prev');
  $(next).removeClass().addClass('next');
  //nextRightSecond
  // prevLeftSecond;
  $(nextSecond).removeClass().addClass('nextRightSecond');
  $(prevSecond).removeClass().addClass('prevLeftSecond');
  // ;hideLeft;
  $(nextSecond).nextAll().removeClass().addClass('hideRight');

  $(prevSecond).prevAll().removeClass().addClass('hideLeft');
}

// Eventos teclado
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      moveToSelected('prev');
      break;

    case 39: // right
      moveToSelected('next');
      break;

    default:
      return;
  }
  e.preventDefault();
});

$('#carousel .common').click(function () {
  moveToSelected($(this));
});

$('#prev').click(function () {
  moveToSelected('prev');
});

$('#next').click(function () {
  moveToSelected('next');
});

//
//
//
