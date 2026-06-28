const User=require("../models/User");

module.exports=(permission)=>{

    return async(req,res,next)=>{

        const user=await User.findById(req.user.id)
        .populate({
            path:"role",
            populate:{
                path:"permissions"
            }
        });

        const permissions=user.role.permissions.map(p=>p.name);

        if(!permissions.includes(permission)){

            return res.status(403).json({

                success:false,
                message:"Permission Denied"

            });

        }

        next();

    }

}