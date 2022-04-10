// import s from './LibraryMobile.module.css';
import GoingToReadMobile from 'components/GoingToReadMobile/GoingToReadMobile';
import CurrentlyReadingMobile from 'components/CurrentlyReadingMobile/CurrentlyReadingMobile';
import FinishedReadingMobile from 'components/FinishedReadingMobile/FinishedReadingMobile';

const LibraryMobile = () => {
  return (
    <>
      <FinishedReadingMobile/>
      <CurrentlyReadingMobile/>
      <GoingToReadMobile/>
    </>
  )
}

export default LibraryMobile;



