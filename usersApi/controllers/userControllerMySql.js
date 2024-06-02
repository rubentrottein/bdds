const getAllUsersMySql = async (req, res) => {
    const db = req.app.get("db");
    try {
      const [rows] = await db.query("SELECT * FROM users");
      res.json(rows);
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Failed to fetch users" });
    }
};

const createUserMySql = async (req, res) => {
    const db = req.app.get("db");
    const { name, email } = req.body;

    try {
        const [result] = await db.query(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email]
        );
        res.json({ message: "User created successfully", newUser: { id: result.insertId, name, email } });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Failed to create user" });
    }
};

const getUserByIdMySql = async (req, res) => {
    const db = req.app.get("db");
    const userId = req.params.id;

    try {
        const [result] = await db.query(`SELECT * FROM users WHERE id=${userId}`);
        res.json(result);
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ error: "Failed to fetch users" });
    }
};

const deleteUserByIdMySql = async (req, res) => {
    const db = req.app.get("db");
    const userId = req.params.id;

    try {
        const [result] = await db.query(`DELETE FROM users WHERE users.id = ${userId}`);
        res.json({message: `Utilisateur supprimé : ${userId}`});
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ error: `Failed to Delete user ${userId}` });
    }
};

const editUserByIdMySql = async (req, res) =>{
    try{
        const userToUpdate = await User.findOneAndUpdate({_id: req.params.id }, req.body, 
        {
            new: true,
            runValidators: true,
        })
        res.json({ message : 'User is now Updated', user: userToUpdate } );
    } catch (error){
        res.json({ message : 'No Update to the User ', error } );
    }
}

module.exports = { getAllUsersMySql, createUserMySql, getUserByIdMySql,deleteUserByIdMySql ,editUserByIdMySql};