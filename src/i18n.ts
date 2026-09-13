import { createI18n } from 'vue-i18n'

const messages = {
  km: {
    menu: {
      categories: {
        coffee: 'កាហ្វេ',
        freshMilk: 'ទឹកដោះគោស្រស់',
        milkTea: 'តែទឹកដោះគោ',
        tea: 'តែ',
      },
    },
  },

  zh: {
    menu: {
      categories: {
        coffee: '咖啡',
        freshMilk: '鲜奶',
        milkTea: '奶茶',
        tea: '茶',
      },
    },
  },

  en: {
    menu: {
      categories: {
        coffee: 'Coffee',
        freshMilk: 'Fresh Milk',
        milkTea: 'Milk Tea',
        tea: 'Tea',
      },
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'km',
  fallbackLocale: 'en',
  messages,
})

export default i18n