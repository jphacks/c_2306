(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{1743:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]/timeslottable",function(){return n(8408)}])},8408:function(t,e,n){"use strict";n.r(e);var i=n(5893);n(7294),n(5890);var s=n(7536),a=n(3646),c=n.n(a);let TimeCandidateList=t=>{var e;let{date:n,candidateTime:a,register:l,control:o,index:r}=t,{fields:_,append:d,remove:m}=(0,s.Dq)({control:o,name:"dates.".concat(r)});return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:n}),(0,i.jsx)("td",{children:null===(e=Array.from({length:a.length/2},(t,e)=>2*e).slice(0,4))||void 0===e?void 0:e.map(t=>{let e=t+1,n=a[t],s=a[e];return(0,i.jsx)("span",{className:c().candidateTime,children:"".concat(n," ~ ").concat(s)},t)})}),(0,i.jsxs)("td",{children:[_.map((t,e)=>(0,i.jsx)("div",{className:c().time_op,children:(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:c().timeContainer,children:[(0,i.jsx)("input",{className:c().timeInput,...l("dates.".concat(r,".").concat(e,".from_time"))}),(0,i.jsx)("p",{children:" ~ "}),(0,i.jsx)("input",{className:c().timeInput,...l("dates.".concat(r,".").concat(e,".to_time"))}),(0,i.jsx)("button",{type:"button",onClick:()=>m(e),children:"削除"})]})})},t.id)),(0,i.jsx)("button",{type:"button",onClick:()=>{d({from_time:"",to_time:""})},children:"行を追加"})]})]},r)};e.default=t=>{let{dates:e,candidateTimes:n,register:s,control:a}=t;return(0,i.jsxs)("table",{className:c().timeSlotTable,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"日付"}),(0,i.jsx)("th",{children:"候補時間"}),(0,i.jsx)("th",{children:"希望時間"})]})}),(0,i.jsx)("tbody",{children:null==e?void 0:e.map((t,c)=>(0,i.jsx)(TimeCandidateList,{control:a,index:c,register:s,date:e[c],candidateTime:n[c]},c))})]})}},3646:function(t){t.exports={container:"styles_container__TE5Ij",formsection:"styles_formsection__2d3k0",buttonContainer:"styles_buttonContainer__ACFXc",createButton:"styles_createButton__3SFFL","create-button":"styles_create-button__7_Ys9",inputcontainer:"styles_inputcontainer__BwXXp",nameinput:"styles_nameinput__MntQL",timeSlotTable:"styles_timeSlotTable__PtUCu",candidateTime:"styles_candidateTime__ivdG0",timeContainer:"styles_timeContainer__VqaNm",time_op:"styles_time_op__Ro47y",timeInput:"styles_timeInput__2o2L_"}}},function(t){t.O(0,[40,774,888,179],function(){return t(t.s=1743)}),_N_E=t.O()}]);