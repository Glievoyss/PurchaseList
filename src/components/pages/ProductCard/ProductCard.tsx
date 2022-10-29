import React,  { useEffect }  from 'react';
import {ProductCheckbox, ButtonCircle} from 'components/atomsKit/Elements'

import {cardMok} from 'data/cardMok'
import { TProduct } from "data/types";

import {useProductCard} from './ProductCard.hooks';

import classes from './ProductCard.module.scss';

const ProductCard: React.FC = ()=> {

  const {products, setProducts, handleCheck} = useProductCard();
   
  useEffect(() => {
    // тут буде логіка отримання данних з беку
    setProducts(cardMok.products);
  }, []);

  const handleForvard = () =>{
    // повернутись до списку карток закупки
  }

  return (
    <>
    <section className={classes.wrapPage}>
       <div className={classes.nav}>
          <ButtonCircle icon='<' className={classes.submit} onChange={handleForvard}/>
          <h3 className={classes.nameCard}>{cardMok.comment}</h3> 
       </div>
       <ul className={classes.list}>
        {products?.map((card: TProduct)=> 
            <li 
              key={card.name}
              className={classes.product}>
                <ProductCheckbox 
                  checked={card.checked} 
                  onChange={handleCheck} 
                  label={card.name} 
                />
            </li>
        )}
      </ul>  
    </section>
    </>
  );
}

export default ProductCard;
