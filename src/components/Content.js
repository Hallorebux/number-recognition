import DrawingArea from "./DrawingArea";
import SectionDescription from "./SectionDescription";
import SectionHeader from "./SectionHeader";

function Content() {
    return (
        <div className="content">
            <h1>Zahlenerkennung</h1>
            <SectionHeader title="Seminarkurs" />
            <SectionDescription text="Informationstechnik und evangelische Religion" />
            <p>
                Für unseren Seminarkurs haben wir mithilfe 
                von <code>tensorflow</code> eine KI entworfen, 
                welche von Hand geschriebene Zahlen erkennen kann.
            </p>
            <p>
                Probier es doch gleich aus und male eine Zahl in die folgende Fläche.
            </p>
            <br></br>
            <DrawingArea />
        </div>
    );
}

export default Content;