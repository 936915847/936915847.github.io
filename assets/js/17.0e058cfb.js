(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{504:function(t,a,r){"use strict";r.r(a);var e=r(4),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"部署步骤："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署步骤："}},[t._v("#")]),t._v(" 部署步骤：")]),t._v(" "),r("h3",{attrs:{id:"_1、查询当前portainer镜像，选择start值比较高的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、查询当前portainer镜像，选择start值比较高的"}},[t._v("#")]),t._v(" 1、查询当前Portainer镜像，选择start值比较高的")]),t._v(" "),r("p",[t._v("命令：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("docker search portainer\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h3",{attrs:{id:"_2、下载指定portainer镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、下载指定portainer镜像"}},[t._v("#")]),t._v(" 2、下载指定portainer镜像")]),t._v(" "),r("p",[t._v("命令：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("docker pull portainer/portainer\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h3",{attrs:{id:"_3、本次只部署单机版，命令如下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、本次只部署单机版，命令如下"}},[t._v("#")]),t._v(" 3、本次只部署单机版，命令如下")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data --name prtainer-test portainer/portainer\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[t._v("如下图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/954348-20191211153203115-79465651-1024x15.png",alt:"img"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/954348-20191211152823762-1999879810-1024x24.png",alt:"img"}})]),t._v(" "),r("p",[t._v("参数说明：\n-d：容器在后台运行；\n-p 9000:9000 ：宿主机9000端口映射容器中的9000端口\n–restart 标志会检查容器的退出代码，并据此来决定是否要重启容器，默认是不会重启。")]),t._v(" "),r("p",[t._v("–restart=always：自动重启该容器\n-v /var/run/docker.sock:/var/run/docker.sock ：把宿主机的Docker守护进程(Docker daemon)默认监听的Unix域套接字挂载到容器中\n-v portainer_data:/data ：把宿主机portainer_data数据卷挂载到容器/data目录\n–name prtainer-test ： 给容器起名为portainer-test")]),t._v(" "),r("h3",{attrs:{id:"_4、使用docker-ps查看进程，如下所示："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用docker-ps查看进程，如下所示："}},[t._v("#")]),t._v(" 4、使用docker ps查看进程，如下所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/954348-20191211153234806-1638544994-1024x102.png",alt:"img"}})]),t._v(" "),r("p",[t._v("如果需要汉化，可以下载"),r("a",{attrs:{href:"https://pan.baidu.com/s/1BLXMSmJFcgESeNMhQL26Mg&shfl=sharepset",target:"_blank",rel:"noopener noreferrer"}},[t._v("汉化包"),r("OutboundLink")],1),t._v("（提取码：6vjr），之后解压，并将解压后的public文件夹上传到centos系统的根目录下，如下图所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/954348-20191211154002659-629104571.png",alt:"img"}})]),t._v(" "),r("p",[t._v("然后执行以下命令：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("docker run -d -p 9000:9000 --restart=always  -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data -v /public:/public --name prtainer-test  portainer/portainer（如果已部署，需要将之前的容器删除）\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h3",{attrs:{id:"_5、portainer的web页面登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、portainer的web页面登录"}},[t._v("#")]),t._v(" 5、Portainer的web页面登录")]),t._v(" "),r("p",[t._v("在浏览器输入部署服务器的IP:9000，回车，显示如下界面：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/954348-20191211154735320-1919071871-1024x463.png",alt:"img"}})]),t._v(" "),r("p",[t._v("由于是本地docker，所有选择local")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/954348-20191211155241808-1937877821-1024x551.png",alt:"img"}})]),t._v(" "),r("p",[t._v("之后点击“Connect”，成功后跳转到主页界面（汉化后），如下图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/954348-20191211154943016-14709007-1024x505.png",alt:"img"}})]),t._v(" "),r("p",[t._v("点击“local”，进入该docker内，展示相关容器、堆栈、镜像等信息，如下图所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/954348-20191211155743452-2143259224-1024x432.png",alt:"img"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);