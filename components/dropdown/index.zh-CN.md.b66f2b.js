(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{3788:function(t,e){t.exports={content:["section",["p","\u5411\u4E0B\u5F39\u51FA\u7684\u5217\u8868\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002"],["ul",["li",["p","\u7528\u4E8E\u6536\u7F57\u4E00\u7EC4\u547D\u4EE4\u64CD\u4F5C\u3002"]],["li",["p","Select \u7528\u4E8E\u9009\u62E9\uFF0C\u800C Dropdown \u662F\u547D\u4EE4\u96C6\u5408\u3002"]]]],meta:{category:"Components",subtitle:"\u4E0B\u62C9\u83DC\u5355",type:"\u5BFC\u822A",title:"Dropdown",cover:"https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg",filename:"components/dropdown/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","\u5C5E\u6027\u5982\u4E0B"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","arrow"],["td","\u4E0B\u62C9\u6846\u7BAD\u5934\u662F\u5426\u663E\u793A"],["td","boolean ","|"," { pointAtCenter: boolean }"],["td","false"],["td"]],["tr",["td","autoFocus"],["td","\u6253\u5F00\u540E\u81EA\u52A8\u805A\u7126\u4E0B\u62C9\u6846"],["td","boolean"],["td","false"],["td","4.21.0"]],["tr",["td","disabled"],["td","\u83DC\u5355\u662F\u5426\u7981\u7528"],["td","boolean"],["td","-"],["td"]],["tr",["td","destroyPopupOnHide"],["td","\u5173\u95ED\u540E\u662F\u5426\u9500\u6BC1 Dropdown"],["td","boolean"],["td","false"],["td"]],["tr",["td","getPopupContainer"],["td","\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"\u793A\u4F8B"]],["td","(triggerNode: HTMLElement) => HTMLElement"],["td","() => document.body"],["td"]],["tr",["td","overlay"],["td","\u83DC\u5355"],["td",["a",{title:null,href:"/components/menu"},"Menu"]," ","|"," () => Menu"],["td","-"],["td"]],["tr",["td","overlayClassName"],["td","\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0"],["td","string"],["td","-"],["td"]],["tr",["td","overlayStyle"],["td","\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","placement"],["td","\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A",["code","bottom"]," ",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","top"]," ",["code","topLeft"]," ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]],["td"]],["tr",["td","trigger"],["td","\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A, \u79FB\u52A8\u7AEF\u4E0D\u652F\u6301 hover"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td","[",["code","hover"],"]"],["td"]],["tr",["td","visible"],["td","\u83DC\u5355\u662F\u5426\u663E\u793A"],["td","boolean"],["td","-"],["td"]],["tr",["td","onVisibleChange"],["td","\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A ",["code","visible"],"\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1"],["td","(visible: boolean) => void"],["td","-"],["td"]]]],["p",["code","overlay"]," \u83DC\u5355\u4F7F\u7528 ",["a",{title:null,href:"/components/menu/"},"Menu"],"\uFF0C\u8FD8\u5305\u62EC\u83DC\u5355\u9879 ",["code","Menu.Item"],"\uFF0C\u5206\u5272\u7EBF ",["code","Menu.Divider"],"\u3002"],["blockquote",["p","\u6CE8\u610F\uFF1A Menu.Item \u5FC5\u987B\u8BBE\u7F6E\u552F\u4E00\u7684 key \u5C5E\u6027\u3002"],["p","Dropdown \u4E0B\u7684 Menu \u9ED8\u8BA4\u4E0D\u53EF\u9009\u4E2D\u3002\u5982\u679C\u9700\u8981\u83DC\u5355\u53EF\u9009\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A ",["code","<Menu selectable>"],"\u3002"]],["h3","Dropdown.Button"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","buttonsRender"],["td","\u81EA\u5B9A\u4E49\u5DE6\u53F3\u4E24\u4E2A\u6309\u94AE"],["td","(buttons: ReactNode","[","]) => ReactNode","[","]"],["td","-"],["td"]],["tr",["td","loading"],["td","\u8BBE\u7F6E\u6309\u94AE\u8F7D\u5165\u72B6\u6001"],["td","boolean ","|"," { delay: number }"],["td","false"],["td"]],["tr",["td","disabled"],["td","\u83DC\u5355\u662F\u5426\u7981\u7528"],["td","boolean"],["td","-"],["td"]],["tr",["td","icon"],["td","\u53F3\u4FA7\u7684 icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","overlay"],["td","\u83DC\u5355"],["td",["a",{title:null,href:"/components/menu/"},"Menu"]],["td","-"],["td"]],["tr",["td","placement"],["td","\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A",["code","bottom"]," ",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","top"]," ",["code","topLeft"]," ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]],["td"]],["tr",["td","size"],["td","\u6309\u94AE\u5927\u5C0F\uFF0C\u548C ",["a",{title:null,href:"/components/button/#API"},"Button"]," \u4E00\u81F4"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","trigger"],["td","\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td","[",["code","hover"],"]"],["td"]],["tr",["td","type"],["td","\u6309\u94AE\u7C7B\u578B\uFF0C\u548C ",["a",{title:null,href:"/components/button/#API"},"Button"]," \u4E00\u81F4"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","visible"],["td","\u83DC\u5355\u662F\u5426\u663E\u793A"],["td","boolean"],["td","-"],["td"]],["tr",["td","onClick"],["td","\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03\uFF0C\u548C ",["a",{title:null,href:"/components/button/#API"},"Button"]," \u4E00\u81F4"],["td","(event) => void"],["td","-"],["td"]],["tr",["td","onVisibleChange"],["td","\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A ",["code","visible"]],["td","(visible: boolean) => void"],["td","-"],["td"]]]]]}}}]);