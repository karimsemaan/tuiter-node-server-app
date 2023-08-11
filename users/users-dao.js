import usersModel from "./users-model.js";


export const findAllUsers = async () => usersModel.find();

export const findUserById = async (id) => usersModel.findById(id);


export const findUserByUsername = async (username) => usersModel.findOne({username});


export const findUserByCredentials = async (username, password) => usersModel.findOne({username, password});


export const createUser = async (user) => usersModel.create(user);


export const updateUser = async (id, user) => usersModel.updateOne({_id: id}, {$set: user});
export const deleteUser = async(id) => usersModel.deleteOne({_id: id});
