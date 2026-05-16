(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1914,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return s}});let a=e.r(1788),r=e.r(9604),i="function"==typeof IntersectionObserver,o=new Map,l=[];function s({rootRef:e,rootMargin:t,disabled:n}){let d=n||!i,[c,u]=(0,a.useState)(!1),f=(0,a.useRef)(null),m=(0,a.useCallback)(e=>{f.current=e},[]);return(0,a.useEffect)(()=>{if(i){if(d||c)return;let n=f.current;if(n&&n.tagName)return function(e,t,n){let{id:a,observer:r,elements:i}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},a=l.find(e=>e.root===n.root&&e.margin===n.margin);if(a&&(t=o.get(a)))return t;let r=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},l.push(n),o.set(n,t),t}(n);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),o.delete(a);let e=l.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&l.splice(e,1)}}}(n,e=>e&&u(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,r.requestIdleCallback)(()=>u(!0));return()=>(0,r.cancelIdleCallback)(e)}},[d,t,e,c,f.current]),[m,c,(0,a.useCallback)(()=>{u(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},4471,(e,t,n)=>{"use strict";function a(e,t,n,a){return!1}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return a}}),e.r(90),("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},3230,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return r}});let a=e.r(1788);function r(e,t){let n=(0,a.useRef)(null),r=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=n.current;e&&(n.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(n.current=i(e,a)),t&&(r.current=i(t,a))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},8735,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},9149,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={default:function(){return w},useLinkStatus:function(){return k}};for(var r in a)Object.defineProperty(n,r,{enumerable:!0,get:a[r]});let i=e.r(2456),o=e.r(1398),l=i._(e.r(1788)),s=e.r(472),d=e.r(1112),c=e.r(8169),u=e.r(9129),f=e.r(4862),m=e.r(5479),p=e.r(1914),h=e.r(4471),y=e.r(4113),g=e.r(3230);e.r(8735);let b=new Set;function x(e,t,n,a){if(!("u"<typeof window)&&(0,d.isLocalURL)(t)){if(!a.bypassPrefetchedCheck){let r=t+"%"+n+"%"+(void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0);if(b.has(r))return;b.add(r)}e.prefetch(t,n,a).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let j=l.default.forwardRef(function(e,t){let n,a,{href:r,as:i,children:c,prefetch:b=null,passHref:j,replace:_,shallow:k,scroll:w,locale:I,onClick:M,onNavigate:D,onMouseEnter:S,onTouchStart:C,legacyBehavior:O=!1,transitionTypes:R,...P}=e;n=c,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let T=l.default.useContext(m.RouterContext),U=!1!==b,{href:E,as:N}=l.default.useMemo(()=>{if(!T){let e=v(r);return{href:e,as:i?v(i):e}}let[e,t]=(0,s.resolveHref)(T,r,!0);return{href:e,as:i?(0,s.resolveHref)(T,i):t||e}},[T,r,i]),A=l.default.useRef(E),L=l.default.useRef(N);O&&(a=l.default.Children.only(n));let B=O?a&&"object"==typeof a&&a.ref:t,[F,H,K]=(0,p.useIntersection)({rootMargin:"200px"}),q=l.default.useCallback(e=>{(L.current!==N||A.current!==E)&&(K(),L.current=N,A.current=E),F(e)},[N,E,K,F]),z=(0,g.useMergedRef)(q,B);l.default.useEffect(()=>{!T||H&&U&&x(T,E,N,{locale:I})},[N,E,H,I,U,T?.locale,T]);let G={ref:z,onClick(e){O||"function"!=typeof M||M(e),O&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),!T||e.defaultPrevented||function(e,t,n,a,r,i,o,l,s){let c,{nodeName:u}=e.currentTarget;if(!("A"===u.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,d.isLocalURL)(n)){r&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=o??!0;"beforePopState"in t?t[r?"replace":"push"](n,a,{shallow:i,locale:l,scroll:e}):t[r?"replace":"push"](a||n,{scroll:e})})()}}(e,T,E,N,_,k,w,I,D)},onMouseEnter(e){O||"function"!=typeof S||S(e),O&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),T&&x(T,E,N,{locale:I,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){O||"function"!=typeof C||C(e),O&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),T&&x(T,E,N,{locale:I,priority:!0,bypassPrefetchedCheck:!0})}};if((0,u.isAbsoluteUrl)(N))G.href=N;else if(!O||j||"a"===a.type&&!("href"in a.props)){let e=void 0!==I?I:T?.locale;G.href=T?.isLocaleDomain&&(0,h.getDomainLocale)(N,e,T?.locales,T?.domainLocales)||(0,y.addBasePath)((0,f.addLocale)(N,e,T?.defaultLocale))}return O?l.default.cloneElement(a,G):(0,o.jsx)("a",{...P,...G,children:n})}),_=(0,l.createContext)({pending:!1}),k=()=>(0,l.useContext)(_),w=j;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},1158,(e,t,n)=>{t.exports=e.r(9149)},9562,e=>{"use strict";var t=e.i(1398),n=e.i(1788),a=e.i(814);e.i(9949);var r=e.i(4444),i=e.i(1158),o=e.i(1783),l=e.i(204);function s({isMobile:e}){return(0,l.useAnimation)({suffix:"social_"}),(0,t.jsxs)(d,{children:[(0,t.jsx)(i.default,{href:"https://github.com/abid-shahriar",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer nofollow",title:"github icon",className:"social_animate fadeInUp",style:{animationDelay:".5s"},children:(0,t.jsx)(o.FaGithubSquare,{})})}),(0,t.jsx)(i.default,{href:"https://linkedin.com/in/abidshahriar/",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer nofollow",title:"linkedin icon",className:"social_animate fadeInUp",style:{animationDelay:".7s"},children:(0,t.jsx)(o.FaLinkedin,{})})}),(0,t.jsx)(i.default,{href:"https://instagram.com/find.abid",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer nofollow",title:"instagram icon",className:"social_animate fadeInUp",style:{animationDelay:".9s"},children:(0,t.jsx)(o.FaInstagramSquare,{})})}),(0,t.jsx)(i.default,{href:"https://facebook.com/abid.sh.akash",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer nofollow",title:"facebook icon",className:"social_animate fadeInUp",style:{animationDelay:"1.1s"},children:(0,t.jsx)(o.FaFacebookSquare,{})})})]})}let d=a.default.div`
  margin-top: 2rem;
  width: 100%;

  a {
    display: inline-block;
    color: whitesmoke;
    transition: 0.15s;

    &:not(:first-child) {
      margin-left: 1rem;
    }

    :hover {
      color: var(--color-secondary);
    }
  }

  svg {
    height: 4rem;
    width: 4rem;

    @media (max-width: 768px) {
      height: 3rem;
      width: 3rem;
    }
  }
`;var c=e.i(980);let u=e=>{let{timeDuration:n,companyName:a,companyLocation:r,designation:i,employmentType:o="Full-time"}=e;return(0,l.useAnimation)({suffix:"timeline_"}),(0,t.jsxs)(f,{children:[(0,t.jsx)(m,{dateTime:"1970-01-01",className:"timeline_animate fadeInUp",style:{animationDelay:".5s"},children:(0,t.jsxs)(c.default,{color:"#cbd5e1",fontSize:"1.5rem",children:[n," :: ",o]})}),(0,t.jsx)("div",{className:"timeline_animate fadeInUp",style:{animationDelay:".7s"},children:(0,t.jsxs)(c.default,{variant:"h3",margin:".7rem 0 0 0",fontSize:"1.7rem",children:[i," at ",a]})}),(0,t.jsx)("div",{className:"timeline_animate fadeInUp",style:{animationDelay:".9s"},children:(0,t.jsx)(c.default,{color:"#cbd5e1",fontSize:"1.5rem",children:r})})]})},f=a.default.div`
  position: relative;
  padding-bottom: 3em;
  padding-left: 2rem;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    background-color: var(--color-primary);
    display: block;
    position: absolute;
    top: 2em;
    left: 0em;
    width: 0.125em;
    height: 100%;
    transform: translateX(-50%);
  }
`,m=a.default.time`
  display: flex;
  align-items: center;
  position: relative;

  /* create a dot in the timeline */
  & > p::before {
    content: '';
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    top: 50%;
    left: -1.9em;
    transform: translateY(-50%);
    background-color: var(--color-primary);
    margin-right: 0.5em;
  }
`,p=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(u,{timeDuration:"Oct 2023 - Present",companyName:"Confidential (Stealth Mode Company)",companyLocation:"Minnesota, USA",designation:"Frontend Developer"}),(0,t.jsx)(u,{timeDuration:"Nov 2021 - Oct 2023",companyName:"Valkyrit IT Limited",companyLocation:"Dhaka, Bangladesh",designation:"Backend Engineer"}),(0,t.jsx)(u,{timeDuration:"Mar 2021 - May 2021",companyName:"Manaknight Digital",companyLocation:"Toronto, Ontario, Canada",designation:"Frontend Developer",employmentType:"Part-time"}),(0,t.jsx)(u,{timeDuration:"Nov 2020 - Oct 2021",companyName:"Wikiance",companyLocation:"Kolkata, West Bengal, India",designation:"Frontend Engineer"})]})}),h=a.default.div`
  padding: 2rem;
  background-color: rgba(133, 133, 133, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4rem;
  max-width: var(--max-width);

  @media (max-width: 992px) {
    flex-direction: column;
  }

  @media (max-width: 340px) {
    padding: 2rem 1rem;
  }
`,y=a.default.div``,g=a.default.div`
  margin-right: 4rem;

  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    border-radius: 5px;
    width: 320px;

    @media (max-width: 400px) {
      width: 100%;
    }
  }
`,b=a.default.div`
  padding: 2rem;
  background-color: rgba(133, 133, 133, 0.2);
  border-radius: 5px;
  max-width: var(--max-width);
`,x=a.default.section`
  min-height: calc(100vh - var(--nav-height));
  background-color: #171e2e;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  & > * {
    /* border: 1px solid red; */
  }

  && {
    padding: 10rem 2.5%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    font-weight: 300;
    color: #43a9fc;
  }
`;e.s(["default",0,function(){let[e,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{window.innerWidth<992&&a(!0)},[]),(0,l.useAnimation)({suffix:"about_"}),(0,t.jsxs)(x,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(g,{className:"about_animate fadeIn",style:{animationDelay:".5s"},children:(0,t.jsx)("img",{src:"/me.jpg",alt:"abid shahriar",width:320,height:320})}),(0,t.jsxs)(y,{children:[(0,t.jsx)("div",{className:"about_animate fadeInUp",style:{animationDelay:".8s"},children:(0,t.jsx)(r.Typography,{margin:"0 0 4rem 0",children:"With 4+ years of experience in the field, I specialize in creating robust and efficient web applications. My expertise spans both frontend and backend development, allowing me to deliver end-to-end solutions that meet business requirements. I am passionate about staying up-to-date with the latest technologies and continuously improving my skills."})}),(0,t.jsx)(p,{}),(0,t.jsx)("div",{className:"about_animate fadeInUp",style:{animationDelay:".5s"},children:(0,t.jsxs)(r.Typography,{margin:"6rem 0 0 0",children:["Email: ",(0,t.jsx)("a",{href:"mailto:abidshahriar7@gmail.com",children:"abidshahriar7@gmail.com"})]})}),(0,t.jsx)("div",{className:"about_animate fadeInUp",style:{animationDelay:".8s"},children:(0,t.jsxs)(r.Typography,{margin:".5rem 0 0 0",children:["Resume:"," ",(0,t.jsx)("a",{onClick:function(e){e.preventDefault();let t=document.createElement("a");t.setAttribute("download","ABID_SHAHRIAR_RESUME.pdf"),t.setAttribute("href","/ABID_SHAHRIAR_RESUME.pdf"),document.body.appendChild(t),t.click(),document.body.removeChild(t)},href:"/ABID_SHAHRIAR_RESUME.pdf",children:"Click here to download"})]})}),(0,t.jsx)(s,{isMobile:e})]})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)("div",{className:"about_animate fadeInUp",style:{animationDelay:"0"},children:(0,t.jsx)(r.Typography,{margin:"0 0 2rem 0",children:"As a web developer, I have gained experience in various technologies and frameworks. I am always eager to learn and explore new developments in this dynamic field. I enjoy experimenting with different tools and techniques to enhance my skills and creativity."})}),(0,t.jsx)("div",{className:"about_animate fadeInUp",style:{animationDelay:".3s"},children:(0,t.jsx)(r.Typography,{variant:"h2",margin:"0 0 1.5rem 0",fontSize:"2.2rem",children:"Here are some of the technologies I have worked with:"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"about_animate fadeInUp",style:{animationDelay:".6s"},children:(0,t.jsxs)(r.Typography,{margin:"0 0 1rem 0",children:[(0,t.jsxs)("span",{style:{color:"#cbd5e1"},children:["Frontend:"," "]}),"HTML, CSS, JavaScript, ReactJS, NextJS, Redux, ReactPDF, Styled Components, MUI, StoryBook, ContextApi etc."]})}),(0,t.jsx)("div",{className:"about_animate fadeInUp",style:{animationDelay:".8s"},children:(0,t.jsxs)(r.Typography,{margin:"0 0 1rem 0",children:[(0,t.jsxs)("span",{style:{color:"#cbd5e1"},children:["Backend:"," "]}),"NodeJS, MongoDB Express, Postgres, Knex, Mongoose, Cookie, Prisma, CORS, REST Api, Formidable etc."]})}),(0,t.jsx)("div",{className:"about_animate fadeInUp",style:{animationDelay:".9s"},children:(0,t.jsxs)(r.Typography,{margin:"0 0 1rem 0",children:[(0,t.jsxs)("span",{style:{color:"#cbd5e1"},children:["Other:"," "]}),"TypeScript, Github, Git, Photoshop, Figma, ESlint, Testing, MailGun, Responsive Design, DigitalOcean, SEO etc."]})})]})]})]})}],9562)},1327,e=>{e.n(e.i(9562))}]);