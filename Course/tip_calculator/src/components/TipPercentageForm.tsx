// "rfc" + tab
import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    // setTip: React.Dispatch<React.SetStateAction<number>>
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
        <h2 className="font-black text-2xl">Tip:</h2>

        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        id={tipOption.id} 
                        type="radio" 
                        name="tip" 
                        value={tipOption.value}
                        onChange={e => setTip(+e.target.value)} // "+" is used to convert a string to a number
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
