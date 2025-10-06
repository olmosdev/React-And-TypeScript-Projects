// Third-party modules
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

// Reusable components
import Error from "./Error"

// Types
import type { DraftPatient } from "../types"

// Custom hooks
import { usePatientStorage } from "../store/store"
import { useEffect } from "react"

export default function PatientForm() {
    /*const { addPatient } = usePatientStorage() Second way to use zustand */
    const addPatient = usePatientStorage(state => state.addPatient) // First way
    const activeId = usePatientStorage(state => state.activeId)
    const patients = usePatientStorage(state => state.patients)
    const updatePatient = usePatientStorage(state => state.updatePatient)

    /*
    register: This method allows you to register an input or select element and apply validation rules to 
        React Hook Form. Validation rules are all based on the HTML standard
    handleSubmit: This function will receive the form data if form validation is successful
    formState: This object contains information about the entire form state. It helps you to keep on track
        with the user's interaction with your form application
    reset: To clear the form fields
    setValue: This function allows you to dynamically set the value of a registered field and have the options 
        to validate and update the form state. At the same time, it tries to avoid unnecessary rerender
    */
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<DraftPatient>()

    useEffect(() => {
        if (activeId) {
            const activePatient = patients.filter( patient => patient.id === activeId )[0]
            setValue("name", activePatient.name)
            setValue("caretaker", activePatient.caretaker)
            setValue("email", activePatient.email)
            setValue("date", activePatient.date)
            setValue("symptoms", activePatient.symptoms)
        }
    }, [activeId])

    const registerPatient = (data: DraftPatient) => {
        if (activeId) {
            updatePatient(data)
            toast("Patient successfully updated", {type: "success"})
        } else {
            addPatient(data)
            toast.success("Patient successfully registered")
        }

        reset()
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Add Patients and {''}
                <span className="text-indigo-600 font-bold">Manage them</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Patient
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Patient Name"
                        {...register("name", {
                            required: "The patient's name is required",
                            maxLength: {
                                value: 15,
                                message: "Maximum 15 characters"
                            }
                        })}
                    />

                    {errors.name && (
                        /* <Error>{errors.name?.message as string}</Error> */
                        <Error>{errors.name?.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Caretaker
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Caretaker's Name"
                        {...register("caretaker", {
                            required: "A caretaker is required"
                        }
                        )}
                    />

                    {errors.caretaker && (
                        /*It is no longer necessary to use the toString() method.*/
                        <Error>{errors.caretaker?.message}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Registration Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid Email'
                            }
                        })}
                    />

                    {errors.email && (
                        <Error>{errors.email?.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Registration date
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register("date", {
                            required: "Registration is mandatory"
                        }
                        )}
                    />

                    {errors.date && (
                        <Error>{errors.date?.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Symptoms
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Patient symptoms"
                        {...register("symptoms", {
                            required: "The symptoms are mandatory"
                        }
                        )}
                    ></textarea>

                    {errors.symptoms && (
                        <Error>{errors.symptoms?.message?.toString()}</Error>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Save Patient'
                />
            </form>
        </div>
    )
}