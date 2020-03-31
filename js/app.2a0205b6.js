(function(e){function t(t){for(var n,i,r=t[0],c=t[1],l=t[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/open-covid19-test-11/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},2538:function(e,t,a){},"4b67":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i={name:"Home"},r=i,c=(a("034f"),a("2877")),l=Object(c["a"])(r,s,o,!1,null,null,null),u=l.exports,d=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"margin-container"}),a("div",[a("h1",[e._v("Prueba del COVID-19")]),e._m(0),e._m(1),a("p",{staticClass:"home-p"},[e._v(" También puedes entrar al "),a("a",{attrs:{href:"https://github.com/celiavelmar/open-covid19-test"}},[e._v("repositorio de GitHub de Celiavelmar "),a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),e._v("para conocer el algoritmo que usa dicha aplicación (y también esta) y cómo lo ha descubierto o ver el código fuente. ")]),a("info-panel",{staticClass:"home-info-panel",attrs:{text:"La información obtenida a través del uso de esta aplicación no sustituye\n      ni pretende sustituir, en ningún caso, el consejo de un profesional\n      médico. Si crees que tienes síntomas compatibles con el COVID-19 ponte\n      en contacto con el teléfono correspondiente de tu Ciudad o al 154."}}),a("div",{staticClass:"center"},[a("router-link",{attrs:{to:"/test"}},[a("button",[e._v("¡Entendido(Taupéicha)! Hacer Test(Jajapo Kuaara'ã)")])])],1)],1),a("div",{staticClass:"margin-container"})])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"home-p"},[e._v(" Un test de autoevaluación para el COVID-19 de código abierto que devuelve los mismos resultados que "),a("a",{attrs:{href:"https://www.coronamadrid.com/"}},[e._v("coronamadrid.com")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"home-p"},[e._v(""),a("a",{attrs:{href:""}},[e._v("")]),e._v("")])}],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel"},[a("div",{staticClass:"icon"},[a("font-awesome-icon",{attrs:{icon:["fas","info-circle"]}})],1),a("div",[a("p",[e._v(" "+e._s(e.text)+" ")])])])},f=[],h={name:"info-panel",props:{text:{type:String,required:!0}}},b=h,_=(a("6cbf"),Object(c["a"])(b,v,f,!1,null,null,null)),g=_.exports,y={name:"Home",components:{InfoPanel:g}},C=y,q=(a("cccb"),Object(c["a"])(C,m,p,!1,null,null,null)),w=q.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"test"},[a("div",{staticClass:"margin-container"}),a("div",[a("h2",[e._v("Evalúa tus síntomas")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.getEvaluation(t)}}},[a("radio-question",{attrs:{question:"¿Tienes sensación de falta de aire de inicio brusco (en ausencia de cualquier otra patología que justifique este síntoma)?",name:"airShortness"}}),a("radio-question",{attrs:{question:"¿Tienes fiebre? (+37.7ºC)",name:"fever"}}),a("radio-question",{attrs:{question:"¿Tienes tos seca y persistente?",name:"dryCough"}}),a("radio-question",{attrs:{question:"¿Has tenido contacto estrecho con algún paciente positivo confirmado?",name:"closeContact"}}),a("radio-question",{attrs:{question:"¿Tienes mucosidad en la nariz?",name:"mucus"}}),a("radio-question",{attrs:{question:"¿Tienes dolor muscular?",name:"muscularPain"}}),a("radio-question",{attrs:{question:"¿Tienes sintomatología gastrointestinal?",name:"gastrointestinal"}}),a("radio-question",{attrs:{question:"¿Llevas más de 20 días con estos síntomas?",name:"twentyDays"}}),a("div",{staticClass:"right"},[a("router-link",{staticClass:"back",attrs:{to:"/"}},[e._v("Volver")]),a("button",{attrs:{type:"submit"}},[e._v(" Obtener resultados ")])],1)],1)]),a("div",{staticClass:"margin-container"})])},T=[],j=(a("13d5"),a("b64b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"question"},[e._v(e._s(e.question))]),a("input",{attrs:{type:"radio",name:e.name,value:"true",id:e.name+"True",required:""}}),a("label",{attrs:{for:e.name+"True"}},[e._v("Sí")]),a("br"),a("input",{attrs:{type:"radio",name:e.name,value:"false",id:e.name+"False",required:""}}),a("label",{attrs:{for:e.name+"False"}},[e._v("No")])])}),S=[],I={name:"radio-question",props:{question:{type:String,required:!0},name:{type:String,required:!0}}},x=I,E=(a("cadf"),Object(c["a"])(x,j,S,!1,null,null,null)),$=E.exports,V={name:"Test",components:{RadioQuestion:$},methods:{getEvaluation:function(e){var t=e.target,a={airShortness:60,fever:15,dryCough:15,closeContact:29,mucus:0,muscularPain:0,gastrointestinal:0,twentyDays:-15},n=Object.keys(a).reduce((function(e,n){return e+("true"===t[n].value?a[n]:0)}),0);this.$store.commit("filledInTest"),this.$store.commit("hasSympthoms",n>=30),this.showResults()},showResults:function(){this.$router.push({name:"Results"})}}},D=V,k=(a("ae10"),Object(c["a"])(D,O,T,!1,null,null,null)),P=k.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"results"},[a("div",{staticClass:"margin-container"}),e.filledInTest?a("div",{staticClass:"main-container"},[a("h2",[e._v("Resultados")]),e.hasSympthoms?a("div",[a("p",[e._v(" Tus respuestas sugieren la posibilidad de tener sintomatología compatible con COVID-19 según el algoritmo de coronamadrid.com. ")]),a("p",[e._v(" Algunas recomendaciones si crees que tienes COVID-19: ")]),e._m(0),a("p",[e._v(" El COVID-19 se transmite por gotas que se expulsan al toser o estornudar, por eso la higiene y evitar el contacto es vital para reducir el contagio. ")])]):a("div",[a("p",[e._v(" Tus respuestas sugieren que no tienes síntomas o no son suficientes para determinar un contagio de COVID-19 según el algoritmo de coronamadrid.com. ")])]),a("info-panel",{attrs:{text:"Recuerda que la información obtenida a través del uso de esta\n        aplicación no sustituye ni pretende sustituir, en ningún caso, el\n        consejo de un profesional médico. Si crees que tienes síntomas\n        compatibles con el COVID-19 ponte en contacto con el teléfono\n        correspondiente a tu Comunidad o con el de tu centro de salud."}}),a("h3",[e._v("Algunos enlaces de interés")]),a("a",{attrs:{href:"https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/home.htm",target:"_blank"}},[e._v(" Web del Gobierno de España con información sobre el COVID-19 ")]),a("br"),a("br"),a("a",{attrs:{href:"https://www.comunidad.madrid/servicios/salud/2019-nuevo-coronavirus",target:"_blank"}},[e._v(" Web de la Comunidad de Madrid con información sobre el COVID-19 ")]),a("br"),a("br"),a("a",{attrs:{href:"https://www.comunidad.madrid/servicios/salud/covid-19-prevencion-consejos-ciudadania#videos",target:"_blank"}},[e._v(" Vídeos de la Comunidad de Madrid con consejos y recomendaciones para evitar la transmisión en la convivencia con una persona con síntomas ")]),a("br"),a("br"),a("a",{attrs:{href:"https://www.who.int/health-topics/coronavirus",target:"_blank"}},[e._v(" Web de la Organización Mundial de la Salud para el Coronavirus ")]),a("div",[a("router-link",{attrs:{to:"/test"}},[a("button",[e._v("Volver a realizar el test")])])],1)],1):e._e(),a("div",{staticClass:"margin-container"})])},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v(" Observa tu evolución y si tus síntomas empeoran, sobre todo si tienes dificultad respiratoria, ponte en contacto con el teléfono designado por tu Comunidad para la atención sobre el COVID-19 o con tu centro de salud. ")]),a("li",[e._v(" Quédate en casa para evitar contagios. ")]),a("li",[e._v(" Utiliza una mascarilla (continuamente y cambiándola cada 24 horas). ")]),a("li",[e._v(" Si vives con otras personas, permanece en una habitación separada con la puerta cerrada y utiliza un cuarto de baño propio si fuese posible. Ventila la habitación evitando las corrientes hacia el resto de la casa. No compartas vajilla, toallas ni sábanas. ")]),a("li",[e._v(" Limpia las superficies y objetos con lejía o productos desinfectantes. ")]),a("li",[e._v(" Guarda la ropa sucia en una bolsa cerrada y lávala por separado a 60-90º. ")]),a("li",[e._v(" Elimina tus residuos por separado utilizando un cubo con tapa. ")])])}],z={name:"Results",components:{InfoPanel:g},computed:{filledInTest:function(){return this.$store.state.filledInTest},hasSympthoms:function(){return this.$store.state.hasSympthoms}},created:function(){this.filledInTest||this.$router.push({name:"Home"})}},H=z,L=(a("59c5"),Object(c["a"])(H,M,R,!1,null,null,null)),A=L.exports;n["a"].use(d["a"]);var G=[{path:"/",name:"Home",component:w},{path:"/test",name:"Test",component:P},{path:"/results",name:"Results",component:A,props:!0},{path:"*",redirect:"/"}],W=new d["a"]({mode:"history",base:"/open-covid19-test/",routes:G}),F=W,J=a("2f62");n["a"].use(J["a"]);var N=new J["a"].Store({state:{filledInTest:!1,hasSympthoms:!1},mutations:{filledInTest:function(e){e.filledInTest=!0},hasSympthoms:function(e,t){e.hasSympthoms=t}},actions:{},modules:{}}),Q=a("ecee"),U=a("f2d1"),B=a("c074"),K=a("ad3d");Q["c"].add(U["a"]),Q["c"].add(B["a"]),n["a"].component("font-awesome-icon",K["a"]),n["a"].config.productionTip=!1,new n["a"]({router:F,store:N,render:function(e){return e(u)}}).$mount("#app")},"59c5":function(e,t,a){"use strict";var n=a("9029"),s=a.n(n);s.a},"5ced":function(e,t,a){},"5f4b":function(e,t,a){},"6cbf":function(e,t,a){"use strict";var n=a("2538"),s=a.n(n);s.a},"85ec":function(e,t,a){},9029:function(e,t,a){},ae10:function(e,t,a){"use strict";var n=a("4b67"),s=a.n(n);s.a},cadf:function(e,t,a){"use strict";var n=a("5f4b"),s=a.n(n);s.a},cccb:function(e,t,a){"use strict";var n=a("5ced"),s=a.n(n);s.a}});
//# sourceMappingURL=app.2a0205b6.js.map