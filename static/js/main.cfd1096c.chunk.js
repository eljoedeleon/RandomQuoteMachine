(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(3),i=a.n(r),s=a(4),h=a(5),u=a(1),l=a(7),d=a(6),c=(a(13),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={randomIndex:"0",fade:!1},o.generateQuote=o.generateQuote.bind(Object(u.a)(o)),o}return Object(h.a)(a,[{key:"generateQuote",value:function(){this.setState({randomIndex:Math.floor(21*Math.random()),fade:!0})}},{key:"render",value:function(){var e=this,t=[{quote:"Winter is coming.",author:"Ned Stark"},{quote:"Fear cuts deeper than swords.",author:"Arya Stark"},{quote:"Everything before the word \u2018but\u2019 is horseshit.",author:"Jon Snow"},{quote:"A lion doesn\u2019t concern himself with the opinions of a sheep.",author:"Tywin Lannister"},{quote:"If you think this has a happy ending you haven\u2019t been paying attention.",author:"Ramsay Bolton"},{quote:"A man with no motive is a man no one suspects. Always keep your foes confused.",author:"Lord Baelish"},{quote:"The man who passes the sentence should swing the sword.",author:"Ned Stark"},{quote:"Any man who must say \u2018I am the king\u2019 is no true king.",author:"Tywin Lannister"},{quote:"A ruler who kills those devoted to her is not a ruler who inspires devotion.",author:"Tyrion Lannister"},{quote:"Power resides where men believe it resides. It\u2019s a trick, a shadow on the wall. And a very small man can cast a very large shadow.",author:"Lord Varys"},{quote:"When you play the game of thrones, you win or you die.",author:"Cersei Lannister"},{quote:"Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.",author:"Tyrion Lannister"},{quote:"Chaos isn\u2019t a pit. Chaos is a ladder.",author:"Lord Baelish"},{quote:"The world is overflowing with horrible things, but they\u2019re all a tray of cakes next to death.",author:"Olenna Tyrell"},{quote:"Nothing f***s you harder than time.",author:"Ser Davos"},{quote:"I don\u2019t care about checking my worst impulses. I don\u2019t care about making the world a better place. Hang the world.",author:"Cersei Lannister"},{quote:"All men must die, but we are not men.",author:"Daenerys Targaryen"},{quote:"The night is dark and full of terrors",author:"Melisandre"},{quote:"There is only one god and his name is Death, and there is only one thing we say to Death: \u2018Not today.\u2019",author:"Syrio Forel"},{quote:"The freedom to make my own mistakes was all I ever wanted.",author:"Mance Rayder"},{quote:"It doesn\u2019t matter what we want. Once we get it, then we want something else.",author:"Lord Baelish"}],a=this.state.fade,o=t[this.state.randomIndex].quote,r=t[this.state.randomIndex].author,i="https://twitter.com/intent/tweet?text=".concat(o," - ").concat(r);return n.a.createElement("div",{id:"container"},n.a.createElement("div",{id:"quote-box"},n.a.createElement("div",{onAnimationEnd:function(){return e.setState({fade:!1})},className:a?"fadeIn":""},n.a.createElement("div",{id:"text"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-quote-left"})," ",o)),n.a.createElement("div",{id:"author"},n.a.createElement("p",null,n.a.createElement("em",null,"- ",r)))),n.a.createElement("button",{id:"new-quote",onClick:this.generateQuote},"New Quote"),n.a.createElement("a",{href:i,id:"tweet-quote",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-twitter"}))),n.a.createElement("footer",null,"by"," ",n.a.createElement("a",{href:"https://github.com/eljoedeleon",target:"_blank",rel:"noopener noreferrer"},"eljoedeleon")))}}]),a}(o.Component));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.cfd1096c.chunk.js.map