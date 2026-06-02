const TeamCard = ({ name, role }) => {
    return (
        <div className="team-card">
            <div className="avatar">🧑‍💻</div>
            <h3>{name}</h3>
            <p className="role">{role}</p>
        </div>
    );
};

export default TeamCard;
