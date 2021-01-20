(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),o=n(24),c=n.n(o),i=n(3),u=n(6),l=n(5),d=n(4),h=n(8),p=n(25),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={numberOfEvents:"10"},e.handleChange=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),e.throttleHandleChange(n)},e.throttleHandleChange=Object(p.debounce)(e.throttleHandleChange.bind(Object(h.a)(e)),1500),e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(u.a)(n,[{key:"throttleHandleChange",value:function(e){this.props.updateEvents(null,e)}},{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(a.jsxs)("div",{className:"NumberOfEvents",children:[Object(a.jsx)("label",{children:"Number of events"}),Object(a.jsx)("input",{type:"number",className:"number",value:e,onChange:this.handleChange})]})}}]),n}(r.Component),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="#323edd",a}return n}(f),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,locations:e.props.locations,infoText:""},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t)},e.handleChange=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:'Sorry, we could not find "'.concat(n,'". Please try another city'),showSuggestions:!1}):e.setState({infoText:"",query:n,suggestions:a})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,r=t.suggestions,s=t.showSuggestions,o=t.infoText;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("label",{children:"Choose your nearest city"}),Object(a.jsx)("input",{type:"text",className:"city",value:n,onChange:this.handleChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(a.jsxs)("ul",{className:"suggestions",style:s?{}:{display:"none"},children:[r.map((function(t){return Object(a.jsx)("li",{id:t,onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})},"all")]}),Object(a.jsx)(v,{text:o})]})}}]),n}(r.Component),j=n(26),g=n.n(j),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isExpanded:!1},e.handleExpandEvent=function(){!1===e.state.isExpanded?e.setState({isExpanded:!0}):e.setState({isExpanded:!1})},e.renderExpandedComponent=function(){var t=e.props.event;if(e.state.isExpanded)return Object(a.jsxs)("div",{className:"Expanded-Event",children:[Object(a.jsx)("h4",{children:"About event:"}),Object(a.jsx)("div",{className:"link-container",children:Object(a.jsx)("a",{className:"link",href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"})}),Object(a.jsx)("p",{className:"description",children:t.description})]})},e.renderButtonText=function(){return e.state.isExpanded?"Hide details":"Show details"},e.renderTime=function(){var t=e.props.event.start.dateTime,n=g()(t,"YYYY-MM-DD HH:mm").toDate();return Object(a.jsx)("span",{className:"start-dateTime",children:"".concat(n)})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(a.jsxs)("div",{className:"Event",children:[Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsx)("h2",{className:"summary",children:e.summary}),Object(a.jsxs)("div",{className:"subheading",children:[Object(a.jsx)("div",{className:"time",children:this.renderTime()}),Object(a.jsxs)("div",{className:"location-container",children:[Object(a.jsxs)("span",{className:"summary-2",children:["@",e.summary," | "]}),Object(a.jsx)("span",{className:"location",children:e.location})]})]})]}),Object(a.jsx)("div",{children:this.renderExpandedComponent()}),Object(a.jsx)("button",{type:"button",className:"btn-details",onClick:this.handleExpandEvent,children:this.renderButtonText()})]})}}]),n}(r.Component),x=function(e){var t=e.events;return t?Object(a.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(O,{event:e})},e.id)}))}):null},w=n(28),y=n(7),k=n.n(y),S=n(9),E=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],T=n(11),C=n.n(T),N=n(10),Z=n.n(N),M=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",{events:E,locations:q(E)});case 4:return e.next=6,A();case 6:if(!(t=e.sent)){e.next=16;break}return H(),n="https://10b0ouiuy4.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,C.a.get(n);case 12:return(a=e.sent).data&&(r=q(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),Z.a.done(),e.abrupt("return",{events:a.data.events,locations:r});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){var t=e.map((function(e){return e.location}));return Object(w.a)(new Set(t))},A=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,s,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&n){e.next=18;break}if(localStorage.removeItem("access_token"),a=new URLSearchParams(window.location.search),r=a.get("code")){e.next=17;break}return e.next=14,C.a.get("https://10b0ouiuy4.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 14:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 17:return e.abrupt("return",r&&B(r));case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(),n=encodeURIComponent(t),e.next=4,fetch("https://10b0ouiuy4.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=(n(52),n(53),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:"10"},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,s=a.numberOfEvents;t?M().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,s);return e.setState({events:a,currentLocation:t,locations:n.locations})})):M().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);return e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,M().then((function(t){e.mounted&&e.setState({events:t.events.slice(0,e.state.numberOfEvents),locations:q(t.events)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.numberOfEvents,n=e.events,r=e.locations;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Meet App"}),Object(a.jsx)(b,{locations:r,updateEvents:this.updateEvents}),Object(a.jsx)(m,{numberOfEvents:t,updateEvents:this.updateEvents}),Object(a.jsx)(x,{events:n})]})}}]),n}(r.Component)),D=n(27);c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),D.config("b206faf0f0394dfcac9e7e53568bc5e8").install()}},[[54,1,2]]]);
//# sourceMappingURL=main.2c90d03c.chunk.js.map