import { useState } from "react";

function calculateProteinNeeds(weight) {
    return `${(weight * 0.8).toFixed()}g to ${(weight * 1.3).toFixed()}g` ?? "-"
}

function ProteinStatBox(props) {

    const [weight, setWeight] = useState(0);

    const handleChange = (e) => {
        e.preventDefault(); 
        setWeight(e.target.value);
    };

    return (
        <div className="pt-5">
            <div className="py-2">
                Enter your weight : <input className="p-2 rounded-md" type="text" value={weight} onChange={handleChange} />
            </div>
            <div className="py-2">
                Protein Recommendation : {calculateProteinNeeds(weight)}
            </div>
        </div>
    )
}

export default ProteinStatBox