'use strict';

const teamContainer = document.querySelectorAll('.our_team_row_div_inner');

class CardShow {
  constructor(name, branch, insta, linkedin, twt, pic, number) {
    this.name = name;
    this.branch = branch;
    this.insta = insta;
    this.linkedin = linkedin;
    this.twt = twt;
    this.pic = pic;
    this.no = number;
    this._setHtml();
  }

  _setHtml() {
    let html = `<div class="our_team_indi"><img src="${this.pic}"/>
                      <h2>${this.name}</h2>
                      <div style="width: 100%; height: 91px"><p>${this.branch}</p></div>
                      <div class="our_teams_indi_links_conatainer">
                          <a href="${this.insta}" target="_blank"><img src="images/Instagram_OUR.png"/></a>
                          <a href="${this.linkedin}" target="_blank"><img src="images/LinkedIn_OUR.png"/></a>
                          <a href="${this.twt}" target="_blank"><img src="images/Twt_OUR.png"/></a>
                      </div>
                  </div>`;
    console.log(html);

    teamContainer[this.no].insertAdjacentHTML('beforeend', html);
  }
}

// 3rd years
new CardShow(
  'Yash ',
  'Civil Engineering',
  'https://www.instagram.com/yashgupta6445?r=nametag',
  'https://www.linkedin.com/in/yash-gupta-91b129253',
  '#',
  'team/2nd_year/Yash Gupta.jpg',
  1
);

new CardShow(
  'Abhinav Pal',
  'Mechanical Engineering',
  'https://instagram.com/abh.inav92?igshid=YmMyMTA2M2Y=',
  '#',
  '#',
  'team/2nd_year/Abhinav pal.jpg',
  1
);
// 2nd years


// Sharad Tomar
new CardShow(
  'Sharad Tomar',
  'Electronics and Communications Engineering',
  'https://www.instagram.com/sharadrajputt/',
  'https://www.linkedin.com/in/sharadtomarr',
  'https://twitter.com/Sharadrajputt?t=uXOwezKVGvbALKdliz1gYw&s=08',
  'team/1st_year/Sharad Tomar.jpeg',
  2
);
// Rohit Rana
new CardShow(
  'Rohit Rana',
  'Mechanical Engineering',
  'https://instagram.com/rohitrana_17?igshid=MzNlNGNkZWQ4Mg==',
  '#',
  '#',
  'team/1st_year/IMG_20230421_155455 - Rohit Rana.jpg',
  2
);

// Nitin Kumar Rajpoot

new CardShow(
  'Nitin Kumar Rajpoot',
  'Civil Engineering',
  'https://www.instagram.com/nikki____don/',
  'https://www.linkedin.com/in/nitin-kumar-rajpoot-10551219b',
  'https://twitter.com/NitinKumarNikk4?t=Gl8ZdrbaYgZ1KXXIiK8cyg&s=08',
  'team/1st_year/Nitin Kumar Rajpoot.jpg',
  2
);

// Aditya Verma
new CardShow(
'Aditya Verma',
'Electronics and Communications Engineering',
'https://www.instagram.com/aditya.v12345/',
'#',
'#',
'team/1st_year/Aditya Verma-min.jpg',
2
);

// Anshul Mittal

new CardShow(
  'Anshul Mittal',
  'Information Technology',
  'https://www.instagram.com/mittalanshul_1012/',
  'https://www.linkedin.com/in/anshul-mittal-14a041238/',
  'https://twitter.com/amittal1012',
  'team/1st_year/Anshul.jpeg',
  2
);




// Lekhansh Sachan
new CardShow(
  'Lekhansh Sachan',
  'Electronics and Communications Engineering',
  'https://www.instagram.com/invites/contact/?i=1ercys0vpmbw9&utm_content=wmatqp',
  'https://www.linkedin.com/in/lekhansh-sachan-6079a523a',
  'https://twitter.com/lekhansh_sachan?t=GOnIc3G_RPkjYBwU6DvfQg&s=08',
  'team/1st_year/Lekhansh Sachan .jpg',
  2
);

// Pratham Gupta 

new CardShow(
  'Pratham Gupta ',
  'Civil Engineering',
  'https://instagram.com/pratham_g_8633?igshid=MzNlNGNkZWQ4Mg==',
  '#',
  '#',
  'team/1st_year/IMG_20230509_163723 - Pratham Gupta.jpg',
  2
)

// Yashswani Mishra

new CardShow(
  'Yashswani Mishra',
  'Information Technology',
  'https://www.instagram.com/yashu.xo/',
  'https://mobile.twitter.com/YashswaniMishra',
  'https://www.linkedin.com/in/yashswani-mishra-she-her-788803227/',
  'team/1st_year/Yashswani Mishra.jpeg',
  2

);

// Anammya Vaish 

new CardShow(
  'Anammya Vaish ',
  'Electronics and Communications Engineering',
  'https://www.instagram.com/anammyavaish/',
  'www.linkedin.com/in/anammya-vaish-854681223',
  '#',
  'team/1st_year/Anammya Vaish.jpeg',
  2
)