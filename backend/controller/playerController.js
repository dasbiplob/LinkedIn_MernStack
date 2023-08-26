import express from 'express';
import {soccerDB} from '../model/playerModel.js'
import mongoose from 'mongoose';


const Player = mongoose.model('soccerDB', soccerDB)

export const addNewPlayer = async (req, res) => {
    try {
        let newPlayer = new Player(req.body);
        const savedPlayer = await newPlayer.save();
        res.json(savedPlayer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getPlayer = async (req, res) => {
    try {
        const getPlayer = await Player.find({});
        res.json(getPlayer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export const getPlayerbyId = async (req, res) => {
    try {
        const getPlayerbyId = await Player.findById(req.params.PlayerId);
        res.json(getPlayerbyId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export const updatePlayer = async (req, res) => {
    try {

        const updatePlayer = await Player.findOneAndUpdate({_id: req.params.PlayerId},req.body,{new:true});

        res.json(updatePlayer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export const deletePlayer = async (req, res) => {
    try {

        await Player.deleteOne({_id: req.params.PlayerId});

        res.json({message: 'SuccesFully Deleted the Players'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
