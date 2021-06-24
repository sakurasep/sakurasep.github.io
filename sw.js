/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f09fcdf75fed757c34ece43e11e1c202"],["/about/index.html","f063c68a1b95b677be0584efc281e1fe"],["/archives/2020/12/index.html","ce7b52b6d2f5f640e53e003983f44fc2"],["/archives/2020/index.html","e39c521f80cecfe3f0a434e25ade8952"],["/archives/2021/01/index.html","a9aa7760a90560e22d3cfe26dca4ceed"],["/archives/2021/03/index.html","31f7707e0327a2b85929ea0eeb0ff1e4"],["/archives/2021/04/index.html","91329f7edbfc4ee08f63d871ac0782eb"],["/archives/2021/05/index.html","1d9a33de93d200ceffe622a2a51cdef1"],["/archives/2021/index.html","90705765b4e03d6e8995c1cd6b785279"],["/archives/index.html","481ec7f9aca7c2dd6b67196ef5abb625"],["/archives/page/2/index.html","481ec7f9aca7c2dd6b67196ef5abb625"],["/bangumis/index.html","36eaf9669ca9675e978acad28eef9986"],["/bb/index.html","2a63914e9342b48d90ecff175527af13"],["/butterfly/404.html","0aba5b0af7e53442b33b9b80a71c7d50"],["/butterfly/about/index.html","feb5a0c740d155da844be2de670d4779"],["/butterfly/acg/index.html","ba322c9abd6c38ad2dd65f0bc0bcb028"],["/butterfly/archives/2020/12/index.html","db7b70273a691110404feb784e4aab19"],["/butterfly/archives/2020/index.html","b1cfc8e3a70c92683ff997ef65dc172a"],["/butterfly/archives/2021/01/index.html","5e47b48a914d94170d63f7978c3321fd"],["/butterfly/archives/2021/03/index.html","62502326b655879cf69ac317a3fed7e3"],["/butterfly/archives/2021/04/index.html","64ef7f4808e3e2ccade89bd699953efc"],["/butterfly/archives/2021/05/index.html","f2e5a34028092ac703317db15cd85b52"],["/butterfly/archives/2021/index.html","eea3fe2bce3415c0881c0729696ad6b6"],["/butterfly/archives/index.html","ecb329428d86891e26d9c4460bb2b23f"],["/butterfly/archives/page/2/index.html","41d6d7bfe33b3c16023e11f1c3d8f31d"],["/butterfly/books/index.html","a71917b835d5f3d09dc03f8b7e035b95"],["/butterfly/categories/Hexo系列教程/index.html","9f96bf837f2fbb060d80663472d3c8d0"],["/butterfly/categories/index.html","09441dd877a732689af294c6f67e5568"],["/butterfly/categories/云评测/index.html","81707163c651a10360aec9be266d9ad9"],["/butterfly/categories/学习笔记/index.html","c5d17293aae4fdc14482c6d11166f140"],["/butterfly/categories/年度总结/index.html","a4621719b83166b3cb5f1b7e0509d31a"],["/butterfly/categories/应用使用指南/index.html","0f99cd5c5942165360b97b0a13036304"],["/butterfly/categories/影评/index.html","831c26e3d75515d8f50c8e86d40d1f9a"],["/butterfly/categories/网站公告/index.html","f7d70224c5fc461087019490e184bb6a"],["/butterfly/categories/零基础教程/index.html","7c410e5897c4e5b65b1d1b1d3fb98974"],["/butterfly/css/index.css","172f2908ac337adbbe35500702467b90"],["/butterfly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/butterfly/gallery/index.html","4ae080cd6be0b5e4185d5d45fb76a291"],["/butterfly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/butterfly/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/butterfly/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/butterfly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/butterfly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/butterfly/index.html","5750ae5fd18340996599aa205c9dabbd"],["/butterfly/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["/butterfly/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/butterfly/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/butterfly/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/butterfly/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/butterfly/link/index.html","19486840ae26aefa68d453fef47760c0"],["/butterfly/music/index.html","6de5449157819af429fc6f2fe7462dd5"],["/butterfly/page/2/index.html","b4fcab00edb8f17fccd86ef479f75f08"],["/butterfly/page/3/index.html","0b6500d390ca329bf2d94632b811ac5a"],["/butterfly/posts/1196/index.html","d20ea5dc204a80797c67a9fd212af247"],["/butterfly/posts/13253/index.html","b4ff739f763061f07bc50e158bb4ec27"],["/butterfly/posts/18490/index.html","f8630d7d35c33e097e292c704f2d4309"],["/butterfly/posts/21686/index.html","0d2afb1596789ef756a13080e5cdec34"],["/butterfly/posts/22362/index.html","d952a8ac2f3792ff77b05bc8429434b8"],["/butterfly/posts/27671/index.html","ff90dae3d4aa1f18830a4b01741806cb"],["/butterfly/posts/29349/index.html","bca445fc0d830cbb8486acb33a67caa4"],["/butterfly/posts/34525/index.html","10fa249ab693d19baaf2981cee016d45"],["/butterfly/posts/3693/index.html","f5b738aeda82d5b777fdfbc7b981e8f0"],["/butterfly/posts/38865/index.html","e5a533d1c5c2380721c6b1acdec6e202"],["/butterfly/posts/39030/index.html","03e8f3a1bf3448d5c34ef41183ec9a56"],["/butterfly/posts/42521/index.html","00b9afe6ee655956fb2a774b38f0ce44"],["/butterfly/posts/42550/index.html","07a5572cbc8925134d3d780b094f37fc"],["/butterfly/posts/44775/index.html","042c8a18a603c46ff671a0850850be3e"],["/butterfly/service-worker.js","531d21d962debe0b47d3137303d419e0"],["/butterfly/tags/C/index.html","93c0ce4bd80633f168b0b56ac51a8b51"],["/butterfly/tags/Cmd/index.html","57d361a632b4e58e409b580639fa569d"],["/butterfly/tags/C语言/index.html","ce6c51152cd963277ca80fefc3e60425"],["/butterfly/tags/Hexo/index.html","950defca48ef06d3a5b45bcf339df281"],["/butterfly/tags/Joker/index.html","84bf9e2304ddc3699aa702686aef0673"],["/butterfly/tags/PC/index.html","8c6d3700e0fec5028a57dec85a09a450"],["/butterfly/tags/Python/index.html","23ef0bb705aa81930c3c399cdce49661"],["/butterfly/tags/Redmi/index.html","b66b3e6a6a7cab425688e3668a067ee8"],["/butterfly/tags/css/index.html","7e63f674be0f16d0e5f649a8d98f62c6"],["/butterfly/tags/html5/index.html","87ade2469871d87dfd2ebfc6f1044099"],["/butterfly/tags/index.html","05e0c76561c0a1e3ebd145b0c3d81a90"],["/butterfly/tags/json/index.html","1dc47668cdd65ad62ec7d30b65b08672"],["/butterfly/tags/云服务器/index.html","7afd9c27613c1dd18e4fbd62b077144e"],["/butterfly/tags/云评测/index.html","1917d35f1a572b5e0c22559b6bb0cfe4"],["/butterfly/tags/公告/index.html","d6ea38f0189ea559626e51818d44a554"],["/butterfly/tags/图床/index.html","a3c6a453713f90cfb46df49292856e3b"],["/butterfly/tags/安卓/index.html","331bc3eaf9d01bd3a8b451ae43a31a1b"],["/butterfly/tags/年度总结/index.html","2584e935763b09f0d74b246a55455b5b"],["/butterfly/tags/应用使用指南/index.html","9b82e363f04894d218dbc95cb74ab1e4"],["/butterfly/tags/洛谷/index.html","5fef361860607b49b53af129bf8b8004"],["/butterfly/tags/程序开发实训/index.html","d232f0c4dda7a4230b0d11f8bff0d16a"],["/butterfly/tags/算法/index.html","fd96c2fa94782a48af3b3e75bdfb5ca6"],["/butterfly/tags/零基础/index.html","9824fe6e6186fe737983e5824ae9c6b2"],["/butterfly/wallpaper/index.html","9eea05041d3fb233460ceab44305a4d0"],["/butterfly/workbox-484247ff.js","8f7c2331b068997e0c532d2a47ea2cdf"],["/categories/Hexo系列教程/index.html","49f6a91e6f33404b4b5813a76ca5f152"],["/categories/index.html","e772401020e38ecc80258c7a0faede07"],["/categories/云评测/index.html","0eb1cc2cb976e85f3ae527f23ed663c3"],["/categories/学习笔记/index.html","3ec54904e3b1d73590f454a73a2e6c65"],["/categories/年度总结/index.html","17d3bafe28ce67e964f6a49a3886e323"],["/categories/应用使用指南/index.html","32af7d6d240dc2d5786f09cac10fb337"],["/categories/影评/index.html","cad25d60e89513bad3971f9d7c97c888"],["/categories/网站公告/index.html","3e2b183e24438e2dd712d28281dcc321"],["/categories/零基础教程/index.html","8b20a8e3f0504ad7c8490cc9f2f0caf7"],["/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["/css/style.css","8aff3924ca8c836021ee44f41667d7bd"],["/fluid/404.html","46aab6d8e9b1e3a42f4f62c23c35df61"],["/fluid/about/index.html","c81797c8cb06304401036002f4a71cea"],["/fluid/archives/2020/12/index.html","cd46321264877cb9ef24a8c39d8c1047"],["/fluid/archives/2020/index.html","cd46321264877cb9ef24a8c39d8c1047"],["/fluid/archives/2021/01/index.html","24943a3b7c1f848ab0a3f52f8630ef60"],["/fluid/archives/2021/03/index.html","9d414c26c596ad19deac6706a9afcad1"],["/fluid/archives/2021/04/index.html","8f3a88a07f3b8c56794f6c9399134080"],["/fluid/archives/2021/05/index.html","40f816f58fe71ac8faf9d6e6372e5499"],["/fluid/archives/2021/index.html","ab03e49fa61c31847c4e3247167940c0"],["/fluid/archives/index.html","27c2d2f8ec2d1ba3ab805d1649399e98"],["/fluid/archives/page/2/index.html","d5f6de52cd812a3c6e25cbd207590957"],["/fluid/baidu_verify_code-XHw1xGsj10.html","124ce41a2148fa84e5ebdefde75c71df"],["/fluid/categories/Hexo系列教程/index.html","ebe85170b785c557fb701fafd5dbc30f"],["/fluid/categories/index.html","890198f5a7c4088358bf5807ac52c823"],["/fluid/categories/云评测/index.html","3ab53c1707f1a2e1a9d34749d898d90c"],["/fluid/categories/学习笔记/index.html","ee5e4e870f5fbcd549f0c736a55c7234"],["/fluid/categories/年度总结/index.html","9981b7d86f4609cb1754a144269a629c"],["/fluid/categories/应用使用指南/index.html","c61dddaf54796c4e4d32543a2a13faa6"],["/fluid/categories/影评/index.html","84e77d1a3ecda57239333e028c5eb7ac"],["/fluid/categories/网站公告/index.html","8c5ff3069b9c98877252178180a6a6bc"],["/fluid/categories/零基础教程/index.html","6d86610bdf80c4c413c1f2ed0a121490"],["/fluid/css/gitalk.css","8498d3203f623e2ab883851edc90c013"],["/fluid/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/fluid/css/main.css","cd63e25585aa6ae8a6ece73451f62e8e"],["/fluid/img/30613342_p0.jpg","7b7c977e8a3da1b12311a7f37be5bb64"],["/fluid/img/avatar.png","4dc9b26fb952fddbcf32744bdb6c34bb"],["/fluid/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/fluid/img/favicon.png","16d1c0eb4731679b2daea92a4aa901de"],["/fluid/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/fluid/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/fluid/index.html","d422b038dd082e30abbc9215786a2d30"],["/fluid/js/boot.js","8397b1854306ef0d9c42d8630bb2987f"],["/fluid/js/color-schema.js","46bfe5914503d369a38135850f0aac19"],["/fluid/js/debouncer.js","c523e4d3f8b7b837c19f74984acbabf7"],["/fluid/js/events.js","af81de29e7162dac77efe4e7397cb63b"],["/fluid/js/lazyload.js","e96b3165477d429bf8096bdbd068d816"],["/fluid/js/leancloud.js","781a6774765d66c1125cb1d030957096"],["/fluid/js/local-search.js","c277a106ee2a2e265fcd58887e53c0fb"],["/fluid/js/plugins.js","47b825b24522f40c571087d8a81ea69a"],["/fluid/js/utils.js","5ecdced2f65030c3508cf0b3db78f4ad"],["/fluid/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/fluid/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/fluid/links/index.html","ffd4b8b200ab9c34006349b5b0211078"],["/fluid/page/2/index.html","8f8019869599db399b7d809fbfc866c9"],["/fluid/page/3/index.html","2b5e756aeb349ed991c5a8009dfd575a"],["/fluid/posts/1196/index.html","89aa9148ebb133ade877ffe4b7a3d9a5"],["/fluid/posts/13253/index.html","0ebc3e567da4fea1540dc0bbb1e14c49"],["/fluid/posts/18490/index.html","e213981a8d6addd823b65badac80ed75"],["/fluid/posts/21686/index.html","891d125ee990ed0f1c22f351714d7699"],["/fluid/posts/22362/index.html","a0463f7169fd81b5861e7f9ad036270f"],["/fluid/posts/27671/index.html","e96a4a4e3c51f289b2a21ac9444052a6"],["/fluid/posts/29349/index.html","b8faadbe02a525fdac85d7f4c3afb073"],["/fluid/posts/34525/index.html","93360e8760ee2a2226dace5a8eefde7d"],["/fluid/posts/3693/index.html","c29ea95eca7586941b82c5176a5c4aee"],["/fluid/posts/38865/index.html","d3694bf2bdc20fc1efb3a1175669a9d9"],["/fluid/posts/39030/index.html","1e1a86794c3de9944ac016bf02efef7a"],["/fluid/posts/42521/index.html","e7ce3ff635a59065ca043c2dafe65e4f"],["/fluid/posts/42550/index.html","ac123d1814e6769843e8575860465aa1"],["/fluid/posts/44775/index.html","d29651a2e428436c1b326d7e5e10f95e"],["/fluid/tags/C/index.html","36434ab69be8adb057e0aa263b1fd9bc"],["/fluid/tags/Cmd/index.html","bf2b5cdf7b68873557b7ffd70dfbc7cc"],["/fluid/tags/C语言/index.html","da146209f937fe2102cb22ce8a53fbdd"],["/fluid/tags/Hexo/index.html","416bc4553be065484dd1cd76d4d1266d"],["/fluid/tags/Joker/index.html","fa8f467e64babad859019b4370893f4e"],["/fluid/tags/PC/index.html","2ea444bbb82763ada5a54e7083aaa6f4"],["/fluid/tags/Python/index.html","a2aa6129670a9a956d27d73d9da24c5c"],["/fluid/tags/Redmi/index.html","190caf3ae760d111c713ec2485ffe0d7"],["/fluid/tags/css/index.html","3d1caa8caecb9472f76d3e09e337bc70"],["/fluid/tags/html5/index.html","035332486bfffff8923f66fa256d9b66"],["/fluid/tags/index.html","40de9a6ed2da5e28d38c1cf176ec5d16"],["/fluid/tags/json/index.html","ca9eefcf2b36bedd95cae077ad0f677f"],["/fluid/tags/云服务器/index.html","e1b730f302c01b2cdda0a14de5bafcfe"],["/fluid/tags/云评测/index.html","10c48f22a8f6b22c1deaf052c9a3c9c9"],["/fluid/tags/公告/index.html","fb337a31809d12a304557d8cc5ddd5b2"],["/fluid/tags/图床/index.html","86198226c71d0616b86d734a252baf7a"],["/fluid/tags/安卓/index.html","9cd75447b8feeed1ad1a5de5c510469a"],["/fluid/tags/年度总结/index.html","72ee74594c57028f1cf101f01594f3fd"],["/fluid/tags/应用使用指南/index.html","8319e214113d2e406127f1c90e383806"],["/fluid/tags/洛谷/index.html","24b4ea51e53100ee1344401d12945be2"],["/fluid/tags/程序开发实训/index.html","ef33debe5b122ad27bf4f96b7e8d6f90"],["/fluid/tags/算法/index.html","bd091940feb5324be18c9e7138948d81"],["/fluid/tags/零基础/index.html","591fb85e9cd16acfb342129aab62874d"],["/friends/index.html","7fc7324f19bb5319094a92d43d8b78fe"],["/index.html","ada7b61de42e4d73419618d486957921"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/matery/about/index.html","47f1adb9da521242aca1b9ac0ade9105"],["/matery/archives/2020/12/index.html","8c6b065faabd15f1e4d0000752fa18be"],["/matery/archives/2020/index.html","1e118bc170c54cdf7dac10a00e5216cd"],["/matery/archives/2021/01/index.html","9490efc9cc4e50b651e92cedcdea530e"],["/matery/archives/2021/03/index.html","463cc64d5a0f99ed4c744d743ebb772d"],["/matery/archives/2021/04/index.html","26be3776758ce79f4838143b398d87f7"],["/matery/archives/2021/05/index.html","a933f0f7e2f6b46e096cd738b906a85f"],["/matery/archives/2021/index.html","807fb703a2ac58a0fe924760621c74c8"],["/matery/archives/index.html","e160e7e067c30011c84e25e043a6a2ac"],["/matery/archives/page/2/index.html","c8a8cf830aca2176e2916af55c41a4e1"],["/matery/categories/Hexo系列教程/index.html","4e5e29c62541bd633534d425e3186e9a"],["/matery/categories/index.html","f768290deb8cf327a9dc3beb05e068e5"],["/matery/categories/云评测/index.html","cb1d7a98a382ee8240c74299ad988efe"],["/matery/categories/学习笔记/index.html","3e2e8a8e749dde63bfeaea1fb4adc7d8"],["/matery/categories/年度总结/index.html","8eb433a0972f54c555263b4dce6ce18a"],["/matery/categories/应用使用指南/index.html","e2c75148ce54c5e515f9710d2d27b708"],["/matery/categories/影评/index.html","3f714ebefdd8cb7bea3c3510b0e0cfe1"],["/matery/categories/网站公告/index.html","7d0dfcef0571efdc75bfbdb96ee259b9"],["/matery/categories/零基础教程/index.html","76bfbecdb1835134d2bb81295944c0c8"],["/matery/contact/index.html","54a3864a5a699fa4e1e75ccc5fcbf6ea"],["/matery/css/bb.css","a13497fcf67377687248cad43633417c"],["/matery/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/matery/css/matery.css","33b3d567e1a4cd8acc3b27e5920a87ca"],["/matery/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/matery/css/my.css","b45670fc4bcf160839caebb4043bd224"],["/matery/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/matery/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/matery/friends/index.html","4f260c8b17b37c5387a57c5137516dc2"],["/matery/index.html","59d9546e9450f104a989f73909d3b40a"],["/matery/js/matery.js","c2d4306a24948ffd6f7f853449c2e44b"],["/matery/js/search.js","23158886da44ec57f9d355b68ff1bac2"],["/matery/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/matery/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/matery/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/matery/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/matery/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/matery/libs/awesome/css/all.css","0e6a8d020eceb660ebe98adad8639825"],["/matery/libs/awesome/webfonts/fa-brands-400.eot","451b51d8700fb035bcaaa9e8710b384a"],["/matery/libs/awesome/webfonts/fa-brands-400.svg","8528edfd60e8bc4274c0eadf6b121a3c"],["/matery/libs/awesome/webfonts/fa-brands-400.ttf","189c0326f75931886d5b60cde8b5628f"],["/matery/libs/awesome/webfonts/fa-brands-400.woff","85b063debeb5d5f079776ac1a9c924cb"],["/matery/libs/awesome/webfonts/fa-regular-400.eot","b6579220162705be426ad4db0dc43f6b"],["/matery/libs/awesome/webfonts/fa-regular-400.svg","ec9318dc8ba3ec3cbb379f2d40f300cb"],["/matery/libs/awesome/webfonts/fa-regular-400.ttf","9230982faf6ed4d1dab07babfb813777"],["/matery/libs/awesome/webfonts/fa-regular-400.woff","14f22fbed8146dbf3b497bb32d8491b0"],["/matery/libs/awesome/webfonts/fa-solid-900.eot","1898ebd2e3162e7ca8627073d865b893"],["/matery/libs/awesome/webfonts/fa-solid-900.svg","f331e75b803f42d96aaba8540f29d3b3"],["/matery/libs/awesome/webfonts/fa-solid-900.ttf","b1161bce5381a5fa7aacc073e1a01dd3"],["/matery/libs/awesome/webfonts/fa-solid-900.woff","db525089f5101b59a66184d109e6f917"],["/matery/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/matery/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/matery/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/matery/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/matery/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/matery/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/matery/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/matery/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/matery/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/matery/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/matery/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/matery/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/matery/libs/gitalk/gitalk.css","e4369194a22c7aaf65af93b2a04edb94"],["/matery/libs/gitalk/gitalk.min.js","7526181d13660d1e4a2bbb3795d73120"],["/matery/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/matery/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/matery/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/matery/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/matery/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/matery/libs/jquery/jquery.min.js","f832e36068ab203a3f89b1795480d0d7"],["/matery/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/matery/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/matery/libs/lightGallery/fonts/lg.svg","4cf7d0890238750cf9fd18878fea096f"],["/matery/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/matery/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/matery/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/matery/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/matery/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/matery/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/matery/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/matery/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/matery/libs/materialize/materialize.min.css","6871e89cf391bc3433b63cf0db658a69"],["/matery/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/matery/libs/minivaline/MiniValine.js","e5daebb3b28977819ad51a62d38a52b9"],["/matery/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/matery/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/matery/libs/prism/prism.css","9de440b6e18b43a39139958655391e18"],["/matery/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/matery/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/matery/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/matery/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/matery/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/matery/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/matery/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/matery/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/matery/libs/tocbot/tocbot.css","a260895566c6a9f968a9101d5510f7d6"],["/matery/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/matery/libs/valine/Valine.min.js","3c37a47598a8970c84db5591f01c483d"],["/matery/libs/valine/av-min.js","df7538b359e7a7e904c430e8385b44da"],["/matery/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/matery/medias/contact.png","05f80f75317895d4d6a5c0b39c18236e"],["/matery/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/matery/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/matery/page/2/index.html","d1e3eeb43c05fce917bd8f87da1ac404"],["/matery/page/3/index.html","397cb299aa7737c5e05c9c3962c9b7e5"],["/matery/posts/1196/index.html","0729bf801887959578f36770513e2540"],["/matery/posts/13253/index.html","beb2b8349dc8dae92c4f77bf1afcf7b2"],["/matery/posts/18490/index.html","f7f31430f1467035600e05b3179222ca"],["/matery/posts/21686/index.html","f7708188f9dcd1f498ec2f52366c3b5f"],["/matery/posts/22362/index.html","45e987f8b18cd00f0aff9554d378e606"],["/matery/posts/27671/index.html","e8ac7f088136f0392685ccc4644686a0"],["/matery/posts/29349/index.html","8a8815148f174edbd971266d6698bf32"],["/matery/posts/34525/index.html","fbcba760504f9d6f555c1aee911632ec"],["/matery/posts/3693/index.html","3f27f54e63a5af51444bcc2ea5931e65"],["/matery/posts/38865/index.html","3ff3027cd0108efab6b78ddb4e49525a"],["/matery/posts/39030/index.html","4614d202f2b8e5ca1722844929ea0817"],["/matery/posts/42521/index.html","be5e0c4ad59bec1e43baee5d6afa48f2"],["/matery/posts/42550/index.html","38fc24af2c9b5b67137e2843a93d938a"],["/matery/posts/44775/index.html","134b39e1f8184c5a9e519cc1c149e981"],["/matery/tags/C/index.html","18539ea51208bd77353b69bb2439735a"],["/matery/tags/Cmd/index.html","dbd2f3b32dbe50a9da741e4d8222fc73"],["/matery/tags/C语言/index.html","357499e7160dd485cae8963c532dc186"],["/matery/tags/Hexo/index.html","10f82e2a1feba98fb39872f1167629e7"],["/matery/tags/Joker/index.html","68662ac097aa12500967e45c1f0ed08e"],["/matery/tags/PC/index.html","6703dbde285c051bf38a46441f11f985"],["/matery/tags/Python/index.html","74c6a9c1818f3ff62ba9ad111310752b"],["/matery/tags/Redmi/index.html","5119657e5eb2b12ebd23fb2496e09454"],["/matery/tags/css/index.html","e10529f73f195baf83319305bcf2c7e8"],["/matery/tags/html5/index.html","001ab33aa01d2a65d0519edc117bc4ff"],["/matery/tags/index.html","54fc298e5097ca454654096f68fcebca"],["/matery/tags/json/index.html","98fb0201f75a0253714c68eb6669a779"],["/matery/tags/云服务器/index.html","1cf102efd4b40afeaae9604ee1666149"],["/matery/tags/云评测/index.html","5791e55a7f612d86ad84a458dc533c1d"],["/matery/tags/公告/index.html","7c7d873f998bbbb5dacd974767ce74dc"],["/matery/tags/图床/index.html","a765ee3990ba51cffffa6b4d03327e4e"],["/matery/tags/安卓/index.html","8c410a9fa64b034629a1d23d52763505"],["/matery/tags/年度总结/index.html","f4975542addc38cf9c08939ff4988b2d"],["/matery/tags/应用使用指南/index.html","c7c2d54809d51054e65596ad780db870"],["/matery/tags/洛谷/index.html","7abdfbbc3d3f879fc7d262c7d8db8840"],["/matery/tags/程序开发实训/index.html","a74aa740ff2967b770c9597a1b3a08af"],["/matery/tags/算法/index.html","5ce67c88156b4453beebf1091a4c00e6"],["/matery/tags/零基础/index.html","017d961df5609852fa5999d900ec63f9"],["/next/about/index.html","acb6b6b0bac3737562a3ce5e611ba5d4"],["/next/archives/2020/12/index.html","c2c191f4c24f09581d95e7d84c2c5861"],["/next/archives/2020/index.html","06f18d156ff905d02645f0eacf19065e"],["/next/archives/2021/01/index.html","515249d2602eaa91c6443cf2af82869a"],["/next/archives/2021/03/index.html","ca4ce274d7fdeec6bfa41c36c88789a0"],["/next/archives/2021/04/index.html","49ef36d91e8c1e80b0314627c8e6a70e"],["/next/archives/2021/05/index.html","02ba8e503695f6b9e3c38ca969d76f4a"],["/next/archives/2021/index.html","3f7e5bacf0da9292ab2a960b0dfdf536"],["/next/archives/index.html","ce0fe8115ca5c1755cd374541d4db484"],["/next/archives/page/2/index.html","834cb39024cef6394686a83b4db9f51d"],["/next/categories/Hexo系列教程/index.html","6b6638155c7c141d1bd610be10f13f9c"],["/next/categories/index.html","c9042912b6287a7135182865460116e6"],["/next/categories/云评测/index.html","170063e46171ca49b8ccff6e2ca584ca"],["/next/categories/学习笔记/index.html","85c53ed400defb07888bc5705952c311"],["/next/categories/年度总结/index.html","989b6172fafed40333d10ee1d5e7f8da"],["/next/categories/应用使用指南/index.html","c6b352f5448fdda5bc7a5793ada4f387"],["/next/categories/影评/index.html","3b2c45f10faa8c57cc63748bd6a1d5f2"],["/next/categories/网站公告/index.html","584a7b5b72f524316154a1da6ba8b5c1"],["/next/categories/零基础教程/index.html","fc019bc572ec0bca26e1a837d06df2ae"],["/next/css/main.css","da2037ef6ac5e65e2ca44c0676550d73"],["/next/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/next/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/next/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/next/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/next/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/next/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/next/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/next/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/next/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/next/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/next/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/next/images/logo-algolia-nebula-blue-full.svg","d593709631bf6acec3c76b6eb2b4b560"],["/next/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/next/index.html","bde6eefab216a4582392fc76eac5466d"],["/next/js/algolia-search.js","47d2255433e42da5e64891e8b7fc57d3"],["/next/js/bookmark.js","ead7d08b9977be9c11153c7e05e8c3d1"],["/next/js/local-search.js","b62b9e350a98e4ec5120218fb10fdbcd"],["/next/js/motion.js","7abc3ca6d1524ff02cc435bf8ad4ea05"],["/next/js/next-boot.js","4dfa716a904c2cdd3eb3e0ad7afe9b23"],["/next/js/schedule.js","d3326abf1ae3a1f24880d7009dba8e0c"],["/next/js/schemes/muse.js","50451a59b48635ebcce61f1a60fa3e93"],["/next/js/utils.js","3cea4e333b4fe372c63efd62354bb60b"],["/next/page/2/index.html","fee4ea5f8b14fd1387145de708cb5e23"],["/next/page/3/index.html","48c34446a2011d33a379ce78e7f0aca2"],["/next/posts/1196/index.html","e1fd0607cbc9b0dd4939b5ef66c9f8be"],["/next/posts/13253/index.html","281a2a11cce609f6b1eef59a756fcbcb"],["/next/posts/18490/index.html","fe957d2329f154e3939ff33c1a9e8519"],["/next/posts/21686/index.html","3380be4ea691c33dc581515ddc760e8a"],["/next/posts/22362/index.html","47d2ec8447ede3a5fc091d519ddd5210"],["/next/posts/27671/index.html","1d57840768d1d08eeccdc350b3de2711"],["/next/posts/29349/index.html","357d7d8d34a96c8ea82a9c743aad2b9b"],["/next/posts/34525/index.html","81d30c703b9fab6a99d41c4acd6b5382"],["/next/posts/3693/index.html","d683897d3ce8a1eb9119480e053b6578"],["/next/posts/38865/index.html","b7602e71c312b9c74610c21085aa2e9c"],["/next/posts/39030/index.html","acbd347e26b2fe9d7445830903940f5e"],["/next/posts/42521/index.html","2514d0eeb5f5e581e2b7854bd61a911a"],["/next/posts/42550/index.html","c0f10ff717c61861828f6d402788f22d"],["/next/posts/44775/index.html","62696f7d3164c4207f2f577f9b4458e6"],["/next/tags/C/index.html","4f1f84ac1d205b76fd9374de48e966db"],["/next/tags/Cmd/index.html","b933724f233e62f7415626bde8e348ff"],["/next/tags/C语言/index.html","ffc6d6f7a11e4dfe6ec5e8594cf515ab"],["/next/tags/Hexo/index.html","911f3983c7813ba065b632fc893bfcf6"],["/next/tags/Joker/index.html","cc345972cd593cf0a6af756976fd989b"],["/next/tags/PC/index.html","1feaab34e051a517fb4ae303bd4daa93"],["/next/tags/Python/index.html","f6aae4b02e6431fe47c35a962aa4edf6"],["/next/tags/Redmi/index.html","61581bf915361fb33e8e2968c15d4ec8"],["/next/tags/css/index.html","8bd49f15b78ec9a7b0b38461e4830280"],["/next/tags/html5/index.html","a816c51cd4257576490e774da8a4a39b"],["/next/tags/index.html","122529197662e05cb7ad70e8026e3a49"],["/next/tags/json/index.html","a07be05138f87b556dc5261645098dea"],["/next/tags/云服务器/index.html","9254e62f449932e6830b70eaca910877"],["/next/tags/云评测/index.html","2448da007b8ee7b6011536d4941babf7"],["/next/tags/公告/index.html","610584ac676926d7b6aefdc43ea58312"],["/next/tags/图床/index.html","60a04430e270586864fad99ba662116b"],["/next/tags/安卓/index.html","b2eaffd4154190d5c42a524c4a3dbced"],["/next/tags/年度总结/index.html","ddbb2ba4cedec6b1f652f4bdd8102ecb"],["/next/tags/应用使用指南/index.html","ee67950d2bc8a1dea8365226e4934680"],["/next/tags/洛谷/index.html","74f20abad65134efa0186bf9141b76d7"],["/next/tags/程序开发实训/index.html","cce5f37f3d6ea5a1a1aae6e8465a6148"],["/next/tags/算法/index.html","7c3a9847dd9c55faa1fd223a13a96449"],["/next/tags/零基础/index.html","e5d83fd430b07691d6ab0f7f8fa0ed1b"],["/page/2/index.html","9e2600133b133bfad6a33c897fded8d6"],["/page/3/index.html","a1255b69d203eed9085d184b61f41bc3"],["/posts/1196/index.html","a3e5b0c3c848ea65d1e007fc342bb650"],["/posts/13253/index.html","f3fa093d9834f42413cdc7065155d1bd"],["/posts/18490/index.html","7a1a7e7937db3b0d2528c7202c87bd41"],["/posts/21686/index.html","19cd352c9a7305ee104895b1c4908573"],["/posts/22362/index.html","eb5159c14ea744f8f74bb1104a1296f3"],["/posts/27671/index.html","752c0195fa5e3278c1912e321b56e424"],["/posts/29349/index.html","9f67b5c696e8809a4c12ca1ce798f273"],["/posts/34525/index.html","f5f298eef724ccc3214cf70fca76b3cb"],["/posts/3693/index.html","2fbfade18cab49e7ba34ff6ac2c74623"],["/posts/38865/index.html","20bae09cb2df34d9c98d734a761d1264"],["/posts/39030/index.html","cf7efeadb5f66abf5203250b4586bbb1"],["/posts/42521/index.html","e40a2f9299a97a90705819671dca9b88"],["/posts/42550/index.html","d41bd9775c1a0c63b08e654680014329"],["/posts/44775/index.html","7070106816ccf475ac265bd8b217ab37"],["/shoka/404.html","5899a13df960336e27f0ac23465cdfef"],["/shoka/AboutWeb/index.html","888b1435c654001a88be3d599536a16e"],["/shoka/Basic_01_qfnuauto/index.html","c74a4138e26da7e0483c042bb2e81f1b"],["/shoka/Basic_02_Chevereto/index.html","4a93ce2d53bde2b61a72984e5a251b44"],["/shoka/Hexo_Cmd_01/index.html","1d613acb911aed97bd5bcff933fbd0d1"],["/shoka/Redmi_Note9_Pro/index.html","bfd7ad72faf31f4b6cf38fa4e26c6756"],["/shoka/Software_01_Redirectstorage/index.html","03db3fce20ed707f14f2c26ddcbcae79"],["/shoka/Sotfware_02_Perfdog/index.html","8099174fc23bd0a6e65fcf9efab3d3da"],["/shoka/Study_01_Prime/index.html","bd348be1bba9859880a7c62c77353679"],["/shoka/Study_C_01/index.html","a810804e1bec258d23ac5006590ad366"],["/shoka/Study_C_02/index.html","167aba08d94d01867ba4f25a7c23a3ef"],["/shoka/Study_C_Luogu/index.html","dd757bd04895c936bf949077fafbddad"],["/shoka/Study_Html_01/index.html","733e2127bf21eba37d08fe58c9a15c10"],["/shoka/Video_Joker/index.html","33bb3cfa61e3128bcdd80b598eca19c1"],["/shoka/Year_2020/index.html","b748f7d91abb8fb8ed9e0d393c9e65d9"],["/shoka/about/index.html","c7e99b29b7a5cb01b22ee7d53a887683"],["/shoka/archives/2020/12/index.html","431cdf6103e0a5f1661afe76b6b19a70"],["/shoka/archives/2020/index.html","c339dd04f0d2e39a6c90c3aca3af47b5"],["/shoka/archives/2021/01/index.html","c571ed353ae907a2f295a8ff40b07727"],["/shoka/archives/2021/03/index.html","3437d361bb847cde640c0d9a102be9ad"],["/shoka/archives/2021/04/index.html","b1c1d56361168fbe877bd2da07630067"],["/shoka/archives/2021/05/index.html","eee770935c24841d64e1806d366aea89"],["/shoka/archives/2021/index.html","cbd258b675d2b943b809027a3cc87345"],["/shoka/archives/index.html","1a428802b8a3d27a0c868d78e6ea8101"],["/shoka/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/shoka/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/shoka/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/shoka/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/shoka/categories/AboutWeb/index.html","475be8dafb89f67dc7b1039909e2e2b7"],["/shoka/categories/Basic/index.html","dc08433787b6f0e8a7e3f3c97cccc6d1"],["/shoka/categories/Hexo系列教程/index.html","806d488280b9d79509d401b1c10a5b0a"],["/shoka/categories/Software/index.html","b3e325eb0db674924d867c3c6b36636a"],["/shoka/categories/Study/index.html","9dde936353fb102683f71cdd31ae75f2"],["/shoka/categories/index.html","1831d6a5657aa7382ede5c7dded3d3e2"],["/shoka/categories/云评测/index.html","f3c925e8e0221478c9a89f91bd6025cb"],["/shoka/categories/年度总结/index.html","7beb9724e7ddaa83a13378823131a5b7"],["/shoka/categories/影评/index.html","c63756058af3eaff5c5087670026b4cd"],["/shoka/css/app.css","c64d8088f544a77c3c93ac97762225c9"],["/shoka/css/comment.css","ae7c0f5160ba7783125e69119e2d5bab"],["/shoka/css/mermaid.css","c66db1b09a670a8a932f5941155d4d4b"],["/shoka/friends/index.html","bb33b1e80308ba929cfa8e0353501aec"],["/shoka/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/shoka/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/shoka/images/alipay.jpg","91fa939ef5c79198fb9fc35857836662"],["/shoka/images/apple.jpg","2e3de68917b70cfc6c05abd65577b502"],["/shoka/images/logo.svg","e67639a80e9511587a08359bc7740624"],["/shoka/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/shoka/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/shoka/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/shoka/images/touxiang.jpg","2e3de68917b70cfc6c05abd65577b502"],["/shoka/images/wechat.png","bd5b1649420832a003ba081f363883e8"],["/shoka/index.html","9969917e747a23b5c40b62625b9b4654"],["/shoka/js/app.js","9cbb30ac679800e7c81b172c492f9fd6"],["/shoka/links/index.html","40c782a7f3d07de4d981cc36ef8839f0"],["/shoka/page/2/index.html","b805c912e81330efb841042e5002c51b"],["/shoka/tags/C/index.html","ceed144b64c4455d6d52ea0597121447"],["/shoka/tags/Cmd/index.html","6df04b3080c1075f6b0a22da67f98f09"],["/shoka/tags/C语言/index.html","59044bd958a849e1fc115cd5a2b471f8"],["/shoka/tags/Hexo/index.html","9369a593b60c437fec5baafa81122690"],["/shoka/tags/Joker/index.html","3e20950b7e028706d71e8d4979d9caf6"],["/shoka/tags/PC/index.html","060515bf7f1dc69e9d9c30285dc5757e"],["/shoka/tags/Python/index.html","671638876798da4edd2ffc109ead18a4"],["/shoka/tags/Redmi/index.html","5b42faf09baeea3698db1e67001d2e13"],["/shoka/tags/css/index.html","d1b0f7262b02fb50dca1ed632b2004a1"],["/shoka/tags/html5/index.html","f7e5be51d857a01beb564b6294e0228d"],["/shoka/tags/index.html","772a607f50b035e424c07f1776a772b9"],["/shoka/tags/json/index.html","ea51f84d8c15dd381c0d3267891b1373"],["/shoka/tags/云服务器/index.html","9a458329ee44e47eec600b1308151386"],["/shoka/tags/云评测/index.html","153ec35485919d41f32dc98a062993af"],["/shoka/tags/公告/index.html","3a9c7cbd96692d0919d6115a09d7035e"],["/shoka/tags/图床/index.html","4bfd22514d5f7e3ea0e6b3fad18baba4"],["/shoka/tags/安卓/index.html","680f22e2e8b24755ff94e1d8d9baa9f3"],["/shoka/tags/年度总结/index.html","e0b1a1c0c5c05a19c3c902e5ff2457de"],["/shoka/tags/应用使用指南/index.html","35af8436b933cfadefcda8de003aff6f"],["/shoka/tags/洛谷/index.html","5a618c6336c24b027038871284464553"],["/shoka/tags/程序开发实训/index.html","7f0fdb0e32b8110203d7625a9fa8b159"],["/shoka/tags/算法/index.html","3133907e9958ca291c21521d298bba74"],["/shoka/tags/零基础/index.html","425e75bdea8620dc37ba5ddbaf434d70"],["/sw-register.js","3095352f5a8b663a2aa64e2038511ec0"],["/tags/C/index.html","5cf3458fe553484eee378e45f4703dc9"],["/tags/Cmd/index.html","9a1e987ff42eb885447d854755b8991b"],["/tags/C语言/index.html","3eb31d199519ebf24311238bda580c72"],["/tags/Hexo/index.html","ca0ea793ce2848f695b68dd80dc967b4"],["/tags/Joker/index.html","f3fa31d8f9875a62eaba2872491e7f3d"],["/tags/PC/index.html","4d329dfec4f494388493dadc51c3e0a4"],["/tags/Python/index.html","2b3c75e3cff90807530dc2d363c4a676"],["/tags/Redmi/index.html","ad456a67795a70465d5beacd80bbb3aa"],["/tags/css/index.html","b2cf217d460f7a5868f9f354336d05de"],["/tags/html5/index.html","1035957072a9468114d088806b3d856b"],["/tags/index.html","5e51c1b897e12dc388b1f09ecc153e28"],["/tags/json/index.html","39ba0b9d30cb3b9521399c94f294c85a"],["/tags/云服务器/index.html","a905673f88f40e2e90d5fe4667ff37c9"],["/tags/云评测/index.html","48354153d25c040868b76f21f4e3dd74"],["/tags/公告/index.html","ebca033687a295b3b8f6a39bae9fe073"],["/tags/图床/index.html","b61b26c4098c7a0a6e686ddff4b0ee73"],["/tags/安卓/index.html","864ecb46d70ce0e0ebeaaba6a08f3313"],["/tags/年度总结/index.html","db05fb196b0856fe3fecd281e1d0da54"],["/tags/应用使用指南/index.html","5746610487ffe8469526dbe38443f089"],["/tags/洛谷/index.html","e69ffb02db8c36953f6aba3c7f75c8e3"],["/tags/程序开发实训/index.html","ca7d93730fc2f115e255b203817dd587"],["/tags/算法/index.html","b9517b79148c9091b52fecb6019439ec"],["/tags/零基础/index.html","eb3b52fe70ca6baa3536558fc51f56bb"],["/yun/404.html","82946e2bea984bfa3228cf907826bd40"],["/yun/Yun.png","7d146507ca781cdb7995afaa448a4101"],["/yun/about/index.html","cf729f78074ac22c0237bb1c2f102d13"],["/yun/albums/damedane.html","8c53b2c745573c6194b237b549ee3cde"],["/yun/albums/index.html","96a6dc561a3bf059dd5b6dcd7faedb17"],["/yun/archives/2020/12/index.html","f83e415a8c4e0471997b148778ff436f"],["/yun/archives/2020/index.html","49518296d95a11bc03aac5a0b31ec389"],["/yun/archives/2021/01/index.html","02915bd8b1ac7249cb07557cbb487b91"],["/yun/archives/2021/03/index.html","10ea4bdeef6ef9cdf3c3fda02c57217a"],["/yun/archives/2021/04/index.html","c7fafeff4fc4237d30148fcdd24cafd1"],["/yun/archives/2021/05/index.html","d84661579bbec9d799abe638b0e69a0a"],["/yun/archives/2021/index.html","079f965143bdab1e9a6224265deab1d1"],["/yun/archives/index.html","5fe982135647433748a08f7ab8585818"],["/yun/archives/page/2/index.html","70feebe3a81ddd9e731d75186918db48"],["/yun/categories/Hexo系列教程/index.html","82f3b0be25d221ec940440d5fba70c3c"],["/yun/categories/index.html","cdc227ce19098a130a7e0b0e83d8fd6c"],["/yun/categories/云评测/index.html","46a9669fb7d334a64ae793cf12dd49ba"],["/yun/categories/学习笔记/index.html","cedf75dbc3f0a3b7b472cf9bf3127db6"],["/yun/categories/年度总结/index.html","333e35841bf4f9be3aaa16c6355ac4b4"],["/yun/categories/应用使用指南/index.html","9821c986eced40af5d0012470db3d4b6"],["/yun/categories/影评/index.html","f728c00fd7a9248c2fa0046f92dd8e6f"],["/yun/categories/网站公告/index.html","eed9db4c3cfd6ccca658ce6168d730fd"],["/yun/categories/零基础教程/index.html","6e770aa4c51534ea848e3d3bdea4c004"],["/yun/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/yun/css/hexo-theme-yun.css","c89b3c07223938d30c68162df71b0186"],["/yun/girls/index.html","cadc646c581ab56faf34ed6526a7dce0"],["/yun/index.html","b5b97a87a086c7448d33a53a684e98d0"],["/yun/js/analytics/leancloud-visitors.js","01f8aece7842a860c88d0679eef68fd4"],["/yun/js/comments/disqus.js","3ae14e82b56fa02fdd9e61c48056c78a"],["/yun/js/gallery-decrypt.js","21d4f301044ff3d5bb8320b5d2228711"],["/yun/js/hexo-theme-yun.js","1be745c613077117e2adb1335f5f46fa"],["/yun/js/pjax.js","16e5c302af8f38e129a31b173a34e087"],["/yun/js/say.js","7bdb94b446eb43061221ceba7ba9ceac"],["/yun/js/search/algolia-search.js","9377e8c1bceee2b8bf46269059938cb3"],["/yun/js/search/local-search.js","83f81c43f8cc429b2af8e5b0e21ae208"],["/yun/js/sidebar.js","fdf0838dce68e2aa8c2e16484ce3a1df"],["/yun/js/ui/banner.js","69fbffc8ef4b4d1861bf5728711a5b5e"],["/yun/js/ui/fireworks.js","c8b8e0042a20bbda2866db88100515e7"],["/yun/js/ui/mode.js","d13a93161c353a7888f81c4d36ff14c9"],["/yun/js/utils.js","d5f4b5777899d78a30a3615db71d0cb3"],["/yun/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/yun/links/index.html","39f06cbc9f04ba0a7b4a73273d68b831"],["/yun/page/2/index.html","dfd278cab3164cfcc1f1e920b5e400c3"],["/yun/page/3/index.html","49511b18dd63b612224c00e39f1c947c"],["/yun/posts/1196/index.html","d184f1d33852495487f8ccadb8ee8542"],["/yun/posts/13253/index.html","5589677eee01b1d1071c16129cbc2c4b"],["/yun/posts/18490/index.html","3c680441c8d741dfe3b9c92362513b09"],["/yun/posts/21686/index.html","5dd549acbdb566ed3553dfd48939cf65"],["/yun/posts/22362/index.html","f49c42bf0cfa223bd2000a0efec457fb"],["/yun/posts/27671/index.html","be3415578fcf2ab25d3ba2f72db0bf9f"],["/yun/posts/29349/index.html","3f975f6f7aa1c681aa20b1e367aa76dc"],["/yun/posts/34525/index.html","1bb13aadc3e368dbcd8538300b0380da"],["/yun/posts/3693/index.html","5834b8bdec3da714319d0a28645ac548"],["/yun/posts/38865/index.html","9a2069d3bc899bec558bec9b127ce636"],["/yun/posts/39030/index.html","cdaaf73dcf4f605a8d5b1a1a61b34547"],["/yun/posts/42521/index.html","c1aeac7b91c1baf7748272732bc07fdc"],["/yun/posts/42550/index.html","3403c2bd0abb8989600b0ad5ccc827a4"],["/yun/posts/44775/index.html","f3f72135ffed1f33109a1b278a3590c5"],["/yun/tags/C/index.html","4a4bff9fc6cddff748ca9d6b35f325e7"],["/yun/tags/Cmd/index.html","a7d247bc11bea45b1eac5e6d0d7ceb11"],["/yun/tags/C语言/index.html","3037e0c3e333236f148856370094c7c9"],["/yun/tags/Hexo/index.html","9fce4ac244c8824c6b28581564982721"],["/yun/tags/Joker/index.html","dc6852e4747f44fbcd1d69424ae2bee8"],["/yun/tags/PC/index.html","5a1691c11654527be45ce917b8834fd2"],["/yun/tags/Python/index.html","aec57045f3043b70c9cf802110dceff1"],["/yun/tags/Redmi/index.html","e4e39a1b12f1138b126b32e43057ab7a"],["/yun/tags/css/index.html","ec7a91d677466e71b425420e29214f93"],["/yun/tags/html5/index.html","027a294fb8c8abf44725ebca53104662"],["/yun/tags/index.html","9caa6a11a6365521271505fdf6da39d7"],["/yun/tags/json/index.html","48511c91bcd71fdd4de4602aea5c0c19"],["/yun/tags/云服务器/index.html","370136ea75b0345b577679194c6b287b"],["/yun/tags/云评测/index.html","f78e750532198891cd9d0517d477e114"],["/yun/tags/公告/index.html","b586c8f592c9edf7e98bbba0051c1f1b"],["/yun/tags/图床/index.html","7c6ba31e58d440f39e6ff5e1a6e17dee"],["/yun/tags/安卓/index.html","ee73e66eb3d5458bd73865d890e13bcc"],["/yun/tags/年度总结/index.html","afd1a3c11825f62c66b9d1ea566de728"],["/yun/tags/应用使用指南/index.html","5f2286bde87735822cfee0f265c38ba9"],["/yun/tags/洛谷/index.html","c40e781f371674994608ec8fa09e46a2"],["/yun/tags/程序开发实训/index.html","09ab164303a2fb5a32a6a76ca1a524bf"],["/yun/tags/算法/index.html","f1062b60a10e358383949e25d82e383b"],["/yun/tags/零基础/index.html","b08427e4b1bbf29842b527e10ea3dfc4"],["/yun/yun.svg","7dfb248ebf378d6df39d68fb3b34c366"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
