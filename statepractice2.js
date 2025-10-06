import { useEffect,useState} from "react";
import './ MainContent.css'
function StatePractice(){
    const[data, setData] = useState(0);
    useEffect(() => { console.log("rendered");
        if(data > 15){
            setData(1);
        }

    },[]);
    function incrementnumber(){
        setData((perviousState) => { return perviousState +1});

    }
    return(
        <>
        <h1> This is to test state function{Data} </h1>
        <button onClick={incrementnumber}> Increment</button>
        </>
    );
}
export default StatePractice