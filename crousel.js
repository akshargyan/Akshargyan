'use strict';
const selectonNum = [];
while (selectonNum.length < 5) {
  let i = Math.floor(Math.random() * 10);
  if (!selectonNum.includes(i)) {
    selectonNum.push(i);
  }
}

console.log(selectonNum);

const nameKey = [
  'Yatharth Singh Chandrool',
  'Pushkar Pratap Singh',
  'Satvik Kumar',
  'Harshit Agarwal',
  'Abhishek Singh',
  'Saurabh Shukla',
  'Naveen Singh',
  'Prateek Rastogi',
  'Akash Singh',
  'Aryan Amitabh',
  'Tarush Raj Srivastava',
];

const dataObject = {
  'Yatharth Singh Chandrool': {
    imgScr: 'team/3rd_year/Yatharth_Singh_Chandrool.png',
    branch: 'Mechanical Engineering',
    insta: 'https://www.instagram.com/_y47h4r7h_5/?hl=en',
    linkedIn: '#',
    twt: '#',
  },
  'Pushkar Pratap Singh': {
    imgScr: 'team/3rd_year/Pushkar_Pratap_Singh.png',
    branch: 'Mechanical Engineering',
    insta: 'https://instagram.com/pushkar_pratap.singh?utm_medium=copy_link',
    linkedIn: '#',
    twt: 'https://twitter.com/PushkarPratapS4?t=7sy98Gu4OUNYx1tYY8rg3g&s=09',
  },
  'Satvik Kumar': {
    imgScr: 'team/3rd_year/Satvik.png',
    branch: 'Electronics and Communications Engineering',
    insta: 'https://instagram.com/satvik41?utm_medium=copy_link',
    linkedIn: 'https://www.linkedin.com/in/satvik-kumar-215915199',
    twt: 'https://twitter.com/satviksingh88?t=wa-j582zIpZ8EEmbIMa8Og&s=08',
  },
  'Harshit Agarwal': {
    imgScr: 'team/3rd_year/Harshit_Agarwal.png',
    branch: 'Electronics and Communications Engineering',
    insta: 'https://www.instagram.com/harshitagarwal913/',
    linkedIn: 'https://www.linkedin.com/in/harshit-agarwal-769305196',
    twt: 'https://twitter.com/Harshit98219068?t=0RVkjeer1RgZi9WLj6IIaA&s=08',
  },
  'Abhishek Singh': {
    imgScr: 'team/3rd_year/Abhishek_Singh.png',
    branch: 'Electronics and Communications Engineering',
    linkedIn: 'https://www.linkedin.com/in/abhishek-singh-8a37441b1',
    insta: 'https://instagram.com/abhi_._official?utm_medium=copy_link',
    twt: 'https://twitter.com/Abhishe04170435?t=8bgotO3DKH2s5rbaZpgmIQ&s=09',
  },
  'Saurabh Shukla': {
    imgScr: 'team/3rd_year/SAURABH_SHUKLA.png',
    branch: 'Mechanical Engineering',
    insta: 'instagram.com/_saurabh_016',
    linkedIn: '#',
    twt: '#',
  },
  'Naveen Singh': {
    imgScr: 'team/3rd_year/Naveen_Singh.png',
    branch: 'Mechanical Engineering',
    insta: 'https://instagram.com/naveensingh_16?utm_medium=copy_link',
    linkedIn: '#',
    twt: '#',
  },
  'Prateek Rastogi': {
    imgScr: 'team/3rd_year/Prateek_Rastogi.jpg',
    branch: 'Electrical Engineering',
    insta:
      'https://www.instagram.com/invites/contact/?i=h31o25ddtupe&utm_content=1m8u7ua',
    linkedIn: 'https://www.linkedin.com/in/prateek-rastogi-6744a71b1',
    twt: '#',
  },
  'Akash Singh': {
    imgScr: 'team/3rd_year/Akash_Singh.jpg',
    branch: 'Electrical Engineering',
    insta:
      'https://www.instagram.com/invites/contact/?i=184qm8wbainmt&utm_content=3dvwh66',
    linkedIn: 'https://www.linkedin.com/in/akash-singh-03116816b',
    twt: '#',
  },
  'Aryan Amitabh': {
    imgScr: 'team/3rd_year/Aryan_Amitabh.png',
    branch: 'Mechanical Engineering',
    insta: 'https://instagram.com/aryan_amitabh?utm_medium=copy_link',
    linkedIn: 'https://www.linkedin.com/in/aryan-amitabh-9783aa192',
    twt: '#',
  },

  'Tarush Raj Srivastava': {
    imgScr: 'team/3rd_year/Tarush_Raj_Srivastava.png',
    branch: 'Electronics and Communications Engineering',
    linkedIn: 'https://instagram.com/imtarushraj?utm_medium=copy_link',
    insta: 'https://www.linkedin.com/in/tarush-raj-srivastava-5523ab192',
    twt: 'https://twitter.com/TarushRajSriva1?t=uqyCKIX9aRplagdeaebZNQ&s=08',
  },
};

console.log(dataObject[nameKey[selectonNum[0]]]);
console.log(dataObject[nameKey[4]]);

const html = `  <main>

    <div id="carousel">
      <h6>Our Team</h6>

      <div class="prevLeftSecond common" >
        <img class="aksargyan_crousel_image_person" src="${
          dataObject[nameKey[selectonNum[0]]].imgScr
        }">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
               dataObject[nameKey[selectonNum[0]]].linkedIn
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            dataObject[nameKey[selectonNum[0]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                dataObject[nameKey[selectonNum[0]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${nameKey[selectonNum[0]]}</h2><br/>
                    <h3><p>${
                      dataObject[nameKey[selectonNum[0]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>

          <div class="prev common" >
        <img class="aksargyan_crousel_image_person" src="${
          dataObject[nameKey[selectonNum[1]]].imgScr
        }">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
               dataObject[nameKey[selectonNum[1]]].linkedIn
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            dataObject[nameKey[selectonNum[1]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                dataObject[nameKey[selectonNum[1]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${nameKey[selectonNum[1]]}</h2><br/>
                    <h3><p>${
                      dataObject[nameKey[selectonNum[1]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>
          <div class="selected common" >
        <img class="aksargyan_crousel_image_person" src="${
          dataObject[nameKey[selectonNum[2]]].imgScr
        }">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
               dataObject[nameKey[selectonNum[2]]].linkedIn
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            dataObject[nameKey[selectonNum[2]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                dataObject[nameKey[selectonNum[2]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${nameKey[selectonNum[2]]}</h2><br/>
                    <h3><p>${
                      dataObject[nameKey[selectonNum[2]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>
          <div class="next common" >
        <img class="aksargyan_crousel_image_person" src="${
          dataObject[nameKey[selectonNum[3]]].imgScr
        }">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
               dataObject[nameKey[selectonNum[3]]].linkedIn
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            dataObject[nameKey[selectonNum[3]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                dataObject[nameKey[selectonNum[3]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${nameKey[selectonNum[3]]}</h2><br/>
                    <h3><p>${
                      dataObject[nameKey[selectonNum[3]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>
          <div class="nextRightSecond common" >
        <img class="aksargyan_crousel_image_person" src="${
          dataObject[nameKey[selectonNum[4]]].imgScr
        }">
         <div class="aksargyan_deatils_holder"> <div class="crousel_handels">
             <a href="${
               dataObject[nameKey[selectonNum[4]]].linkedIn
             }" target="_blank"><img  src="images/crousel_linkedin.png"  /></a>
          <a href="${
            dataObject[nameKey[selectonNum[4]]].insta
          }" target="_blank" ><img  src="images/crousel_insta.png"/></a>
              <a href="${
                dataObject[nameKey[selectonNum[4]]].twt
              }" target="_blank"><img src="images/crousel_twt.png"   /></a>
            </div>
           <div class="crousel_info" style="width: 100%;">
             <h2>${nameKey[selectonNum[4]]}</h2><br/>
                    <h3><p>${
                      dataObject[nameKey[selectonNum[4]]].branch
                    }</p></h3>
                     
           </div>
            </div>
      </div>


     
    </div>

     


  </main>`;

console.log(html);

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
