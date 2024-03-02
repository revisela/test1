(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[727],{3395:function(e,t,n){Promise.resolve().then(n.bind(n,5425))},5425:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var i=n(3827),s=n(4090),l=n(7907),r=n(2670),a=n(1991),o=n(7957),c=n(6550),d=n(5603),u=n(5045),m=n(7561),p=n(9522),f=n(5854),h=e=>{let{color:t="#FF0000"}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",children:[(0,i.jsx)("path",{d:"M11.8733 11.8739L22.7959 22.7965",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M22.7956 11.874L11.8731 22.7966",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})},v=n(2529),x=n.n(v),q=e=>{let{register:t}=e,n=(0,u.v9)(m.$l),s=(0,u.I0)();return(0,i.jsxs)("div",{children:[n&&(0,i.jsx)("div",{className:"d-flex justify-content-end",children:(0,i.jsxs)(c.Z,{variant:"dark",size:"sm",className:"mb-2 d-flex align-items-center",onClick:()=>{s(m.JZ.reset()),window.localStorage.clear(),window.location.reload()},children:["Reset Quiz ",(0,i.jsx)(h,{color:"#fff"})]})}),(0,i.jsx)("div",{className:x().container,children:(0,i.jsx)(p.Z,{className:"w-100",primary:!0,children:(0,i.jsxs)(d.Z.Group,{children:[(0,i.jsx)(f.Z,{...t("title",{required:!0}),className:"mb-2",name:"title",placeholder:"Title"}),(0,i.jsx)(f.Z,{...t("description",{required:!0}),name:"description",placeholder:"Description (Optional)"})]})})})]})},j=n(2362),_=n(7292),C=n.n(_),y=e=>{let{onSelectQuestion:t}=e,n=e=>{t(e)};return(0,i.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-column w-100",children:[(0,i.jsx)("div",{className:C()["card-label"],children:(0,i.jsx)("h6",{children:"Select a question type!"})}),(0,i.jsxs)("div",{className:"mt-2 d-flex align-items-center justify-content-center gap-3 mb-2 flex-wrap",children:[(0,i.jsx)(w,{onSelectType:n,type:"flashcard"}),(0,i.jsx)(w,{onSelectType:n,type:"mcq"}),(0,i.jsx)(w,{onSelectType:n,type:"fill-in"})]})]})};let w=e=>{let{type:t,onSelectType:n,isSmall:s}=e;switch(t){case"flashcard":return(0,i.jsx)("div",{onClick:()=>n&&n(t),className:"".concat(C()["question-type-card"]," ").concat(C()[t]," ").concat(s&&C().small),children:(0,i.jsx)("h5",{children:"Flashcard"})});case"mcq":return(0,i.jsx)("div",{onClick:()=>n&&n(t),className:"".concat(C()["question-type-card"]," ").concat(C()[t]," ").concat(s&&C().small),children:(0,i.jsx)("h5",{children:"Multiple Choice Question (MCQ)"})});default:return(0,i.jsx)("div",{onClick:()=>n&&n(t),className:"".concat(C()["question-type-card"]," ").concat(C()[t]," ").concat(s&&C().small),children:(0,i.jsx)("h5",{children:"Fill-In"})})}};var g=n(8806),z=n.n(g),N=n(5950),Q=e=>{var t;let{quizIndex:n,register:l,control:a}=e,[o,c]=(0,s.useState)(""),{fields:u,append:m,remove:p,update:v,replace:x}=(0,r.Dq)({control:a,name:"quizes.".concat(n,".mcq.options")}),[q,j]=(0,s.useState)([]);(0,s.useEffect)(()=>{0===u.length&&0===q.length&&j([{id:(Date.now()-10).toString(),option:""},{id:(Date.now()-20).toString(),option:""}])},[u,q]),(0,s.useEffect)(()=>{if(!((null==u?void 0:u.length)>0)||(null==q?void 0:q.length)){let e=setTimeout(()=>{x(q)},500);return()=>{clearTimeout(e)}}j(u),x([])},[q]);let _=null==q?void 0:q.find(e=>null==e?void 0:e.isCorrect),C=e=>{let{id:t,index:n}=e,i=null==q?void 0:q.map(e=>({...e,isCorrect:(null==e?void 0:e.id)===t}));c(t),j(i)},y=()=>{j([...q,{id:Date.now(),option:""}]),m({id:Date.now()})},g=(e,t)=>{j(null==q?void 0:q.map(n=>(null==n?void 0:n.id)===e?{...n,option:t}:n))},Q=e=>{j(null==q?void 0:q.filter(t=>(null==t?void 0:t.id)!==e))};return(0,i.jsxs)("div",{className:"w-100",children:[(0,i.jsxs)("div",{className:"".concat(z()["input-container"]),children:[(0,i.jsx)(d.Z.Group,{className:"w-100 mb-4",children:(0,i.jsx)(f.Z,{...l("quizes.".concat(n,".mcq.question"),{required:!0}),name:"quizes.".concat(n,".mcq.question"),placeholder:"Enter Question",className:"w-100",required:!0})}),(0,i.jsx)(d.Z.Group,{className:"mb-4 d-flex align-items-start justify-content-start gap-2 flex-column",children:q.map((e,t)=>(0,i.jsxs)("div",{className:"d-flex align-items-center justify-content-flex-start",children:[(0,i.jsxs)("span",{className:"me-2",children:[(0,N.DK)(t+1),"."]}),(0,i.jsx)(f.Z,{className:"w-100",name:"option-".concat(e.id),placeholder:"Enter Option",value:null==e?void 0:e.option,onChange:t=>g(e.id,t.target.value),required:!0}),q.length>2&&(0,i.jsx)("span",{className:"cursor-pointer",onClick:()=>Q(e.id),children:(0,i.jsx)(h,{color:"#000"})})]},"".concat(t,"-")))}),(0,i.jsx)("span",{className:"".concat(z()["add-option-button"]," mt-4 cursor-pointer"),onClick:y,children:"Add Option +"}),(0,i.jsxs)("div",{className:"d-flex align-items-center justify-content-start gap-2",children:[(0,i.jsx)("span",{className:"".concat(z()["add-option-button"]," "),onClick:y,children:"Select Correct Option:"}),(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-start gap-1",children:null==q?void 0:q.map((e,t)=>(0,i.jsx)("span",{onClick:()=>C({id:null==e?void 0:e.id,index:t}),className:"".concat(z().option," ").concat((null==e?void 0:e.isCorrect)?z().selected:void 0," cursor-pointer"),children:(0,N.DK)(t+1)},e.id))})]})]}),(0,i.jsx)("div",{className:"".concat(z()["question-type-card"]," d-flex align-items-end justify-content-end"),children:(0,i.jsx)(w,{isSmall:!0,type:"mcq"})}),(null==_?void 0:null===(t=_.id)||void 0===t?void 0:t.length)>0?(0,i.jsx)("input",{value:null==_?void 0:_.id,type:"text",className:"d-none",required:!0}):(0,i.jsx)("input",{value:o,type:"text",className:"d-none",required:!0})]})},b=e=>{let{register:t,quizIndex:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:z()["flashcard-container"],children:(0,i.jsxs)(d.Z.Group,{className:"d-flex align-items-center justify-content-center gap-2",children:[(0,i.jsx)(f.Z,{...t("quizes.".concat(n,".flashCard.question"),{required:!0}),name:"quizes.".concat(n,".flashCard.question"),placeholder:"Front Side"}),(0,i.jsx)(f.Z,{...t("quizes.".concat(n,".flashCard.answer"),{required:!0}),name:"quizes.".concat(n,".flashCard.answer"),placeholder:"Back Side"})]})}),(0,i.jsx)("div",{className:"".concat(z()["question-type-card"]," d-flex align-items-end justify-content-end"),children:(0,i.jsx)(w,{isSmall:!0,type:"flashcard"})})]})},S=e=>{var t,n,s,l;let{register:r,errors:a,quizIndex:o}=e,c=null==a?void 0:null===(l=a.quizes)||void 0===l?void 0:null===(s=l[o])||void 0===s?void 0:null===(n=s.fillIn)||void 0===n?void 0:null===(t=n.text)||void 0===t?void 0:t.message;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"".concat(z()["fillin-container"]," w-100"),children:[(0,i.jsx)(f.Z,{...r("quizes.".concat(o,".fillIn.text")),name:"quizes.".concat(o,".fillIn.text"),className:"mb-1",placeholder:"Type here",required:!0}),c&&(0,i.jsx)("p",{className:"".concat(z()["error-text"]," text-danger"),children:c}),(0,i.jsxs)("p",{className:z()["info-text"],children:["To create the blank, add 2 Question marks around the word without leaving any spaces. Eg: ??WORD?? ",(0,i.jsx)("br",{}),"Note: You can only create one fill-in per question"]})]}),(0,i.jsx)("div",{className:"".concat(z()["question-type-card"]," d-flex align-items-end justify-content-end"),children:(0,i.jsx)(w,{isSmall:!0,type:"fill-in"})})]})},k=n(9955),I=n.n(k),R=e=>{let{quizId:t,quizNum:n,quizIndex:l,errors:r,register:a,insert:o,remove:c,control:d,quiz:u}=e,m=(0,N.Qr)(u),[f,v]=(0,s.useState)(m),x=e=>{c(e)};return(0,i.jsx)(p.Z,{className:"".concat(I()["quiz-container"]),primary:!0,children:(0,i.jsxs)("div",{style:(null==f?void 0:f.length)>0?{marginBottom:"0px !important"}:void 0,className:I().container,children:[n>0&&(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-end position-relative",children:(0,i.jsx)("span",{onClick:()=>x(l),className:I()["delete-btn"],children:(0,i.jsx)(h,{})})}),(0,i.jsxs)("span",{className:I()["number-count"],children:[n,"."]}),(null==f?void 0:f.length)>0?(0,i.jsx)(i.Fragment,{children:(()=>{let e={mcq:(0,i.jsx)(Q,{quizIndex:l,register:a,control:d}),flashcard:(0,i.jsx)(b,{quizIndex:l,register:a}),"fill-in":(0,i.jsx)(S,{errors:r,quizIndex:l,register:a})};return(0,i.jsx)(i.Fragment,{children:e[f]})})()}):(0,i.jsx)(y,{onSelectQuestion:e=>v(e)}),(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-center position-relative",children:(0,i.jsx)("span",{onClick:()=>{o(l+1,{id:t})},className:I()["add-button"],children:(0,i.jsx)(j.wEH,{size:32})})})]})})},Z=n(120),O=n.n(Z),A=e=>{var t,n;let d=a.Ry({title:a.Z_().required("Quiz title is requried"),description:a.Z_().notRequired(),quizes:a.IX().of(a.Ry({id:a.Z_().required(),type:a.Z_(),flashCard:a.Ry({question:a.Z_(),answer:a.Z_()}).notRequired(),mcq:a.Ry({question:a.Z_(),options:a.IX().of(a.Ry({option:a.Z_(),isCorrect:a.O7()}))}).notRequired(),fillIn:a.Ry({text:N.PK.notRequired()}).notRequired()}))}),p=(0,u.v9)(m.Rl),f=(0,u.v9)(m._7),h=(0,u.v9)(m.$l),{register:v,control:x,handleSubmit:j,formState:{errors:_},setValue:C}=(0,r.cI)({mode:"onChange",resolver:(0,o.X)(d),defaultValues:{quizes:(null==p?void 0:p.length)!==0?p:[{id:"1"}],title:null!==(t=null==f?void 0:f.title)&&void 0!==t?t:"",description:null!==(n=null==f?void 0:f.description)&&void 0!==n?n:""}}),{fields:y,append:w,insert:g,remove:z}=(0,r.Dq)({control:x,name:"quizes"});(0,s.useEffect)(()=>{h||(C("quizes",[{id:"".concat(Date.now())}]),C("title",""),C("description",""))},[h,C]),(0,s.useEffect)(()=>{(null==y?void 0:y.length)===0&&(window.localStorage.clear(),C("quizes",[{id:"".concat(Date.now())}]))},[y]);let Q=(0,u.I0)(),b=(0,l.useRouter)();return(0,i.jsx)("form",{onSubmit:j(e=>{var t;(null===(t=(0,N.Xe)(null==e?void 0:e.quizes))||void 0===t?void 0:t.length)&&(Q(m.JZ.addQuiz(e)),b.push("/take-quiz"))}),children:(0,i.jsxs)("div",{className:O().container,children:[(0,i.jsx)("div",{className:"mb-5",children:(0,i.jsx)(q,{register:v})}),(0,i.jsx)("div",{className:"mb-5",children:null==y?void 0:y.map((e,t)=>(0,i.jsx)(s.Fragment,{children:(0,i.jsx)(R,{register:v,errors:_,setValue:C,append:w,insert:g,remove:z,control:x,quizId:null==e?void 0:e.id,quizNum:t+1,quizIndex:t,quiz:e})},null==e?void 0:e.id))}),(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:(0,i.jsx)(c.Z,{type:"submit",className:O()["create-btn"],children:"Create My Test"})})]})})}},5854:function(e,t,n){"use strict";var i=n(3827),s=n(4090),l=n(8093);let r=s.forwardRef((e,t)=>{let{onChange:n,name:s,value:r,type:a,defaultValue:o,placeholder:c,className:d,id:u,required:m=!1,disabled:p=!1}=e;return(0,i.jsx)(l.Z,{required:m,ref:t,className:d,id:u,onChange:n,name:s,value:r,type:a,disabled:p,defaultValue:o,placeholder:c})});t.Z=s.memo(r),r.displayName="Input"},9522:function(e,t,n){"use strict";var i=n(3827);n(4090);var s=n(8997),l=n.n(s);t.Z=e=>{let{children:t,className:n,primary:s}=e;return(0,i.jsx)("div",{className:"".concat(n," ").concat(s&&l().primary),children:t})}},5045:function(e,t,n){"use strict";n.d(t,{Dj:function(){return m},h:function(){return u},I0:function(){return f},v9:function(){return p}});var i=n(4214),s=n(828),l=n(7933),r=n(3646),a=n(7722),o=n(7561);let c=(0,a.Z)("local"),d=(0,r.UY)({quiz:o.ZP.reducer}),u=(0,i.xC)({reducer:(0,l.OJ)({key:"root",storage:c},d)}),m=(0,l.p5)(u),p=s.v9,f=()=>(0,s.I0)()},7561:function(e,t,n){"use strict";n.d(t,{$l:function(){return m},JZ:function(){return o},LS:function(){return v},Rl:function(){return d},_7:function(){return u},cd:function(){return h},tF:function(){return p},zR:function(){return f}});var i=n(4214),s=n(4419),l=n(5950);let r="quiz",a=(0,i.oM)({initialState:{title:"",description:"",quizes:[],isSaved:!1,result:{totalQuestions:0,correctAnswers:0,wrongAnswers:0},isResultActive:!1,isResultModalOpen:!1,isShowCorrectAnswers:!1},name:r,reducers:{addQuiz:(e,t)=>{let{title:n,description:i,quizes:s}=t.payload;e.title=n,e.description=i,e.quizes=s,e.isSaved=!0},updateFlashCardAnswer:(e,t)=>{let n=(0,l.Xe)([...e.quizes]).map(e=>{let n=(0,l.Qr)(e);return e.id===t.payload.id&&"flashcard"===n&&e.flashCard?{...e,flashCard:{...e.flashCard,userAnswer:t.payload.userAnswer}}:e});e.quizes=n},updateMcqCardAnswer:(e,t)=>{let n=(0,l.Xe)([...e.quizes]).map(e=>{let n=(0,l.Qr)(e);return e.id===t.payload.id&&"mcq"===n&&e.mcq?{...e,mcq:{...e.mcq,options:[...e.mcq.options],isSelectedOptionCorrect:t.payload.isSelectedOptionCorrect,selectedOption:t.payload.selectedOptionId}}:e});e.quizes,e.quizes=n},updateFillInCardAnswer:(e,t)=>{let n=(0,l.Xe)([...e.quizes]).map(e=>{let n=(0,l.Qr)(e);return e.id===t.payload.id&&"fill-in"===n&&e.fillIn?{...e,fillIn:{...e.fillIn,userAnswer:t.payload.userAnswer,isUserAnswerCorrect:t.payload.isUserAnswerCorrect}}:e});e.quizes=n},getResult:e=>{var t,n;let i=(null===(t=e.quizes)||void 0===t?void 0:t.length)||0,s=0,r=0;null===(n=e.quizes)||void 0===n||n.map(e=>{let t=(0,l.Qr)(e);if("fill-in"===t&&e.fillIn){var n;(null==e?void 0:null===(n=e.fillIn)||void 0===n?void 0:n.isUserAnswerCorrect)?s++:r++}"flashcard"===t&&e.flashCard&&((null==e?void 0:e.flashCard.userAnswer)==="correct"?s++:r++),"mcq"===t&&e.mcq&&((null==e?void 0:e.mcq.isSelectedOptionCorrect)?s++:r++)}),e.result={totalQuestions:i,correctAnswers:s,wrongAnswers:r},e.isResultActive=!0,e.isResultModalOpen=!0},closeResultModal:e=>{e.isResultModalOpen=!1},openResultModal:e=>{e.isResultModalOpen=!0},showCorrectAnswers:e=>{e.isShowCorrectAnswers=!0},resetResultState:e=>{e.isResultActive=!1,e.isResultModalOpen=!1,e.isShowCorrectAnswers=!1},reset:e=>{e.title="",e.description="",e.quizes=[],e.result={totalQuestions:0,correctAnswers:0,wrongAnswers:0},e.isSaved=!1,e.isResultActive=!1,e.isResultModalOpen=!1}}}),o=a.actions;t.ZP=a;let c=e=>e[r],d=(0,s.P1)(c,e=>(0,l.Xe)(e.quizes)),u=(0,s.P1)(c,e=>({title:e.title,description:e.description})),m=(0,s.P1)(c,e=>e.isSaved),p=(0,s.P1)(c,e=>e.result),f=(0,s.P1)(c,e=>e.isResultActive),h=(0,s.P1)(c,e=>e.isResultModalOpen),v=(0,s.P1)(c,e=>e.isShowCorrectAnswers)},5950:function(e,t,n){"use strict";n.d(t,{DK:function(){return l},PK:function(){return d},Qr:function(){return a},Xe:function(){return r},e9:function(){return c},hg:function(){return o}});var i=n(1991);let s={1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h",9:"i",10:"j",11:"k",12:"l",13:"m",14:"n",15:"o",16:"p",17:"q",18:"r",19:"s",20:"t",21:"u",22:"v",23:"w",24:"x",25:"y",26:"z"},l=e=>s[e].toUpperCase();function r(e){return e.filter(e=>(null==e?void 0:e.fillIn)&&0!==Object.values(null==e?void 0:e.fillIn).length||e.mcq&&e.mcq.question||e.flashCard&&e.flashCard.question).map(e=>{var t,n,i;let s={};return(null==e?void 0:e.fillIn)&&0!==Object.keys(e.fillIn).length&&(s.fillIn=e.fillIn),e.mcq&&e.mcq.question&&(s.mcq={question:e.mcq.question,isSelectedOptionCorrect:null==e?void 0:null===(t=e.mcq)||void 0===t?void 0:t.isSelectedOptionCorrect,selectedOption:null==e?void 0:null===(n=e.mcq)||void 0===n?void 0:n.selectedOption},e.mcq.options&&(s.mcq.options=e.mcq.options.filter(e=>e.option))),e.flashCard&&e.flashCard.question&&(s.flashCard={question:e.flashCard.question,answer:e.flashCard.answer,userAnswer:null!==(i=e.flashCard.userAnswer)&&void 0!==i?i:"not-attempted"}),s.id=e.id,s})}let a=e=>({fillIn:"fill-in",mcq:"mcq",flashCard:"flashcard"})[Object.keys(e).filter(e=>"id"!==e)[0]],o=e=>{let t=e.matchAll(/\?\?(.*?)\?\?/g),n=[],i=1;for(let e of t){let t=e[1];n.push({id:i,blank:t.trim()}),i++}return n};function c(e,t){return 100*e/t}let d=i.Z_().test("advanced-validation","Invalid question: it should contain one instance of double question marks with any text in between",e=>{if(!e)return!0;let t=/\?\?.+?\?\?/;if(1!==(e.match(t)||[]).length)return!1;let n=e.match(t);if(!n)return!1;let i=e.indexOf(n[0]);return -1===e.indexOf(n[0],i+1)&&""!==e.trim()})},120:function(e){e.exports={container:"create-quiz_container__jQEkn","create-btn":"create-quiz_create-btn__cL_0E"}},8806:function(e){e.exports={"flashcard-container":"QuestionCards_flashcard-container__DzduB","input-container":"QuestionCards_input-container__dQbkx","fillin-container":"QuestionCards_fillin-container__g5lQa","question-type-card":"QuestionCards_question-type-card__QLr94","add-option-button":"QuestionCards_add-option-button__hqYVH",option:"QuestionCards_option__kvY9z",selected:"QuestionCards_selected__MEpQe","info-text":"QuestionCards_info-text__HYowC","error-text":"QuestionCards_error-text__iGsIv"}},9955:function(e){e.exports={container:"QuizCard_container__IyuuD","quiz-container":"QuizCard_quiz-container__BLljo","number-count":"QuizCard_number-count__n45j7","add-button":"QuizCard_add-button__ML4_t","delete-btn":"QuizCard_delete-btn__uQ3XJ"}},2529:function(e){e.exports={container:"QuizHeader_container__OyD27"}},7292:function(e){e.exports={"card-label":"QuizSelect_card-label___28H0","question-type-card":"QuizSelect_question-type-card__Dzqy_",small:"QuizSelect_small__xI7jo",flashcard:"QuizSelect_flashcard__4sxVm",mcq:"QuizSelect_mcq___lQam","fill-in":"QuizSelect_fill-in__nGeVL"}},8997:function(e){e.exports={primary:"Wrapper_primary__MohJh"}}},function(e){e.O(0,[240,699,298,971,69,744],function(){return e(e.s=3395)}),_N_E=e.O()}]);