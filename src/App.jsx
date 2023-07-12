import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
