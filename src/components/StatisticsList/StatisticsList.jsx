import s from './StatisticsList.module.css';

const transformDate = (date) => {
  const string = date.split(" ").map((el, i) =>
    i !== 0
      ? el
      : el
        .split("-")
        .map((el, i) => (i !== 1 ? el : Number(el) < 10 ? "0" + el : el))
        .reverse()
        .join("-")
  );
  console.log(string);
  return string;
};

const StatisticsList = ({stats}) => {

  // const stats = [{ time: "2022-4-11 19:14", pagesCount: 1000 },
  //   { time: "2022-4-11 19:24", pagesCount: 60 }]
  
  
  
  transformDate("2022-4-11 19:14")
  return (
    <ul className={s.stats}>
      {stats.map(({ time, pagesCount }) => {
        return <li key={time}  className={s.stat}>
          <span className={s.black}>{transformDate(time)[0]}</span>
          <span className={s.gray}>{transformDate(time)[1]}</span>
          <p className={s.black}>{pagesCount}<span className={s.gray}> стор.</span></p>
        </li>
      })
      }
    </ul>
  );
}

export default StatisticsList;
