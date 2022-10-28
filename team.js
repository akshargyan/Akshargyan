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
// Lekhansh Sachan
new CardShow(
  'Lekhansh Sachan ',
  'Electronics and Communications Engineering',
  'https://www.instagram.com/invites/contact/?i=1ercys0vpmbw9&utm_content=wmatqp',
  'https://www.linkedin.com/in/lekhansh-sachan-6079a523a',
  'https://twitter.com/lekhansh_sachan?t=GOnIc3G_RPkjYBwU6DvfQg&s=08',
  'team/1st_year/Lekhansh Sachan .jpg',
  2
);
