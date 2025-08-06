import Layout from "../../components/layout/Layout";
import ProfileCard from "../../components/common/ProfileCard";

const Home: React.FC = () => {
  return (
    <Layout title="홈">
      {
        <>
          <ProfileCard />
        </>
      }
    </Layout>
  );
};

export default Home;
