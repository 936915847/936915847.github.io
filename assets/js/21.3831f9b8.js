(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{508:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("本文摘自于CSDN，收录学习，文末附有传送门")])]),s._v(" "),t("p",[s._v("hashMap为何采用hash表存数据。如果不用hash表，集合中数据是无序的，当我们向集合中添加一个数据时需要同集合中所有的数据进行equals比较，当集合数据比较大时效率是非常的低。因此用hash表存储数据效率非常高。hash表的底层是数组，数组中存的是entry对象，默认长度是16\n"),t("img",{attrs:{src:"http://assert.pekst.com/image/20180827163324370.png",alt:"img"}})]),s._v(" "),t("p",[s._v("当我们往hash表中添加一个对象时，会调用对象的hash code方法，根据hash算法算出对应的数组的索引值，再根据索引值查找数组，数组中是否存在对象，如果不存在对象直接存进去。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://assert.pekst.com/image/20180827163233948.png",alt:"img"}})]),s._v(" "),t("p",[s._v("如果存在对象，则通过equals比较两个对象的key值是否相等，如果相等则覆盖value值。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://assert.pekst.com/image/20180827163023843.png",alt:"img"}})]),s._v(" "),t("p",[s._v("如果不相等则形成链表结构，jdk1.7后加的在前面，先加的移下，这种情况叫碰撞。这种碰撞的情况应尽量避免，否存一个索引中链表的数据大量时，该索引当再次插入一个对象时equals比较全部影响效率。这时我们将equals和hashcode方法重写的严谨点，这种还是避免不了，因为数组的索引值有限。因此hashMap提供了加载因子避免碰撞，默认0.75，当元素到达现有的hash表的75%时扩容。一旦扩充就会重新排序hash表，减少碰撞概率。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://assert.pekst.com/image/20180827164041905.png",alt:"img"}})]),s._v(" "),t("p",[s._v("但是这两种方法还是避免不了这种碰撞的情况，就会出现查询一个对象可能出现极端情况查询链表的最后一个数据返回，影响查询效率。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://assert.pekst.com/image/20180827170256627.png",alt:"img"}})]),s._v(" "),t("p",[s._v("因此jdk1.8改善这种碰撞情况的出现，jdk1.8中的HashMap存储结构是由数组、链表、红黑树这三种数据结构形成，红黑树查询删除快新增慢。存储结构下图所示，根据key的hash与table长度确定table位置，同一个位置的key以链表形式存储，超过一定限制链表转为树。数组的具体存取规则是tab[(n-1) & hash],其中tab为node数组，n为数组的长度，hash为key的hash值。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://assert.pekst.com/image/20180827171215452.png",alt:"img"}})]),s._v(" "),t("p",[t("strong",[s._v("表中数据的临界值，如果达到8，就进行resize扩展,如果数组大于64则转换为树")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" TREEIFY_THRESHOLD "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("如果数组的size大于64，则把链表进行转化为树")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" MIN_TREEIFY_CAPACITY "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("以上内容转载自 "),t("a",{attrs:{href:"https://blog.csdn.net/changhangshi/article/details/82114727",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSDN"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);