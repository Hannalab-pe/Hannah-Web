// services/emailService.ts
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/libs/firebase";

export interface EdaEmailData {
  email: string;
  timestamp: any;
  source: string;
  userAgent?: string;
}

export const saveEdaEmail = async (email: string): Promise<boolean> => {
  try {
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Formato de email inválido");
    }

    // Preparar datos
    const emailData: EdaEmailData = {
      email: email.toLowerCase().trim(),
      timestamp: serverTimestamp(),
      source: "eda-demo-access",
      userAgent:
        typeof window !== "undefined" ? window.navigator.userAgent : undefined,
    };

    // Guardar en Firestore
    const docRef = await addDoc(collection(db, "eda-emails"), emailData);

    console.log("✅ Email guardado exitosamente:", docRef.id);
    return true;
  } catch (error) {
    console.error("❌ Error al guardar email:", error);
    return false;
  }
};

export const saveEmailWithMetadata = async (
  email: string,
  additionalData?: Record<string, any>
): Promise<boolean> => {
  try {
    const emailData: EdaEmailData = {
      email: email.toLowerCase().trim(),
      timestamp: serverTimestamp(),
      source: "eda-demo-access",
      userAgent:
        typeof window !== "undefined" ? window.navigator.userAgent : undefined,
      ...additionalData,
    };

    const docRef = await addDoc(collection(db, "eda-emails"), emailData);
    console.log("✅ Email con metadata guardado:", docRef.id);
    return true;
  } catch (error) {
    console.error("❌ Error al guardar email con metadata:", error);
    return false;
  }
};
