import React from 'react';


const getInitials = (name) => {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const CardTemp = ({
    id,
    name,
    image,
    role,
    institute,
    expertise,
    email,
    phone,
    description
}) => {
    return (
        <div className="card-container-2" data-id={id}>
            <div className="card-header-2">
                {image ? (
                    <img src={image} className="user-image-2" alt={`Profile image of ${name}`} />
                ) : (
                    <div className="user-initials-2">
                        <p>{getInitials(name)}</p>
                    </div>
                )}
                
                <div className="user-info-2">
                    <h3 className='reg-name'>{name}</h3>
                    <div className="designation-2">
                        <p className='reg-role'>{role}</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                {description && (
                    <p className='profile-summary'>{description}</p>
                )}

                {institute && (
                    <div className="info-row">
                        <p className="info-label-2">Institute:</p>
                        <p className="info-data reg-location">{institute}</p>
                    </div>
                )}

                {/* <div className="info-row">
                    <p className="info-label-2">Email:</p>
                    <p className="info-data reg-email">{email}</p>
                </div> */}

                <div className="contact-row">
                    {phone && (
                        <div className="info-row">
                            <p className="info-label-2">Phone:</p>
                            <p className="info-data" id='reg-contact'>{phone}</p>
                        </div>
                    )}
                    <div className="info-row">
                        <p className="info-label-2">Email:</p>
                        <p className="info-data reg-email">{email}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="see-profile">See Profile</button>
            </div>
        </div>
    );
};

export default CardTemp;