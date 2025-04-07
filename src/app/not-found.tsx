import NavbarSecond from "@/components/NavbarSecond";

const NotFound = () => {
  return (
    <>
      <div className="padding_content gdpr intro_padding">
        <NavbarSecond black={true} />
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h3 className="text-center font-semibold mb-4">
            Ľutujeme, zadaná stránka sa nenašla.
          </h3>

          <p className="text-center mb-6">
            Prosím, použite nižšie tlačidlo, z ktorého sa dostanete kam
            potrebujete.
          </p>

          <div className="flex gap-6">
            <a href="/" className="btn btn--primary">
              Domov
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
