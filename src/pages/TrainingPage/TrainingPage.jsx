import Container from 'components/common/Container';
import TrainingBookList from '../../components/TrainingBookList/TrainingBookList';
import s from './TrainingPage.module.css';

const TrainingPage = () => {
  return (
    <Container>
      <div className={s.trainingPage}>
        <div className={s.trainingContainer}>
          <h2 className={s.trainingTitle}>Моє тренування</h2>
          <div className={s.trainingChooseBook}>
            <input
              type="text"
              name="book"
              list="books"
              placeholder="Обрати книги з бібліотеки"
              className={s.trainingInput}
            />
            <datalist id="books">
              <option value="book" />
            </datalist>
            <button className={s.trainingBtn}>Додати</button>
          </div>
          <TrainingBookList />
        </div>
        <div className={s.trainingGoal}>
          <h2 className={s.trainingTitle}>Моя мета прочитати</h2>
        </div>
      </div>
    </Container>
  );
};

export default TrainingPage;
