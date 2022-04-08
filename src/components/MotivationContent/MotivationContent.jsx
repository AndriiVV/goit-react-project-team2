import s from './MotivationContent.module.scss';
import { ReactComponent as ThumbUpIcon } from '../../images/thumb_up.svg';
// import MotivationContentGood from 'components/MotivationContentGood/MotivationContentGood';
import MotivationContentExellent from 'components/MotivationContentExellent/MotivationContentExellent';

const MotivationContent = () => {
    return (
        <div className={s.motivContent}>
            <div className={s.iconWrap}>
                <ThumbUpIcon/>
            </div>
            {/* <MotivationContentGood /> */}
            <MotivationContentExellent/>
            <button type="button" className={ s.okButton }>Ok</button>
        </div>
    )
}

export default MotivationContent;