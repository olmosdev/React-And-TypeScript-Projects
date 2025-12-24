import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { Cryptocurrency, CryptoPrice, Pair } from "./types"
// import type { Cryptocurrencies } from "./types" Another way
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService"

type CryptoStore = {
    // cryptocurrencies: Cryptocurrencies
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean,
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    // result: {} as CryptoPrice,
    result: {
        IMAGEURL: "",
        PRICE: "",
        HIGHDAY: "",
        LOWDAY: "",
        CHANGEPCT24HOUR: "",
        LASTUPDATE: ""
    },
    loading: false,
    // Actions
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})))