import '../styles/home.css'

import { motion } from 'framer-motion';

interface Props {
    src?: string;
    children?: React.ReactElement | string;
    className?: string;
}

function PageCard ({src, children, className}: Props) {

    const classes: string = `page-card ${className}`;

    return(
        <motion.div 
            initial={{opacity: 0, objectPosition: '100%, 0'}}
            animate={{opacity: 1, objectPosition: '0%, 0'}}
            exit={{opacity: 0, objectPosition: '-100%, 0'}}
            className={classes}
        >
            {src && <img src={src} alt={src} />}
            <h1 style={{flex: '1 1 100%'}}>{children}</h1>
        </motion.div>
    )
}

export default PageCard;