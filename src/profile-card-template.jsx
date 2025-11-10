import react from 'react';

const ProfileCardTemplate = () => {
    return (
        <div>
            <div className="card-container">
                <div className="card-header">
                    <img src="/src/assets/dr-azeem.jpg" className="user-image"></img>
                    <div className="user-info">
                        <h3 id='reg-name'>Dr Azeem Khalid</h3>
                        <div className="designation">
                            <p id='reg-role'>Soil Scientist</p>
                            {/* <p>@</p>
                            <p>PMAS AAUR</p> */}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p>Dr. Azeem is a leading expert in soil microbiology with over 18 years of experience. His research focuses on...</p>
                    <div className="info-row">
                        <p className="info-label">Institute:</p>
                        <p className="info-data" id='reg-location'>PMAS Arid Agriculture University Rawalpindi</p>
                    </div>
                    {/* <div className="info-row">
                        <p className="info-label">Expertise:</p>
                        <p className="info-data" id='reg-expertise'>Soil Chemistry, Soil Fertility, Nutrient Management</p>
                    </div> */}
                    <div className="contact-row">
                        <div className="info-row">
                            <p className="info-label">Contact:</p>
                            <p className="info-data" id='reg-contact'>0301-6005958</p>
                        </div>
                        <div className="info-row">
                            <p className="info-label">Email:</p>
                            <p className="info-data" id='reg-contact'>azeem@uaar.edu.pk</p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="card-footer">
                    <button className="see-profile primary">View Profile</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCardTemplate;