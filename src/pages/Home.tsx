import { projectList } from '../assets/lists';

import CardCarousel from '../components/CardCarousel';

export default function Home() {
    return(
        <>
            <header>
                Highlights
            </header>
            <CardCarousel cards={projectList}/>
        </>
    );
}