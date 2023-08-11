import { ButtonHTMLAttributes, ReactNode } from "react"

import { LoadingSpinner } from "../LoadingSpinner"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
}

export function Button({ children, isLoading = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="p-2 bg-indigo-600 hover:bg-indigo-700 text-zinc-50 font-bold rounded-lg transition-all disabled:bg-zinc-500 disabled:text-zinc-50"
      data-testid="button-component"
    >
      {isLoading ? <LoadingSpinner/> : children}
    </button>
  )
}