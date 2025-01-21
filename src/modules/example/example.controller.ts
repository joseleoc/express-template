import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const example = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("example");
};

export const example2 = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("example2");
};