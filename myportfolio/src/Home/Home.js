import Welcome from "./Welcome/Welcome.js";
import Message from "./Message/Message.js";

export default function Home(){
    return(
        <div style={{width: "100%", height: "100%", marginLeft: "5%"}}>
            <Welcome />
            <Message />
        </div>
        
    );
}