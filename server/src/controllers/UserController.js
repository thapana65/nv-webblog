const {User} = require('../models');

module.exports = {
    async index(req, res){
        try{
            const users = await User.findAll();
            res.send(users);
        } catch(err){
            res.status(500).send({
                error: 'เกิดข้อผิดพลาดในการดึงข้อมูล user'
            })
        }
    },
    async create(req, res){
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON());
        } catch (err) {
            res.status(400).send({
                error: 'มีข้อผิดพลาดในการสร้าง user'
            })
        }
    },
    put(req, res){
        res.send('แก้ไข user คนที่ '+ req.params.userId + ' ข้อมูลที่แก้ไข' + JSON.stringify(req.body));
    },
    remove(req, res){
        res.send('ลบ user คนที่ ' + req.params.userId);
    },
    show(req, res){
        res.send('ดูข้อมูล user ทุกคน');
    }
}
    