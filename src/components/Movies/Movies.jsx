import { useContext } from "react";
import { DataLoadingContext } from "../../contexts/contextsPrototypes";

function Movies () {
    const {isLoadingState} = useContext(DataLoadingContext);
    
    return (
        <div>
            {
                isLoadingState ? <div>Loading...</div> : <div>This is movies</div>
            }
        </div>
    );
}

export default Movies;