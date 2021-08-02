import React,{useState} from 'react'
import styles from './App.module.css';

//Display component is build to show the button and onhover show the tooltip.
const Display = ({top, left}) => {

    //creating the state display to show the tooltip if true and setDisplay to change its value on hover
    const [display, setDisplay] = useState(false);

    return (
        <div className={styles.inner}>
            {/* to show the button on which the hover functionality is implemented(event listener) */}
            <button 
           className={styles.btn}
            onMouseEnter = { () => setDisplay(true) }
            onMouseLeave = { () => setDisplay(false) }
            >
                Press
            </button>
            {/* to show the tooltip if display is true and set the top and left through props */}
            {display && 
                <div className={styles.tooltip} style={{top:top, left:left}}>
                    This is the sample ToolTip
                </div>
            }
        </div>
    )
}

export default Display;
