import User, { UserInterface } from '../models/User'

const createUser = async (user: UserInterface): Promise<UserInterface> => {
  return user.save()
}

const getUserByEmail = async (email: string): Promise<UserInterface | null> => {
  return User.findOne({ email })
}


const getAllUsers = async (): Promise<UserInterface[]> => {
  return User.find()
}

const getUserById = async (id: string): Promise<UserInterface | null> => {
  return User.findById(id)
}

export default {
  createUser,
  getUserByEmail,
  getAllUsers,
  getUserById
}
