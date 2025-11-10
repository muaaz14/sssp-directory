import react from 'react';

const ProfileCardTemplate = () => {
    return (
        <div>
            <div className="card-container">
                <div className="card-header">
                    <img src="/src/assets/profile-image.jpg" className="user-image"></img>
                    <div className="user-info">
                        <h3>John Doe</h3>
                        <p>Soil Scientist</p>
                    </div>
                </div>
                <div className="card-body">

                </div>
                <div className="card-footer">
                    <button className="see-profile">See Profile</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCardTemplate;