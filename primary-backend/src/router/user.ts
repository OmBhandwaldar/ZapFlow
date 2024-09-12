import { Router } from "express";
import { authMiddleware } from "../middleware";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const router = Router();

router.post('/signup', async (req, res) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);

    if(!parsedData.success){
        return res.status(411).json({
            message: "Wrong inputs"
        })
    }

    const userExists = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username
        }
    })

    if(userExists){
        return res.status(403).json({
            message: "User already exists"
        })
    }

    await prismaClient.user.create({
        data: {
            email: parsedData.data.username,
            name: parsedData.data.name,
            //store it after hashing, probably use bcrypt
            password: parsedData.data.password
        }
    })

    //they would recieve an email to verify there account
    //await sendEmail();

    return res.json({
        message: "Please verify your account by checking your email"
    })

    // console.log('signup');
})

router.post('/signin', async (req, res) => {
    const body = req.body;
    const parsedData = SigninSchema.safeParse(body);

    if(!parsedData.success){
        return res.status(411).json({
            message: "Wrong inputs"
        })
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
            password: parsedData.data.password
        }
    })

    if(!user){
        return res.status(403).json({
            message: "Sorry! Incorrect Credentials"
        })
    }

    //JWT
    const token = jwt.sign({
        id: user.id,
    }, JWT_SECRET);

    res.json({
        token: token
    })

    // console.log('signin');
})

router.get('/', authMiddleware, async (req, res) => {
    //TODO: fix the type
    //@ts-ignore
    const id = req.id;

    const user = await prismaClient.user.findFirst({
        where: {
            id
        },
        select: {
            name: true,
            email: true
        }
    })

    return res.json({
        user
    })
})

export const userRouter = router;