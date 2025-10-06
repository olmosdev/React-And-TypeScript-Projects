// This file can be at the same level as components/types/ and App.tsx.
// Third-party modulos
import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"
import { /*createJSONStorage,*/ devtools, persist } from 'zustand/middleware'

// Types
import type { DraftPatient, Patient } from "../types"

// Signature
type PatientState = {
    patients: Patient[]
    activeId: Patient["id"]
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient["id"]) => void
    getPatientById: (id: Patient["id"]) => void
    updatePatient: (data: DraftPatient) => void
}

// Reusable functions
const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

// Our hook
export const usePatientStorage = create<PatientState>()(
    devtools(
        persist((set) => ({
        patients: [],
        activeId: "",
        addPatient: (data) => {
            
            const newPatient = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter( patient => patient.id !== id )
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map( patient => patient.id === state.activeId ? {id: state.activeId, ...data} : patient ),
                activeId: ""
            }))
        }
    }), {
        name: "patient-storage",
        /*storage: createJSONStorage(() => localStorage) // or sessionStorage // This line of code is not necessary. Without it, everything is saved in localStorage by default. */
    })
))
