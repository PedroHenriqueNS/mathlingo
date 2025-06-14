import { useSQLiteContext } from "expo-sqlite";
import { createContext, useContext, useEffect, useState } from "react"
import { FiresRepository } from "~/services/fires.actions";

type TFiresContext = {
  fires: TFiresDB[],
  insertTodaysFire: () => Promise<boolean>
}

const FiresContext = createContext<TFiresContext>({
  fires: [],
  insertTodaysFire: async () => false
})

const FiresProvider = ({ children }: { children: React.ReactNode }) => {

  const db = useSQLiteContext();
  const firesRepository = new FiresRepository(db)

  const [fires, setFires] = useState<TFiresDB[]>([])

  const insertTodaysFire = async () => {
    const result = await firesRepository.insertTodaysFire()

    if (!result) return false;
    if (result.changes === 0) return false;

    const newFires = await firesRepository.gelAllFires();
    setFires(newFires!)

    return true;
  }

  useEffect(() => {
    const runEffect = async () => {
      const result = await firesRepository.gelAllFires()

      if (result) setFires(result)
    }
    runEffect()
  }, [db])

  return (
    <FiresContext.Provider value={{
      fires,
      insertTodaysFire
    }}>
      {children}
    </FiresContext.Provider>
  )
}

export default FiresProvider

export const useFiresContext = () => useContext(FiresContext)