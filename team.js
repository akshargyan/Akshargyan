'use strict';

const teamContainer = document.querySelectorAll('.our_team_row_div_inner');

class CardShow {
  constructor(name, branch, insta , linkedin , twt , pic, number) {
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


// 1st year entry

// Aakrati Singh 

new CardShow(
  'Aakrati Singh ',
  'Computer Science Engineering',
  'https://instagram.com/aakratisingh_153?igshid=ZGUzMzM3NWJiOQ==',
  '#','#',
  'team/2022-26/IMG20221231233054 - 22CS045 Aakrati Singh.jpg',
  3
);

// Bhavana Tiwari

new CardShow(
  'Bhavana Tiwari',
  'Computer Science Engineering',
  'https://instagram.com/bhavana_tiwari16?igshid=ZGUzMzM3NWJiOQ==',
  'https://www.linkedin.com/in/bhavana-tiwari-29576b272',
  '#',
  'team/2022-26/bhavna.jpg',
  3
);

// Arya Tripathi

new CardShow(
  'Arya Tripathi',
  'Electronics and Communications Engineering',
  'https://www.instagram.com/aryatripathi__04/',
  'https://www.linkedin.com/in/arya-tripathi-379648256',
  '#',
  'team/2022-26/arya.jpg',
  3
);


// Disha Pandey 

new CardShow(
  'Disha Pandey ',
  'Information and Technology',
  'https://instagram.com/dishapandey2556?igshid=MzNlNGNkZWQ4Mg==',
  '#','#',
  'team/2022-26/disha.jpeg',
  3
);

// Anushka Bhushan

new CardShow(
  'Anushka Bhushan',
  'Electrical and Electronics Engineering',
  'https://www.instagram.com/anushka.bhushan/',
  '#','#',
  'team/2022-26/IMG-20220411-WA0086 - Anushka Bhushan.jpg',
  3
);

// Somiya Gupta

new CardShow(
  'Somiya Gupta',
  'Information and Technology',
  'https://instagram.com/__.oblivion07.__?igshid=MzNlNGNkZWQ4Mg==',
  'https://www.linkedin.com/in/somiya-gupta-71763426b',
  '#',
  'team/2022-26/IMG-20230425-WA0165 - Somiya Gupta.jpg',
  3
);

// Sahil Shyam Gupta 

new CardShow(
  'Sahil Shyam Gupta ',
  'Electrical and Electronics Engineering',
  'https://instagram.com/sahilshyamgupta?igshid=ZGUzMzM3NWJiOQ==',
  '#','#',
  'team/2022-26/20230222_234446_0000 - Sahil Shyam Gupta.png',
  3
);

//Arnav Agarwal

new CardShow(
  'Arnav Agarwal',
  'Electrical and Electronics Engineering',
  'https://instagram.com/arnavagrawal78?igshid=ZGUzMzM3NWJiOQ==',
  '#','#',
  'team/2022-26/4c1865e6-f880-4230-8194-841d8fc89170 - Arnav Agrawal.JPG',
  3
);

new CardShow(
  'Ishika Upreti',
  'Electronics and Communications Engineering',
  'https://instagram.com/_ishika_1603?igshid=ZGUzMzM3NWJiOQ==',
  '#','#',
  'team/2022-26/Ishika - Ishika.jpg',
  3
);

// Mohit Kumar

new CardShow(
  'Mohit Kumar',
  'Information and Technology',
  'https://instagram.com/imohit_rajput_2502?igshid=Y2M0YTlkZGNmOQ==',
  'https://www.linkedin.com/in/mohit-kumar-211499253',
  '#',
  'team/2022-26/IMG_20171220_145521-1 - Mohit Kumar.jpg',
  3
)


// Khushi Madeshia 

new CardShow(
  'Khushi Madeshia ',
  'Information and Technology',
  'https://instagram.com/_._khushi_93?igshid=ZGUzMzM3NWJiOQ==',
  'https://www.linkedin.com/in/khushi-madeshia-529502222',
  'https://twitter.com/KhushiMadeshia?t=naUJMb8kfhh2J40vlK-4gw&s=09',
  'team/2022-26/IMG20230521120759 - Khushi Madeshia.jpg',
  3
);

// Dhruv Dhiman 

new CardShow(
  'Dhruv Dhiman',
  'Computer Science Engineering',
  'https://instagram.com/dhiman_dhruv_?igshid=NGExMmI2YTkyZg==',
  'https://www.linkedin.com/in/dhruv-dhiman-5a968726b',
  '#',
  'team/2022-26/IMG_20220921_181523 - Dhruv Dhiman.jpg',
  3
);

// Suryansh Yadav

new CardShow(
  'Suryansh Yadav',
  'Computer Science Engineering (Data Science)',
  'https://instagram.com/suryansh.py?igshid=MzNlNGNkZWQ4Mg==',
  'https://www.linkedin.com/in/suryansh-yadav-76b696257',
  'https://twitter.com/suryansh_py?t=YU9-bpkxDmtZkkg8h4LfVg&s=09',
  'team/2022-26/syuryansh.jpg',
  3
)

// Sangesh Yadav

new CardShow(
  'Sangesh Yadav',
  'Electronics and Communications Engineering',
  'https://instagram.com/sangesh07?igshid=NTc4MTIwNjQ2YQ==',
  '#','#',
  'team/2022-26/sangesh.jpg',
  3
);

// Mahima Gupta

new CardShow(
  'Mahima Gupta',
  'Computer Science Engineering (Data Science)',
  'https://instagram.com/mahima.30_?igshid=ZGUzMzM3NWJiOQ==',
  '#','#',
  'team/2022-26/Screenshot_2023-05-24-22-56-10-959_com.miui.gallery - Mahima Gupta.jpg',
  3
)