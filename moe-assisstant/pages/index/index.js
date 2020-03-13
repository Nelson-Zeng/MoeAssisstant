const app = getApp()

Page({
  data: {
    additionalItems: [{
      id: 0,
      title: '更新内容',
      expanded: false,
      content: '1.可以查询炮序了\n2.增加了一部分小提示\n3.可以通过图鉴ID搜索特定舰娘了\n4.“特殊装备”列表里增加了调整血量的装备\n5.修复了伤害计算器当未破防时无法弹出结果选单的bug\n6.实现了建造\开发时间查询的功能\n7.修复了一些其他bug'
    }, {
      id: 1,
      title: '反馈方式',
      expanded: false,
      content: '1.微博搜索“平胸宁海异闻录”\n2.NGA发布贴\n3.贴吧发布贴\n4.QQ群号：1059566467'
    }, {
      id: 2,
      title: '特别鸣谢',
      expanded: false,
        content: '1.感谢Parrk（QQ）、半世一夕（QQ）、魔芋（QQ）等大佬提供的游戏数据、静态资源支持以及一个图片服务器\n2.感谢大钊（QQ）、魔芋（QQ）等大佬制作的某个名字都不能提的魔盒提供的建造/掉落数据。网站：http://www.jianrmod.cn/data/shipGetInfo.html\n3.感谢凯风快晴fujiwara（NGA）大佬提供的建造/开发公式数据。NGA：https://bbs.nga.cn/read.php?tid=15603565\n4.感谢さくらきょうこ（NGA）大佬制作的网页计算器模板。NGA：https://bbs.nga.cn/read.php?tid=14610962\n5.感谢saika（QQ）大佬提供的导弹战模式及公式测试\n6.感谢Parrk（QQ）大佬提供的装备类型数据\n7.感谢akumahomura（QQ）大佬提供的你游离线数据\n8.感谢M31Vy（NGA）大佬制作的三射程炮序表\n9.感谢半世一夕（QQ）大佬，他完成了部分功能\n10.感谢参与测试的所有小伙伴\n11.感谢之前打赏过我的小伙伴们（微信打了码看不到名字……）\n12.感谢所有愿意看到这里以及支持我的小伙伴'
    }, {
      id: 4,
      title: '其他',
      expanded: false,
      content: '1.如果不介意的话可以扫一下上方二维码打赏一下，用来维护服务器\n2.目测武汉将要复工了。如果复工的话我准备跳个槽，所以稳定下来之前大概不会开发新内容，以维护为主了。\n3.未来的内容暂定还是以CNM的离线资料为主。'
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