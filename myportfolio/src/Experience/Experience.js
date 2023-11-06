import "./Experience.css"
import MessageCard from "./MessageCard/MessageCard";

export default function Experience(){

    return(
        <div className="background">
            <MessageCard Containt={"Test Text1"} />
            <MessageCard Containt={"Test Text2"} />
            <MessageCard Containt={"Test Text3"} />
            <MessageCard Containt={"Test Text4"} />
        </div>
    );
}