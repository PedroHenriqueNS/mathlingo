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
    require('../assets/images/imagem-id-2.jpg'),
    require('../assets/images/imagem-id-3.jpg'),
    require('../assets/images/imagem-id-4.jpg'),
    require('../assets/images/imagem-id-5.jpg'),
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