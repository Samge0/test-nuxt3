import en from "./assets/lang/en_us.json";
import zh from "./assets/lang/zh_cn.json";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: en,
      zh: zh
    }
  }))
  