import React,  { useEffect }  from 'react';
import {Card} from 'components/atomsKit/Elements'

// import classes from './ProductCard.module.scss';

const Cards: React.FC = ()=> {

  useEffect(() => {
    // тут буде логіка отримання данних з беку
  }, []);

  return (
    <>
      <Card label={'For 59br'} isCheked={true}/>
      <Card label={'For 42br'} isCheked={false}/>
    </>
  );
}

export default Cards;
