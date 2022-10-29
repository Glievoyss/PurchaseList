import React  from 'react';
import cn from 'classnames';

import classes from './Card.module.scss';

interface IProps {
    isCheked: boolean;
    label: string;
    className?: {};
};

const Card: React.FC<IProps> = (props) => {
const { isCheked, label, className,}=props;
  return (
    // !!! лінк на лист карти 
    <a className={cn(classes.card, isCheked && classes.card_isCheked)}
       href={'/product-card?'}
    >
      {label}
      <div className={cn(classes.marker, isCheked && classes.marker_isCheked)} />
    </a>
  );
};

export default Card;

