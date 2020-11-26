(this["webpackJsonpdad-jokes-app"]=this["webpackJsonpdad-jokes-app"]||[]).push([[0],{28:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(2),o=s.n(a),i=s(15),c=s.n(i),r=(s(28),s(6)),l=s(5),u=s.n(l),j=s(20),d=s(16),h=s(17),v=s(18),k=s(3),f=s(22),m=s(21),b=(s(30),s(31),function(e){var t=function(){return e.votes>=15?"em em-rolling_on_the_floor_laughing":e.votes>=12?"em em-laughing":e.votes>=9?"em em-smiley":e.votes>=6?"em em-slightly_smiling_face":e.votes>=3?"em em-neutral_face":e.votes>=0?"em em-confused":"em em-angry"};return Object(n.jsxs)("div",{className:"Joke",children:[Object(n.jsxs)("div",{className:"Joke-buttons",children:[Object(n.jsx)("i",{className:"fas fa-arrow-up",onClick:e.upvote}),Object(n.jsx)("span",{className:"Joke-votes",style:{borderColor:e.votes>=15?"#4CAF50":e.votes>=12?"#8BC34A":e.votes>=9?"#CDDC39":e.votes>=6?"#FFEB3B":e.votes>=3?"#FFC107":e.votes>=0?"#FF9800":"#f44336"},children:e.votes}),Object(n.jsx)("i",{className:"fas fa-arrow-down",onClick:e.downvote})]}),Object(n.jsx)("div",{className:"Joke-text",children:e.text}),Object(n.jsx)("div",{className:"Joke-smiley",children:Object(n.jsx)("i",{className:t(),"aria-role":"presentation","aria-label":function(){var e=t();return e.slice(e.indexOf("-")+1)}()})})]})}),p=s(19),O=s.n(p),g=s(52),x=function(e){Object(f.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},n.seenJokes=new Set(n.state.jokes.map((function(e){return e.text}))),n.handleClick=n.handleClick.bind(Object(k.a)(n)),n}return Object(v.a)(s,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"getJokes",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,s,n,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<this.props.numJokesToGet)){e.next=10;break}return e.next=5,O.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 5:s=e.sent,n=s.data.joke,this.seenJokes.has(n)||t.push({id:Object(g.a)(),text:n,votes:0}),e.next=2;break;case 10:this.setState((function(e){return{loading:!1,jokes:[].concat(Object(j.a)(e.jokes),t)}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0),this.setState({loading:!1});case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){var s=this;this.setState((function(s){return{jokes:s.jokes.map((function(s){return s.id===e?Object(r.a)(Object(r.a)({},s),{},{votes:s.votes+t}):s}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))}))}},{key:"handleClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"render",value:function(){var e=this;if(this.state.loading)return Object(n.jsxs)("div",{className:"JokeList-spinner",children:[Object(n.jsx)("i",{className:"far fa-8x fa-laugh fa-spin"}),Object(n.jsx)("h1",{className:"JokeList-title",children:"Loading..."})]});var t=this.state.jokes.sort((function(e,t){return t.votes-e.votes}));return Object(n.jsxs)("div",{className:"JokeList",children:[Object(n.jsxs)("div",{className:"JokeList-sidebar",children:[Object(n.jsxs)("h1",{className:"JokeList-title",children:[Object(n.jsx)("span",{children:"Dad"})," Jokes"]}),Object(n.jsx)("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"rotfl"}),Object(n.jsx)("button",{className:"JokeList-getmore",onClick:this.handleClick,children:"Fetch Jokes"})]}),Object(n.jsx)("div",{className:"JokeList-jokes",children:t.map((function(t){return Object(n.jsx)("div",{children:Object(n.jsx)(b,{votes:t.votes,text:t.text,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}},t.id)})}))})]})}}]),s}(a.Component);x.defaultProps={numJokesToGet:10};var J=x;s(49);var N=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(J,{})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,53)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),o(e),i(e)}))};c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.2f404705.chunk.js.map