import { useTranslation } from 'react-i18next';
import s from './LanguageSwitcher.module.css';
import ukrFlagIcon from 'images/ukrainian.png';
import ukFlagIcon from 'images/english.png';

const languages = {
  en: { icon: ukFlagIcon, nativeName: 'English' },
  uk: { icon: ukrFlagIcon, nativeName: 'Українська' },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className={s.switcher}>
      {Object.keys(languages).map(lng => (
        <div key={lng} className={s.btnWrapper}>
          <button
            className={i18n.resolvedLanguage === lng ? s.active : s.button}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            <img
              src={languages[lng].icon}
              alt={languages[lng].nativeName}
              width="35"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
