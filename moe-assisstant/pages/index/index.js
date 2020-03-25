const app = getApp()

Page({
  data: {
    additionalItems: [{
      id: 0,
      title: '更新内容',
      expanded: false,
      content: '1.海图详情中追加了敌方队伍数据并用颜色细分了敌方等级（注：红色代表六星）\n2.海图查询中掉落信息同样使用了颜色细化了掉落信息（注：同上）\n3.海图详情掉落列表中点击对应列即可进入该掉落的详情页了\n4.掉落/开发时间对照表数据更新\n5.远征详情列表数据更新，修复部分数据bug\n6.海图详情中海域地图更换为更加精确的版本，同时大图会包括更多内容\n7.修复一些其他bug'
    }, {
      id: 1,
      title: '反馈方式',
      expanded: false,
      content: '1.微博搜索“平胸宁海异闻录”\n2.NGA发布贴\n3.贴吧发布贴\n4.QQ群号：1059566467'
    }, {
      id: 2,
      title: '特别鸣谢',
      expanded: false,
        content: '1.感谢Parrk（QQ）、半世一夕（QQ）、魔芋（QQ）等大佬提供的游戏数据、静态资源支持以及一个图片服务器\n2.感谢大钊（QQ）、魔芋（QQ）等大佬制作的某个名字都不能提的魔盒提供的建造/掉落数据。网站：http://www.jianrmod.cn/data/shipGetInfo.html\n3.感谢凯风快晴fujiwara（NGA）大佬提供的建造/开发公式数据。NGA：https://bbs.nga.cn/read.php?tid=15603565\n4.感谢さくらきょうこ（NGA）大佬制作的网页计算器模板。NGA：https://bbs.nga.cn/read.php?tid=14610962\n5.感谢saika（QQ）大佬提供的导弹战模式及公式测试\n6.感谢Parrk（QQ）大佬提供的装备类型数据\n7.感谢akumahomura（QQ）大佬提供的你游离线数据\n8.感谢M31Vy（NGA）大佬制作的三射程炮序表\n9.感谢半世一夕（QQ）大佬，他完成了部分功能\n10.感谢星光下的彩虹（QQ）大佬提供的海域详情图\n11.感谢之前打赏过我的小伙伴们（微信打了码看不到名字……）\n12.感谢所有愿意看到这里以及支持我的小伙伴'
    }, {
      id: 4,
      title: '其他',
      expanded: false,
      content: '1.如果不介意的话可以扫一下上方二维码打赏一下，用来维护服务器\n2.武汉复工在即，版本可能会停滞一段时间暂不更新了。\n3.未来的内容暂定还是以CNM的离线资料为主。原定这个版本就上线迂回和对空计算器的，也因为各种私人原因不得不鸽上一段时间了，不好意思。'
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