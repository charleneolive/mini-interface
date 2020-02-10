(this["webpackJsonpmini-interface"]=this["webpackJsonpmini-interface"]||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/aboutme-img.1c07f7d9.png"},131:function(e,t,a){e.exports=a.p+"static/media/landingpage-img.40dacc7d.png"},132:function(e,t,a){e.exports=a.p+"static/media/contactpage-img.e23593a0.png"},133:function(e,t,a){e.exports=a(245)},138:function(e,t,a){},139:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(31),r=a.n(i),c=(a(138),a(9)),o=a(10),s=a(12),m=a(11),u=a(13),d=(a(139),a(6)),p=(a(161),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.l,{scrolling:!0,dark:!0,expand:"md",fixed:"top",color:"black"},l.a.createElement(d.m,null,l.a.createElement("strong",{className:"white-text"},"mini Interface")),l.a.createElement(d.o,{onClick:this.toggleCollapse}),l.a.createElement(d.f,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},l.a.createElement(d.n,{left:!0},l.a.createElement(d.j,null,l.a.createElement(d.k,{to:"/"},"HOME")),l.a.createElement(d.j,null,l.a.createElement(d.k,{to:"/aboutme"},"ABOUT")),l.a.createElement(d.j,null,l.a.createElement(d.k,{to:"/projects"},"PROJECTS")),l.a.createElement(d.j,null,l.a.createElement(d.k,{to:"/contact"},"CONTACT"))),l.a.createElement(d.n,{right:!0},l.a.createElement(d.k,{to:"/"},"english"),l.a.createElement(d.k,{to:"/"},"fran\xe7ais"))))}}]),t}(n.Component)),h=a(32),g=(a(162),a(38)),f=a.n(g),E=(a(165),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"AboutText-heading"},this.props.heading),l.a.createElement("p",{className:"AboutText-text"},this.props.text))}}]),t}(n.Component)),b=(a(166),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{className:"classSmallHeading"},this.props.smallheading),l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 3fr"}},l.a.createElement("i",{className:this.props.icon}),l.a.createElement("p",{className:"classText"},this.props.text)))}}]),t}(n.Component)),y=a(128),x=a.n(y),O=a(45),v=a.n(O),j=a(129),N=a.n(j),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"aboutme"},l.a.createElement("p",null,'"'),l.a.createElement(x.a,{typing:1,className:"aboutme-heading"},"DESIGN.IS.BRANDING."),l.a.createElement(v.a,null,l.a.createElement("div",{className:"aboutme-flex1"},this.props.entries.map((function(e){return l.a.createElement(E,{key:f()(),heading:e.heading,smallheading:e.smallheading,text:e.text})})))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"aboutme-flex2"},l.a.createElement("div",null,l.a.createElement("h2",null,"opportunities/"),l.a.createElement("div",{className:"aboutme-flex2-1"},this.props.opportunities.map((function(e){return l.a.createElement(b,{key:f()(),heading:"opportunities/",smallheading:e.smallheading,text:e.text,icon:e.icon})})))),l.a.createElement("div",null,l.a.createElement("h2",null,"future work/"),l.a.createElement("div",null,this.props.future_work.map((function(e){return l.a.createElement(b,{key:f()(),heading:"future work/",smallheading:e.smallheading,text:e.text,icon:e.icon})})))))),l.a.createElement("div",null,l.a.createElement("img",{className:"aboutme-img",alt:"background",src:N.a})))}}]),t}(n.Component);w.defaultProps={entries:[{heading:"my journey into design/",smallheading:null,text:"I am a Singapore-based designer dipping her toes into the design industry. More than design, I believe that design is branding, and I am passionate about conveying the right branding to the wider public. Previously, I worked with a UK-based social enterprise, SchoolX, as the Media Head in charge of Public Relations and Branding.",img:null},{heading:"my design philosophy/",smallheading:null,text:"I am in love with minimalist, geometric designs, simple yet impactful at the same time. Usually I play with contrasts, colour and shapes, these bring out the soul of the individual or the organisation.",img:null}],opportunities:[{smallheading:"MENTORSHIP",text:"I am looking for a mentor! Being self-taught in design, I am looking for mentors in web design and development and with experience working with social enterprises.",icon:"fas fa-handshake fa-3x"},{smallheading:"CHARITIES/SOCIAL ENTERPRISES",text:"I am looking for a mentor! Being self-taught in design, I am looking for mentors in web design and development and with experience working with social enterprises.",icon:"fas fa-hand-holding-heart fa-3x"}],future_work:[{smallheading:"MOBILE APPLICATION",text:"I am working on an exciting project relating to the healthcare industry. Stay tuned for more updates!",icon:"fas fa-capsules fa-3x"},{smallheading:"WEB APPLICATION",text:"I am thinking of doing a web application for freelancers, stay tuned!",icon:"far fa-window-restore fa-3x"}]};var k=w,I=a(27),C=(a(237),a(130)),S=a.n(C),P=a(131),T=a.n(P),B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log("MOUNT")}},{key:"render",value:function(){return l.a.createElement("div",{className:"LandingPage"},l.a.createElement("div",null,l.a.createElement("img",{className:"LandingPage-img",alt:"flower",src:T.a})),l.a.createElement("div",null,l.a.createElement("h2",null,"mini"),l.a.createElement("h1",null," INTERFACE")),l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement(n.Fragment,null,l.a.createElement(d.b,{color:"#fafafa grey lighten-5",outline:!0,rounded:!0},l.a.createElement(I.c,{className:"LandingPage-btn-text",exact:!0,activeClassName:"active-link",to:"/aboutme"},"DISCOVER"))))),l.a.createElement("div",null,l.a.createElement("p",null,"minimalist | geometric | bold")),l.a.createElement("div",{className:"fixed-misc"},"Photo by Sharon Pittaway on Unsplash"))}}]),t}(n.Component),M=(a(238),a(132)),A=a.n(M),F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact-body"},l.a.createElement("h1",null,"GET IN TOUCH"),l.a.createElement("h2",null," ",l.a.createElement("i",{className:"fas fa-map-marker-alt"})," singapore | ",l.a.createElement("i",{className:"fas fa-envelope"})," enquiry@interface.com | ",l.a.createElement("i",{className:"fab fa-instagram"})," mini.interface"),l.a.createElement("div",{className:"contact-grid"},l.a.createElement("div",null,l.a.createElement("img",{alt:"contact-img",src:A.a})),l.a.createElement("div",null,l.a.createElement(d.g,null,l.a.createElement(d.r,null,l.a.createElement(d.e,{xl:"8"},l.a.createElement(d.c,null,l.a.createElement(d.d,null,l.a.createElement("form",null,l.a.createElement("p",{className:"h4 text-center py-4"},"Send Your Enquiry"),l.a.createElement("label",{htmlFor:"defaultFormCardNameEx",className:"grey-text font-weight-light"},"Your name"),l.a.createElement("input",{type:"text",id:"defaultFormCardNameEx",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"defaultFormCardEmailEx",className:"grey-text font-weight-light"},"Your email"),l.a.createElement("input",{type:"email",id:"defaultFormCardEmailEx",className:"form-control"}),l.a.createElement("label",{htmlFor:"defaultFormContactMessageEx",className:"grey-text"},"Your message"),l.a.createElement("textarea",{type:"text",id:"defaultFormContactMessageEx",className:"form-control",rows:"2"}),l.a.createElement("div",{className:"text-center py-4 mt-3"},l.a.createElement(d.b,{className:"btn btn-outline-purple",type:"submit"},"Send",l.a.createElement(d.h,{far:!0,icon:"paper-plane",className:"ml-2"}))))))))))))}}]),t}(n.Component),U=(a(239),a(240),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(v.a,{bottom:!0},l.a.createElement("div",{className:"ProjectContent"},l.a.createElement("div",null,l.a.createElement("img",{src:this.props.image,alt:this.props.heading})),l.a.createElement("div",null,l.a.createElement("h2",{style:{alignSelf:"center"},className:"underline"},this.props.heading)),l.a.createElement("div",null,l.a.createElement("p",null,this.props.text),l.a.createElement("p",null,this.props.credit))))}}]),t}(n.Component)),D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Projects-grid"},l.a.createElement("div",{className:"Projects-Content"},this.props.cards.map((function(e){return l.a.createElement(U,{key:f()(),image:e.imgsrc,heading:e.heading,text:e.text,credit:e.credits})}))))}}]),t}(n.Component);D.defaultProps={cards:[{imgsrc:"https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",heading:"Social Media Design",text:"I am able to design to suit a variety of media, such as instagram stories, instagram posts and facebook posts. Follow my instagram page for some exciting developments to my designs @mini.interface.",credits:"Photo by Sara Kurfe\xdf on Unsplash"},{imgsrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",heading:"Web Development",text:"I currently use tools such as ReactJS and NodeJS for front-end and back-end web development. Based on your request, I will be able to build simple web applications.",credits:"Photo by Cl\xe9ment H on Unsplash"},{imgsrc:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=786&q=80",heading:"Web Design",text:"I will be able to collaborate with you to come up with a responsive web design for your website. In addition, I use tools such as Bootstrap, Material UI and Semantic UI for web design.",credits:"Photo by Ben Kolde on Unsplash"}]};var H=D,R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:B}),l.a.createElement(h.b,{exact:!0,path:"/aboutme",component:k}),l.a.createElement(h.b,{exact:!0,path:"/projects",component:H}),l.a.createElement(h.b,{exact:!0,path:"/contact",component:F}),l.a.createElement(h.a,{to:"/"}))}}]),t}(n.Component),J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement("div",{className:"page-content"},l.a.createElement(R,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(241),a(242),a(243),a(244);r.a.render(l.a.createElement(I.a,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[133,1,2]]]);
//# sourceMappingURL=main.e94b16a9.chunk.js.map