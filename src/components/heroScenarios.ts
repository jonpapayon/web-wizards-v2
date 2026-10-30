export type Message = {
  from: "client" | "bot";
  text: string;
  at: number; // ms en que aparece
};

export type Step = {
  label: string;
  at: number; // ms en que se activa
};

export type Scenario = {
  id: string;
  chip: string;
  file: string;
  time: string;
  messages: Message[];
  steps: Step[];
  seal: string;
  sealAt: number;
};

export const scenarios: Scenario[] = [
  {
    id: "agendar",
    chip: "Agendar citas",
    file: "agendar-citas.flow",
    time: "20:47",
    messages: [
      { from: "client", text: "Hola, ¿tienen cita el jueves?", at: 400 },
      {
        from: "bot",
        text: "¡Hola! Para el jueves tengo 10:00, 12:30 y 17:00. ¿Cuál te acomoda?",
        at: 2600,
      },
      { from: "client", text: "A las 12:30", at: 4400 },
      {
        from: "bot",
        text: "Listo, quedó agendada tu cita el jueves a las 12:30.",
        at: 5600,
      },
    ],
    steps: [
      { label: "Recibido", at: 400 },
      { label: "Consultar agenda", at: 1300 },
      { label: "Responder", at: 2300 },
      { label: "Confirmar cita", at: 5700 },
    ],
    seal: "Confirmada",
    sealAt: 6300,
  },
  {
    id: "dudas",
    chip: "Responder dudas",
    file: "responder-dudas.flow",
    time: "21:12",
    messages: [
      {
        from: "client",
        text: "¿Cuánto cuesta una limpieza dental?",
        at: 400,
      },
      {
        from: "bot",
        text: "Desde $600 e incluye revisión. ¿Quieres que te agende una cita?",
        at: 2800,
      },
      { from: "client", text: "Sí, mañana por la tarde", at: 4600 },
      { from: "bot", text: "Tengo 16:00 o 18:00. ¿Cuál prefieres?", at: 5800 },
    ],
    steps: [
      { label: "Recibido", at: 400 },
      { label: "Entender pregunta", at: 1200 },
      { label: "Buscar respuesta", at: 2000 },
      { label: "Responder", at: 2800 },
    ],
    seal: "Resuelta",
    sealAt: 6500,
  },
  {
    id: "recordatorios",
    chip: "Recordatorios",
    file: "recordatorios.flow",
    time: "09:00",
    messages: [
      {
        from: "bot",
        text: "Hola Ana, mañana tienes cita a las 12:30. ¿Nos confirmas?",
        at: 1800,
      },
      { from: "client", text: "Sí, ahí estaré", at: 3600 },
      {
        from: "bot",
        text: "Gracias, te esperamos. Si necesitas cambiarla, responde aquí.",
        at: 4800,
      },
    ],
    steps: [
      { label: "Detectar cita", at: 400 },
      { label: "Enviar recordatorio", at: 1600 },
      { label: "Esperar respuesta", at: 2800 },
      { label: "Registrar", at: 4900 },
    ],
    seal: "Registrada",
    sealAt: 5700,
  },
];