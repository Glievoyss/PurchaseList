import React  from 'react';
import {Icon} from "components/atomsKit/Elements"
import cn from 'classnames';

import classes from './ProductCheckbox.module.scss';

interface IProps {
   checked: boolean;
   onChange: (name:string) => void;
   label: string,
   className?: {};
};

const ProductCheckbox : React.FC<IProps> = (props) =>{
   const {checked, label, onChange, className}=props;

   return (
     <label  className={cn(classes.label, className)}>
       <Icon 
        size="32px"
        icon={checked?'check':"noCheck"}
        className={classes.icon}
      />
       <input type="checkbox" checked={checked} onChange={()=>onChange(label)} className={classes.visually_hidden} />
       {label}
     </label>
   );
 };

export default ProductCheckbox;

