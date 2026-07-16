import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import CompetitionSection from "@/components/CompetitionSection/CompetitionSection";
import UserJourney from "@/components/UserJourney/UserJourney";
import AboutLeague from "@/components/AboutLeague/AboutLeague";
import CategoryCards from "@/components/CategoryCards/CategoryCards";
import SportsGrid from "@/components/SportsGrid/SportsGrid";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";
import JoinEcosystem from "@/components/JoinEcosystem/JoinEcosystem";
import Sponsors from "@/components/Sponsors/Sponsors";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompetitionSection />
        <UserJourney />
        <AboutLeague />
        <CategoryCards />
        <SportsGrid />
        <AdvantagesSection />
        <JoinEcosystem />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
};

export default Home;
