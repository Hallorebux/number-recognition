import DrawingArea from "./DrawingArea";

function Content() {
    return (
        <div className="content">
            <h1>Zahlenerkennung</h1>
            <h2>Seminarkurs</h2>
            <dl>Informationstechnik und evangelische Religion</dl>
            <p>This is a example paragraph <code>with some code</code> in it</p>
            <DrawingArea />
        </div>
    );
}

export default Content;