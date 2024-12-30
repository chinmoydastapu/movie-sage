
function OverviewTab({ data }) {
    return (
        <div className="md:flex items-start gap-5">
            <div className="w-full md:w-3/4">
                <p className="text-justify">{data?.plot}</p>
            </div>
            <div className="w-full md:w-1/4">
                This is the sidenav
            </div>
        </div>
    );
}

export default OverviewTab;