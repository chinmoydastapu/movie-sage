
function CastProfileCard({ profileData }) {
    const avatarContent = profileData.trim().split(" ").slice(0, 2).map(word => word[0]).join("").toUpperCase();

    return (
        <div className="flex items-center gap-3">
            <p className="bg-[#0f2133] w-16 h-16 p-3 flex items-center justify-center rounded-xl text-xl font-bold font-montserrat tooltip tooltip-accent cursor-pointer" data-tip={profileData}>{avatarContent}</p>
            <p className="text-accent">{profileData}</p>
        </div>
    );
}

export default CastProfileCard;