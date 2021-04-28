(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{445:function(a,s,t){},490:function(a,s,t){"use strict";var r=t(445);t.n(r).a},514:function(a,s,t){"use strict";t.r(s);t(490);var r=t(4),n=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[a._v("计划一点点的去归纳和更新文档里的问题，起于2020.7.1，最后更新时间 2021.4.1（29/65）")])]),a._v(" "),t("h2",{attrs:{id:"java基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java基础知识"}},[a._v("#")]),a._v(" java基础知识")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("1、栈、堆、队列的区别")]),a._v("\n1、栈是先进后出，在表尾一端插入和删除"),t("br"),a._v("\n2、队列是先进先出，在表头删除，表尾插入"),t("br"),a._v("\n3、栈存放基本类型的变量数据和对象的引用，堆存放new出来的对象"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("2、接口和抽象类的区别")]),a._v("\n1、抽象类用abstract修饰,接口用interface"),t("br"),a._v("\n2、抽象类可以包含普通方法和字段，子类继承时不用重写"),t("br"),a._v("\n3、一个子类只能继承一个抽象类，可以实现多个接口"),t("br"),a._v("\n4. JDK1.8 接口中可以用default修饰静态方法"),t("p")]),a._v(" "),t("h2",{attrs:{id:"集合框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集合框架"}},[a._v("#")]),a._v(" 集合框架")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v(" 1、常见的集合有哪些")]),a._v("\n1、Collection接口的子接口包括：Set接口和List接口"),t("br"),a._v("\n2、Map接口的实现类主要有：HashMap、TreeMap、Hashtable、ConcurrentHashMap以及Properties等"),t("br"),a._v("\n3、Set接口的实现类主要有：HashSet、TreeSet、LinkedHashSet等"),t("br"),a._v("\n4、List接口的实现类主要有：ArrayList、LinkedList、Stack以及Vector等"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("2、HashMap与HashTable的区别？")]),a._v("\n1、HashMap没有考虑同步，是线程不安全的；Hashtable使用了synchronized关键字，是线程安全的"),t("br"),a._v("\n2、HashMap允许K/V都为null；后者K/V都不允许为null"),t("br"),a._v("\n3、HashMap继承自AbstractMap类，而Hashtable继承自Dictionary类"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("3、ArrayList和LinkedList的区别？")]),a._v("\n1、LinkedList 实现了 List 和 Deque 接口，一般称为双向链表；ArrayList 实现了 List 接口，动态数组"),t("br"),a._v("\n2、LinkedList 在插入和删除数据时效率更高，ArrayList 在查找某个 index 的数据时效率更高"),t("br"),a._v("\n3、LinkedList 比 ArrayList 需要更多的内存"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("4、HashSet是如何保证数据不可重复的？")]),a._v("\n1、HashSet的底层其实就是HashMap，只不过我们HashSet是实现了Set接口并且把数据作为K值，而V值一直使用一个相同的虚值来保存"),t("br"),a._v("\n2、由于HashMap的K值本身就不允许重复，并且在HashMap中如果K/V相同时，会用新的V覆盖掉旧的V，然后返回旧的V，那么在HashSet中执行这一句话始终会返回一个false，导致插入失败，这样就保证了数据的不可重复性"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("5、HashMap在JDK1.7和JDK1.8中有哪些不同？")]),a._v("\n1、在jdk1.8中新增了数组转红黑树,详见"),t("br"),a._v(" "),t("a",{attrs:{href:"http://doc.pekst.com/blogs/%E5%90%8E%E7%AB%AF/2020/java1.html"}},[a._v("传送门")])]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("6、ConcurrentHashMap在JDK1.7和JDK1.8中有哪些不同？")]),a._v("\n1、数据结构发生变化"),t("br"),a._v("\n2、优化了实现线程安全的方式,详见"),t("br"),a._v(" "),t("a",{attrs:{href:"http://doc.pekst.com/blogs/%E5%90%8E%E7%AB%AF/2020/java2.html"}},[a._v("传送门")])]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("7、HashMap的长度为什么要是2的幂次方 ")]),a._v("\n1. 提高哈希计算的效率"),t("br"),a._v("\n2. 减少哈希冲突"),t("br"),a._v(" "),t("a",{attrs:{href:"http://doc.pekst.com/blogs/%E5%90%8E%E7%AB%AF/2020/java3.html"}},[a._v("传送门")])]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("8、为什么HashMap中String、Integer这样的包装类适合作为K？Object作为K应该怎么办？ ")]),a._v("\n1、String、Integer等包装类都是final类型，保证key的不可更改性"),t("br"),a._v("\n2、内部已重写了equals()、hashCode()等方法，不容易出现Hash值计算错误的情况"),t("br"),a._v("\n1、重写hashCode()，equals()方法，hashCode()"),t("br"),a._v("\n2、hashCode()必须是完整的对象信息，减少hash碰撞"),t("br"),a._v("\n3、equals()，x.equals(null)必须返回false"),t("br")]),a._v(" "),t("h2",{attrs:{id:"多线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[a._v("#")]),a._v(" 多线程")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("1、创建线程的几种方式？wait,sleep分别是谁的方法，区别？线程间的通信方式？ \n")]),a._v("\n1、创建线程可以通过继承Thread，实现Runnbale，Callable方法"),t("br"),a._v("\n2、wait是object的方法，sleep是线程本身的静态方法"),t("br"),a._v("\n3、wait是线程进入对象的等待池中等待，对象本身是可访问的，sleep是休眠当前线程并占用当前对象。wait可以使用notify方法唤醒当前线程，或者notifyAll去唤醒所有等待的线程，sleep是根据时间自己解锁线程"),t("br"),a._v("\n4、线程直接的通信方式，通过sycnlized的方式共享同一个对象，使用while循环去轮询对象的状态。"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("2、什么是死锁，遇见过死锁吗？你是怎么排查的 ")]),a._v("\n数据库连续对同表同行写入操作时，查询全表时，批量更新时出现的锁表锁行级数据，存储过程多表写入时，出现并发相互锁表。排查的话可以直接看后端log日志，数据库log日志。如果是线程死锁可以查jvm日志"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("3、创建线程池的几种方式，线程池有什么好处 ")]),a._v("\n1、new一个threadpool，将new 的thread实例加入到pool中。"),t("br"),a._v("\n2、可以通过不同类型的线程池对线程的新增，回收，再利用的策略，提高多线程性能，一定程度上的防止容器宕机"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("4、线程继承和接口的区别，接口有什么好处 ")]),a._v("\n继承Thread去实现多线程方式比较简单，只需要去重写run方法。实现Runnbale、Callable的话可以多实现。是JAVA多态的体现。方式更灵活"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("5、synchronized、Lock、ReentrantLock的区别，用法及原理")]),a._v("\n可重入性及原理："),t("br"),a._v("\nReenTrantLook和synchornized都是可重入锁，同一线程每进入一次，锁的计数器自增1，当锁的计数器降为0的时候，锁会被释放掉"),t("br"),a._v("\n锁的实现："),t("br"),a._v("\nSyschornized是JVM实现的，ReenRrantLook是JDK实现的"),t("br"),a._v("\n性能区别："),t("br"),a._v("\n性能差距很小，ReenRrantLook使用了CAS技术"),t("br"),a._v("\n功能区别："),t("br"),a._v("\nSynchronized的使用比较方便简洁，并且由编译器去保证锁的加锁和释放，ReenTrantLock需要手工声明来加锁和释放锁，为了避免忘记手工释放锁造成死锁，所以最好在finally中声明释放锁"),t("br"),a._v("\nReenTrantLock的锁粒度很细"),t("br"),a._v("\nReenTrantLock独有的能力："),t("br"),a._v("\nReenRrantLook可以指定是公平锁还是非公平锁，Synchronized只能是非公平锁。"),t("br"),a._v("\nReenRrantLook可以通过指定的条件来实现分组唤醒线程，Synchronized只能随机唤醒一个，或者全部唤醒"),t("br"),a._v("\nReenRrantLook可以通过lock.lockInterruptibly()来中断等待锁的线程"),t("br"),a._v("\nReenRrantLook的自有方法可以监控锁的状态"),t("br"),a._v("\n何时应该使用ReentrantLock？"),t("br"),a._v("\n“既然如此，我们什么时候才应该使用 ReentrantLock 呢？答案非常简单 —— 在确实需要一些 synchronized 所没有的特性的时候，比如时间锁等候、可中断锁等候、无块结构锁、多个条件变量或者锁投票。 ReentrantLock 还具有可伸缩性的好处，应当在高度争用的情况下使用它，但是请记住，大多数 synchronized 块几乎从来没有出现过争用，所以可以把高度争用放在一边。我建议用 synchronized 开发，直到确实证明 synchronized 不合适，而不要仅仅是假设如果使用 ReentrantLock “性能会更好”。请记住，这些是供高级用户使用的高级工具。（而且，真正的高级用户喜欢选择能够找到的最简单工具，直到他们认为简单的工具不适用为止。）一如既往，首先要把事情做好，然后再考虑是不是有必要做得更快。”"),t("br")]),a._v(" "),t("details",[t("summary",[a._v("6、CountDownLatch与CyclicBarrier用法 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("7、ThreadLocal的用法和原理")]),a._v("\nthreadlocal被称为是线程内本地变量，适合变量在线程间隔离，在方法或类间共享的场景\n..待更新\n")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("8、volatile关键字的作用和原理 ")]),a._v(" "),t("a",{attrs:{href:"http://doc.pekst.com/blogs/后端/2021/java4.html"}},[a._v("传送门")])]),a._v(" "),t("details",[t("summary",[a._v("9、乐观锁和悲观锁")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("10、对公平锁，非公平锁，可重入锁，自旋锁，读写锁的理解")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("11、CAS是什么及基层原理 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("12、ArrayBlockQueue，LinkedBlockingQueue，SynchronousQueue等等阻塞队列的理解  ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("13、ThreadPoolExecutor的传入参数及内部工作原理")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("14、给你一个具体的业务场景，让你使用ThreadPoolExecutor创建一个合适的线程池 \n")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("15、分布式环境下，怎么保证线程安全 ")]),a._v("\n..待更新\n")]),a._v(" "),t("h2",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[a._v("#")]),a._v(" jvm")]),a._v(" "),t("details",[t("summary",[a._v("1、JVM内存机制")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("2、介绍下垃圾收集机制，垃圾收集有哪些算法，各自的特点 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("3、聊聊GC，谈谈Major GC，Full GC区别，垃圾收集器有哪些，他们的区别")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("4、OutOfMemoryError这个错误你遇到过吗，你是怎么解决处理的")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("5、JVM调优有哪些参数，介绍下，线上环境上，你是怎么查看JVM的参数并进行调优的 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("6、能不能自己写一个类叫java. lang. String(类加载的过程，双亲委派模型) ")]),a._v("\n..待更新\n")]),a._v(" "),t("h2",{attrs:{id:"框架相关问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架相关问题"}},[a._v("#")]),a._v(" 框架相关问题")]),a._v(" "),t("details",[t("summary",[a._v("1、Spring用了哪些设计模式？Spring注入bean的方式？对SpringIOC和SpringAOP的理解 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("2、Spring事务的隔离机制和传播机制")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("3、Mybatis的缓存机制（一级缓存和二级缓存），Mybatis的mapper文件中#和$的区别")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("4、SpringMVC的流程 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("5、Spring和SpringBoot的区别 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("6、对SpringBoot的理解 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("7、RPC框架有哪些，他们的区别 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("8、Dubbo的使用和理解 ")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("9、SprigCloud的使用和组件，谈谈你得理解 ")]),a._v("\n..待更新\n")]),a._v(" "),t("h2",{attrs:{id:"消息中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息中间件"}},[a._v("#")]),a._v(" 消息中间件")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("1、如何保证消息中间件的高可用 ")]),a._v("\n1、镜像集群"),t("br"),a._v("\n2、多节点主从复制"),t("br"),a._v(" "),t("a",{attrs:{href:"http://doc.pekst.com/blogs/%E5%90%8E%E7%AB%AF/2020/mq0.html"}},[a._v("传送门")])]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("2、如何保证消息中间件重复发送消息")]),a._v("\n1、写入底库时，先查找再插入或更新，时间戳代入"),t("br"),a._v("\n2、每条消息中附带全局唯一的id，可以把redis做id的消费记录器，或者入底库"),t("br"),a._v("\n3、数据库设计唯一键约束"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("3、消息队列积压了大量的消息，你该怎么处理")]),a._v("\n1、消息队列本身性能问题，拓容broker提升组件性能"),t("br"),a._v("\n2、排查是推送过快了，还是消费变慢了"),t("br"),a._v("\n3、一般情况下，我们先通过监控队列数据，如果是因为单位时间消息增多，则扩容消费端实例，提升消费能力。如果没办法扩容的话，则需要关闭不重要的业务，减少发送方的数据量"),t("br"),a._v("\n4、如果在推送/消费速度上没有异常，则需要检查一下消费端，是否存在一条消息反复消费的情况"),t("br"),a._v("\n5、如果在监控到消费速度变慢了，就需要打印堆栈信息和消费日志，看下是否存在资源上的死锁或者等待"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("4、如何保证消费者消费消息是有顺序的 ")]),a._v("\n1、从业务角度来讲，生产者在发送消息时，始终保证消息是全量信息。或者消费者在接受消息时，通过判别时间戳保证消息的有序消费"),t("br"),a._v("\n2、从技术角度来讲，涉及分布式线程安全，可以通过redis或zookeeper的分布式锁对有序消息进行设定"),t("br")]),a._v(" "),t("details",[t("summary",[a._v("5、让你来开发一个消息中间件，你会怎么架构 ")]),a._v("\n..待更新\n")]),a._v(" "),t("h2",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("1、为什么要使用Redis，Redis有几种数据类型")]),a._v("\n1、内存数据库，速度快性能好，单线程操作，采用了非阻塞I/O多路复用机制，并发高"),t("br"),a._v("\n1、String 整数，浮点数或者字符串"),t("br"),a._v("\n2、Set 集合"),t("br"),a._v("\n3、Zset 有序集合"),t("br"),a._v("\n4、Hash 散列表"),t("br"),a._v("\n5、List 列表"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("2、Redis持久化机制，Redis的过期策略 ")]),a._v("\n1、RDB 持久化-将某个时间点的数据快照放在硬盘上"),t("br"),a._v("\n2、AOF 持久化-定时或每次写入数据时，将更新内容同步到磁盘，提供多种模式"),t("br"),a._v("\n1、volatile-lru 从已设置过期时间的数据集中挑选最近最少使用的数据淘汰"),t("br"),a._v("\n2、volatile-ttl 从已设置过期时间的数据集中挑选将要过期的数据淘汰"),t("br"),a._v("\n3、volatile-random从已设置过期时间的数据集中任意选择数据淘汰"),t("br"),a._v("\n4、allkeys-lru从所有数据集中挑选最近最少使用的数据淘汰"),t("br"),a._v("\n5、allkeys-random从所有数据集中任意选择数据进行淘汰"),t("br"),a._v("\n6、noeviction禁止驱逐数据"),t("br")]),a._v(" "),t("details",[t("summary",[a._v("3、怎么保证Redis的高可用")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("4、什么是缓存穿透，如何避免，什么是缓存雪崩，如何避免")]),a._v("\n1、缓存穿透-当客户端发起redis和底库都不存在的数据请求"),t("br"),a._v("\n2、解决方案：查询条件设定范围，底库请求不到时在redis中设置key-null，防止重复请求"),t("br"),a._v("\n1、缓存雪崩-大量数据在同一时间失效"),t("br"),a._v("\n2、设置过期时间随机"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("5、如何保证缓存与数据库的读写一致性")]),a._v("\n1、最终一致性方案："),t("br"),a._v("\n  1.监听数据库的binlog到消息队列，更新缓存。"),t("br"),a._v("\n  2.Cache Aside Pattern，读的时候先读库，没有就读数据库，取出数据放入缓存，响应\n  更新的时候先更新数据库，然后删除缓存，为防止删除失败，做延时双删或消息队列"),t("br"),a._v("\n2、同步一致性方案"),t("br"),a._v("\n  1.缓存加锁，读写请求做队列"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("6、Redis单线程模型原理，为什么能支撑高并发")]),a._v("\n1、内存型数据库"),t("br"),a._v("\n2、单线程，无锁，效率高"),t("br"),a._v("\n3、非阻塞IO,IO多路复用，事件分离器"),t("br"),a._v("\n4、hash结构，读取速度快，短数据压缩存储"),t("br")]),a._v(" "),t("details",[t("summary",[a._v("7、Redis哨兵架构的理解和底层原理")]),a._v("\n..待更新\n")]),a._v(" "),t("h2",{attrs:{id:"数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[a._v("#")]),a._v(" 数据库")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("1、 工作中你是怎么优化sql的")]),a._v("\n1、建立必要的索引"),t("br"),a._v("\n2、减少不必要的主外键关系"),t("br"),a._v("\n3、减少select *"),t("br"),a._v("\n4、尽量走单表查询，BO组合查询"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("2、什么情况下，索引会失效")]),a._v("\n1、字符串不加单引号索引失效"),t("br"),a._v("\n2、like会导致索引失效"),t("br"),a._v("\n3、is null ,is not null 无法使用索引"),t("br"),a._v("\n4、索引上做计算、函数、类型转换，索引失效"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("3、数据库的存储引擎，比如：MySQL的MyISAM和InnoDB区别")]),a._v("\n1、InnoDB 常用默认，支持事务，外键和行锁，自增列自带索引"),t("br"),a._v("\n2、MyISAM 不支持事务，外键，插入、查询速度快，BLOB和TEXT列，NULL可以被索引"),t("br"),a._v("\n3、MEMORY 内存表，服务器宕机时数据丢失，表不丢失"),t("br")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("4、索引的最左原则")]),a._v("\n1、如果索引是多列，查询从索引的最左前列开始并且不跳过索引中的列，都不会走索引"),t("br")]),a._v(" "),t("details",[t("summary",[a._v("5、索引的底层原理")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("6、怎么进行分库分表，分库分表的方案")]),a._v("\n..待更新\n")]),a._v(" "),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("1、分布式事务是怎么解决的")]),a._v("\n1、TCC方案"),t("br"),a._v("\n2、AT方案"),t("br"),a._v("\n...后续开文章"),t("br")]),a._v(" "),t("details",[t("summary",[a._v("2、分布式session方案")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("3、设计一个秒杀场景")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",{staticClass:"get"},[a._v("4、怎么防止表单多次提交")]),a._v("\n1、前端防提（方案多样不过多赘述）"),t("br"),a._v("\n2、AOP自定义切入实现，session + 时间戳做redis 自动失效锁"),t("br")]),a._v(" "),t("details",[t("summary",[a._v("5、Linux的基本操作命令")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("6、ElasticSearch的使用和原理")]),a._v("\n..待更新\n")]),a._v(" "),t("details",[t("summary",[a._v("7、zookeeper的使用和原理")]),a._v("\n..待更新\n")])])}),[],!1,null,null,null);s.default=n.exports}}]);