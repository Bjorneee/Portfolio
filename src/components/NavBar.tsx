import { useEffect, useRef, useState } from "react";


interface Props {
    changePage: (index: number) => void;
}

export default function NavBar({changePage}: Props) {

    const tabs = ['Home', 'About', 'Resume'];

    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const [activeTab, setActiveTab] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    useEffect(() => {
        const updateUnderlinePosition = () => {
            const currentTab = tabsRef.current[activeTab];
            if(currentTab) {
                setTabUnderlineLeft(currentTab.offsetLeft);
                setTabUnderlineWidth(currentTab.clientWidth);
            }
        }
        window.addEventListener('resize', updateUnderlinePosition);
        updateUnderlinePosition();
    }, [activeTab]);

    const handleTabSelect = (idx: number) => {
        setActiveTab(idx);
        changePage(idx);
        // console.log('Tab: ' + activeTab);
    }

    return (
        <nav>
            <span
                style={{
                    left: `${tabUnderlineLeft}px`,
                    width: `${tabUnderlineWidth}px`
                }}
            />
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    ref={(element) => (tabsRef.current[index] = element)}
                    onClick={() => handleTabSelect(index)}
                    className={activeTab === index ? 'active' : ''}
                >
                    <h1>{tab}</h1>
                </button>
            ))}
        </nav>
    );
}