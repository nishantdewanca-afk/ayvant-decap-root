import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const metadata = { title: { absolute: "Page not found | Ayvant" }, robots: { index: false } };

export default function NotFound() {
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-28 md:py-40">
        <p className="lbl text-signal mb-6">404</p>
        <h1 className="disp h1-size">This page has moved, or never existed.</h1>
        <p className="text-lg md:text-xl leading-[1.6] mt-8">Try one of these instead:</p>
        <ul className="mt-6 space-y-3 text-lg font-semibold">
          <li><a className="ul-link" href="/">Home</a></li>
          <li><a className="ul-link" href="/#services">Services</a></li>
          <li><a className="ul-link" href="/learning-hub">Learning Hub</a></li>
          <li><a className="ul-link" href="/#assessment">Book a free security assessment</a></li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
