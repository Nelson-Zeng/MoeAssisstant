const app = getApp()

Page({
  data: {
    additionalItems: [{
      id: 0,
      title: '更新内容',
      expanded: false,
      content: '1.调整了伤害计算器内容，分离了导弹舰伤害模式为开闭幕/日战/夜战三种模式\n2.装备详情中增加了可装备舰种显示\n3.美化了工具集主页\n4.增加了远征详情查询\n5.图片加载更快了\n6.数据更新到了游戏4.8版本\n7.修复了一些bug'
    }, {
      id: 1,
      title: '反馈方式',
      expanded: false,
      content: '1.微博搜索“平胸宁海异闻录”\n2.NGA发布贴\n3.贴吧发布贴\n4.QQ群号：1059566467'
    }, {
      id: 2,
      title: '特别鸣谢',
      expanded: false,
      content: '1.感谢Parrk（QQ）、半世一夕（QQ）、魔芋（QQ）等大佬提供的游戏数据、静态资源支持以及一个图片服务器\n2.感谢大钊（QQ）、魔芋（QQ）等大佬制作的某个名字都不能提的魔盒提供的建造/掉落数据。网站：http://www.jianrmod.cn/data/shipGetInfo.html\n3.感谢凯风快晴fujiwara（NGA）大佬提供的建造/开发公式数据。NGA：https://bbs.nga.cn/read.php?tid=15603565\n4.感谢さくらきょうこ（NGA）大佬制作的网页计算器模板。NGA：https://bbs.nga.cn/read.php?tid=14610962\n5.感谢saika（QQ）大佬提供的导弹战模式及公式测试\n6.感谢Parrk（QQ）大佬提供的装备类型数据\n7.感谢akumahomura（QQ）大佬提供的你游离线数据\n8.感谢半世一夕（QQ）大佬，他完成了部分功能\n9.感谢参与测试的所有小伙伴\n10.感谢之前打赏过我的小伙伴们（微信打了码看不到名字……）\n11.感谢所有愿意看到这里以及支持我的小伙伴'
    }, {
      id: 4,
      title: '其他',
      expanded: false,
      content: '1.如果不介意的话可以扫一下上方二维码打赏一下，用来维护服务器\n2.我想上班（人在武汉，放假到失联）\n3.预告一下接下来的更新会以CNM攻略组的离线资料为主。另外准备加入炮序模拟器了。'
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