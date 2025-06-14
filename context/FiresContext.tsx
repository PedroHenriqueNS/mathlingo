import { useLocalSearchParams } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { createContext, useContext, useEffect, useState } from "react"
import { FiresRepository } from "~/services/fires.actions";

type TFiresContext = {
  fires: TFiresDB[]
}

const FiresContext = createContext<TFiresContext>({
  fires: [],
})

const FiresProvider = ({ children }: { children: React.ReactNode }) => {

  const { refreshHeader } = useLocalSearchParams()

  const db = useSQLiteContext();
  const firesRepository = new FiresRepository(db)

  const [fires, setFires] = useState<TFiresDB[]>([])

  useEffect(() => {
    const runEffect = async () => {
      await firesRepository.insertTodaysFire()
      const result = await firesRepository.gelAllFires()

      setFires(result ?? [])
    }
    runEffect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshHeader])

  return (
    <FiresContext.Provider value={{
      fires,
    }}>
      {children}
    </FiresContext.Provider>
  )
}

export default FiresProvider

export const useFiresContext = () => useContext(FiresContext)