const fs =require('fs')
const loadData=()=>{
    try{
        const rawData=fs.readFileSync("data.txt")
        const parsedData=JSON.parse(rawData)
        return parsedData;
    }
    catch{
        return []
    }
}


const showList=()=>{
    data=loadData()
    if(data.length!==0)
    {
        data.map(d=>
            console.log("Task: "+d.title +" "+"description: "+d.description)
            )
    }
    else {
        console.log("sorry Wo have no tasks to show")
    }

}
const addTask=(title,description)=>{
    const data=loadData()
   
    const isDuplicate=checkDuplicate(title,data)
    if(isDuplicate){
        console.log('Task is already in data base')
    }
    else{
         const newTask={
        //making addtask object
        //object desrtucturing as key and values have same name
        title,
        description
    }
        const tempData=[...data,newTask]
        saveToDatabase(tempData)
    }
}
const deleteTask=(title)=>{
    const data=loadData()
    const isDuplicate=checkDuplicate(title,data)
    if(isDuplicate){
        const newTasks=data.filter(d=>d.title !== title)
            saveToDatabase(newTasks)
        
    }
    else{
        console.log('Task is not present in database')
    }
}
const checkDuplicate=(title,data)=>{
    const isDuplicate=data.filter((d)=>d.title===title)
    return (isDuplicate.length===0)?false:true
}

const saveToDatabase=(data)=>{
    const jsonData= JSON.stringify(data)
    fs.writeFileSync('data.txt',jsonData)
}

module.exports={addTask,deleteTask,showList}