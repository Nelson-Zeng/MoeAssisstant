const app = getApp()

Page({
  data: {
    additionalItems: [{
      id: 0,
      title: '更新内容',
      expanded: false,
      content: '1.实现8-3掉落数据查询\n2.舰船列表与详情页显示图鉴ID\n3.修复伤害计算器昼战航母的情况下等效火力显示bug\n4.修复伤害计算器结果栏标题显示错误的bug\n5.舰船列表页增加依靠星级排序功能\n6.实现学院技能查询功能\n7.实现菜单查询功能\n8.舰船详情页的立绘中可以查看对应的深海形态了'
    }, {
      id: 1,
      title: '反馈方式',
      expanded: false,
      content: '1.微博搜索“平胸宁海异闻录”\n2.NGA发布贴\n3.贴吧发布贴\n4.QQ群号：1059566467'
    }, {
      id: 2,
      title: '特别鸣谢',
      expanded: false,
      content: '1.感谢Parrk（QQ）、半世一夕（QQ）、魔芋（QQ）等大佬提供的游戏数据、静态资源支持以及一个图片服务器\n2.感谢大钊（QQ）、魔芋（QQ）等大佬制作的某个名字都不能提的魔盒提供的建造/掉落数据。网站：http://www.jianrmod.cn/data/shipGetInfo.html\n3.感谢凯风快晴fujiwara（NGA）大佬提供的建造/开发公式数据。NGA：https://bbs.nga.cn/read.php?tid=15603565\n4.感谢さくらきょうこ（NGA）大佬制作的网页计算器模板。NGA：https://bbs.nga.cn/read.php?tid=14610962\n5.感谢saika（QQ）大佬提供的导弹战模式及公式测试\n6.感谢Parrk（QQ）大佬提供的装备类型数据\n7.感谢akumahomura（QQ）大佬提供的你游离线数据\n8.感谢M31Vy（NGA）大佬制作的三射程炮序表\n9.感谢半世一夕（QQ）大佬，他完成了部分功能\n10.感谢星光下的彩虹（QQ）大佬提供的海域详情图\n11.感谢战舰少女R相关推送-腰子（微博）大佬，他帮我在自己的公众号上推广了一下这个小程序\n12.感谢之前打赏过我的小伙伴们（微信打了码看不到名字……）\n13.感谢所有愿意看到这里以及支持我的小伙伴'
    }, {
      id: 4,
      title: '其他',
      expanded: false,
      content: '1.如果不介意的话可以扫一下上方二维码打赏一下，用来维护服务器\n2.我就职的企业10号复工，因此该版本将会持续一段时间。\n3.CNM攻略组离线资料的内容已经基本搬运完毕。接下来的开发内容暂定为制空和迂回计算器。'
    }]
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