import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse'
import type { NextApiRequest, NextApiResponse } from 'next'

var clg = require("crossword-layout-generator");

async function getClues() {
    const selected = Array.from({length: 10}, () => Math.floor(Math.random() * 570840)+2);
    const dir = path.resolve('./public', 'clues.csv');
    const clues = [];
    let count = 0;
    const parser = fs
        .createReadStream(dir)
        .pipe(parse({}));
    for await (const record of parser) {
        count += 1;
        if (selected.includes(count)) {
            //console.log(record);
            clues.push({
                "clue": record[0],
                "answer": record[1],
                "extra_clue": record[2]
            });
        }
    }
    let layout = clg.generateLayout(clues);
    return layout;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const layout = await getClues();
        res.status(200).json({ layout });
    } catch {
        res.status(500).json({ error: 'failed to load data' });
    }
}