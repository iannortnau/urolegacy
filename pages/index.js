import Body from "../components/ornament/Body";
import Column from "../components/structural/Column";
import mobile from "is-mobile";
import img1 from "../public/Fotos/UroLegacy-52.jpg"
import img2 from "../public/Fotos/UroLegacy-54.jpg"
import img3 from "../public/Fotos/UroLegacy-43.jpg"
import Carrossel from "../components/ornament/Carrossel";

export default function Home() {
    let images;
    if(!mobile()){
        images = [img3,img2,img1];
    }else{
        images = [img3,img2,img1];
    }


    return (
        <Body>
            <Column
                style={{justifyContent:"flex-start"}}
            >
                <Carrossel
                    data={images}
                    height={"100%"}
                />
            </Column>
        </Body>
    )
}
