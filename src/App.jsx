import React, { useState, useEffect } from 'react'
import './App.css'
// import './profile-card-template.css'
import Navbar from './navbar'
// import ProfileCardTemplate from './profile-card-template.jsx'
import CardTemp from './profile-card-template-2.jsx'
import './profile-card-template-2.css'
import { supabase } from "./supabaseClient";



// const profiles = [
//   {
//     id: "p1",
//     name: "Dr Azeem Khalid",
//     image: "/src/assets/dr-azeem.jpg",
//     role: "Professor",
//     institute: "PMAS Arid Agriculture University Rawalpindi",
//     email: "azeem@uaar.edu.pk",
//     phone: "0301-6005958",
//     expertise: "Soil Microbiology, Agronomy",
//     description: "Dr. Azeem is a leading expert in soil microbiology with over 18 years of experience"
//   },
//   {
//     id: "p2",
//     name: "Zahir Ahmad Zahir",
//     image: "",
//     role: "Not Available",
//     institute: "Institute of Soil & Environmental Sciences, University of Agriculture, Faisalabad",
//     email: "zazahir@yahoo.com",
//     phone: "0300 7665149",
//     expertise: "Soil Microbiology, Agronomy",
//     description: "Dr. Azeem is a leading expert in soil microbiology with over 18 years of experience"
//   },
//     {
//     id: "p3",
//     name: "Dr. Abdullah Niaz",
//     image: "",
//     role: "Principal Scientist",
//     institute: "Pesticide Residue Laboratory, Kala Shah Kaku",
//     email: "lorem.ipsum@sss-pakistan.org",
//     phone: "",
//     expertise: "Soil Microbiology, Agronomy",
//     description: "Dr. Azeem is a leading expert in soil microbiology with over 18 years of experience"
//   },
//   {
//     id: "p4",
//     name: "Dr. Nizamuddin Depar",
//     image: "",
//     role: "Director",
//     institute: "Soil & Environmental Sciences Division, Nuclear Institute of Agriculture Tando Jam",
//     email: "ndepar@gmail.com",
//     phone: "0301-3611996",
//     expertise: "Soil Microbiology, Agronomy",
//     description: "Dr. Azeem is a leading expert in soil microbiology with over 18 years of experience"
//   },

//   {
//     id: "p5",
//     name: "Prof. Dr. Dost Muhammad",
//     image: "",
//     role: "Chairman",
//     institute: "Department of Soil and Environmental Sciences, The University of Agriculture Peshawar",
//     email: "dostms76@gmail.com",
//     phone: "0333-9240976",
//     expertise: "Soil Microbiology, Agronomy",
//     description: "Dr. Azeem is a leading expert in soil microbiology with over 18 years of experience"
//   }
// ];





function App() {

  const [profiles, setProfiles] = useState([]); // ✅ useState must be here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data, error } = await supabase.from("profiles").select("*");

        if (error) {
          console.error("Error fetching profiles:", error);
        } else {
          console.log("Supabase data:", data);
          console.log("Supabase error:", error);
          // setProfiles(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return <div>Loading profiles...</div>;
  }

  return (

      <div className="responsive-container">
        <div className='main'>
          <div className="nav-cont">
            <Navbar /> 
          </div>
          <div className="body">
            <div className="section-1">
              <div className="container">
                <h1>National <b>Directory</b></h1>
                <p>of Soil Science Professionals</p>
                <div className="actions">
                  <button className='primary'>Explore Directory</button>
                  <button className='secondary'>Get Listed</button>
                </div>
              </div>
            </div>
            <div className="section-2">
              <div className="section-header">
                <div className="section-title">
                  <h3>Listed Professionals</h3>
                  <h4 id='no-of-professionals'>49 Professionals Found</h4>
                </div>
                <div className="filters">
                </div>
              </div>
              <div className="listing">
                {profiles.length > 0 ? (
                  profiles.map((profile) => (
                    <CardTemp key={profile.id} {...profile} />
                  ))
                ) : (
                  <p>No profiles found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;
