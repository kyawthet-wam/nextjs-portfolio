import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav>
        <div className="grid grid-flow-col gap-10">
          <a
            className="hover:text-blue-700 tooltip"
            data-tip="(+95) 09791867084"
            href="tel:+959791867084"
          >
            <Phone size={24} />
          </a>
          <a
            className="hover:text-blue-700 tooltip"
            data-tip="kyawthetwam@gmail.com"
            href="mailto:kyawthetwam@gmail.com"
          >
            <Mail size={24} />
          </a>
          <a
            className="hover:text-blue-700 tooltip"
            data-tip="Kyaw Thet Wam"
            href="https://www.linkedin.com/in/kyaw-thet-wam-71a0611a2"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Empowering Ideas, Building Futures | Kyaw Thet Wam © 2024 | Made with
          Passion and Precision
        </p>
      </aside>
    </footer>
  );
}
