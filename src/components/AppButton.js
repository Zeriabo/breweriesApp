import React, { useEffect, useState } from "react";
import "./button.css";
import Button from '@mui/material/Button';
function AppButton(props) {
    const [classes, setClasses] = useState('');
    const { size, type, border, shadow } = props;
    useEffect(() => {
        let cls = '';
        if (size) {
            cls = `${cls} ${size}`;
        }
        if (type) {
            cls = `${cls} ${type}`;
        }
        if (border) {
            cls = `${cls} ${border}`;
        }
        if (shadow) {
            cls = `${cls} shadow`;
        }
        setClasses(`${cls}`);
    }, [size, border, type, shadow]);
 
    return <>
 <Button variant="contained" className={classes} {...props}></Button>
       
    </>;
}
 
export default AppButton;