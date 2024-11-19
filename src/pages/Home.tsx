import { projectList } from '../assets/lists';

import CardCarousel from '../components/CardCarousel';

function Home() {
    return(
        <>
            <CardCarousel cards={projectList}/>
        </>
    );
}

export default Home;