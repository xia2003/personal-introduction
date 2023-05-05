import { createI18n } from "vue-i18n";
import enLocale from "./en"; // 导入项目中用到的英文语言包
import zhLocale from "./zh"; // 导入项目中用到的中文语言包

const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  },
};

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: "zh",
  messages,
});

export default i18n;
