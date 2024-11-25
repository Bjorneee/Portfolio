import { projectList } from '../assets/lists';

import CardCarousel from '../components/CardCarousel';

export default function Home() {
    return(
        <>
            <CardCarousel cards={projectList}/>
        </>
    );
}