import React from 'react';

const Rewards = () => {
  const rewardsList = [
    { id: 1, title: 'Hediye Kartı', amount: '10 TL', description: '10 TL değerinde hediye kartı kazanın.' },
    { id: 2, title: 'Hediye Kartı', amount: '20 TL', description: '20 TL değerinde hediye kartı kazanın.' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Ödüller</h2>
      <div className="row">
        {rewardsList.map((reward) => (
          <div className="col-lg-6 mb-4" key={reward.id}>
            <div className="card h-100 border-primary">
              <div className="card-body">
                <h5 className="card-title text-primary">{reward.title} - {reward.amount}</h5>
                <p className="card-text">{reward.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
