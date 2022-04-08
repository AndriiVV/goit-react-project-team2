import s from "./ResumeContent.module.scss";

const ResumeContent = () => {
    return (
        <div>
            <h3 className={s.titleResume}>Обрати рейтинг книги</h3>
            <div className={s.divRadioButtonResume}>
                <input type="radio" id="rb_1" className={s.radioButtonResume} />
                <label for="rb_1"></label>
                <input type="radio" id="rb_2" className={s.radioButtonResume} />
                <label for="rb_2"></label>
                <input type="radio" id="rb_3" className={s.radioButtonResume} />
                <label for="rb_3"></label>
                <input type="radio" id="rb_4" className={s.radioButtonResume} />
                <label for="rb_4"></label>
                <input type="radio" id="rb_5" className={s.radioButtonResume} />
                <label for="rb_5"></label>
            </div>
            <h3 className={s.titleResume}>Резюме</h3>
            <textarea name="" rows="10" className={s.textarea} placeholder="..."></textarea>
            <div className={ s.modalButtons}>
                <button type="button" className={ s.exitButton }>Назад</button>
                <button type="button" className={ s.saveButton }>Зберегти</button>
            </div>
            
        </div>
    )
}
// cols="24" 
export default ResumeContent;