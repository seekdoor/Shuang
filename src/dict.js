/** last changed: 2025.1.1 */

/**
 *
 * dict 包含所有声母，list 为其列表数组
 *
 * dict.{声母} 包含所有韵母，list 为其列表数组
 *
 * dict.{声母}.{韵母} 包含其汉字样例
 *                   [{生僻字 / 多音字}] 将不会在无拼音模式中出现
 *
 */

Shuang.resource.dict = {
  '': {
    a: '啊', ai: '爱', an: '安', ang: '昂', ao: '奥',
    e: '鹅', ei: ['诶'], en: '恩',
    // eng: ['鞥'],
    er: '耳',
    o: '哦', ou: '欧'
  },
  b: {
    a: '爸', ai: '白', an: '班', ang: '帮', ao: '包',
    ei: '背', en: '本', eng: '崩',
    i: '必', ian: '变', iao: '表', ie: '别', in: '宾', ing: '冰',
    o: '播',
    u: '部'
  },
  c: {
    a: '擦', ai: '彩', an: '餐', ang: '苍', ao: '草',
    e: '测', en: ['岑'], eng: '层',
    i: '词',
    ong: '聪', ou: '凑',
    u: '粗', uan: '窜', ui: '催', un: '村', uo: '错'
  },
  d: {
    a: '打', ai: '代', an: '但', ang: '当', ao: '到',
    e: '德', ei: ['得'],
    // en: ['扽'],
    eng: '等',
    i: '帝', ia: ['嗲'], ian: '点', iao: '钓', ie: '叠', ing: '顶', iu: '丢',
    ong: '东', ou: '斗',
    u: '杜', uan: '短', ui: '对', un: '顿', uo: '多'
  },
  f: {
    a: '法', an: '翻', ang: '方',
    ei: '飞', en: '分', eng: '风',
    o: '佛', ou: ['否'],
    u: '服'
  },
  g: {
    a: ['旮'], ai: '该', an: '干', ang: '刚', ao: '高',
    e: '个', ei: ['给'], en: '跟', eng: '更',
    ong: '公', ou: '狗',
    u: '谷', ua: '瓜', uai: '怪', uan: '关', uang: '光', ui: '鬼', un: '滚', uo: '国'
  },
  h: {
    a: '哈', ai: '海', an: '汉', ang: '杭', ao: '好',
    e: '盒', ei: '黑', en: '很', eng: '横',
    ong: '宏', ou: '猴',
    u: '户', ua: '华', uai: '坏', uan: '欢', uang: '黄', ui: '灰', un: '昏', uo: '火'
  },
  j: {
    i: '机', ia: '加', ian: '间', iang: '江', iao: '交', ie: '杰', in: '金', ing: '京', iong: '窘', iu: '旧',
    u: '居', uan: '卷', ue: '绝', un: '军'
  },
  k: {
    a: ['卡'], ai: '开', an: '看', ang: '康', ao: '靠',
    e: '科',
    // ei: ['尅'],
    en: '肯', eng: '坑',
    ong: '空', ou: '口',
    u: '哭', ua: '夸', uai: '快', uan: '宽', uang: '框', ui: '亏', un: '昆', uo: '阔'
  },
  l: {
    a: '拉', ai: '来', an: '蓝', ang: '狼', ao: '老',
    e: ['乐'], ei: '累', eng: '冷',
    i: '里', ia: ['俩'], ian: '连', iang: '凉', iao: '聊', ie: '列', in: '林', ing: '领', iu: '刘',
    o: ['咯'], ong: '龙', ou: '楼',
    u: '路', uan: '乱', un: '轮', uo: '罗',
    v: '绿', ve: '略'
  },
  m: {
    a: '马', ai: '买', an: '满', ang: '忙', ao: '猫',
    e: '么', ei: '梅', en: '门', eng: '梦',
    i: '米', ian: '面', iao: '秒', ie: '灭', in: '民', ing: '明', iu: '谬',
    o: '魔', ou: '某',
    u: '木'
  },
  n: {
    a: '拿', ai: '乃', an: '南', ang: '囊', ao: '脑',
    e: ['呢'], ei: '内', en: '嫩', eng: '能',
    i: '你', ian: '年', iang: '娘', iao: '鸟', ie: '聂', in: '您', ing: '宁', iu: '牛',
    ong: '农',
    // ou: ['耨'],
    u: '努', uan: '暖', uo: '挪',
    v: '女', ve: '虐'
  },
  p: {
    a: '爬', ai: '牌', an: '潘', ang: '胖', ao: '炮',
    ei: '配', en: '喷', eng: '鹏',
    i: '皮', ian: '片', iao: '飘', ie: '撇', in: '拼', ing: '凭',
    o: '破', ou: '剖',
    u: '普'
  },
  q: {
    i: '齐', ia: '洽', ian: '前', iang: '墙', iao: '桥', ie: '且', in: '琴', ing: '轻', iong: '穷', iu: '求',
    u: '去', uan: '全', ue: '确', un: '群'
  },
  r: {
    an: '然', ang: '让', ao: '绕',
    e: '热', en: '仁', eng: '仍',
    i: '日',
    ong: '容', ou: '肉',
    u: '如',
    // ua: ['挼'],
    uan: '软', ui: '睿', un: '润', uo: '若'
  },
  s: {
    a: '萨', ai: '赛', an: '伞', ang: '桑', ao: '扫',
    e: '色',
    // ei: ['谁'],
    en: '森', eng: '僧',
    i: '司',
    ong: '宋', ou: '搜',
    u: '苏', uan: '酸', ui: '岁', un: '孙', uo: '锁'
  },
  t: {
    a: '它', ai: '台', an: '谈', ang: '汤', ao: '涛',
    e: '特', eng: '疼',
    i: '体', ian: '天', iao: '条', ie: '贴', ing: '听',
    ong: '通', ou: '头',
    u: '图', uan: '团', ui: '推', un: '吞', uo: '拖'
  },
  w: {
    a: '哇', ai: '外', an: '万', ang: '王',
    ei: '为', en: '文', eng: '翁',
    o: '我',
    u: '无'
  },
  x: {
    i: '喜', ia: '夏', ian: '现', iang: '项', iao: '小', ie: '谢', in: '心', ing: '星', iong: '兄', iu: '秀',
    u: '徐', uan: '选', ue: '学', un: '寻'
  },
  y: {
    a: '压', an: '燕', ang: '羊', ao: '药',
    e: '页',
    i: '以', in: '音', ing: '赢',
    o: '哟', ong: '用', ou: '有',
    u: '与', uan: '元', ue: '月', un: '云'
  },
  z: {
    a: '咋', ai: '在', an: '赞', ang: '脏', ao: '造',
    e: '则', ei: '贼', en: '怎', eng: '增',
    i: '子',
    ong: '宗', ou: '走',
    u: '组', uan: '钻', ui: '最', un: '遵', uo: '做'
  },
  ch: {
    a: '茶', ai: '拆', an: '产', ang: '场', ao: '超',
    e: '车', en: '陈', eng: '成',
    i: '吃',
    ong: '充', ou: '丑',
    u: '出', ua: ['欻'], uai: '踹', uan: '穿', uang: '床', ui: '吹', un: '纯', uo: '戳'
  },
  sh: {
    a: '沙', ai: '晒', an: '山', ang: '上', ao: '少',
    e: '设', en: '深', eng: '生',
    i: '是',
    ou: '收',
    u: '书', ua: '刷', uai: '帅', uan: '栓', uang: '双', ui: '水', un: '顺', uo: '说'
  },
  zh: {
    a: '炸', ai: '摘', an: '占', ang: '张', ao: '赵',
    e: '者',
    // ei: ['这'],
    en: '真', eng: '正',
    i: '之',
    ong: '中', ou: '周',
    u: '主', ua: '爪', uai: '拽', uan: '专', uang: '装', ui: '追', un: '准', uo: '捉'
  }
}
for (let sheng of Object.keys(Shuang.resource.dict)) {
  const yunList = Shuang.resource.dict[sheng]
  Shuang.resource.dict[sheng].list = Object.keys(yunList)
}
Shuang.resource.dict.list = Object.keys(Shuang.resource.dict)
