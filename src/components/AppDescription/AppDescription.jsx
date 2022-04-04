import s from './AppDescription.module.css';
import arrowIcon from '../../images/arrow.svg';

const AppDescription = () => {
  return (
    // <Header/>
    <div className={s.contentWrap}>
        <h1 className={s.heading}>Books Reading</h1>
        <h3 className={s.subheading}>Допоможе вам</h3>
        <ul>
            <li><img src={arrowIcon} alt="Arrow icon"/>Швидше сформулювати свою ціль і розпочати читати</li>
            <li><img src={arrowIcon} alt="Arrow icon"/>Пропорційно розподілити навантаження на кожний день</li>
            <li><img src={arrowIcon} alt="Arrow icon"/>Відстежувати особистий успіх</li>
        </ul>
        <h3 className={s.subheading}>Також ви зможете</h3>
        <ul>
            <li><img src={arrowIcon} alt="Arrow icon"/>Формувати особисту думку незалежну від інших</li>
            <li><img src={arrowIcon} alt="Arrow icon"/>Підвищити свої професійні якості опираючись на нові знання</li>
            <li><img src={arrowIcon} alt="Arrow icon"/>Стати цікавим співрозмовником</li>
        </ul>
        
        <div className={s.btnWrap}>
          <button type="button" className={`${s.singInBtn} ${s.btn}`}>Увійти</button>
          <button type="button" className={`${s.singUpBtn} ${s.btn}`}>Реєстрація</button>
        </div>
    </div>
  )
}

export default AppDescription;