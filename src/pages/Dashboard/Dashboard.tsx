import { Helmet } from "react-helmet";

const Dashboard =() => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dashboard - Mech Arcade</title>
      </Helmet>
      <h1> This is, Dashboard component! </h1>
    </div>
  );
};

export default Dashboard;