import { projectList } from '../assets/lists';

import HorizontalCardScroll from '../components/HorizontalCardScroll';

function Home() {
    return(
        <>
            <h1>Home</h1>
            <HorizontalCardScroll cards={projectList}/>
        </>
    );
}

export default Home;