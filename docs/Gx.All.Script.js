!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}([function(e,t){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function i(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}e.exports=function(e){return e.reduce(function(e,t){var a,r,o,u,s;for(o in t)if(a=e[o],r=t[o],a&&n.test(o))if("class"===o&&("string"==typeof a&&(s=a,e[o]=a={},a[s]=!0),"string"==typeof r&&(s=r,t[o]=r={},r[s]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(u in r)a[u]=i(a[u],r[u]);else if(Array.isArray(a))e[o]=a.concat(r);else if(Array.isArray(r))e[o]=[a].concat(r);else for(u in r)a[u]=r[u];else e[o]=t[o];return e},{})}},function(e,t){window.Gx={}},function(e,t){!function(e,t){var n={getSerializeParam:function(e){var t={str:[],obj:[],fun:[]};for(i=0;i<e.length;i++){var n=e[i];if(null!=n)switch(Object.prototype.toString.call(n)){case"[object String]":t.str.push(n);break;case"[object Function]":t.fun.push(n);break;default:t.obj.push(n)}}return t}};Gx.param=n}(window,jQuery)},function(e,t){!function(e){var t={getObjType:function(e){return Object.prototype.toString.call(e)},isArray:function(e){return"[object Array]"==this.getObjType(e)},isObject:function(e){return"[object Object]"==this.getObjType(e)},isFunction:function(e){return"[object Function]"==this.getObjType(e)},isBoolean:function(e){return"[object Boolean]"==this.getObjType(e)},isString:function(e){return"[object String]"==this.getObjType(e)},isNumber:function(e){return"[object Number]"==this.getObjType(e)},isHtml:function(e){return"[object HTMLDivElement]"==this.getObjType(e)},isDate:function(e){return"[object Date]"==this.getObjType(e)}},n=function(e,t){var i;if(t=t||e,null==e||"object"!=typeof e)return e;if(e instanceof Date)return(i=new Date).setTime(e.getTime()),i;if(e instanceof Array){i=[];for(var a=0,r=e.length;a<r;a++)i[a]=n(e[a],t);return i}if(e instanceof HTMLDivElement)return e;if(e instanceof Object){for(var o in i={},e)e.hasOwnProperty(o)&&(i[o]=n(e[o],t));return i}throw console.log(e,t),new Error("Unable to copy obj! Its type isn't supported.")};t.mergeParam=function(e,t){return jQuery.extend(!0,{},n(e),n(t))},t.createObject=function(e){return this.isArray(e)?this.mergeParam([],e):this.mergeParam({},e)},t.arrPush=function(e,t){if(this.isArray(e))return e.concat(t);console.error("对象不是数组！")},t.getGuid=function(e,t){var n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");t=t||n.length;var i=[];if(e)for(var a=0;a<e;a++)i[a]=n[0|Math.random()*t];else{i[8]=i[13]=i[18]=i[23]="-",i[14]="4";for(a=0;a<36;a++)if(!i[a]){var r=0|16*Math.random();i[a]=n[19==a?3&r|8:r]}}return i.join("")},t.getDefault=function(e,t){return void 0===e||null===e?t:e},t.objProxy=function(e,t,n,i,a){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[i]},set:function(e){if(a&&!a(e))throw new Error("set时检查不通过！");n[i]=e}})},t.addGetSetFun=function(e,t,n,i){n=n||function(){return null},i=i||function(e){},Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:n,set:i})},Gx.base=t}(window)},function(e,t){!function(e){var t={objToJson:function(e){return JSON.stringify(e)},jsonToObj:function(e){return JSON.parse(e)},toNumber:function(e,t,i){return e=parseFloat(e).toString(),t&&(e=n(e)),e},prefixInteger:function(e,t){return(Array(t).join("0")+e).slice(-t)}},n=function(e){return(e+="").includes(".")||(e+="."),e.replace(/(\d)(?=(\d{3})+\.)/g,function(e,t){return t+","}).replace(/\.$/,"")};Gx.convert=t}(window)},function(e,t){!function(e){var t={getParam:function(t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),i=e.location.search.substr(1).match(n);return null!=i?unescape(i[2]):""},replace:function(t){e.location.replace(t)}};Gx.url=t}(window)},function(e,t){!function(e){var t={date:function(e){return Gx.base.isDate(e)||(e=new Date(e)),{_root:e,get year(){return Gx.convert.prefixInteger(this._root.getFullYear(),4)},set year(e){this._root.setFullYear(e)},get month(){return Gx.convert.prefixInteger(this._root.getMonth()+1,2)},set month(e){this._root.setMonth(e-1)},get day(){return Gx.convert.prefixInteger(this._root.getDate(),2)},set day(e){this._root.setDate(e)},get hours(){return Gx.convert.prefixInteger(this._root.getHours(),2)},set hours(e){this._root.setHours(e)},get minutes(){return Gx.convert.prefixInteger(this._root.getMinutes(),2)},set minutes(e){this._root.setMinutes(e)},get seconds(){return Gx.convert.prefixInteger(this._root.getSeconds(),2)},set seconds(e){this._root.setSeconds(e)},getDate:t.getDate,getTime:t.getTime,getDateTime:t.getDateTime}},get now(){return new this.date(new Date)},getDate:function(){var e=this.now||this;return e.year+"-"+e.month+"-"+e.day},getTime:function(){var e=this.now||this;return e.hours+":"+e.minutes+":"+e.seconds},getDateTime:function(){return this.getDate()+" "+this.getTime()}};Gx.dateTime=t}(window)},function(e,t){!function(e,t){var n={url:"",type:"post",timeout:6e4,async:!0,cache:!1,data:{},dataType:"json",beforeSend:function(){},complete:function(){},success:function(e){},error:function(e){500!=e.status?404!=e.status?alert(e):alert("未找到页面！"):alert("服务报错："+e.responseText)}};Gx.ajax=function(e,i,a,r,o,u){var s=Gx.base.mergeParam(Gx.base.createObject(n),u);for(var l in s.url=e,i)Gx.base.isObject(i[l])&&(i[l]=JSON.stringify(i[l]));return s.data=i,s.success=function(e){0!=e.state?Gx.base.isFunction(a)&&a(e):Gx.base.isFunction(r)?r(e):alert(e.msg)},Gx.base.isBoolean(o)&&(s.async=o),t.ajax(s)},Gx.ajaxWhen=function(e,n,i){if(!Gx.base.isArray(e)||0==e.length)throw new Error("ajaxArr必须为数组且不能为空！");return n=Gx.base.getDefault(n,function(){}),i=Gx.base.getDefault(i,function(){}),t.when.apply(t,e).done(n).fail(i)}}(window,jQuery)},function(e,t){!function(e){var t=Gx.base.createObject(e.layer),n={},i={type:0,title:!1,content:"",area:"auto",offset:"auto",closeBtn:0,shadeClose:!0,resize:!1,maxWidth:850,maxHeight:500,success:function(e,t){},end:function(){}};!function(e,a){var r=Gx.base.createObject(i);r=Gx.base.mergeParam(r,{type:2,success:function(e,n){t.iframeAuto(n)}}),n.openIframe=function(e,n,i,a,o){var u={content:e,title:n||!1,area:a?o?[a,o]:a:"auto",end:Gx.base.isFunction(i)?i:null};return r=Gx.base.mergeParam(r,u),t.open(r)}}(window),window.alert=function(e){Gx.base.isObject(e)&&(e=Gx.convert.objToJson(e)),t.msg(e)},window.confirm=function(e,n,i){t.confirm(e,{btn:["Yes","No"]},function(e){n?n()&&t.close(e):t.close(e)},function(e){i?i()&&t.close(e):t.close(e)})},Gx.layer=n}(window)},function(e,t){!function(e){var t={flag:!1,callFun:function(e){t.flag&&t.logThis.call(this,e)},logThis:function(e){"created"==e&&console.log(e,this)}},n={base:{render:function(e){return null},computed:{},watch:{},methods:{appendChildTo:function(e){switch(Gx.base.getObjType(e)){case"[object String]":document.getElementById(e).appendChild(this.$el);break;case"[object HTMLDivElement]":e.appendChild(this.$el)}},show:function(){this.display=!0},hide:function(){this.display=!1}},data:function(){var e=Gx.base.createObject(this.options);return{width:Gx.base.getDefault(e.width,"200px"),display:Gx.base.getDefault(e.display,!0)}},beforeCreate:function(){t.callFun.call(this,"beforeCreate")},created:function(){t.callFun.call(this,"created")},beforeMount:function(){t.callFun.call(this,"beforeMount")},mounted:function(){t.callFun.call(this,"mounted")},updated:function(){t.callFun.call(this,"updated")},props:{options:{default:function(){return{}}}}}},i={coms:{},checkSysKeepKey:function(e){if(!e)return!1;return["display"].indexOf(e.toLowerCase())>-1},getResultObj:function(e,t){t&&(e.data=function(){var e=Gx.base.createObject(this.options),n={};return t.map(function(t){n[t.field]=Gx.base.getDefault(e[t.field],t.value)}),n});var i=Gx.base.mergeParam({mixins:[],components:{"gx-button":this.coms.Button,"gx-input":this.coms.Input,"gx-panel":this.coms.Panel,"gx-radio":this.coms.Radio,"gx-select":this.coms.Select,"gx-table":this.coms.Table,"gx-toolbar":this.coms.Toolbar}},e);return i.mixins=Gx.base.arrPush(i.mixins,[n.base]),i},createInstance:function(e,t){var n=new e({propsData:{options:t}});return n=t.el&&document.getElementById(t.el)?n.$mount("#"+t.el):n.$mount()},vmProxy:function(e,t){return(t=Gx.base.arrPush(t,[{field:"appendChildTo"},{field:"show"},{field:"hide"},{field:"width"},{field:"display"}])).map(function(t){Gx.base.objProxy(e,t.field,e.root,t.field,t.setCheckFun)}),e}};window.Gx.ui=i}()},function(e,t){!function(e){var t={},n=[{field:"data",value:[{ID:"-1",NAME:"请选择"}]},{field:"valueField",value:"ID"},{field:"textField",value:"NAME"},{field:"fixedItems",value:[]},{field:"onChange",value:function(){}},{field:"disabled",value:!1},{field:"checked",value:!0}];t.render=function(e){var t=this,n=[],i=Gx.base.isFunction(this.valueField),a=Gx.base.isFunction(this.textField),r=function(r,o){var u=r[t.valueField];i&&(u=t.valueField(r));var s=r[t.textField];a&&(s=t.textField(r)),n.push(e("option",{domProps:{value:u}},[s]))};return this.fixedItems.map(r),this.data.map(r),e("div",{class:[this.checked?null:"has-error"]},[e("select",{class:["form-control"],style:{width:this.width},attrs:{disabled:this.disabled?"disabled":null},on:{change:this._baseChange},ref:"select"},[n])])},t.computed={text:{cache:!1,get:function(){var e=this.$refs.select;return e.options[e.selectedIndex].text}},value:{cache:!1,get:function(){return this.$refs.select.value},set:function(e){this.$refs.select.value=e}}},t.methods={_baseChange:function(){this.onChange()},getSelectedData:function(){var e=this.$refs.select.selectedIndex;return Gx.base.arrPush(this.fixedItems,this.data)[e]}};var i=Vue.extend(Gx.ui.getResultObj(t,n));Gx.ui.coms.Select=i,Gx.ui.createSelect=function(e){var t=this.createInstance(i,e);return this.convertSelect(t)},Gx.ui.convertSelect=function(e){var t=this.vmProxy({get root(){return e}},n);return t=this.vmProxy(t,[{field:"getSelectedData"},{field:"text"},{field:"value"}])}}(window)},function(e,t){!function(e){var t={},n=[{field:"type",value:"text"},{field:"value",value:""},{field:"isFocus",value:!1},{field:"placeholder",value:""},{field:"isMicrometer",value:!1},{field:"validation",value:function(e){return!0}},{field:"change",value:function(){}},{field:"onBlur",value:function(){}},{field:"onFocus",value:function(){}}];t.render=function(e){var t=e("input",{class:["form-control"],style:{width:this.width},attrs:{type:this.type,placeholder:this.placeholder},on:{change:this._baseChange,blur:this._baseOnBlur,focus:this._baseOnFocus},domProps:{value:this.$data.isFocus?this.value:this.text}});switch(this.type){case"textarea":t.tag="textarea";break;case"number":t.data.attrs.type="text"}return t},t.computed={text:{cache:!1,get:function(){var e=this.value;switch(this.type){case"number":e&&(e=Gx.convert.toNumber(e,this.isMicrometer))}return e}}},t.methods={_baseChange:function(){this.value=this.$el.value,this.change()},_baseOnBlur:function(){this.$data.isFocus=!1,this.onBlur(),this.validation(this.value)},_baseOnFocus:function(){this.$data.isFocus=!0,this.onFocus()}};var i=Vue.extend(Gx.ui.getResultObj(t,n));Gx.ui.coms.Input=i,Gx.ui.createInput=function(e){var t=this.createInstance(i,e);return this.convertInput(t)},Gx.ui.convertInput=function(e){var t=this.vmProxy({get root(){return e}},n);return t=this.vmProxy(t,[{field:"text"}])}}(window)},function(e,t){!function(e){var t={},n=[{field:"id",value:""},{field:"value",value:"Button"},{field:"click",value:function(){}},{field:"enabled",value:!0}];t.render=function(e){if(this.display)return e("button",{class:["btn","navbar-btn","btn-default"],attrs:{type:"button",disabled:!this.enabled},on:{click:this._baseClick}},[this.value])},t.methods={_baseClick:function(){this.click()}},t.computed={root:function(){return Gx.ui.convertButton(this)}};var i=Vue.extend(Gx.ui.getResultObj(t,n));Gx.ui.coms.Button=i,Gx.ui.createButton=function(e){var t=this.createInstance(i,e);return this.convertButton(t)},Gx.ui.convertButton=function(e){return this.vmProxy({get root(){return e}},n)}}(window)},function(e,t){!function(e){var t={},n=[{field:"name",value:null},{field:"data",value:[]},{field:"multiple",value:!1}];t.render=function(e){var t=this,n=[];return this.data.forEach(function(i,a){n.push(e("li",[e("input",{attrs:{type:t.multiple?"checkbox":"radio",name:t.name},domProps:{value:i.value}}),i.text]))}),e("ul",[n])},t.computed={value:{cache:!1,get:function(){var e=this.$el.getElementsByTagName("input"),t={};for(i=0;i<e.length;i++){var n=e[i];n.checked&&(t=n)}return t.value},set:function(e){var t=this.$el.getElementsByTagName("input");for(i=0;i<t.length;i++){var n=t[i];n.value==e&&(n.checked=!0)}}}},t.methods={reset:function(){var e=this.$el.getElementsByTagName("input");for(i=0;i<e.length;i++){e[i].checked=!1}}};var a=Vue.extend(Gx.ui.getResultObj(t,n));Gx.ui.coms.Radio=a,Gx.ui.createRadio=function(e){var t=this.createInstance(a,e);return this.convertRadio(t)},Gx.ui.convertRadio=function(e){var t=this.vmProxy({get root(){return e}},n);return t=this.vmProxy(t,[{field:"reset"}])}}(window)},function(e,t){!function(e){var t={},n=[{field:"id",value:"panel_"+Gx.base.getGuid(8,16)},{field:"active",value:!1}];t.render=function(e){return e("div",{attrs:{id:this.id},class:["tab-pane","fade",this.active?"active":"",this.active?"in":""]},[this.$slots.default])};var i=Vue.extend(Gx.ui.getResultObj(t,n));Gx.ui.coms.Panel=i,Gx.ui.createPanel=function(e){var t=this.createInstance(i,e);return this.convertPanel(t)},Gx.ui.convertPanel=function(e){return this.vmProxy({get root(){return e}},n)}}(window)},function(e,t){!function(e){var t={},n=[{field:"data",value:[]},{field:"selectIndex",value:0}];t.render=function(e){var t=this;if(this.display)return this._baseRender(),e("div",{ref:"tabs"},[e("ul",{class:"nav nav-tabs"},[this.data.map(function(n,i){return e("li",{class:[i==t.selectIndex?"active":null,n.disabled?"disabled":null],style:{display:!1===n.display?"none":null}},[e("a",{class:[n.disabled?"disabled":null],attrs:{href:n.disabled?null:"#"+n.id,"data-toggle":n.disabled?null:"tab"},on:{click:function(){t._baseClick(n,i)}}},[n.title])])})]),e("div",{ref:"content",class:"tab-content"})])},t.updated=function(){this._baseRender()},t.mounted=function(){this._baseRender()},t.methods={_baseClick:function(e,t){var n=this.selectIndex!=t;e.disabled||(this.selectIndex=t,n&&e.click&&e.click())},_baseRender:function(){if(this.display&&this.$refs.content)for(var e=0;e<this.data.length;e++)this.data[e]=Gx.base.mergeParam({id:"",title:"",click:function(){},disabled:!1,display:!0},this.data[e]),e==this.selectIndex?this.data[e].el.classList.add("active","in"):this.data[e].el.classList.remove("active","in"),this.$refs.content&&this.$refs.content.append(this.data[e].el)}};var i=Vue.extend(Gx.ui.getResultObj(t,n));Gx.ui.coms.Tabs=i,Gx.ui.createTabs=function(e){e.data.map(function(e){e.el=document.getElementById(e.id),e.el.classList.add("tab-pane","fade"),e.el.remove()});var t=this.createInstance(i,e);return this.convertTabs(t)},Gx.ui.convertTabs=function(e){return this.vmProxy({get root(){return e}},n)}}(window)},function(e,t){!function(e){var t={},n=[];t.render=function(e){if(this.display){return e("div",["这里是pane",e("gx-button",{props:{options:{value:"按钮"}}})])}};var i=Vue.extend(Gx.ui.getResultObj(t,n));Gx.ui.coms.Default=i,Gx.ui.createDefault=function(e){var t=this.createInstance(i,e,n);return this.convertDefault(t)},Gx.ui.convertDefault=function(e){return this.vmProxy({get root(){return e}},n)}}(window)},,,,,,,function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13);var i=n(0),a=n.n(i);!function(e){var t={},n=[{field:"data",value:[]}];t.render=function(e){return e("div",{style:{display:this.display?"":"none"}},[this.data.map(function(t){Gx.ui.checkSysKeepKey(t.id)&&(t.id=t.id+""+Gx.base.getGuid(8,16)),t.id=t.id||Gx.base.getGuid(8,16);var n={options:Gx.base.createObject(t)};return e("gx-button",a()([{props:n},{ref:t.id}]))})])},t.computed={root:function(){return Gx.ui.convertToolbar(this)}};var i=Vue.extend(Gx.ui.getResultObj(t,n));Gx.ui.coms.Toolbar=i,Gx.ui.createToolbar=function(e){var t=this.createInstance(i,e);return this.convertToolbar(t)},Gx.ui.convertToolbar=function(e){var t=this.vmProxy({get root(){return e}},n);return Gx.base.addGetSetFun(t,"buttons",function(){var e={};return t.root.$children.map(function(t){var n=t.root;e[n.id]=n}),e},null),t}}(window),function(e){var t={},n=[{field:"_tableSetting",value:{}},{field:"uniqueId",value:void 0},{field:"height",value:void 0},{field:"undefinedText",value:"-"},{field:"striped",value:!0},{field:"columns",value:[]},{field:"data",value:[]},{field:"pagination",value:!0},{field:"paginationLoop",value:!1},{field:"onlyInfoPagination",value:!1},{field:"sidePagination",value:"client"},{field:"pageNumber",value:1},{field:"pageSize",value:10},{field:"pageList",value:[10,50,100],setCheckFun:function(e){if(!Gx.base.isArray(e))throw new Error("pageList必须为数组！");return!0}},{field:"smartDisplay",value:!1},{field:"search",value:!1},{field:"showPaginationSwitch",value:!1},{field:"minimumCountColumns",value:2},{field:"clickToSelect",value:!0},{field:"singleSelect",value:!1},{field:"toolbar",value:[]},{field:"onClickRow",value:function(e,t){}},{field:"onDblClickRow",value:function(e,t){}},{field:"height",value:void 0},{field:"onPageChange",value:function(e,t){}}],i=function(){if(!this.uniqueId)throw new Error("请先设置uniqueId属性");return!0};t.watch={data:{handler:function(e,t){this.baseCall("load",e)},immediate:!0}},t.render=function(e){var t=this,n="toolbar_"+Gx.base.getGuid(8,16),i=Gx.base.createObject(this._data);i.columns=[],this.columns.map(function(e){var n=Gx.base.mergeParam({checkbox:!1,field:"",title:"",titleTooltip:"",halign:"center",align:"center",width:200,visible:!0,formatter:function(e,t,n){return e}},e);e.checkbox||(n.formatter=function(n,i,a){return n||(n=t.undefinedText),e.formatter?e.formatter(n,i,a):n}),i.columns.push(n)}),i.toolbar="#"+n,i.onPageChange=this.baseOnPageChange,this._tableSetting=i;var r={options:{data:this.toolbar}};return e("div",{style:{display:this.display?"":"none"}},[e("gx-toolbar",a()([{attrs:{id:n},ref:"toolbar"},{props:r}])),e("table",{ref:"table"})])},t.updated=function(){this.refreshOptions()},t.mounted=function(){$(this.$refs.table).bootstrapTable(this._tableSetting)},t.methods={loadData:function(e){Gx.base.isArray(e)?this.data=e:console.warn("绑定数据不是数组！")},baseCall:function(e,t){if(this.$refs.table)return $(this.$refs.table).bootstrapTable(e,t)},refreshOptions:function(){var e=Gx.base.createObject(this._tableSetting);return["data"].map(function(t){delete e[t]}),this.baseCall("refreshOptions",e)},getOptions:function(){return this.baseCall("getOptions")},getSelections:function(){return this.baseCall("getSelections")},getData:function(e){return this.baseCall("getData",e)},remove:function(e,t){this.baseCall("remove",{field:e,values:t})},removeByUniqueId:function(e){i.call(this)&&this.baseCall("removeByUniqueId",e)},getRowByUniqueId:function(e){if(i.call(this))return this.baseCall("getRowByUniqueId",e)},selectPage:function(e){this.baseCall("selectPage",e)},prevPage:function(){this.baseCall("prevPage")},nextPage:function(){this.baseCall("nextPage")},hideColumn:function(e){this.columns.map(function(t){t.field==e&&(t.visible=!1)})},showColumn:function(e){this.columns.map(function(t){t.field==e&&(t.visible=!0)})},baseOnPageChange:function(e,t){this.pageSize=t,this.onPageChange(e,t)}};var r=Vue.extend(Gx.ui.getResultObj(t,n));Gx.ui.coms.Table=r,Gx.ui.createTable=function(e){var t=this.createInstance(r,e);return this.convertTable(t)},Gx.ui.convertTable=function(e){var t=this.vmProxy({get root(){return e}},n);return t=this.vmProxy(t,[{field:"loadData"},{field:"baseCall"},{field:"refreshOptions"},{field:"getOptions"},{field:"getSelections"},{field:"getData"},{field:"remove"},{field:"removeByUniqueId"},{field:"getRowByUniqueId"},{field:"selectPage"},{field:"prevPage"},{field:"nextPage"},{field:"hideColumn"},{field:"showColumn"}]),Gx.base.addGetSetFun(t,"toolbar",function(){return t.root.$refs.toolbar.root},null),t}}(window);n(14),n(15),n(16)}]);