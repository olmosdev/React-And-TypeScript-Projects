import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes(""), [result])

    return (
        <div className="result-wrapped">

            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Price</h2>
                    <div className="result">
                        <img 
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Crypto image"
                        />

                        <div>
                            <p>The current price: <span>{result.PRICE}</span></p>
                            <p>The highest price of the day: <span>{result.HIGHDAY}</span></p>
                            <p>The lowest price of the day: <span>{result.LOWDAY}</span></p>
                            <p>Variation within the last 24 hours: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Last update: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
