import { SQLiteDatabase, SQLiteExecuteAsyncResult, SQLiteVariadicBindParams } from 'expo-sqlite';

export class FiresRepository {
  private db: SQLiteDatabase;

  constructor(db: SQLiteDatabase) {
    this.db = db;
  }

  private async executeQueryStatement<T>(
    statement: string,
    params?: SQLiteVariadicBindParams,
    errorString?: string
  ): Promise<T[] | null> {
    const preparedStatement = await this.db.prepareAsync(statement);

    try {
      let result = await preparedStatement.executeAsync<T>(params ?? []);

      const rows = await result.getAllAsync();

      return rows;
    } catch (error) {
      console.error(`${errorString ?? 'Error when fetching to SQLite'}: ${error}`);
    } finally {
      await preparedStatement.finalizeAsync();
    }

    return null;
  }

  private async executeCommandStatement<T>(
    statement: string,
    params?: SQLiteVariadicBindParams,
    errorString?: string
  ): Promise<SQLiteExecuteAsyncResult<T> | null> {
    const preparedStatement = await this.db.prepareAsync(statement);

    try {
      let result = await preparedStatement.executeAsync<T>(params ?? []);

      return result;
    } catch (error) {
      console.error(`${errorString ?? 'Error when fetching to SQLite'}: ${error}`);
    } finally {
      await preparedStatement.finalizeAsync();
    }

    return null;
  }

  public async gelAllFires(): Promise<TFiresDB[] | null> {
    return await this.executeQueryStatement<TFiresDB>(
      'SELECT * FROM fires',
      undefined,
      'Erro ao resgatar fires'
    );
  }

  public async findFireById(id: number): Promise<TFiresDB | null> {
    const result = await this.executeQueryStatement<TFiresDB>(
      'SELECT * FROM fires WHERE id = $id',
      [id],
      'Erro ao encontrar fires por id'
    );

    if (!result) return null;

    if (result.length > 0) return result[0];

    return null;
  }

  public async findFiresByToday(): Promise<TFiresDB[] | null> {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();

    const formattedDate = `${mm}-${dd}-${yyyy}`; // MM-DD-YYYY

    const result = await this.executeQueryStatement<TFiresDB>(
      'SELECT * FROM fires WHERE date = $date',
      [formattedDate],
      'Erro ao encontrar fires por data de hoje'
    );

    if (!result || result.length === 0) return null;

    return result;
  }

  public async insertTodaysFire(): Promise<SQLiteExecuteAsyncResult<TFiresDB> | null> {
    return await this.executeCommandStatement<TFiresDB>(
      `INSERT INTO fires (date)
                        SELECT date('now', '-3 hours')
                        WHERE NOT EXISTS (
                            SELECT 1
                            FROM fires
                            WHERE date(date) = date('now', '-3 hours')
                        )`,
      undefined,
      'Erro ao inserir em fires'
    );
  }

  public async getCountOfFires(): Promise<number> {
    const result = await this.executeQueryStatement<{ 'COUNT(*)': number }>(
      'SELECT COUNT(*) FROM fires',
      [],
      'Erro ao consultar a contagem de fires'
    );

    if (result) return result[0]['COUNT(*)'];
    else return 0;
  }
}
