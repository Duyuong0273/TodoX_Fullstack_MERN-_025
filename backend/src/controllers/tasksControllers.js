import Task from '../models/Task.js'

export const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find().sort({createAt: -1})
        res.status(200).json(tasks)

    }catch (error){
   console.error("Lỗi khi gọi getAllTasks", error);
   res.status(500).json({message: "Lỗi hệ thống"})
    }
}

export const createTasks = async (req, res) => {
   try {
    const {title} = req.body;
    const task = new Task({title})

    const newTask = await task.save()
    res.status(201).json(newTask)
   }catch (error){
    console.error("Lỗi khi gọi createTasks", error);
   res.status(500).json({message: "Lỗi hệ thống"})
   }
}

export const updateTasks = async (req, res) => {
    try {
        const {title, status, completeAt} = req.body;
        const updateTasks = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                completeAt
            },{
                new : true
            }
        )
        if(!updateTasks){
            return res.status(404).json({message: "Nhiệm vụ không tồn tại"})
        }
        res.status(200).json(updateTasks)
    } catch (error){
        console.error("Lỗi khi gọi updateTask", error);
        res.status(500).json({message: "Lỗi hệ thống"})
    }
}

export const deleteTasks = async (req, res) => {
    try {
        const deleteTasks = await Task.findByIdAndDelete(req.params.id)

        if(!deleteTasks){
            return res.status(404).json({message: "nhiệm vụ ko tồn tại"})
        }
        res.status(200).json(deleteTasks)

    }catch (error){
        console.log("Lỗi khi gọi deleteTask", error);
        res.status(500).json({message: "Lỗi hệ thống"})
    }
}