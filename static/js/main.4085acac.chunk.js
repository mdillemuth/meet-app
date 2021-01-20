(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),o=n(24),c=n.n(o),i=n(6),l=n.n(i),u=n(8),d=n(3),h=n(7),p=n(5),m=n(4),f=n(9),v=n(25),b=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),j=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).color="#323edd",a}return n}(b),g=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).color="#FFA500",a}return n}(b),x=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).color="#ec0101",a}return n}(b),O=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={numberOfEvents:"10",errorText:""},e.handleChange=function(t){var n=t.target.value;n<0?e.setState({errorText:"Please enter a positive number of events"}):n<1?e.setState({numberOfEvents:n,errorText:"Please specify at least 1 event to be displayed"}):(e.setState({errorText:"",numberOfEvents:n}),e.throttleHandleChange(n))},e.throttleHandleChange=Object(v.debounce)(e.throttleHandleChange.bind(Object(f.a)(e)),1500),e.handleChange=e.handleChange.bind(Object(f.a)(e)),e}return Object(h.a)(n,[{key:"throttleHandleChange",value:function(e){this.props.updateEvents(null,e)}},{key:"render",value:function(){var e=this.state,t=e.numberOfEvents,n=e.errorText;return Object(a.jsxs)("div",{className:"NumberOfEvents",children:[Object(a.jsx)("label",{children:"Number of events"}),Object(a.jsx)("input",{type:"number",className:"number",value:t,onChange:this.handleChange}),Object(a.jsx)(x,{text:n})]})}}]),n}(r.Component),w=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,locations:e.props.locations,infoText:""},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t)},e.handleChange=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:'Sorry, we could not find "'.concat(n,'". Please try another city'),showSuggestions:!1}):e.setState({infoText:"",query:n,suggestions:a})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,r=t.suggestions,s=t.showSuggestions,o=t.infoText;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("label",{children:"Choose your nearest city"}),Object(a.jsx)("input",{type:"text",className:"city",value:n,onChange:this.handleChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(a.jsxs)("ul",{className:"suggestions",style:s?{}:{display:"none"},children:[r.map((function(t){return Object(a.jsx)("li",{id:t,onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})},"all")]}),Object(a.jsx)(j,{text:o})]})}}]),n}(r.Component),y=n(26),k=n.n(y),S=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isExpanded:!1},e.handleExpandEvent=function(){!1===e.state.isExpanded?e.setState({isExpanded:!0}):e.setState({isExpanded:!1})},e.renderExpandedComponent=function(){var t=e.props.event;if(e.state.isExpanded)return Object(a.jsxs)("div",{className:"Expanded-Event",children:[Object(a.jsx)("h4",{children:"About event:"}),Object(a.jsx)("div",{className:"link-container",children:Object(a.jsx)("a",{className:"link",href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"})}),Object(a.jsx)("p",{className:"description",children:t.description})]})},e.renderButtonText=function(){return e.state.isExpanded?"Hide details":"Show details"},e.renderTime=function(){var t=e.props.event.start.dateTime,n=k()(t,"YYYY-MM-DD HH:mm").toDate();return Object(a.jsx)("span",{className:"start-dateTime",children:"".concat(n)})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(a.jsxs)("div",{className:"Event",children:[Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsx)("h2",{className:"summary",children:e.summary}),Object(a.jsxs)("div",{className:"subheading",children:[Object(a.jsx)("div",{className:"time",children:this.renderTime()}),Object(a.jsxs)("div",{className:"location-container",children:[Object(a.jsxs)("span",{className:"summary-2",children:["@",e.summary," | "]}),Object(a.jsx)("span",{className:"location",children:e.location})]})]})]}),Object(a.jsx)("div",{children:this.renderExpandedComponent()}),Object(a.jsx)("button",{type:"button",className:"btn-details",onClick:this.handleExpandEvent,children:this.renderButtonText()})]})}}]),n}(r.Component),T=function(e){var t=e.events;return t?Object(a.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(S,{event:e})},e.id)}))}):null};var E=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Welcome to the Meet app"}),Object(a.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(a.jsx)("div",{className:"button_cont",align:"center",children:Object(a.jsxs)("div",{class:"google-btn",children:[Object(a.jsx)("div",{class:"google-icon-wrapper",children:Object(a.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/G\noogle_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(a.jsx)("a",{href:"https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=56115638320-9bl5o1guq2jvp29bfpitj1cfflfcvoc3.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmdillemuth.github.io%2Fmeet-app%2F",rel:"nofollow noopener",class:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with google"})})]})}),Object(a.jsx)("a",{class:"privacy-btn",href:"https://mdillemuth.github.io/meet-app/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]})},C=n(28),N=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],Z=n(11),A=n.n(Z),M=n(10),q=n.n(M),F=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return q.a.done(),e.abrupt("return",{events:N,locations:I(N)});case 4:return e.next=6,L();case 6:if(!(t=e.sent)){e.next=16;break}return H(),n="https://10b0ouiuy4.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,A.a.get(n);case 12:return(a=e.sent).data&&(r=I(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),q.a.done(),e.abrupt("return",{events:a.data.events,locations:r});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){var t=e.map((function(e){return e.location}));return Object(C.a)(new Set(t))},L=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,_(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&n){e.next=18;break}if(localStorage.removeItem("access_token"),a=new URLSearchParams(window.location.search),r=a.get("code")){e.next=17;break}return e.next=14,A.a.get("https://10b0ouiuy4.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 14:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 17:return e.abrupt("return",r&&B(r));case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(),n=encodeURIComponent(t),e.next=4,fetch("https://10b0ouiuy4.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=(n(52),n(53),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:"10",warningText:"",tokenCheck:!1},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,s=a.numberOfEvents;e.setState({warningText:"Please wait, events are loading..."}),t?F().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,s);return e.setState({events:a,currentLocation:t,locations:n.locations,warningText:""})})):F().then((function(t){var a="all"===r?t.events:t.events.filter((function(e){return e.location===r})),o=n||s,c=a.slice(0,o);return e.setState({events:c,numberOfEvents:n,locations:t.locations,warningText:""})}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,_(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({tokenCheck:n}),n&&this.updateEvents(),a=new URLSearchParams(window.location.search),r=a.get("code"),this.mounted=!0,r&&this.mounted&&!n&&(this.setState({tokenCheck:!0}),this.updateEvents());case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.numberOfEvents,n=e.events,r=e.locations,s=e.warningText;return e.tokenCheck?Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Meet App"}),Object(a.jsx)(w,{locations:r,updateEvents:this.updateEvents}),Object(a.jsx)(O,{numberOfEvents:t,updateEvents:this.updateEvents}),Object(a.jsx)(g,{text:s}),Object(a.jsx)(T,{events:n})]}):Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(E,{})})}}]),n}(r.Component)),W=n(27);c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),W.config("b206faf0f0394dfcac9e7e53568bc5e8").install()}},[[54,1,2]]]);
//# sourceMappingURL=main.4085acac.chunk.js.map