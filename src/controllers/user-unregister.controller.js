import UserModel from '#Schemas/user.schema.js';
import { compare } from 'bcrypt';

const userUnregisterController = async (req, res) => {
    const { id } = req;
    const { password } = req.body;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById) return res.status(401).send('Usuario no autorizado');

    const checkPassword = await compare(password, existingUserById.password);
    if (!checkPassword) return res.status(401).send('Credenciales incorrectas');

    await existingUserById.delete();

    return res.send('Usuario eliminado');
};

export default userUnregisterController;
