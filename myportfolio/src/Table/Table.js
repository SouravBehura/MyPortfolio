import "./Table.css"
import Border from "../Border/Border.js"

export default function Test(){
    return(
        <table className = "fullSize">
            <tr className = "fullSize">
                <td className = "leftCol"><h1>Hi This is col 1</h1></td>
                <td className = "rightCol"><Border size={"small"} content={<h1>Hello This is 2nd col inside border</h1>} /></td>
            </tr>
        </table>
    );
}