import express from 'express';
import { PrismaClient } from '@prisma/client';

const PORT = 3002;
const app = express();
app.use(express.json())
const prisma = new PrismaClient();

// https://hooks.zapier.com/hooks/catch/234121423/34324

app.post("/hooks/catch/:userId/:zapId",async (req, res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;
    console.log("entered")
    
    //store in the db a new trigger
    await prisma.$transaction(async tx => {
        const run = await tx.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        })
        
        await tx.zapRunOutbox.create({
            data: {
                zapRunId: run.id
            }
        })
        console.log("entered-2")

    })

    //add to kafka queue

    res.json({
        message: "Webhook Recieved"
    })
})

app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}...`)});