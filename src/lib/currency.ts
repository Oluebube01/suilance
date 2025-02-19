export const USD_TO_SUI_RATE = 0.5 // 1 SUI = $0.50 USD

export function usdToSui(usdAmount: number): number {
  return usdAmount / USD_TO_SUI_RATE
}

export function formatSui(suiAmount: number): string {
  return `${suiAmount.toFixed(2)} SUI`
}

