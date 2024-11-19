import '../styles/home.css'

import { card } from '../types';
import { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const spawnPos = 1250;

const variants = {

    enter: (direction: number) => {
        return {
            x: direction > 0 ? spawnPos : -spawnPos,
            opacity: 0,
        }
    },

    center: {
        x: 0,
        opacity: 1
    },

    exit: (direction: number) => {
        return {
            x: direction < 0 ? spawnPos : -spawnPos,
            opacity: 0
        }
    }

};

interface Props {
    cards: card[];
}

function CardCarousel({cards}: Props) {

    const [[currentCard, direction], setCurrentCard] = useState([0, 0]);
    const [inputLock, setInputLock] = useState(false);

    const changeCard = (changeDirection: number) => {

        setCurrentCard([((currentCard + cards.length) + changeDirection) % cards.length, changeDirection]);

        setInputLock(true);
        setTimeout(() => {
            setInputLock(false);
        }, 800)

    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            changeCard(1);
        }, 10000);

        return () => clearTimeout(timeout);    
    }, [currentCard])

    return(
        <div className='project-slides'>
            <button 
                disabled={inputLock}
                onClick={() => {
                    changeCard(-1);
                }}>
                <ChevronLeft/>
            </button>
            <div className='slide-panel'>
                <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                    <motion.div
                        className='page-card'
                        key={currentCard}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: {type: 'spring', stiffness: 500, damping: 50},
                            opacity: {duration: 0.75}
                        }}
                    >

                        <div className='card-text'>
                            <h1>{cards[currentCard].name}</h1>
                        </div>
                        {cards[currentCard].src &&
                            <img 
                                src={cards[currentCard].src} 
                                alt={cards[currentCard].src} 
                            />
                        }
                        
                    </motion.div>
                </AnimatePresence>
            </div>
            <button 
                disabled={inputLock}
                onClick={() => {
                    changeCard(1);
                }}>
                <ChevronRight/>
            </button>
        </div>
    );
}

export default CardCarousel;