import { z } from "zod"
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from "../schemas/crypto-schema"
// import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-schema"

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
// export type Cryptocurrencies = z.infer<typeof CryptoCurrenciesResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>



