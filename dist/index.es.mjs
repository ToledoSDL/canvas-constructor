import{loadImage as t,createCanvas as e}from"canvas";const r="undefined"!=typeof window,n=r?"undefined"==typeof HTMLCanvasElement?null:HTMLCanvasElement:require("canvas"),i=(()=>{if(!r&&"parseFont"in n)return t=>n.parseFont(t).size;const t=/([\d.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q)/i,e=new Map;return r=>{const n=e.get(r);if(n)return n;const i=t.exec(r);if(!i)return 0;let s=Number(i[1]);switch(i[2]){case"pt":s/=.75;break;case"pc":s*=16;break;case"in":s*=96;break;case"cm":s*=96/2.54;break;case"mm":s*=96/25.4;break;case"em":case"rem":s*=16/.75;break;case"q":s*=96/25.4/4}return e.set(r,s),s}})(),s=(t,e,r)=>{const n=[],i=[],s=t.measureText(" ").width;for(const a of e.split(/\r?\n/)){let e=r;for(const o of a.split(" ")){const a=t.measureText(o).width,h=a+s;h>e?(i.length&&(n.push(i.join(" ")),i.length=0),i.push(o),e=r-a):(e-=h,i.push(o))}i.length&&(n.push(i.join(" ")),i.length=0)}return n.join("\n")},a=(e,n)=>r?new Promise((t,r)=>{const i=Object.assign(document.createElement("img"),n);function s(){i.onload=null,i.onerror=null}i.onload=()=>{s(),t(i)},i.onerror=()=>{s(),r(new Error(`Failed to load the image "${e}"`))},i.src=e}):t(e,n),o=t=>"#"+t,h=(t,e,r)=>`rgb(${t}, ${e}, ${r})`,c=(t,e,r,n)=>`rgba(${t}, ${e}, ${r}, ${n})`,l=(t,e,r)=>`hsl(${t}, ${e}%, ${r}%)`,u=(t,e,r,n)=>`hsla(${t}, ${e}%, ${r}%, ${n})`,g=t=>t;class d{constructor(t,r,n){this.canvas="number"==typeof t?e(t,r,n):t,this.context=this.canvas.getContext("2d")}get windowCanvas(){return this.canvas}get width(){return this.canvas.width}set width(t){this.canvas.width=t}get height(){return this.canvas.height}set height(t){this.canvas.height=t}get textFontHeight(){return i(this.context.font)}changeCanvasSize(t,e){return this.changeCanvasWidth(t).changeCanvasHeight(e)}changeCanvasWidth(t){return this.width=t,this}changeCanvasHeight(t){return this.height=t,this}save(){return this.context.save(),this}restore(){return this.context.restore(),this}rotate(t){return this.context.rotate(t),this}scale(t,e){return this.context.scale(t,e),this}translate(t,e){return this.context.translate(t,e),this}clip(t){return this.context.clip(t),this}setTransform(...t){return this.context.setTransform(...t),this}resetTransformation(){return this.setTransform(1,0,0,1,0,0)}getImageData(t,e,r,n,i){if("function"==typeof t&&(i=t,t=0),i){if("function"!=typeof i)throw new TypeError("Callback must be a function");return i.call(this,this.context.getImageData(null!=t?t:0,null!=e?e:0,null!=r?r:this.width,null!=n?n:this.height),this),this}return this.context.getImageData(null!=t?t:0,null!=e?e:0,null!=r?r:this.width,null!=n?n:this.height)}putImageData(...t){return this.context.putImageData(...t),this}fill(t){return this.context.fill(t),this}printText(t,e,r,...n){return this.context.fillText(t,e,r,...n),this}printResponsiveText(t,e,r,n){var i;const[,s="",a,o]=null!==(i=/(\w+ )?(\d+)(.+)/.exec(this.context.font))&&void 0!==i?i:[],h=parseInt(a,10),{width:c}=this.measureText(t),l=n>c?h:n/c*h;return this.setTextFont(`${s}${l}${o}`).printText(t,e,r)}printMultilineText(t,e,r){const n=t.split(/\r?\n/);if(n.length<=1)return this.printText(t,e,r);const i=this.textFontHeight;let s=r;for(const t of n)this.printText(t,e,Math.floor(s)),s+=i;return this}printWrappedText(t,e,r,n){const i=s(this,t,n);return this.printMultilineText(i,e,r)}stroke(){return this.context.stroke(),this}printStrokeRectangle(t,e,r,n){return this.context.strokeRect(t,e,r,n),this}printStrokeText(t,e,r,n){return this.context.strokeText(t,e,r,n),this}measureText(t,e){if(e){if("function"!=typeof e)throw new TypeError("Callback must be a function.");return e.call(this,this.context.measureText(t),this),this}return this.context.measureText(t)}setTextSize(t){var e;const[,r="",n]=null!==(e=/(\w+ )?(?:\d+)(.+)/.exec(this.context.font))&&void 0!==e?e:[];return this.setTextFont(`${r}${t}${n}`)}setStroke(t){return this.context.strokeStyle=t,this}setLineWidth(t){return this.context.lineWidth=t,this}setStrokeWidth(t){return this.setLineWidth(t)}setLineDashOffset(t){return this.context.lineDashOffset=t,this}setLineJoin(t){return this.context.lineJoin=t,this}setLineCap(t){return this.context.lineCap=t,this}setLineDash(t){return this.context.setLineDash(t),this}printImage(t,...e){return this.context.drawImage(t,...e),this}printCircularImage(t,e,r,n){const i=t.width/t.height,[s,a,o,h]=1===i?[e-n,r-n,2*n,2*n]:i>1?[e-n,r-n/i,2*n,2*n/i]:[e-n*i,r-n,2*n*i,2*n];return this.save().createCircularClip(e,r,n,0,2*Math.PI,!1).printImage(t,s,a,o,h).restore()}printRoundedImage(t,e,r,n,i,s){return this.save().createRoundedClip(e,r,n,i,s).printImage(t,e,r,n,i).restore()}printCircle(t,e,r){return this.save().createCircularPath(t,e,r).fill().restore()}printRectangle(t,e,r,n){return this.context.fillRect(t,e,r,n),this}printRoundedRectangle(t,e,r,n,i){return this.save().createRoundedPath(t,e,r,n,i).fill().restore()}createCircularPath(t,e,r,n=0,i=2*Math.PI,s=!1){return this.context.beginPath(),this.context.arc(t,e,r,n,i,s),this}createCircularClip(t,e,r,n,i,s){return this.createCircularPath(t,e,r,n,i,s).clip()}createRectanglePath(t,e,r,n){return this.context.rect(t,e,r,n),this}createRectangleClip(t,e,r,n){return this.createRectanglePath(t,e,r,n).clip()}createRoundedPath(t,e,r,n,i){if(r>0&&n>0){let s=void 0;"number"==typeof i?s={tl:i=Math.min(i,r/2,n/2),tr:i,br:i,bl:i}:(s=i,i=Math.min(5,r/2,n/2));const{tl:a=i,tr:o=i,br:h=i,bl:c=i}=s;this.context.beginPath(),this.context.moveTo(t+a,e),this.context.lineTo(t+r-o,e),this.context.quadraticCurveTo(t+r,e,t+r,e+o),this.context.lineTo(t+r,e+n-h),this.context.quadraticCurveTo(t+r,e+n,t+r-h,e+n),this.context.lineTo(t+c,e+n),this.context.quadraticCurveTo(t,e+n,t,e+n-c),this.context.lineTo(t,e+a),this.context.quadraticCurveTo(t,e,t+a,e),this.context.closePath()}return this}createRoundedClip(t,e,r,n,i){return this.createRoundedPath(t,e,r,n,i).clip()}setColor(t){return this.context.fillStyle=t,this}setTextFont(t){return this.context.font=t,this}setTextAlign(t){return this.context.textAlign=t,this}setTextBaseline(t){return this.context.textBaseline=t,this}beginPath(){return this.context.beginPath(),this}closePath(){return this.context.closePath(),this}createPattern(t,e,r){const n=this.context.createPattern(t,e);return r?(r.call(this,n,this),this):n}printPattern(t,e){return this.createPattern(t,e,t=>this.setColor(t))}createLinearGradient(t,e,r,n,i=[]){const s=this.context.createLinearGradient(t,e,r,n);for(const t of i)s.addColorStop(t.position,t.color);return s}printLinearColorGradient(t,e,r,n,i){const s=this.createLinearGradient(t,e,r,n,i);return this.setColor(s)}printLinearStrokeGradient(t,e,r,n,i){const s=this.createLinearGradient(t,e,r,n,i);return this.setStroke(s)}createRadialGradient(t,e,r,n,i,s,a=[]){const o=this.context.createRadialGradient(t,e,r,n,i,s);for(const t of a)o.addColorStop(t.position,t.color);return o}printRadialColorGradient(t,e,r,n,i,s,a){const o=this.createRadialGradient(t,e,r,n,i,s,a);return this.setColor(o)}printRadialStrokeGradient(t,e,r,n,i,s,a){const o=this.createRadialGradient(t,e,r,n,i,s,a);return this.setStroke(o)}createEllipsePath(t,e,r,n,i,s,a,o){return this.context.ellipse(t,e,r,n,i,s,a,o),this}createEllipseClip(t,e,r,n,i,s,a,o){return this.createEllipsePath(t,e,r,n,i,s,a,o).clip()}arc(t,e,r,n,i,s){return this.context.arc(t,e,r,n,i,s),this}arcTo(t,e,r,n,i){return this.context.arcTo(t,e,r,n,i),this}quadraticCurveTo(t,e,r,n){return this.context.quadraticCurveTo(t,e,r,n),this}bezierCurveTo(t,e,r,n,i,s){return this.context.bezierCurveTo(t,e,r,n,i,s),this}lineTo(t,e){return this.context.lineTo(t,e),this}moveTo(t,e){return this.context.moveTo(t,e),this}setShadowBlur(t){return this.context.shadowBlur=t,this}setShadowColor(t){return this.context.shadowColor=t,this}setShadowOffsetX(t){return this.context.shadowOffsetX=t,this}setShadowOffsetY(t){return this.context.shadowOffsetY=t,this}setMiterLimit(t){return this.context.miterLimit=t,this}setPatternQuality(t){return this.context.patternQuality=t,this}setTextDrawingMode(t){return this.context.textDrawingMode=t,this}setAntialiasing(t){return this.context.antialias=t,this}setGlobalCompositeOperation(t){return this.context.globalCompositeOperation=t,this}setGlobalAlpha(t){return this.context.globalAlpha=t,this}resetShadows(){return this.setShadowBlur(0).setShadowOffsetX(0).setShadowOffsetY(0).setShadowColor("transparent")}clearCircle(t,e,r,n=0,i=2*Math.PI,s=!1){return this.createCircularClip(t,e,r,n,i,s).clearRectangle(t-r,e-r,2*r,2*r)}clearRectangle(t=0,e=0,r=this.width,n=this.height){return this.context.clearRect(t,e,r,n),this}getLineDash(){return this.context.getLineDash()}get lineDash(){return this.getLineDash()}isPointInPath(t,e,r){return this.context.isPointInPath(t,e,r)}isPointInStroke(t,e){return this.context.isPointInStroke(t,e)}process(t,...e){return t.call(this,this,...e),this}toBuffer(...t){return this.canvas.toBuffer(...t)}toBufferAsync(...t){return new Promise((e,r)=>this.canvas.toBuffer((t,n)=>{t?r(t):e(n)},...t))}toDataURL(...t){return this.canvas.toDataURL(...t)}toDataURLAsync(...t){return new Promise((e,r)=>this.canvas.toDataURL(...t,(t,n)=>{t?r(t):e(n)}))}toBlob(t,e,r){return this.windowCanvas.toBlob(t,e,r)}toBlobAsync(t,e){return new Promise(r=>this.windowCanvas.toBlob(r,t,e))}wrapText(t,e,r){const n=s(this,t,e);if(r){if("function"!=typeof r)throw new TypeError("Callback must be a function");return r.call(this,n,this),this}return n}}const x=t=>t.save().setGlobalCompositeOperation("difference").setColor("white").printRectangle(0,0,t.width,t.height).restore(),p=t=>{const e=t.getImageData(),{data:r}=e;for(let t=0;t<r.length;t+=4){const e=.2126*r[t]+.7152*r[t+1]+.0722*r[t+2];r[t]=e,r[t+1]=e,r[t+2]=e}return t.putImageData(e,0,0)},f=p,m=t=>{const e=t.getImageData(),{data:r}=e;for(let t=0;t<r.length;t+=4){const e=255-(.2126*r[t]+.7152*r[t+1]+.0722*r[t+2]);r[t]=e,r[t+1]=e,r[t+2]=e}return t.putImageData(e,0,0)},w=m,C=t=>{const e=t.getImageData(),{data:r}=e;for(let t=0;t<r.length;t+=4){const e=r[t],n=r[t+1],i=r[t+2];r[t]=.393*e+.769*n+.189*i,r[t+1]=.349*e+.686*n+.168*i,r[t+2]=.272*e+.534*n+.131*i}return t.putImageData(e,0,0)},T=t=>{const e=t.getImageData(),{data:r}=e;for(let t=0;t<r.length;t+=4)r[t]=0,r[t+1]=0,r[t+2]=0;return t.putImageData(e,0,0)},v=(t,e)=>{const r=t.getImageData(),{data:n}=r;for(let t=0;t<n.length;t+=4){const r=.2126*n[t]+.7152*n[t+1]+.0722*n[t+2]>=e?255:0;n[t]=r,n[t+1]=r,n[t+2]=r}return t.putImageData(r,0,0)},D=(t,e)=>{const r=t.getImageData(),{data:n}=r;for(let t=0;t<n.length;t+=4){const r=.2126*n[t]+.7152*n[t+1]+.0722*n[t+2]>=e?0:255;n[t]=r,n[t+1]=r,n[t+2]=r}return t.putImageData(r,0,0)},I=(t,e)=>{const r=t.getImageData(),{data:n}=r;for(let t=0;t<n.length;t+=4)n[t]+=e,n[t+1]+=e,n[t+2]+=e;return t.putImageData(r,0,0)},b=(t,e)=>{const r=t.getImageData(),{data:n}=r;for(let t=0;t<n.length;t+=4)n[t]-=e,n[t+1]-=e,n[t+2]-=e;return t.putImageData(r,0,0)},P=b,R=(t,e,r=!0)=>{const n=Math.round(Math.sqrt(e.length)),i=Math.floor(n/2),s=t.getImageData(),a=s.data,o=s.width,h=s.height,c=o,l=h,u=t.getImageData(),g=u.data,d=r?1:0;for(let t=0;t<l;t++)for(let r=0;r<c;r++){const s=t,l=r,u=4*(t*c+r);let x=0,p=0,f=0,m=0;for(let t=0;t<n;t++)for(let r=0;r<n;r++){const c=s+t-i,u=l+r-i;if(c>=0&&c<h&&u>=0&&u<o){const i=4*(c*o+u),s=e[t*n+r];x+=a[i]*s,p+=a[i+1]*s,f+=a[i+2]*s,m+=a[i+3]*s}}g[u]=x,g[u+1]=p,g[u+2]=f,g[u+3]=m+d*(255-m)}return t.putImageData(u,0,0)},S=[0,-1,0,-1,4,-1,0,-1,0],k=t=>R(t,S,!0),L=[0,-1,0,-1,5,-1,0,-1,0],$=(t,e=1)=>{for(let r=0;r<e;++r)R(t,L,!0);return t},y=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],M=(t,e=1)=>{for(let r=0;r<e;++r)R(t,y,!0);return t};export{d as Canvas,M as blur,I as brightness,g as color,R as convolute,b as darkness,k as edge,f as grayscale,p as greyscale,o as hex,l as hsl,u as hsla,x as invert,m as invertGrayscale,w as invertGreyscale,D as invertedThreshold,P as myOldFriend,a as resolveImage,h as rgb,c as rgba,C as sepia,$ as sharpen,T as silhouette,v as threshold};
//# sourceMappingURL=index.es.mjs.map
