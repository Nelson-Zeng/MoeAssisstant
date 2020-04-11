const app = getApp()

Page({
  data: {
    additionalItems: [{
      id: 0,
      title: '更新内容',
      expanded: false,
      content: '1.首页插入了广告组件，希望大家理解\n2.如果不想看广告的话，可以进入常用的次级页面后，点击右上角的三个点，选择“添加到桌面”，这样可以直接通过桌面图标跳过首页（当然我个人还是希望各位把桌面入口也设置为首页，贡献一点点流量。狗头保命）\n3.伤害计算器优化。伤害算法更新。并新增了技能/战术影响。\n4.海图掉落信息当掉率过低（小于千分之一）时不会再显示0了'
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