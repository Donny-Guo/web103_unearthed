import { pool } from "../config/database.js";

const getGifts = async (req, res) => {
  try {
    const results = await pool.query(`
      SELECT * FROM gifts ORDER BY id;
    `)
    console.log('🎉 Successfully fetched all data from gifts table')
    res.status(200).json(results.rows)
  } catch (err) {
    console.error('⚠️ error getting data from gifts table', err)
    res.status(409).json({error: err.message})
  }
}

export default {
  getGifts
}