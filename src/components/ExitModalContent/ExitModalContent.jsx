import s from './ExitModalContent.module.scss';

const ExitModalContent = () => {
    return (
         <div className={ s.exitMOdalContent }>
            <h3>Якщо Ви вийдете з програми незбережені дані будуть втрачені</h3>
            <div className={ s.modalButtons}>
                <button type="button" className={ s.cancelButton }>Назад</button>
                <button type="button" className={ s.exitButton }>Зберегти</button>
            </div>
         </div>
    )
}

export default ExitModalContent;