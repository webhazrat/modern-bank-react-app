import { clients } from "../constants";
export default function Clients() {
  console.log(clients);
  return (
    <section className="xl:px-48 sm:px-16 px-6 py-28 flex justify-between">
      {clients.map((client) => (
        <a href="#" key={client.id}>
          <img
            src={client.logo}
            alt="Client Logo"
            className={`w-48 h-14 object-contain`}
          />
        </a>
      ))}
    </section>
  );
}
