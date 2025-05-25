import { SQLiteDatabase, SQLiteExecuteAsyncResult, SQLiteVariadicBindParams } from 'expo-sqlite';

export class AchievementsRepository {
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

  public async getAllAchievements(): Promise<TAchivementsDB[] | null> {
    return await this.executeQueryStatement<TAchivementsDB>(
      'SELECT * FROM achievements',
      undefined,
      'Erro ao resgatar achievements'
    );
  }

  public async findAchievementById(id: number): Promise<TAchivementsDB | null> {
    const result = await this.executeQueryStatement<TAchivementsDB>(
      'SELECT * FROM achievements WHERE id = $id',
      [id],
      'Erro ao encontrar achievements por id'
    );

    if (!result) return null;

    if (result.length > 0) return result[0];

    return null;
  }

  public async findAchievementBySlug(slug: string): Promise<TAchivementsDB | null> {
    const result = await this.executeQueryStatement<TAchivementsDB>(
      'SELECT * FROM achievements WHERE slug = $slug',
      [slug],
      'Erro ao encontrar um achievement por slug'
    );

    if (!result) return null;

    if (result.length > 0) return result[0];

    return null;
  }

  public async insertAchievement(
    achievement: TAchivementsDB
  ): Promise<SQLiteExecuteAsyncResult<TAchivementsDB> | null> {
    return await this.executeCommandStatement<TAchivementsDB>(
      'INSERT INTO achievements (id, slug, title, description) VALUES ($id, $slug, $title, $description)',
      [achievement.id, achievement.slug, achievement.title, achievement.description],
      'Erro ao inserir em achievements'
    );
  }

  public async updateAchievement(
    achievement: TAchivementsDB
  ): Promise<SQLiteExecuteAsyncResult<TAchivementsDB> | null> {
    return await this.executeCommandStatement<TAchivementsDB>(
      'UPDATE achievements SET title = $title, description = $description WHERE id = $id',
      [achievement.title, achievement.description, achievement.id],
      'Erro ao atualizar em achievements'
    );
  }

  public async getCountOfAchievements(): Promise<number> {
    const result = await this.executeQueryStatement<{ 'COUNT(*)': number }>(
      'SELECT COUNT(*) FROM achievements',
      [],
      'Erro ao consultar a contagem de achievements'
    );

    if (result) return result[0]['COUNT(*)'];
    else return 0;
  }
}
