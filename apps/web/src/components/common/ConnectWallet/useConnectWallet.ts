import { useCallback } from 'react'
import useOnboard, { connectWallet } from '@/hooks/wallets/useOnboard'

const useConnectWallet = () => {
  const onboard = useOnboard()

  return useCallback(() => {
    console.log('🔧 ConnectWallet: Attempting to connect wallet', { onboard: !!onboard })
    
    if (!onboard) {
      console.error('🔧 ConnectWallet: Onboard instance not available')
      return Promise.resolve(undefined)
    }

    console.log('🔧 ConnectWallet: Calling connectWallet')
    return connectWallet(onboard)
  }, [onboard])
}

export default useConnectWallet
