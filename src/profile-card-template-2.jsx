import react from 'react';

const CardTemp = () => {
    return (
        <div>
            <div className="card-container-2">
                <div className="card-header-2">
                    <img src="/src/assets/dr-azeem.jpg" className="user-image-2"></img>
                    <div className="user-info-2">
                        <h3 id='reg-name'>Dr Azeem Khalid</h3>
                        <div className="designation-2">
                            <p id='reg-role'>Soil Scientist</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p>Dr. Azeem is a leading expert in soil microbiology with over 18 years of experience. His research focuses on...</p>
                    <div className="info-row">
                        <p className="info-label">Location:</p>
                        <p className="info-data" id='reg-location'>Islamabad, Pakistan</p>
                    </div>
                    <div className="info-row">
                        <p className="info-label">Expertise:</p>
                        <p className="info-data" id='reg-expertise'>Soil Chemistry, Soil Fertility, Nutrient Management</p>
                    </div>
                    <div className="info-row">
                        <p className="info-label">Contact:</p>
                        <p className="info-data" id='reg-contact'>0301-6005958</p>
                    </div>
                    
                </div>
                <div className="card-footer">
                    <button className="see-profile">See Profile</button>
                </div>
            </div>
        </div>
    );
};

export default CardTemp;