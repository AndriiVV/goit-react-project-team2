import s from "./ResumeContent.module.scss";

const ResumeContent = () => {
    return (
        <div>
            <h3 className={s.titleResume}>Обрати рейтинг книги</h3>
            <div className={s.divRadioButtonResume}>
                <input type="radio" className={s.radioButtonResume}/>
                <input type="radio" className={s.radioButtonResume}/>
                <input type="radio" className={s.radioButtonResume}/>
                <input type="radio" className={s.radioButtonResume}/>
                <input type="radio" className={s.radioButtonResume}/> 
            </div>
            <h3 className={s.titleResume}>Резюме</h3>
            <textarea name="" id="" cols="30" rows="10" className={ s.textarea }></textarea>
            <button type="button" className={ s.exitButton }>Назад</button>
            <button type="button" className={ s.saveButton }>Зберегти</button>
        </div>
    )
}

export default ResumeContent;