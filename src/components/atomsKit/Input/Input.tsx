import React  from 'react';
import cn from 'classnames';

import classes from './Input.module.scss';

interface IProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    label: string;
    className?: {};
    placeholder?: string;
    type?: string;
    required?: boolean;
    
};

const Input: React.FC<IProps> = (props) => {
const {onChange, value, label, className, placeholder, type, required}=props;
  return (
   <>
     <h3 className={classes.label}>{label}</h3>
     <input 
          onChange={onChange}
          value={value}
          className={cn(classes.input, className)}
          placeholder={placeholder}
          type={type}
          required={required}
      />
   </>
  );
};

export default Input;

