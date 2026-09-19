export interface CoffeeItem {
  name: {
    km: string
    zh: string
  }
  price: number
  imageUrl: string
  imageAlt?: string
  category: 'coffee' | 'freshMilk' | 'milkTea' | 'tea'
}

export const menuItems: CoffeeItem[] = [
  {
    name: {
      km: 'អាមេរិកាណូទឹកកក',
      zh: '冰美式',
    },
    price: 6000,
    imageUrl: '/menu/americano.png',
    category: 'coffee',
  },
  {
    name: {
      km: 'អាយកាពូជីណូ',
      zh: '冰卡布奇诺',
    },
    price: 6000,
    imageUrl: '/menu/capuccino.png',
    category: 'coffee',
  },
  {
    name: {
      km: 'កាហ្វេដោះគោគ្រីមទឹកកក',
      zh: '冰奶油咖啡',
    },
    price: 6000,
    imageUrl: '/menu/cream_coffee.png',
    category: 'coffee',
  },
  {
    name: {
      km: 'អាយឡាតេ',
      zh: '冰拿铁',
    },
    price: 6000,
    imageUrl: '/menu/latte.png',
    category: 'coffee',
  },
  {
    name: {
      km: 'អាយម៉ូកា',
      zh: '冰摩卡',
    },
    price: 6000,
    imageUrl: '/menu/mocha.png',
    category: 'coffee',
  },
  {
    name: {
      km: 'កាហ្វេដោះគោទឹកកក',
      zh: '冰奶咖啡',
    },
    price: 6000,
    imageUrl: '/menu/condensed_milk.png',
    category: 'coffee',
  },
  {
    name: {
      km: 'ទឹកដោះគោស្រស់ ដំឡូងស្វាយ',
      zh: '芋头芒果鲜奶',
    },
    price: 7000,
    imageUrl: '/menu/purple_potato.png',
    category: 'freshMilk',
  },
  {
    name: {
      km: 'ស្ត្របឺរីទឹកដោះគោស្រស់',
      zh: '草莓鲜奶',
    },
    price: 7000,
    imageUrl: '/menu/strawberry_milk.png',
    category: 'freshMilk',
  },
  {
    name: {
      km: 'ផាសិនទឹកដោះគោ',
      zh: '百香果鲜奶',
    },
    price: 7000,
    imageUrl: '/menu/passion_milk.png',
    category: 'freshMilk',
  },
  {
    name: {
      km: 'សូកូឡា',
      zh: '巧克力',
    },
    price: 6000,
    imageUrl: '/menu/chocolate.png',
    category: 'coffee',
  },
  {
    name: {
      km: 'ទឹកដោះគោស្រស់សណ្តែកក្រហមប្រោនស៊ូហ្គឺ',
      zh: '红豆黑糖鲜奶',
    },
    price: 7000,
    imageUrl: '/menu/red_bean.png',
    category: 'freshMilk',
  },
  {
    name: {
      km: 'ទឹកដោះគោស្រស់ប្រោនស៊ូហ្គឺ',
      zh: '黑糖鲜奶',
    },
    price: 7000,
    imageUrl: '/menu/brown_sugar.png',
    category: 'freshMilk',
  },

  {
    name: {
      km: 'តែទឹកដោះគោតៃវ៉ាន់',
      zh: '台湾奶茶',
    },
    price: 7000,
    imageUrl: '/menu/taiwan_milk.png',
    category: 'milkTea',
  },
  {
    name: {
      km: 'តែក្រហមប្រោនស៊ូហ្គឺ',
      zh: '泰式黑糖奶茶',
    },
    price: 7000,
    imageUrl: '/menu/red_milktea.png',
    category: 'milkTea',
  },
  {
    name: {
      km: 'តែអឺហ្គ្រេប្រោនស៊ូហ្គឺ',
      zh: '黑糖伯爵奶茶',
    },
    price: 7000,
    imageUrl: '/menu/default.png',
    category: 'milkTea',
  },
  {
    name: {
      km: 'តែបៃតងប្រោនស៊ូហ្គឺ',
      zh: '黑糖绿奶茶',
    },
    price: 7000,
    imageUrl: '/menu/matcha_brown.png',
    category: 'milkTea',
  },
  {
    name: {
      km: 'តែម្លិះទឹកដោះ',
      zh: '茉莉奶茶',
    },
    price: 7000,
    imageUrl: '/menu/malis_milk.png',
    category: 'milkTea',
  },
  {
    name: {
      km: 'តែអូឡុងទឹកដោះគោ',
      zh: '乌龙奶茶',
    },
    price: 7000,
    imageUrl: '/menu/oolong_milk.png',
    category: 'milkTea',
  },
  {
    name: {
      km: 'តែខ្មៅទឹកដោះគ្រីមឈីស',
      zh: '黑茶芝士奶盖',
    },
    price: 7000,
    imageUrl: '/menu/black_tea_cheese.png',
    category: 'milkTea',
  },
  {
    name: {
      km: 'ម៉ាឆាឡាតេ',
      zh: '抹茶拿铁',
    },
    price: 7000,
    imageUrl: '/menu/matcha_latte.png',
    category: 'tea',
  },
  {
    name: {
      km: 'តែខ្មៅគ្រីម',
      zh: '黑茶奶盖',
    },
    price: 7000,
    imageUrl: '/menu/black_tea_cream.png',
    category: 'tea',
  },
  {
    name: {
      km: 'ផាសិនគ្រីម',
      zh: '百香果奶盖',
    },
    price: 7000,
    imageUrl: '/menu/passion_cream.png',
    category: 'tea',
  },
  {
    name: {
      km: 'តែស្លឹកតយគ្រីម',
      zh: '香兰奶盖',
    },
    price: 7000,
    imageUrl: '/menu/default.png',
    category: 'tea',
  },
  {
    name: {
      km: 'តែត្រឡាចគ្រីម',
      zh: '黄瓜奶盖',
    },
    price: 7000,
    imageUrl: '/menu/melon_cream.png',
    category: 'tea',
  },
  {
    name: {
      km: 'តែទឹកឃ្មុំក្រូចក្រូឆ្មា',
      zh: '蜂蜜青柠茶',
    },
    price: 7000,
    imageUrl: '/menu/honey_lemon.png',
    category: 'tea',
  },
  {
    name: {
      km: 'តែជប៉ុនយូសុ',
      zh: '日本柚子茶',
    },
    price: 7000,
    imageUrl: '/menu/yuzu.png',
    category: 'tea',
  },
  {
    name: {
      km: 'តែបៃតងគ្រីម',
      zh: '绿茶奶盖',
    },
    price: 7000,
    imageUrl: '/menu/default.png',
    category: 'tea',
  },
  {
    name: {
      km: 'តែម្លិះគ្រីម',
      zh: '茉莉奶盖',
    },
    price: 7000,
    imageUrl: '/menu/malis_cream.png',
    category: 'tea',
  },
  {
    name: {
      km: 'តែមេអំបៅទឹកដោះគោ',
      zh: '蝶豆花奶茶',
    },
    price: 7000,
    imageUrl: '/menu/butterfly.png',
    category: 'milkTea',
  },  
  {
    name: {
      km: 'តែអូឡុងផាសិន',
      zh: '乌龙百香果茶',
    },
    price: 7000,
    imageUrl: '/menu/oolong_passion.png',
    category: 'tea',
  },
  {
    name: {
      km: 'ផាសិនសូដា',
      zh: '百香果苏打',
    },
    price: 7000,
    imageUrl: '/menu/passion_soda.png',
    category: 'tea',
  },
]