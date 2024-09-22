import SvgBackground from "../composants/TicketBackground";

const Ticket = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SvgBackground>
        <foreignObject
          width="100%"
          height="150"
          className="rounded-3xl"
        >
          <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full">
            <img
              src="https://image.noelshack.com/fichiers/2024/38/5/1726833341-test.jpg"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </foreignObject>

        <text
          x="50%"
          y="180"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="bold"
        >
          Jujutsu Kaisen 0
        </text>
        <text x="50%" y="210" textAnchor="middle" fill="#591DA7" fontSize="10">
          Park Seong-hu
        </text>

        {/* Détails */}
        <g transform="translate(30, 240)">
          <text fill="#591DA7" fontSize="9">Date</text>
          <text y="15" fill="white" fontSize="11" fontWeight="bold">20/07</text>
        </g>
        <g transform="translate(110, 240)">
          <text fill="#591DA7" fontSize="9">Heure</text>
          <text y="15" fill="white" fontSize="11" fontWeight="bold">20H00</text>
        </g>
        <g transform="translate(180, 240)">
          <text fill="#591DA7" fontSize="9">Visuel</text>
          <text y="15" x="6" fill="white" fontSize="11" fontWeight="bold">3D</text>
        </g>

        <g transform="translate(30, 288)">
          <text fill="#591DA7" fontSize="9">Salle</text>
          <text y="15" x="6" fill="white" fontSize="11" fontWeight="bold">3</text>
        </g>
        <g transform="translate(110, 288)">
          <text fill="#591DA7" fontSize="9">Rangée</text>
          <text y="15" x="10" fill="white" fontSize="11" fontWeight="bold">D</text>
        </g>
        <g transform="translate(180, 288)">
          <text fill="#591DA7" fontSize="9">Siege</text>
          <text y="15" x="6" fill="white" fontSize="11" fontWeight="bold">6</text>
        </g>

        <g transform="translate(85, 335)">
          <text x="15" fill="#591DA7" fontSize="9">Adresse</text>
          <text y="20" x="-6" fill="white" fontSize="12" fontWeight="bold">Rue de L'Odeon</text>
        </g>

        <g transform="translate(5, 420)">
          <text x="15" fill="#591DA7" fontSize="9">Code de reservation</text>
          <text y="20" x="25" fill="white" fontSize="12" fontWeight="bold">
            54982315
          </text>
        </g>


        <g transform="translate(160, 395)">
          <image href="../../public/uploads/qrcode.svg"/>
        </g>
      </SvgBackground>
    </div>
  );
};

export default Ticket;
