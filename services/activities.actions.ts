import { SQLiteDatabase, SQLiteExecuteAsyncResult, SQLiteVariadicBindParams } from 'expo-sqlite';

export class ActivitiesRepository {
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

  public async getAllActivities(): Promise<TActivityDB[] | null> {
    return await this.executeQueryStatement<TActivityDB>(
      'SELECT * FROM activities',
      undefined,
      'Erro ao resgatar activities'
    );
  }

  public async findActivityById(id: number): Promise<TActivityDB | null> {
    const result = await this.executeQueryStatement<TActivityDB>(
      'SELECT * FROM activities WHERE id = $id',
      [id],
      'Erro ao encontrar activities por id'
    );

    if (!result) return null;

    if (result.length > 0) return result[0];

    return null;
  }

  public async insertActivity(
    activity: TActivityDB
  ): Promise<SQLiteExecuteAsyncResult<TActivityDB> | null> {
    return await this.executeCommandStatement<TActivityDB>(
      'INSERT INTO activities (id, title, isDone) VALUES ($id, $title, $isDone)',
      [activity.id, activity.title, activity.isDone],
      'Erro ao inserir em activities'
    );
  }

  public async updateActivity(
    activity: TActivityDB
  ): Promise<SQLiteExecuteAsyncResult<TActivityDB> | null> {
    return await this.executeCommandStatement<TActivityDB>(
      'UPDATE activities SET title = $title, isDone = $isDone WHERE id = $id',
      [activity.title, activity.isDone, activity.id],
      'Erro ao atualizar em activities'
    );
  }
}
