'use strict';

class CardShow {
  constructor(name, branch, insta , linkedin , twt , pic, number) {
    this.name = name;
    this.branch = branch;
    this.insta = insta;
    this.linkedin = linkedin;
    this.twt = twt;
    this.pic = pic;
    this.id = number;
    this.cardId = "";
    this._setCardid();
  }

  

  _setCardid(){
    this.cardId = this.name[0]+this.branch[0]+this.id;
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
    // console.log(html);
    // console.log(this);
    document.getElementById(this.id).insertAdjacentHTML('beforeend', html);
  }
}
