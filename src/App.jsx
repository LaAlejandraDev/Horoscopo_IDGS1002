import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [signo, setSigno] = useState(null);

  const signos = [
    {
      nombre: "Aries",
      inicio: "03-21",
      fin: "04-19",
      descripcion:
        "Eres valiente, lleno de energía y siempre dispuesto a enfrentar nuevos retos. Tu entusiasmo inspira a los demás.",
      imagen: "/aries.png",
    },
    {
      nombre: "Tauro",
      inicio: "04-20",
      fin: "05-20",
      descripcion:
        "Eres paciente, decidido y confiable. Te gusta la estabilidad y disfrutas de los pequeños placeres de la vida.",
      imagen: "/tauro.png",
    },
    {
      nombre: "Géminis",
      inicio: "05-21",
      fin: "06-20",
      descripcion:
        "Eres adaptable, curioso y comunicativo. Tu ingenio hace que siempre tengas algo interesante que compartir.",
      imagen: "/geminis.png",
    },
    {
      nombre: "Cáncer",
      inicio: "06-21",
      fin: "07-22",
      descripcion:
        "Eres sensible, protector y muy intuitivo. Te importa mucho tu familia y la gente que quieres.",
      imagen: "/cancer.png",
    },
    {
      nombre: "Leo",
      inicio: "07-23",
      fin: "08-22",
      descripcion:
        "Eres creativo, generoso y con gran carisma. Te gusta brillar y motivar a quienes te rodean.",
      imagen: "/leo.png",
    },
    {
      nombre: "Virgo",
      inicio: "08-23",
      fin: "09-22",
      descripcion:
        "Eres analítico, perfeccionista y trabajador. Tu atención a los detalles te convierte en alguien confiable.",
      imagen: "/virgo.png",
    },
    {
      nombre: "Libra",
      inicio: "09-23",
      fin: "10-22",
      descripcion:
        "Eres diplomático, encantador y amante de la armonía. Siempre buscas el equilibrio en tu vida.",
      imagen: "/libra.png",
    },
    {
      nombre: "Escorpio",
      inicio: "10-23",
      fin: "11-21",
      descripcion:
        "Eres intenso, apasionado y con gran fuerza de voluntad. Tu misterio y determinación atraen a los demás.",
      imagen: "/escorpio.png",
    },
    {
      nombre: "Sagitario",
      inicio: "11-22",
      fin: "12-21",
      descripcion:
        "Eres optimista, aventurero y amante de la libertad. Te motiva aprender y explorar nuevos horizontes.",
      imagen: "/sagitario.png",
    },
    {
      nombre: "Capricornio",
      inicio: "12-22",
      fin: "01-19",
      descripcion:
        "Eres disciplinado, responsable y con gran ambición. Te gusta alcanzar tus metas paso a paso.",
      imagen: "/capricornio.png",
    },
    {
      nombre: "Acuario",
      inicio: "01-20",
      fin: "02-18",
      descripcion:
        "Eres original, independiente y solidario. Tienes ideas innovadoras y un espíritu libre.",
      imagen: "/acuario.png",
    },
    {
      nombre: "Piscis",
      inicio: "02-19",
      fin: "03-20",
      descripcion:
        "Eres soñador, compasivo y con gran sensibilidad. Tu empatía te hace especial para los demás.",
      imagen: "/piscis.png",
    },
  ];

  const calcularSigno = () => {
    if (!fecha) return;

    const [anio, mes, dia] = fecha.split("-");
    const fechaFormateada = `${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;

    const signoEncontrado = signos.find((s) => {
      if (s.inicio <= s.fin) {
        return fechaFormateada >= s.inicio && fechaFormateada <= s.fin;
      } else {
        return fechaFormateada >= s.inicio || fechaFormateada <= s.fin;
      }
    });

    setSigno(signoEncontrado);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "199vh",
        background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
        padding: "2rem 1rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "28rem",
          margin: "0 auto",
          background: "white",
          borderRadius: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
            padding: "1.5rem",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Horóscopo
          </h1>
          <p style={{ color: "#d8b4fe" }}>Descubre tu signo zodiacal</p>
        </div>

        <div style={{ padding: "1.5rem" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "0.25rem",
                }}
              >
                Nombre
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem 1rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.5rem",
                  outline: "none",
                  color: "black",
                }}
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "0.25rem",
                }}
              >
                Fecha de nacimiento
              </label>
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem 1rem",
                  color: "#374151",
                  text: "black",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.5rem",
                  outline: "none",
                }}
              />
            </div>

            <button
              onClick={calcularSigno}
              disabled={!fecha}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                color: "white",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                opacity: !fecha ? 0.5 : 1,
              }}
            >
              Descubre tu signo
            </button>
          </div>

          {signo && (
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "linear-gradient(135deg, #faf5ff 0%, #f3f4f6 100%)",
                borderRadius: "0.75rem",
                border: "1px solid #e9d5ff",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  Tu signo es: {signo.nombre}
                </h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "6rem",
                      height: "6rem",
                      background: "white",
                      borderRadius: "50%",
                      padding: "0.5rem",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={signo.imagen}
                      alt={signo.nombre}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    background: "white",
                    borderRadius: "0.5rem",
                    padding: "1rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  <p style={{ color: "#374151" }}>
                    <span style={{ fontWeight: "600", color: "#7c3aed" }}>
                      {nombre}
                    </span>
                    {` (nacido el ${fecha}): `}
                    <span style={{ color: "#6b7280" }}>
                      {signo.descripcion}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
