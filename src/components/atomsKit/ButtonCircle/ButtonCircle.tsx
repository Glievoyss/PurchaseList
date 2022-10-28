import React  from 'react';
import cn from 'classnames';

import classes from './ButtonCircle.module.scss';

interface IProps {
    onChange?: () => void;
    className?: {};
    isSubmit?: boolean;
    icon?: string;
};

const ButtonCircle: React.FC<IProps> = (props) => {
const {onChange, className, isSubmit, icon}=props;
  return (
   <button 
      className={cn(classes.button, className)}
      type={isSubmit?'submit':undefined}
      onChange={onChange}
   >
      {icon}
   </button>
  );
};

export default ButtonCircle;

