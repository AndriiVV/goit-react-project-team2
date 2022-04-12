import { useSelector } from "react-redux";
import { getStats } from "redux/training/trainingSelectors";
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
  // console.log("transformDate", string);
  return string;
};
//     if (ind === 0) {
//       return el.split("-").map((el, ind) => {
//         if (ind === 1) {
//           if (Number(el) < 10) {
//             return "0" + el
//           }
//           return el;
//         }
//       }).reverse().join("-")
//     } return el
//   })
// }



const StatisticsList = () => {
  // const stats = useSelector((state) => state.training.stats)
  // console.log("getStats", stats);

  const stats = [{ time: "2022-4-11 19:14", pagesCount: 1000 },
  { time: "2022-4-11 19:24", pagesCount: 60 }]
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
