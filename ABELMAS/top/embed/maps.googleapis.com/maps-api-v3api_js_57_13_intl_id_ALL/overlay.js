google.maps.__gjsload__('overlay', function(_){var SD=function(a){this.Eg=a},Xva=function(){},TD=function(a){a.gz=a.gz||new Xva;return a.gz},Yva=function(a){this.Ch=new _.tn(()=>{const b=a.gz;if(a.getPanes()){if(a.getProjection()){if(!b.wx&&a.onAdd)a.onAdd();b.wx=!0;a.draw()}}else{if(b.wx)if(a.onRemove)a.onRemove();else a.remove();b.wx=!1}},0)},Zva=function(a,b){const c=TD(a);let d=c.xw;d||(d=c.xw=new Yva(a));_.Lb(c.Ph||[],_.Fk);var e=c.ni=c.ni||new _.Ipa;const f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");
e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);e=c.aD=c.aD||new SD(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=()=>_.zn(d.Ch);c.Ph=[_.Dk(a,"panes_changed",e),_.Dk(f,"zoom_changed",e),_.Dk(f,"offset_changed",e),_.Dk(b,"projection_changed",e),_.Dk(f,"projectioncenterq_changed",e)];_.zn(d.Ch);b instanceof _.fl?(_.Ql(b,"Ox"),_.Ol(b,148440)):b instanceof _.qm&&(_.Ql(b,"Oxs"),
_.Ol(b,181451))},dwa=function(a){if(a){var b=a.getMap();if($va(a)!==b&&b&&b instanceof _.fl){const c=b.__gm;c.overlayLayer?a.__gmop=new awa(b,a,c.overlayLayer):c.Fg.then(({kh:d})=>{const e=new bwa(b,d);d.Ai(e);c.overlayLayer=e;cwa(a);dwa(a)})}}},cwa=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.Eg.unbindAll(),b.Eg.set("panes",null),b.Eg.set("projection",null),b.Gg.sl(b),b.Fg&&(b.Fg=!1,b.Eg.onRemove?b.Eg.onRemove():b.Eg.remove()))}},$va=function(a){return(a=a.__gmop)?a.map:null},ewa=function(a,
b){a.Eg.get("projection")!=b&&(a.Eg.bindTo("panes",a.map.__gm),a.Eg.set("projection",b))};_.Ha(SD,_.$k);SD.prototype.changed=function(a){a!="outProjection"&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.tj(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.Eg:null))};var UD={};_.Ha(Yva,_.$k);UD.Cl=function(a){if(a){var b=a.getMap();(TD(a).IC||null)!==b&&(b&&Zva(a,b),TD(a).IC=b)}};UD.sl=function(a){const b=TD(a);var c=b.ni;c&&c.unbindAll();(c=b.aD)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Ph&&_.Lb(b.Ph,_.Fk);b.Ph=null;b.xw&&(b.xw.Ch.Cj(),b.xw=null);delete TD(a).IC};var VD={},awa=class{constructor(a,b,c){this.map=a;this.Eg=b;this.Gg=c;this.Fg=!1;_.Ql(this.map,"Ox");_.Ol(this.map,148440);c.Cl(this)}draw(){this.Fg||(this.Fg=!0,this.Eg.onAdd&&this.Eg.onAdd());this.Eg.draw&&this.Eg.draw()}},bwa=class{constructor(a,b){this.Ig=a;this.Gg=b;this.Eg=null;this.Fg=[]}dispose(){}Vh(a,b,c,d,e,f,g,h){const k=this.Eg=this.Eg||new _.ZA(this.Ig,this.Gg,()=>{});k.Vh(a,b,c,d,e,f,g,h);for(const m of this.Fg)ewa(m,k),m.draw()}Cl(a){this.Fg.push(a);this.Eg&&ewa(a,this.Eg);this.Gg.refresh()}sl(a){_.Rb(this.Fg,
a)}};VD.Cl=dwa;VD.sl=cwa;_.vk("overlay",{UA:function(a){if(a){(0,UD.sl)(a);(0,VD.sl)(a);var b=a.getMap();b&&(b instanceof _.fl?(0,VD.Cl)(a):(0,UD.Cl)(a))}},preventMapHitsFrom:a=>{_.Rv(a,{Vk:({event:b})=>{_.Tt(b.Eg)},Xj:b=>_.Cv(b),Yp:b=>_.Dv(b),Wk:b=>_.Dv(b),sk:b=>_.Ev(b)}).Lr(!0)},preventMapHitsAndGesturesFrom:a=>{a.addEventListener("click",_.Bk);a.addEventListener("contextmenu",_.Bk);a.addEventListener("dblclick",_.Bk);a.addEventListener("mousedown",_.Bk);a.addEventListener("mousemove",_.Bk);a.addEventListener("MSPointerDown",
_.Bk);a.addEventListener("pointerdown",_.Bk);a.addEventListener("touchstart",_.Bk);a.addEventListener("wheel",_.Bk)}});});
