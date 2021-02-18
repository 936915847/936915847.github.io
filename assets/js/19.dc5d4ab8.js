(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{506:function(n,s,a){"use strict";a.r(s);var t=a(4),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"配置nginx的二级域名反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx的二级域名反向代理"}},[n._v("#")]),n._v(" 配置nginx的二级域名反向代理")]),n._v(" "),a("ol",[a("li",[a("p",[n._v("将域名（假设为xingsha.ltd）解析到机房对应的IP上，并在防火墙里设置对应的NAT，将机房IP的80端口指向10.10.10.10 的80端口上。")])]),n._v(" "),a("li",[a("p",[n._v("10.10.10.10这台服务器已经在本文的第三步中安装完了nginx，接下来进入/nginx/conf.d目录，新增一个xingsha.ltd.conf文件,并将下文代码中的内容粘贴进去。（保存并退出，要按ESC并输入：wq）")])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("cd /nginx/conf.d\nvi xingsha.ltd.conf\nserver {\n    listen       80;\n    server_name xingsha.ltd;  # 要解析进来域名\n    location / {\n       proxy_pass http://10.10.10.10:80;  #宿主机ip:容器对外的端口号\n      }\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[n._v("如果你需要多个域名的配置，只需要在/nginx/conf.d目录下加相应的配置文件即可，一般只需要修改server_name和proxy_pass即可。")])]),n._v(" "),a("li",[a("p",[n._v("重启nginx容器。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);