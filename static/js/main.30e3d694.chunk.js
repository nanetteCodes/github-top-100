(this["webpackJsonpgithub-top-100"]=this["webpackJsonpgithub-top-100"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){e.exports=a(30)},20:function(e,t,a){},21:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o);a(20),a(21);var c=function(){return r.a.createElement("div",{className:"header"},"Github Top 100")},s=a(2),i=a.n(s),m=a(5),u=a(6),d=a(8),h=a(7),p=a(9),v=a(1),E=a.n(v),f=a(3),g=a(4),b=(a(28),function(e){var t=e.repoName,a=e.repoUrl,n=e.starCount,o=e.handleClick,l=e.id;return r.a.createElement("div",{className:"card",id:l},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("a",{className:"card-url",target:"_blank",rel:"noopener noreferrer",href:a},"View Repository"),r.a.createElement("div",{className:"card-star--container"},r.a.createElement(f.a,{icon:g.a}),r.a.createElement("span",{className:"card-stars"},n))),r.a.createElement("button",{className:"card-button",onClick:o},"Commits"))});b.propType={repoName:E.a.string.isRequired,repoUrl:E.a.string.isRequired,starCount:E.a.string.isRequired,handleClick:E.a.func.isRequired,id:E.a.string.isRequired};var k=b,w=(a(13),function(e){var t=e.author,a=e.commitLink,n=e.date,o=e.handleClose,l=e.id,c=e.imgUrl,s=e.show,i=e.message,m=s?"modal display-block":"modal display-none";return r.a.createElement("div",{className:m},r.a.createElement("div",{className:"modal-main",id:l},r.a.createElement("button",{onClick:o},r.a.createElement(f.a,{icon:g.b})),r.a.createElement("h1",{className:"modal-title"},"Commits Made Since ",n," "),r.a.createElement("div",{style:{overflow:"auto",height:"68vh"}},r.a.createElement("div",{className:"modal-item"},r.a.createElement("img",{src:c,alt:i}),r.a.createElement("div",{className:"modal-item--body"},r.a.createElement("h2",null,t),r.a.createElement("h4",null,"Time: ",n),r.a.createElement("p",null,r.a.createElement("strong",null,"Message:")," ",i),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"View Commit"))))))}),y=function(e){var t=e.handleClose,a=e.show,n=e.message,o=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:o},r.a.createElement("div",{className:"modal-main"},r.a.createElement("div",{style:{overflow:"auto",height:"75vh"}},r.a.createElement("button",{onClick:t},r.a.createElement(f.a,{icon:g.b})),r.a.createElement("h1",{className:"modal-title"},n))))},N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={commitUrl:"",commitData:[],modal:!1},a.handleClick=function(e){var t,n,r;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=new Date((new Date).getTime()-864e5),a.setState({commitUrl:e}),o.prev=2,o.next=5,i.a.awrap(fetch("".concat(e,"?since=").concat(t)));case 5:return n=o.sent,o.next=8,i.a.awrap(n.json());case 8:if(r=o.sent,n.ok){o.next=11;break}throw Error(n.statusText);case 11:a.setState({commitData:r,modal:!0}),o.next=18;break;case 14:o.prev=14,o.t0=o.catch(2),console.log(o.t0),alert(o.t0);case 18:case"end":return o.stop()}}),null,null,[[2,14]])},a.hideModal=function(){a.setState({modal:!1})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.repos,a=this.state.commitData;return r.a.createElement(r.a.Fragment,null,t.map((function(t){return r.a.createElement(k,{key:t.id,repoName:t.name,repoUrl:t.html_url,starCount:t.stargazers_count,handleClick:function(){return e.handleClick(t.commits_url.split("{")[0])}})})),a.length?a.map((function(t){return r.a.createElement(w,{show:e.state.modal,handleClose:e.hideModal,key:t.node_id,author:t.commit.author.name,commitLink:t.html_url,date:t.commit.author.date,id:t.node_id,imgUrl:t.author.avatar_url,message:t.commit.message})})):r.a.createElement(y,{message:"No Commits Made For 24 Hours",show:this.state.modal,handleClose:this.hideModal}))}}]),t}(n.Component),C=(a(29),function(){return r.a.createElement("div",{className:"loader"})}),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={repos:[],loading:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,this.setState({loading:!0}),a.next=4,i.a.awrap(fetch("https://api.github.com/search/repositories?q=stars&sort=stars&order=desc&per_page=100"));case 4:return e=a.sent,a.next=7,i.a.awrap(e.json());case 7:if(t=a.sent,e.ok){a.next=10;break}throw Error(e.statusText);case 10:this.setState({repos:t.items,loading:!1}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.log(a.t0);case 16:case"end":return a.stop()}}),null,this,[[0,13]])}},{key:"render",value:function(){var e=this.state,t=e.repos,a=e.loading;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(C,null):null,r.a.createElement("div",{className:"container grid"},r.a.createElement(N,{repos:t})))}}]),t}(n.Component);var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.30e3d694.chunk.js.map