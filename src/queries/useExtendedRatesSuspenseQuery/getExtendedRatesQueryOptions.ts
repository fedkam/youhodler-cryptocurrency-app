import { getExtendedRates } from '@/src/servises/getExtendedRates/getExtendedRates'
import { queryOptions } from '@tanstack/react-query'

const extendedRatesQueryKey = 'extendedRates'

export function getExtendedRatesQueryOptions() {
  return queryOptions({
    queryKey: [extendedRatesQueryKey],
    queryFn: getExtendedRates,
  })
}