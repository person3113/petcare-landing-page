import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import TeamCard from './components/TeamCard';
import ReviewForm from './components/ReviewForm';

function App() {
  const [features, setFeatures] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch features
    fetch('http://localhost:8080/api/features')
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.error('Failed to fetch features', err));

    // Fetch members
    fetch('http://localhost:8080/api/members')
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error('Failed to fetch members', err));
  }, []);

  return (
    <div className="container">
      <Header />
      
      <main>
        <section className="features-section">
          <h2>주요 기능</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id} 
                title={feature.title} 
                description={feature.description} 
                isMust={feature.isMust} 
              />
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2>팀원 소개</h2>
          <div className="team-grid">
            {members.map((member) => (
              <TeamCard 
                key={member.id} 
                name={member.name} 
                role={member.role} 
              />
            ))}
          </div>
        </section>

        <ReviewForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;