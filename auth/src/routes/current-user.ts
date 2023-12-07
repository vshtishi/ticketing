import express from "express";
import {currentUser} from "@vshtickets/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser,(req, res) => {
    try {
        res.send({currentUser: req.currentUser || null});
    }
    catch (err) {
        return res.send({currentUser: null});
    }
});

export {router as currentUserRouter};