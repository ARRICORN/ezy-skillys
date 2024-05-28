import Image from "next/image";
import beads from "/src/assets/beads1.png"

const MainContainer = () => {
    return (
        <div className="min-h-screen">
        <div className="waveBg min-h-[50vh] bg-[#003F7D] rounded-bl-full flex justify-around">
                <Image src={beads} alt="beads"/>
                <div>

                </div>
                <Image src={beads} alt="beads"/>
        </div>
        </div>
    );
};

export default MainContainer;