import { prisma } from "../db.js"

export const obtenerTodasLasReservas = async (req, res) => {
    try {
        const reservas = await prisma.reserva.findMany({
            orderBy: { id: "asc" }
        });

        res.status(200).json(reservas);
    } catch (error) {
        console.error("Error al obtener las reservas: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
export const obtenerMisReservas = async (req, res) => {
    try {

    } catch (error) {
        console.error("Error al obtener mis reservas: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
export const crearReserva = async (req, res) => {
    try{

    }catch(err){
        console.error("Error al crear una reserva: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
export const cambiarEstadoReserva = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Error al cambiar el estado de la reserva: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
export const cancelarMiReserva = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Error al cancelar la reserva: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}