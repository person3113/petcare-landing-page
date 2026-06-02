const FeatureCard = ({ title, description, isMust }) => {
    return (
        <div className="feature-card">
            <div className="feature-header">
                <span className={`badge ${isMust ? 'must-badge' : 'should-badge'}`}>
                    {isMust ? 'Must' : 'Should'}
                </span>
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;
