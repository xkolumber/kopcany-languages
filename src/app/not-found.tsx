const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h3 className="text-center font-semibold mb-4">
        Ľutujeme, zadaná stránka sa nenašla.
      </h3>
      <p className="text-center mb-4">Stránka má novú štruktúru.</p>
      <p className="text-center mb-6">
        Prosím, použite tlačidlo "Domov" a odtiaľ sa dostanete, kam potrebujete.
      </p>

      <div className="flex gap-6">
        <a href="/" className="btn btn--primary">
          Domov
        </a>
      </div>
    </div>
  );
};

export default NotFound;
