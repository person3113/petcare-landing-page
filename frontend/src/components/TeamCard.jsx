import jsoImg from '../assets/jso.png';
import kusImg from '../assets/kus.png';
import ksaImg from '../assets/ksa.png';

const TeamCard = ({ name, role }) => {
    let avatarImg = null;
    if (name.includes('정성오')) avatarImg = jsoImg;
    else if (name.includes('김은솔')) avatarImg = kusImg;
    else if (name.includes('곽선아')) avatarImg = ksaImg;

    return (
        <div className="team-card">
            {avatarImg ? (
                <img src={avatarImg} alt={`${name} 프로필`} className="avatar-img" />
            ) : (
                <div className="avatar">🧑‍💻</div>
            )}
            <h3>{name}</h3>
            <p className="role">{role}</p>
        </div>
    );
};

export default TeamCard;
