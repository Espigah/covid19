(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,11],{379:function(t,e,n){"use strict";n(2);var r=n(19),o=n(28),c=n(73),l=n.n(c),d=new(function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"get",value:function(){return l.a.get("https://api.covid19api.com/countries").then((function(t){var data=t.data,e=[];for(var i in data){var n=data[i];n.Country&&e.push({label:n.Country,province:"",slug:n.Slug})}return e})).catch((function(t){return alert(t),console.log(t),Promise.reject(t)}))}}]),t}()),h=n(53),j=Object(h.a)(d,void 0,void 0,!1,null,null,null).exports,f=new(function(){function t(e){Object(r.a)(this,t),this.countries=e}return Object(o.a)(t,[{key:"getCountryDeathData",value:function(t,e){return this.getCountryData(t,e,"deaths")}},{key:"getCountryRecoveredData",value:function(t,e){return this.getCountryData(t,e,"recovered")}},{key:"getCountryConfirmedData",value:function(t,e){return this.getCountryData(t,e,"confirmed")}},{key:"pushToArray",value:function(element,t,e){element.push({date:t,total:e})}},{key:"getCountryData",value:function(t,e,n){var r=this,o="https://api.covid19api.com/";""==e&&(o+="/total");var c=o+"/country/"+t+"/status/"+n;return l.a.get(c).then((function(t){var e=new Date("2020-01-22T00:00:00Z"),data=t.data,n=[],o=0;for(var i in data){for(var c=new Date(Date.parse(data[i].Date));e.getTime()<c.getTime();)r.pushToArray(n,e,o),e=new Date(e.getTime()+864e5);o=data[i].Cases,r.pushToArray(n,c,o),e=new Date(c.getTime()+864e5)}return n})).catch((function(t){return alert(t),console.log(t),Promise.reject(t)}))}}]),t}())(j),m=Object(h.a)(f,void 0,void 0,!1,null,null,null);e.a=m.exports},381:function(t,e,n){"use strict";n.r(e);var r={components:{},data:function(){return{}},props:{title:{type:String,requered:!0}},mounted:function(){},methods:{}},o=n(53),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"parent border"}},[e("h3",[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"chart-container"},[this._t("default")],2)])}),[],!1,null,"9e0afc18",null);e.default=component.exports},383:function(t,e,n){"use strict";n.r(e);var r=n(394),o=n(96),c={extends:r.a,mixins:[r.b.reactiveProp],props:{chartdata:{type:Object,default:null}},computed:Object(o.b)({hidden:"country/hidden"}),mounted:function(){this.renderChart(this.chartData,{legend:{display:!1,maintainAspectRatio:!1}})},watch:{hidden:function(){var t=this;this.$nextTick().then((function(){t.$data._chart.update()}))},chartData:function(){this.$data._chart.update()}}},l=n(53),component=Object(l.a)(c,void 0,void 0,!1,null,"08f50be6",null);e.default=component.exports},390:function(t,e,n){var map={"./af":247,"./af.js":247,"./ar":248,"./ar-dz":249,"./ar-dz.js":249,"./ar-kw":250,"./ar-kw.js":250,"./ar-ly":251,"./ar-ly.js":251,"./ar-ma":252,"./ar-ma.js":252,"./ar-sa":253,"./ar-sa.js":253,"./ar-tn":254,"./ar-tn.js":254,"./ar.js":248,"./az":255,"./az.js":255,"./be":256,"./be.js":256,"./bg":257,"./bg.js":257,"./bm":258,"./bm.js":258,"./bn":259,"./bn.js":259,"./bo":260,"./bo.js":260,"./br":261,"./br.js":261,"./bs":262,"./bs.js":262,"./ca":263,"./ca.js":263,"./cs":264,"./cs.js":264,"./cv":265,"./cv.js":265,"./cy":266,"./cy.js":266,"./da":267,"./da.js":267,"./de":268,"./de-at":269,"./de-at.js":269,"./de-ch":270,"./de-ch.js":270,"./de.js":268,"./dv":271,"./dv.js":271,"./el":272,"./el.js":272,"./en-SG":273,"./en-SG.js":273,"./en-au":274,"./en-au.js":274,"./en-ca":275,"./en-ca.js":275,"./en-gb":276,"./en-gb.js":276,"./en-ie":277,"./en-ie.js":277,"./en-il":278,"./en-il.js":278,"./en-nz":279,"./en-nz.js":279,"./eo":280,"./eo.js":280,"./es":281,"./es-do":282,"./es-do.js":282,"./es-us":283,"./es-us.js":283,"./es.js":281,"./et":284,"./et.js":284,"./eu":285,"./eu.js":285,"./fa":286,"./fa.js":286,"./fi":287,"./fi.js":287,"./fo":288,"./fo.js":288,"./fr":289,"./fr-ca":290,"./fr-ca.js":290,"./fr-ch":291,"./fr-ch.js":291,"./fr.js":289,"./fy":292,"./fy.js":292,"./ga":293,"./ga.js":293,"./gd":294,"./gd.js":294,"./gl":295,"./gl.js":295,"./gom-latn":296,"./gom-latn.js":296,"./gu":297,"./gu.js":297,"./he":298,"./he.js":298,"./hi":299,"./hi.js":299,"./hr":300,"./hr.js":300,"./hu":301,"./hu.js":301,"./hy-am":302,"./hy-am.js":302,"./id":303,"./id.js":303,"./is":304,"./is.js":304,"./it":305,"./it-ch":306,"./it-ch.js":306,"./it.js":305,"./ja":307,"./ja.js":307,"./jv":308,"./jv.js":308,"./ka":309,"./ka.js":309,"./kk":310,"./kk.js":310,"./km":311,"./km.js":311,"./kn":312,"./kn.js":312,"./ko":313,"./ko.js":313,"./ku":314,"./ku.js":314,"./ky":315,"./ky.js":315,"./lb":316,"./lb.js":316,"./lo":317,"./lo.js":317,"./lt":318,"./lt.js":318,"./lv":319,"./lv.js":319,"./me":320,"./me.js":320,"./mi":321,"./mi.js":321,"./mk":322,"./mk.js":322,"./ml":323,"./ml.js":323,"./mn":324,"./mn.js":324,"./mr":325,"./mr.js":325,"./ms":326,"./ms-my":327,"./ms-my.js":327,"./ms.js":326,"./mt":328,"./mt.js":328,"./my":329,"./my.js":329,"./nb":330,"./nb.js":330,"./ne":331,"./ne.js":331,"./nl":332,"./nl-be":333,"./nl-be.js":333,"./nl.js":332,"./nn":334,"./nn.js":334,"./pa-in":335,"./pa-in.js":335,"./pl":336,"./pl.js":336,"./pt":337,"./pt-br":338,"./pt-br.js":338,"./pt.js":337,"./ro":339,"./ro.js":339,"./ru":340,"./ru.js":340,"./sd":341,"./sd.js":341,"./se":342,"./se.js":342,"./si":343,"./si.js":343,"./sk":344,"./sk.js":344,"./sl":345,"./sl.js":345,"./sq":346,"./sq.js":346,"./sr":347,"./sr-cyrl":348,"./sr-cyrl.js":348,"./sr.js":347,"./ss":349,"./ss.js":349,"./sv":350,"./sv.js":350,"./sw":351,"./sw.js":351,"./ta":352,"./ta.js":352,"./te":353,"./te.js":353,"./tet":354,"./tet.js":354,"./tg":355,"./tg.js":355,"./th":356,"./th.js":356,"./tl-ph":357,"./tl-ph.js":357,"./tlh":358,"./tlh.js":358,"./tr":359,"./tr.js":359,"./tzl":360,"./tzl.js":360,"./tzm":361,"./tzm-latn":362,"./tzm-latn.js":362,"./tzm.js":361,"./ug-cn":363,"./ug-cn.js":363,"./uk":364,"./uk.js":364,"./ur":365,"./ur.js":365,"./uz":366,"./uz-latn":367,"./uz-latn.js":367,"./uz.js":366,"./vi":368,"./vi.js":368,"./x-pseudo":369,"./x-pseudo.js":369,"./yo":370,"./yo.js":370,"./zh-cn":371,"./zh-cn.js":371,"./zh-hk":372,"./zh-hk.js":372,"./zh-tw":373,"./zh-tw.js":373};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=390},398:function(t,e,n){"use strict";n.r(e);n(16),n(33);var r=n(12),o=n(381),c=n(383),l=n(379),d=n(96),h={components:{GraphHolder:o.default,Bar:c.default},computed:Object(d.b)({countries:"country/countries",lastAdded:"country/lastAdded",lastRemoved:"country/lastRemoved",hidden:"country/hidden"}),data:function(){return{datacollectionDeath:{labels:[],datasets:[]},datacollectionConfirmed:{labels:[],datasets:[]},countriesDayZero:{},starting_at:"all_data"}},props:{},watch:{hidden:function(t,e){var n=t.hidden,r=t.index;try{this.datacollectionDeath.datasets[r].hidden=n,this.datacollectionConfirmed.datasets[r].hidden=n}catch(t){console.warn("[ hidden ]",t)}},lastAdded:function(t,e){this.loadCountryConfirmedData(t,t.color),this.loadCountryDeathData(t,t.color)},lastRemoved:function(t,e){this.removeCountryFromGraphs(t.index)}},mounted:function(){},methods:{changeStartPoint:function(t){console.log(t),console.log(this.starting_at)},loadCountryConfirmedData:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,d,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.getCountryData2(l.a.getCountryConfirmedData.bind(l.a),t,e);case 2:o=r.sent,c=o.countryInfo,d=o.addDataToGraph,n.datacollectionConfirmed=d(n.datacollectionConfirmed),h=n.calculateCountryDayZero(c),n.countriesDayZero[t.slug]=h,console.log(t.slug+": "+h);case 9:case"end":return r.stop()}}),r)})))()},loadCountryDeathData:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.getCountryData2(l.a.getCountryDeathData.bind(l.a),t,e);case 2:o=r.sent,o.countryInfo,c=o.addDataToGraph,n.datacollectionDeath=c(n.datacollectionDeath);case 6:case"end":return r.stop()}}),r)})))()},getCountryData2:function(t,e,n){var o=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t(e.slug,e.province);case 3:return c=r.sent,r.abrupt("return",{countryInfo:c,addDataToGraph:function(t){return o.addDataToGraph(t,c,e.label,n)}});case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},addDataToGraph:function(t,e,label,n){var r=this.extractLabels(e),o={label:label,backgroundColor:n,hidden:!1,data:this.extractData(e),change:function(){this.hidden=!0}},c=t.datasets;return c.push(o),{labels:r,datasets:c}},calculateCountryDayZero:function(t){var data=this.extractData(t);for(var i in data){var e=t[i];if(e.total>0)return e.date}},removeCountryFromGraphs:function(t){this.datacollectionConfirmed.datasets.splice(t,1),this.datacollectionConfirmed={labels:this.datacollectionConfirmed.labels,datasets:this.datacollectionConfirmed.datasets},this.datacollectionDeath.datasets.splice(t,1),this.datacollectionDeath={labels:this.datacollectionDeath.labels,datasets:this.datacollectionDeath.datasets}},extractData:function(t){return t.map((function(t){return t.total}))},extractLabels:function(t){return t.map((function(t){return t.date})).map((function(t){return t.toISOString().substr(0,10).split("-").reverse().join("/")}))}}},j=n(53),component=Object(j.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center",staticStyle:{display:"none"}},[n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.starting_at,expression:"starting_at"}],attrs:{type:"radio",id:"from_beg",value:"all_data"},domProps:{checked:t._q(t.starting_at,"all_data")},on:{click:function(e){return t.changeStartPoint(e)},change:function(e){t.starting_at="all_data"}}}),t._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"from_beg"}},[t._v("All data")])]),t._v(" "),n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.starting_at,expression:"starting_at"}],attrs:{type:"radio",id:"from_d_zero",value:"day_zero"},domProps:{checked:t._q(t.starting_at,"day_zero")},on:{click:function(e){return t.changeStartPoint(e)},change:function(e){t.starting_at="day_zero"}}}),t._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"from_d_zero"}},[t._v("Day Zero")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("graph-holder",{attrs:{title:t.$t("graph_cases_confirmed")}},[n("bar",{attrs:{"chart-data":t.datacollectionConfirmed,"v:on":""}})],1)],1),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("graph-holder",{attrs:{title:t.$t("graph_deaths")}},[n("bar",{attrs:{"chart-data":t.datacollectionDeath}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);