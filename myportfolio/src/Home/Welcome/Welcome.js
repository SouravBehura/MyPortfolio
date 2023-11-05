import "./Welcome.css"

export default function Welcome(){
    return(
        <div className="board">
            <div className="transparent" style={{top:"0%"}}></div>
            <div className="line">Hello Everyone!<br />Welcome</div>
            <div className="transparent" style={{bottom:"0%"}}></div>
        </div>
    );
}