
function DescriptionTab({ data }) {
    return (
        <div className="text-justify">
            {data?.fullplot ? data?.fullplot : "There is no description for this movie or tv series"}
        </div>
    );
}

export default DescriptionTab;