import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivity = () => {
    const context = useContext(ActivityContext)

    // If this is not being called from a context
    if (!context) {
        throw new Error("The useActivity hook must be used inside an ActivityProvider")
    }

    return context
}
