import React from 'react';
import './ProfileView.css'; // Optional: for custom styles

const ProfileView = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Profile Image */}
        <div className="profile-header">
          <div className="profile-avatar">
            <span>{user.initials}</span> {/* Fallback for the profile image */}
          </div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <div className="profile-detail-item">
            <i className="fas fa-globe"></i>
            <span>Public Profile</span>
          </div>
          <div className="profile-detail-item">
            <i className="fas fa-briefcase"></i>
            <span>Communities</span>
          </div>
          <div className="profile-detail-item">
            <i className="fas fa-check-circle"></i>
            <span>{user.badges} Badges</span>
          </div>
          <div className="profile-detail-item">
            <i className="fas fa-trophy"></i>
            <span>Score: {user.score}</span>
          </div>
        </div>

        {/* Edit Profile Link */}
        <div className="profile-footer">
          <a href="#" className="edit-profile-link">Edit Profile</a>
          <a href="#" className="communities-link">Communities</a>
        </div>
      </div>
    </div>
  );
};

// Mock User Data
ProfileView.defaultProps = {
  user: {
    name: 'Dharsini J.',
    email: 'dharsinij.22it@kongu.edu',
    initials: 'D',
    badges: 0,
    score: 0,
  },
};

export default ProfileView;
