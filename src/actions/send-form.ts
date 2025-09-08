export interface ContactFormData {
  nombre: string;
  email: string;
  mensaje: string;
  telefono?: string;
  empresa?: string;
  servicio?: string;
}

interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const sendForm = async (
  data: ContactFormData
): Promise<ContactFormResponse> => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Mensaje enviado con éxito");

    return {
      success: true,
      message: "Mensaje enviado correctamente",
      data: result,
    };
  } catch (error) {
    console.error("Error al enviar mensaje:", error);

    return {
      success: false,
      message: "Error al enviar el mensaje",
    };
  }
};
