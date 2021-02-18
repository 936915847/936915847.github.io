(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{512:function(e,t,r){"use strict";r.r(t);var a=r(4),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",[e._v("本文摘自于简书，收录学习，文末附有传送门")])]),e._v(" "),r("h3",{attrs:{id:"rabbitmq-的高可用性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-的高可用性"}},[e._v("#")]),e._v(" RabbitMQ 的高可用性")]),e._v(" "),r("h4",{attrs:{id:"镜像集群模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像集群模式"}},[e._v("#")]),e._v(" 镜像集群模式")]),e._v(" "),r("p",[e._v("这种模式，才是所谓的 RabbitMQ 的高可用模式。跟普通集群模式不一样的是，在镜像集群模式下，你创建的 queue，无论元数据还是 queue 里的消息都会"),r("strong",[e._v("存在于多个实例上")]),e._v("，就是说，每个 RabbitMQ 节点都有这个 queue 的一个"),r("strong",[e._v("完整镜像")]),e._v("，包含 queue 的全部数据的意思。然后每次你写消息到 queue 的时候，都会自动把"),r("strong",[e._v("消息同步")]),e._v("到多个实例的 queue 上。")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/800.png",alt:"img"}})]),e._v(" "),r("p",[e._v("那么"),r("strong",[e._v("如何开启这个镜像集群模式")]),e._v("呢？其实很简单，RabbitMQ 有很好的管理控制台，就是在后台新增一个策略，这个策略是"),r("strong",[e._v("镜像集群模式的策略")]),e._v("，指定的时候是可以要求数据同步到所有节点的，也可以要求同步到指定数量的节点，再次创建 queue 的时候，应用这个策略，就会自动将数据同步到其他的节点上去了。")]),e._v(" "),r("p",[e._v("这样的话，好处在于，你任何一个机器宕机了，没事儿，其它机器（节点）还包含了这个 queue 的完整数据，别的 consumer 都可以到其它节点上去消费数据。坏处在于，第一，这个性能开销也太大了吧，消息需要同步到所有机器上，导致网络带宽压力和消耗很重！第二，这些玩儿，不是分布式的，就"),r("strong",[e._v("没有扩展性可言")]),e._v("了，如果某个 queue 负载很重，你加机器，新增的机器也包含了这个 queue 的所有数据，并"),r("strong",[e._v("没有办法线性扩展")]),e._v("你的 queue。")]),e._v(" "),r("h3",{attrs:{id:"kafka-的高可用性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka-的高可用性"}},[e._v("#")]),e._v(" Kafka 的高可用性")]),e._v(" "),r("p",[e._v("Kafka 一个最基本的架构认识：由多个 broker 组成，每个 broker 是一个节点；你创建一个 topic，这个 topic 可以划分为多个 partition，每个 partition 可以存在于不同的 broker 上，每个 partition 就放一部分数据。\n这就是"),r("strong",[e._v("天然的分布式消息队列")]),e._v("，就是说一个 topic 的数据，是"),r("strong",[e._v("分散放在多个机器上的，每个机器就放一部分数据")]),e._v("。")]),e._v(" "),r("p",[e._v("实际上 RabbmitMQ 之类的，并不是分布式消息队列，它就是传统的消息队列，只不过提供了一些集群、HA(High Availability, 高可用性) 的机制而已，因为无论怎么玩儿，RabbitMQ 一个 queue 的数据都是放在一个节点里的，镜像集群下，也是每个节点都放这个 queue 的完整数据。")]),e._v(" "),r("p",[e._v("Kafka 0.8 以前，是没有 HA 机制的，就是任何一个 broker 宕机了，那个 broker 上的 partition 就废了，没法写也没法读，没有什么高可用性可言。")]),e._v(" "),r("p",[e._v("比如说，我们假设创建了一个 topic，指定其 partition 数量是 3 个，分别在三台机器上。但是，如果第二台机器宕机了，会导致这个 topic 的 1/3 的数据就丢了，因此这个是做不到高可用的。")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/1756639-20190910234012666-430006399.jpg",alt:"file"}})]),e._v(" "),r("p",[e._v("Kafka 0.8 以后，提供了 HA 机制，就是 replica（复制品） 副本机制。每个 partition 的数据都会同步到其它机器上，形成自己的多个 replica 副本。所有 replica 会选举一个 leader 出来，那么生产和消费都跟这个 leader 打交道，然后其他 replica 就是 follower。写的时候，leader 会负责把数据同步到所有 follower 上去，读的时候就直接读 leader 上的数据即可。只能读写 leader？很简单，"),r("strong",[e._v("要是你可以随意读写每个 follower，那么就要 care 数据一致性的问题")]),e._v("，系统复杂度太高，很容易出问题。Kafka 会均匀地将一个 partition 的所有 replica 分布在不同的机器上，这样才可以提高容错性。")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://assert.pekst.com/image/1756639-20190910234012916-1470368416.jpg",alt:"file"}})]),e._v(" "),r("p",[e._v("这么搞，就有所谓的"),r("strong",[e._v("高可用性")]),e._v("了，因为如果某个 broker 宕机了，没事儿，那个 broker上面的 partition 在其他机器上都有副本的。如果这个宕机的 broker 上面有某个 partition 的 leader，那么此时会从 follower 中"),r("strong",[e._v("重新选举")]),e._v("一个新的 leader 出来，大家继续读写那个新的 leader 即可。这就有所谓的高可用性了。")]),e._v(" "),r("p",[r("strong",[e._v("写数据")]),e._v("的时候，生产者就写 leader，然后 leader 将数据落地写本地磁盘，接着其他 follower 自己主动从 leader 来 pull 数据。一旦所有 follower 同步好数据了，就会发送 ack 给 leader，leader 收到所有 follower 的 ack 之后，就会返回写成功的消息给生产者。（当然，这只是其中一种模式，还可以适当调整这个行为）")]),e._v(" "),r("p",[r("strong",[e._v("消费")]),e._v("的时候，只会从 leader 去读，但是只有当一个消息已经被所有 follower 都同步成功返回 ack 的时候，这个消息才会被消费者读到。")]),e._v(" "),r("p",[e._v("以上内容转载自 "),r("a",{attrs:{href:"https://www.jianshu.com/p/6940f7e1d962",target:"_blank",rel:"noopener noreferrer"}},[e._v("简书"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);