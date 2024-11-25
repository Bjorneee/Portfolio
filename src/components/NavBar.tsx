import { useEffect, useRef, useState } from "react";


export default function NavBar() {

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
        console.log(activeTab);
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
                    {tab}
                </button>
            ))}
        </nav>
    );
}