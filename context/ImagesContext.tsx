import { Asset, useAssets } from "expo-asset";
import { createContext, useContext } from "react"

type TAssetsContext = {
  images: Asset[] | undefined
}

const AssetsContext = createContext<TAssetsContext>({
  images: [],
})

const AssetsProvider = ({ children }: { children: React.ReactNode }) => {

  const [assets] = useAssets([
    require('../assets/images/imagem-id-0.jpg'),
    require('../assets/images/imagem-id-1.jpg'),
  ]);

  return (
    <AssetsContext.Provider value={{
      images: assets,
    }}>
      {children}
    </AssetsContext.Provider>
  )
}

export default AssetsProvider

export const useAssetsContext = () => useContext(AssetsContext)