const __vite__fileDeps=["assets/index-BSj771as.js","assets/index-B-o1Wr-g.js","assets/_commonjsHelpers-Cpj98o6Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as p}from"./iframe-BdKQNnjp.js";import{R as e,r as c}from"./index-B-o1Wr-g.js";import{r as h,u as l}from"./react-18-DwX-K7eS.js";import{af as u,ag as E,ah as d,ai as x}from"./index-BHIiBZri.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BDlsjaCx.js";import"./index-DsejCDPO.js";import"./index-D-8MO0q_.js";import"./index-CiRubQN2.js";import"./index-DrFu-skq.js";var _={code:u,a:E,...d},f=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},S=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((a,m)=>{p(()=>import("./index-BSj771as.js"),__vite__mapDeps([0,1,2])).then(({MDXProvider:i})=>h(e.createElement(f,{showException:m,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>a())})},this.unmount=t=>{l(t)}}};export{S as DocsRenderer,_ as defaultComponents};