(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(2),l=n.n(s),c=n(3),r=n(4),o=n(6),u=n(5),m=n(7),v={display:"flex",alignItems:"center",justifyContent:"center",marginTop:"70px"},d=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).componentWillUnmount=function(){clearInterval(n.timer)},n.state={seconds:"00",value:"00"},n}return Object(m.a)(e,t),Object(r.a)(e,[{key:"startTick",value:function(){var t=Math.floor(this.calculateTime/60),e=this.calculateTime-60*t;this.setState({value:t,seconds:e}),e<10&&this.setState({seconds:"0"+this.state.seconds}),t<10&&this.setState({value:"0"+t}),this.calculateTime++}},{key:"startCountDown",value:function(){var t=this;this.timer=setInterval(function(){t.startTick()},100);var e=this.state.value;this.calculateTime=60*e}},{key:"stopCountDown",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},i.a.createElement("div",{className:"ui content",style:{textAlign:"center"}},i.a.createElement("h1",null,this.state.value,":",this.state.seconds)),i.a.createElement("div",{style:v},i.a.createElement("button",{className:"ui basic button blue",onClick:function(){return t.startCountDown()}},"START"),i.a.createElement("button",{className:"ui basic button red",onClick:function(){return t.stopCountDown()}},"SOTP")))}}]),e}(a.Component),h={display:"flex",justifyContent:"center"},f={width:"50vh",height:"40vh",marginTop:"20vh",border:"1px solid violet",borderRadius:"6px",background:"#",display:"flex",justifyContent:"center"};var p=function(){return i.a.createElement("div",{style:h},i.a.createElement("div",{style:f},i.a.createElement(d,null)))};l.a.render(i.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ebdaa531.chunk.js.map