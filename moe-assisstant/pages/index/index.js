const app = getApp()

Page({
  data: {
    versionData: {},
    additionalItems: [{
      id: 0,
      title: '更新内容',
      expanded: false,
      content: '1.点击右上角的三个点可以进行分享了\n2.海图详情入口转移到了首页上\n3.航向计算器可以输入小数了\n4.苍青幻影页面已经开放，可以通过“旧的回忆”查询苍青的人物台词了'
    }, {
      id: 1,
      title: '反馈方式',
      expanded: false,
      content: '1.微博搜索“平胸宁海异闻录”\n2.NGA发布贴\n3.贴吧发布贴\n4.QQ群号：1059566467'
    }, {
      id: 2,
      title: '特别鸣谢',
      expanded: false,
      content: '1.感谢Parrk（QQ）、半世一夕（QQ）、魔芋（QQ）等大佬提供的游戏数据、静态资源支持以及一个图片服务器\n2.感谢大钊（QQ）、魔芋（QQ）等大佬制作的某个名字都不能提的魔盒提供的建造/掉落数据。网站：http://www.jianrmod.cn/data/shipGetInfo.html\n3.感谢凯风快晴fujiwara（NGA）大佬提供的建造/开发公式数据。NGA：https://bbs.nga.cn/read.php?tid=15603565\n4.感谢さくらきょうこ（NGA）大佬制作的网页计算器模板。NGA：https://bbs.nga.cn/read.php?tid=14610962\n5.感谢saika（QQ）大佬提供的导弹战模式及公式测试\n6.感谢Parrk（QQ）大佬提供的装备类型数据\n7.感谢akumahomura（QQ）大佬提供的你游离线数据\n8.感谢M31Vy（NGA）大佬制作的三射程炮序表\n9.感谢半世一夕（QQ）大佬，他完成了部分功能\n10.感谢星光下的彩虹（QQ）大佬提供的海域详情图\n11.感谢etwahl4（nga）大佬的航向计算器\n12.感谢战舰少女R相关推送-腰子（微博）大佬，他帮我在自己的公众号上推广了一下这个小程序\n13.感谢之前打赏过我的小伙伴们（微信打了码看不到名字……）\n14.感谢所有愿意看到这里以及支持我的小伙伴'
    }, {
      id: 4,
      title: '打赏作者',
      expanded: false,
      richContent: '<div>1.支持制作者最简单的方法就是把小程序推荐给身边的其他朋友。</div><div>2.如果愿意打赏一下的话可以扫描下面的二维码。</div><img src="https://www.moeassisstant.com/QR_code.png" style="width: 80vw;"></img>'
    }]
  },
  async onLoad() {
    const response = await app.http.get(app.http.GET_APPLICATION_VERSION)
    
    this.data.versionData = response.data
    this.data.additionalItems[0].content = response.data.content

    this.setData({
      versionData: this.data.versionData,
      additionalItems: this.data.additionalItems
    })
  },
  expandItem(e) {
    const id = Number(e.currentTarget.id)

    const currentItem = this.data.additionalItems.find(item => {
      return item.id === id
    })

    currentItem.expanded = !currentItem.expanded

    this.setData({
      additionalItems: this.data.additionalItems
    })
  }
})