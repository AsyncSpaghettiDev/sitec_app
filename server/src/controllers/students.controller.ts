import { Request, Response } from "express"

export const getStudents = async (_req: Request, res: Response) => {
    return res.status(200).json({ message: 'Fetching students!' })
}